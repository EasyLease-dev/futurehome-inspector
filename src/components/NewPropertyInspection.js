import React, { useState } from 'react';

const NewPropertyInspection = () => {
  const [selectedProperty, setSelectedProperty] = useState('');
  const [formType, setFormType] = useState('');
  const [formData, setFormData] = useState({
    amenities: {
      bed: false,
      table: false,
      chair: false,
      fridge: false,
      washingMachine: false,
      other: ''
    },
    location: {
      distanceFromMainRoad: '',
      distanceFromAirport: '',
      distanceFromStation: ''
    },
    floor: {
      numberOfFloors: '',
      offeredFloor: '',
      photosOfBuilding: []
    },
    totalRooms: {
      rooms: '',
      buildArea: '',
      attachedBathroom: false,
      attachedBalcony: false,
      roomPhotos: []
    },
    balcony: {
      balconyDescription: '',
      balconyArea: '',
      balconyPhotos: []
    },
    bathroom: {
      numberOfBathrooms: '',
      bathroomPhotos: []
    },
    kitchen: {
      buildArea: '',
      kitchenPhotos: [],
      modular: false
    },
    dining: {
      buildArea: '',
      diningPhotos: []
    }
  });

  const properties = [
    'Property 1',
    'Property 2',
    'Property 3'
  ];

  const handlePropertyChange = (e) => {
    setSelectedProperty(e.target.value);
  };

  const handleFormTypeChange = (type) => {
    setFormType(type);
  };

  const handleFormChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [formType]: {
        ...prevFormData[formType],
        [name]: type === 'checkbox' ? checked : (type === 'file' ? files : value)
      }
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
    setFormType('');
  };

  return (
    <div>
      <h1 className="text-2xl mb-4">New Property Inspection</h1>
      <div className="mb-4">
        <label htmlFor="property" className="block text-sm font-medium text-gray-700">Select Property</label>
        <select
          id="property"
          value={selectedProperty}
          onChange={handlePropertyChange}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          required
        >
          <option value="" disabled>Select a property</option>
          {properties.map((property) => (
            <option key={property} value={property}>{property}</option>
          ))}
        </select>
      </div>

      {selectedProperty && (
        <div className="flex flex-col mb-4">
          <h2 className="text-xl mb-2">Sections</h2>
          <div className="flex flex-wrap space-x-4 mb-4">
            {['amenities', 'location', 'floor', 'totalRooms', 'balcony', 'bathroom', 'kitchen', 'dining'].map((type) => (
              // eslint-disable-next-line jsx-a11y/anchor-is-valid
              <a
                key={type}
                onClick={() => handleFormTypeChange(type)}
                className={`p-3 cursor-pointer rounded-lg ${formType === type ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white hover:bg-blue-600'} transition duration-200`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </a>
            ))}
          </div>
        </div>
      )}

      {formType && (
        <form onSubmit={handleFormSubmit} className="mt-4 p-4 border border-gray-300 rounded-md">
          <h2 className="text-xl mb-4">{formType.charAt(0).toUpperCase() + formType.slice(1)} Form</h2>
          
          {formType === 'amenities' && (
            <div className="grid grid-cols-2 gap-4">
              {['bed', 'table', 'chair', 'fridge', 'washingMachine'].map((item) => (
                <div key={item} className="flex items-center">
                  <input
                    type="checkbox"
                    name={item}
                    checked={formData.amenities[item]}
                    onChange={handleFormChange}
                    className="mr-2"
                  />
                  <label>{item.charAt(0).toUpperCase() + item.slice(1)}</label>
                </div>
              ))}
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700">Other</label>
                <input
                  type="text"
                  name="other"
                  value={formData.amenities.other}
                  onChange={handleFormChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  required
                />
              </div>
            </div>
          )}

          {formType === 'location' && (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Distance from the main road</label>
                <input
                  type="text"
                  name="distanceFromMainRoad"
                  value={formData.location.distanceFromMainRoad}
                  onChange={handleFormChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Distance from Airport</label>
                <input
                  type="text"
                  name="distanceFromAirport"
                  value={formData.location.distanceFromAirport}
                  onChange={handleFormChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Distance from Station</label>
                <input
                  type="text"
                  name="distanceFromStation"
                  value={formData.location.distanceFromStation}
                  onChange={handleFormChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  required
                />
              </div>
            </div>
          )}

          {formType === 'floor' && (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Number of Floors</label>
                <input
                  type="number"
                  name="numberOfFloors"
                  value={formData.floor.numberOfFloors}
                  onChange={handleFormChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Which floor is being offered</label>
                <input
                  type="number"
                  name="offeredFloor"
                  value={formData.floor.offeredFloor}
                  onChange={handleFormChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  required
                />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700">Photos of Building</label>
                <input
                  type="file"
                  name="photosOfBuilding"
                  onChange={handleFormChange}
                  multiple
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  required
                />
              </div>
            </div>
          )}

          {formType === 'totalRooms' && (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Number of Rooms</label>
                <input
                  type="number"
                  name="rooms"
                  value={formData.totalRooms.rooms}
                  onChange={handleFormChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Build Area</label>
                <input
                  type="text"
                  name="buildArea"
                  value={formData.totalRooms.buildArea}
                  onChange={handleFormChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Attached Bathroom</label>
                <input
                  type="checkbox"
                  name="attachedBathroom"
                  checked={formData.totalRooms.attachedBathroom}
                  onChange={handleFormChange}
                  className="mr-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Attached Balcony</label>
                <input
                  type="checkbox"
                  name="attachedBalcony"
                  checked={formData.totalRooms.attachedBalcony}
                  onChange={handleFormChange}
                  className="mr-2"
                />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700">Room Photos</label>
                <input
                  type="file"
                  name="roomPhotos"
                  onChange={handleFormChange}
                  multiple
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  required
                />
              </div>
            </div>
          )}

          {formType === 'balcony' && (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Balcony Description</label>
                <input
                  type="text"
                  name="balconyDescription"
                  value={formData.balcony.balconyDescription}
                  onChange={handleFormChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Balcony Area</label>
                <input
                  type="text"
                  name="balconyArea"
                  value={formData.balcony.balconyArea}
                  onChange={handleFormChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  required
                />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700">Balcony Photos</label>
                <input
                  type="file"
                  name="balconyPhotos"
                  onChange={handleFormChange}
                  multiple
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  required
                />
              </div>
            </div>
          )}

          {formType === 'bathroom' && (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Number of Bathrooms</label>
                <input
                  type="number"
                  name="numberOfBathrooms"
                  value={formData.bathroom.numberOfBathrooms}
                  onChange={handleFormChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  required
                />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700">Bathroom Photos</label>
                <input
                  type="file"
                  name="bathroomPhotos"
                  onChange={handleFormChange}
                  multiple
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  required
                />
              </div>
            </div>
          )}

          {formType === 'kitchen' && (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Build Area</label>
                <input
                  type="text"
                  name="buildArea"
                  value={formData.kitchen.buildArea}
                  onChange={handleFormChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Modular</label>
                <input
                  type="checkbox"
                  name="modular"
                  checked={formData.kitchen.modular}
                  onChange={handleFormChange}
                  className="mr-2"
                />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700">Kitchen Photos</label>
                <input
                  type="file"
                  name="kitchenPhotos"
                  onChange={handleFormChange}
                  multiple
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  required
                />
              </div>
            </div>
          )}

          {formType === 'dining' && (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Build Area</label>
                <input
                  type="text"
                  name="buildArea"
                  value={formData.dining.buildArea}
                  onChange={handleFormChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  required
                />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700">Dining Photos</label>
                <input
                  type="file"
                  name="diningPhotos"
                  onChange={handleFormChange}
                  multiple
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  required
                />
              </div>
            </div>
          )}

          <button
            type="submit"
            className="mt-4 p-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition duration-200"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default NewPropertyInspection;
