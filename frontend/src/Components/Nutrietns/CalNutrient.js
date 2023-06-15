import React, { useState } from "react";
import "./CalNutrient.css"; // Import the CSS file for styling

const NutrientForm = () => {
  const [nutrients, setNutrients] = useState([{ name: "", quantity: "" }]);
  const [responseDetails, setResponseDetails] = useState(null);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedNutrients = [...nutrients];
    updatedNutrients[index][name] = value;
    setNutrients(updatedNutrients);
  };

  const handleAddField = () => {
    setNutrients([...nutrients, { name: "", quantity: "" }]);
  };

  const handleRemoveField = (index) => {
    const updatedNutrients = [...nutrients];
    updatedNutrients.splice(index, 1);
    setNutrients(updatedNutrients);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/user/calculateNutrients", {
      method: "POST",
      body: JSON.stringify({ nutrients }),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    if (response.ok) {
      setResponseDetails(data);
    }
    // You can perform additional validation here before submitting the form
    // Once validated, you can send the data to an API or handle it as per your requirements

    // Reset the form fields
    setNutrients([{ name: "", quantity: "" }]);
  };

  return (
    <div className="upContainer">
      <form className="nutrient-form" onSubmit={handleSubmit}>
        <h3>Calculate Nutrients</h3>
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
          Add Food
        </button>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
      {responseDetails && (
        <table className="response-table" style={{ color: "white" }}>
          <thead>
            <tr>
              <th>Calories</th>
              <th>Carbohydrates</th>
              <th>Fiber</th>
              <th>Protein</th>
              <th>Sugar</th>
              <th>Vitamins</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{responseDetails.calories}</td>
              <td>{responseDetails.carbohydrates}</td>
              <td>{responseDetails.fiber}</td>
              <td>{responseDetails.protien}</td>
              <td>{responseDetails.sugar}</td>
              <td>{responseDetails.vitamins.join(", ")}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default NutrientForm;
