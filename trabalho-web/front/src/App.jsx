import { useState } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Category from './components/Category';
import Schedule from './components/Schedule';

const App = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [selectedSports, setSelectedSports] = useState([]);

  const handleShowSelection = () => {
    setShowCategories(true);
  };

  return (
    <div className="App">
      <Navbar />

      <Carousel>
        <Header />
      </Carousel>
      <div className="initial-container my-8 flex justify-center">
        <button
          id="showSelection"
          className="bg-blue-500 text-white py-2 px-4 rounded"
          onClick={handleShowSelection}
        >
          Adicionar Modalidades
        </button>
      </div>
      {showCategories && (
        <>
          <Category
            categoryName="esportesDeQuadra"
            title="Esportes de Quadra"
            
          />
          <Category
            categoryName="esportesDePista"
            title="Esportes de Pista"
            
          />
          <Category
            categoryName="esportesIndividuais"
            title="Esportes Individuais"
            
          />
          <Category
            categoryName="lutas"
            title="Lutas"
            
          />
          <Category
            categoryName="outrosEsportes"
            title="Outros Esportes"
            
          />
          <Schedule  />
        </>
      )}
    </div>
  );
};

export default App;
