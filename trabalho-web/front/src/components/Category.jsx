import React from 'react';

const categories = {
  esportesDeQuadra: [
    
  ],
  esportesDePista: [
    
  ],
  esportesIndividuais: [
    
  ],
  lutas: [
    
  ],
  outrosEsportes: [
    
  ],
};

const Category = ({
  categoryName,
  title,
  selectedSports,
  
}) => {
  
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
           
          >
            {sport}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
