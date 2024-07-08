import { useState, useContext, useEffect } from 'react';
import { AuthContext } from './api/AuthProvider'; 
import Navbar from './components/Navbar';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Category from './components/Category';
import Schedule from './components/Schedule';
import Footer from './components/Footer';
import axios from 'axios';

const App = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [selectedSports, setSelectedSports] = useState([]);
  const [loadedSports, setLoadedSports] = useState([]);
  const { user } = useContext(AuthContext); 

  const handleShowSelection = () => {
    setShowCategories(true);
  };

  const handleLoadSchedule = () => {
    if (user && user.email) {
      axios
        .get('http://localhost:3000/loadSchedule', { params: { email: user.email } })
        .then(response => {
          if (response.data && response.data.sports && response.data.sports.length > 0) {
            setSelectedSports(response.data.sports.map(sport => sport.sport));
            setLoadedSports(response.data.sports);
          } else {
            alert('Você não tem nada cadastrado.');
          }
        })
        .catch(error => {
          console.error('Erro ao carregar agendamento:', error);
        });
    }
  };

  const handleGenerateSchedule = () => {
    if (user && user.email) {
      axios.get('/agendaOlimp_updated.json')
        .then(response => {
          const scheduleData = response.data;
          const selected = selectedSports.map(sport => {
            const event = scheduleData.find(item => item.esportes.includes(sport));
            if (event) {
              return {
                sport,
                inicio: event['data_de_início'],
                termino: event['data_de_término'],
                local: event['nome_do_local']
              };
            }
            return null;
          }).filter(item => item !== null);

          axios.post('http://localhost:3000/saveSchedule', {
            email: user.email,
            sports: selected
          })
          .then(response => {
            alert('Agendamento criado com sucesso!');
          })
          .catch(error => {
            console.error('Erro ao salvar agendamento:', error);
            alert('Erro ao salvar agendamento.');
          });
        })
        .catch(error => {
          console.error('Erro ao carregar dados do evento:', error);
        });
    }
  };

  const handleUndoSchedule = () => {
    if (user && user.email) {
      axios.post('http://localhost:3000/undoSchedule', { email: user.email })
        .then(response => {
          console.log('Agendamento removido:', response.data);
          alert('Agendamento removido com sucesso!');
          // Limpar o array loadedSports e selectedSports após remover o agendamento
          setLoadedSports([]);
          setSelectedSports([]);
        })
        .catch(error => {
          console.error('Erro ao remover agendamento:', error);
          alert('Erro ao remover agendamento.');
        });
    }
  };

  return (
    <div className="App flex flex-col min-h-screen relative">
      <Navbar userEmail={user?.email} /> {}
      <Carousel>
        <Header />
      </Carousel>
      <div className="initial-container my-8 flex flex-col items-center flex-grow">
        <div className="welcome-message text-black text-lg font-bold mb-4">
          Seja bem vindo, {user?.email}!
        </div>
        <button
          id="showSelection"
          className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
          onClick={handleShowSelection}
        >
          Adicionar Modalidades
        </button>
        <button
          id="loadSelection"
          className="bg-green-500 text-white py-2 px-4 rounded mt-4"
          onClick={handleLoadSchedule}
        >
          Carregar Agendamento
        </button>
      </div>
      {showCategories && (
        <>
          <Category
            categoryName="esportesDeQuadra"
            title="Esportes de Quadra"
            selectedSports={selectedSports}
            setSelectedSports={setSelectedSports}
          />
          <Category
            categoryName="esportesDePista"
            title="Esportes de Pista"
            selectedSports={selectedSports}
            setSelectedSports={setSelectedSports}
          />
          <Category
            categoryName="esportesIndividuais"
            title="Esportes Individuais"
            selectedSports={selectedSports}
            setSelectedSports={setSelectedSports}
          />
          <Category
            categoryName="lutas"
            title="Lutas"
            selectedSports={selectedSports}
            setSelectedSports={setSelectedSports}
          />
          <Category
            categoryName="outrosEsportes"
            title="Outros Esportes"
            selectedSports={selectedSports}
            setSelectedSports={setSelectedSports}
          />
          <Schedule
            selectedSports={selectedSports}
            userEmail={user?.email}
            handleGenerateSchedule={handleGenerateSchedule}
            handleUndoSchedule={handleUndoSchedule}
            loadedSports={loadedSports}
            setLoadedSports={setLoadedSports}
          />
        </>
      )}
      <Footer />
    </div>
  );
};

export default App;
