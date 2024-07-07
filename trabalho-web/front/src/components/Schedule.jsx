import { useState, useEffect } from 'react';
import axios from 'axios';

const Schedule = ({ selectedSports }) => {
  const [scheduleData, setScheduleData] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get('/agendaOlimp_updated.json')
      .then((response) => {
        setScheduleData(response.data);
        console.log('JSON loaded:', response.data);
      })
      .catch((error) => {
        console.error('Error loading JSON:', error);
        alert('Falha ao carregar dados do evento!');
      });
  }, []);

  const generateSchedule = () => {
    const selected = selectedSports
      .map((sport) => {
        const event = scheduleData.find((item) =>
          item.esportes.includes(sport)
        );
        if (event) {
          const inicio = new Date(
            event['data_de_início'] + 'T00:00:00'
          ).toLocaleDateString('pt-BR');
          const termino = new Date(
            event['data_de_término'] + 'T00:00:00'
          ).toLocaleDateString('pt-BR');
          return { sport, inicio, termino };
        }
        return null;
      })
      .filter((item) => item !== null);

    setEvents(selected);
  };

  return (
    <div>
      <button
        id="generateSchedule"
        className="mt-7 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        onClick={generateSchedule}
      >
        Gerar Agendamento
      </button>

      <div id="agendamento" className={events.length > 0 ? '' : 'hidden'}>
        <div id="agendamento-title" className="text-2xl font-bold my-4">
          Esportes Selecionados
        </div>
        <div id="selectedSports">
          {events.map((event, index) => (
            <div
              key={index}
              className="agendamento-item my-2 bg-green-100 p-2 rounded"
            >
              {`${event.sport} - Início: ${event.inicio}, Término: ${event.termino}`}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
