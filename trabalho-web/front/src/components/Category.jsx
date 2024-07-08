import React from 'react';

const categories = {
  esportesDeQuadra: [
    'Voleibol',
    'Basquete',
    'Basquete em Cadeira de Rodas',
    'Handebol',
    'Polo Aquático',
    'Badminton',
    'Badminton Paralímpico',
    'Tênis de Mesa',
    'Tênis de Mesa Paralímpico',
  ],
  esportesDePista: [
    'Atletismo',
    'Atletismo Paralímpico',
    'Maratona de Atletismo',
    'Ciclismo',
    'Ciclismo de Pista',
    'Ciclismo de Estrada',
    'Ciclismo de Estrada - Contra Relógio Individual',
    'Ciclismo Paralímpico',
    'Ciclismo de Pista Paralímpico',
    'Maratona Paralímpica',
    'Marcha Atlética',
    'Mountain Bike',
  ],
  esportesIndividuais: [
    'Golfe',
    'Esgrima',
    'Esgrima em Cadeira de Rodas',
    'Tiro',
    'Tiro com Arco',
    'Tiro com Arco Paralímpico',
    'Tiro Esportivo Paralímpico',
    'Natação',
    'Natação Paralímpica',
    'Natação Artística',
    'Maratona de Natação',
    'Saltos Ornamentais',
    'Pentatlo Moderno',
    'Ginástica Rítmica',
    'Surfe',
    'Vela',
    'Escalada',
    'Remo',
    'Remo Paralímpico',
    'Canoagem de Velocidade',
    'Canoagem Paralímpica',
    'Canoagem Slalom',
    'Levantamento de Peso',
    'Halterofilismo Paralímpico',
    'BMX Racing',
    'BMX Freestyle',
    'Skate Street',
    'Skate Park',
  ],
  lutas: [
    'Boxe',
    'Judô',
    'Judô Paralímpico',
    'Luta',
    'Taekwondo',
    'Taekwondo Paralímpico',
  ],
  outrosEsportes: [
    'Rugby',
    'Rugby em Cadeira de Rodas',
    'Futebol',
    'Futebol de Cegos',
    'Futebol de 5',
    'Hóquei',
    'Basquete 3x3',
    'Voleibol Sentado',
    'Boccia',
    'Goalball',
    'Esportes Equestres',
    'Equitação Paralímpica',
    'Breaking',
  ],
};

const Category = ({ categoryName, title, selectedSports, setSelectedSports }) => {
  const toggleSelection = (sport) => {
    setSelectedSports((prev) =>
      prev.includes(sport)
        ? prev.filter((item) => item !== sport)
        : [...prev, sport]
    );
  };

  return (
    <div className="category-container p-4 bg-white rounded-lg shadow-lg mb-4">
      <div className="category-title text-xl font-bold mb-4 text-center">
        {title}
      </div>
      <div className="sports-container flex flex-wrap gap-3 justify-center">
        {categories[categoryName].map((sport) => (
          <div
            key={sport}
            className={`sport-bubble px-4 py-2 border rounded-full cursor-pointer text-sm font-semibold ${
              selectedSports.includes(sport)
                ? 'bg-gray-700 text-white'
                : 'bg-gray-300 text-gray-700'
            }`}
            onClick={() => toggleSelection(sport)}
          >
            {sport}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
