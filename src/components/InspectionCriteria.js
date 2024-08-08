import React, { useState } from 'react';

const inspectionCriteriaData = [
  {
    title: 'Safety Inspection',
    description: 'Ensure all safety features are in place and functional.',
    imageUrl: 'https://via.placeholder.com/400x300?text=Safety+Inspection',
  },
  {
    title: 'Structural Integrity',
    description: 'Check for any structural damage or weaknesses.',
    imageUrl: 'https://via.placeholder.com/400x300?text=Structural+Integrity',
  },
  {
    title: 'Utilities Inspection',
    description: 'Inspect plumbing, electrical, and HVAC systems.',
    imageUrl: 'https://via.placeholder.com/400x300?text=Utilities+Inspection',
  },
  {
    title: 'Pest Control',
    description: 'Look for signs of pests or infestations.',
    imageUrl: 'https://via.placeholder.com/400x300?text=Pest+Control',
  },
  {
    title: 'Interior Evaluation',
    description: 'Evaluate the condition of walls, floors, and ceilings.',
    imageUrl: 'https://via.placeholder.com/400x300?text=Interior+Evaluation',
  },
];

const InspectionCriteria = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === inspectionCriteriaData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? inspectionCriteriaData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto p-4 md:p-6"> {/* Adjusted padding for mobile */}
      <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 flex flex-col items-center"> {/* Adjusted padding for mobile */}
        <img
          src={inspectionCriteriaData[currentIndex].imageUrl}
          alt={inspectionCriteriaData[currentIndex].title}
          className="mb-4 rounded-md w-full h-40 md:h-60 object-cover" // Adjusted height for mobile
        />
        <h3 className="text-xl md:text-2xl font-semibold mb-2 text-center"> {/* Adjusted font size for mobile */}
          {inspectionCriteriaData[currentIndex].title}
        </h3>
        <p className="text-gray-600 text-base md:text-lg text-center"> {/* Adjusted font size for mobile */}
          {inspectionCriteriaData[currentIndex].description}
        </p>
      </div>
      <div className="flex justify-between mt-4 md:mt-6 w-full"> {/* Ensured buttons fill the width */}
        <button onClick={prevSlide} className="bg-gray-200 p-2 md:p-3 rounded-md hover:bg-gray-300 text-sm md:text-lg w-full md:w-auto"> {/* Adjusted button styles for mobile */}
          Previous
        </button>
        <button onClick={nextSlide} className="bg-gray-200 p-2 md:p-3 rounded-md hover:bg-gray-300 text-sm md:text-lg w-full md:w-auto"> {/* Adjusted button styles for mobile */}
          Next
        </button>
      </div>
      <div className="flex justify-center mt-4">
        {inspectionCriteriaData.map((_, index) => (
          <span
            key={index}
            className={`h-3 w-3 rounded-full mx-2 cursor-pointer transition-all duration-300 ${
              index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default InspectionCriteria;
