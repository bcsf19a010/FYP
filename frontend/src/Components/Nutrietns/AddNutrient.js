import React, { useState } from 'react';
import './AddNutrient.css'; // Import the CSS file for styling

const NutrientForm = () => {
  const [nutrients, setNutrients] = useState([{ name: '', quantity: '' }]);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedNutrients = [...nutrients];
    updatedNutrients[index][name] = value;
    setNutrients(updatedNutrients);
  };

  const handleAddField = () => {
    setNutrients([...nutrients, { name: '', quantity: '' }]);
  };

  const handleRemoveField = (index) => {
    const updatedNutrients = [...nutrients];
    updatedNutrients.splice(index, 1);
    setNutrients(updatedNutrients);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform additional validation here before submitting the form
    // Once validated, you can send the data to an API or handle it as per your requirements
    console.log('Submitted:', nutrients);

    // Reset the form fields
    setNutrients([{ name: '', quantity: '' }]);
  };

  return (
    <div className="upContainer">
      <form className="nutrient-form" onSubmit={handleSubmit}>
        <h3>Add Nutrients</h3>
        {nutrients.map((nutrient, index) => (
          <div className="nutrient-field" key={index}>
            <label htmlFor={`name${index}`}>Name:</label>
            <input
              type="text"
              id={`name${index}`}
              name="name"
              value={nutrient.name}
              onChange={(e) => handleChange(index, e)}
            />

            <label htmlFor={`quantity${index}`}>Quantity:</label>
            <input
              type="text"
              id={`quantity${index}`}
              name="quantity"
              value={nutrient.quantity}
              onChange={(e) => handleChange(index, e)}
            />

            <button
              type="button"
              className="remove-button"
              onClick={() => handleRemoveField(index)}
            >
              Remove
            </button>
          </div>
        ))}

        <button type="button" className="add-button" onClick={handleAddField}>
          Add Nutrient
        </button>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NutrientForm;
