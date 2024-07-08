import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../api/AuthProvider';

const Schedule = ({
  selectedSports,
  handleGenerateSchedule,
  handleUndoSchedule,
  loadedSports,
  setLoadedSports,
}) => {
  const { user } = useContext(AuthContext);
  const [scheduleData, setScheduleData] = useState([]);

  // Carregar dados inicialmente
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

  return (
    <div className="mb-10">
      <div className="flex justify-center flex-col items-center">
        <button
          id="generateSchedule"
          className="bg-green-500 text-white py-2 px-4 rounded mt-4"
          onClick={handleGenerateSchedule}
        >
          Gerar Agendamento
        </button>
        <button
          id="undoSchedule"
          className="bg-red-500 text-white py-2 px-4 rounded mt-4"
          onClick={handleUndoSchedule}
        >
          Desfazer Agendamento
        </button>
      </div>
      {loadedSports.length > 0 && (
        <div id="agendamento" className="text-2xl font-bold my-4">
          Esportes Selecionados
          {loadedSports.map((event, index) => (
            <div
              key={index}
              className="agendamento-item my-2 bg-green-100 p-2 rounded"
            >
              {`${event.sport} - Início: ${new Date(
                event.inicio
              ).toLocaleDateString('pt-BR')}, Término: ${new Date(
                event.termino
              ).toLocaleDateString('pt-BR')}`}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Schedule;
