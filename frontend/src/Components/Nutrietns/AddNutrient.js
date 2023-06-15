import React, { useState, useEffect } from "react";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
} from "mdb-react-ui-kit";

const AddNutrients = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    calories: "",
    protein: "",
    carbohydrates: "",
    sugar: "",
    fiber: "",
    vitamins: [""], // Initial vitamins array with an empty value
  });
  useEffect(() => {
    // This function will be called when the component mounts
    console.log("in enter");
    props.setbgclr(false);
    return () => {
      // This function will be called when the component unmounts
      props.setbgclr(true);
      console.log("in return");
    };
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleVitaminChange = (index, e) => {
    const updatedVitamins = [...formData.vitamins];
    updatedVitamins[index] = e.target.value;
    setFormData({
      ...formData,
      vitamins: updatedVitamins,
    });
  };

  const handleAddVitamin = () => {
    setFormData({
      ...formData,
      vitamins: [...formData.vitamins, ""], // Add a new empty value to the vitamins array
    });
  };

  const handleRemoveVitamin = (index) => {
    const updatedVitamins = [...formData.vitamins];
    updatedVitamins.splice(index, 1); // Remove the vitamin at the specified index
    setFormData({
      ...formData,
      vitamins: updatedVitamins,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    // Make API request to MongoDB API
    // fetch('https://your-mongodb-api-url.com/your-endpoint', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(formData)
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     // Handle the response data
    //     console.log(data);
    //   })
    //   .catch(error => {
    //     // Handle any errors
    //     console.error(error);
    //   });

    // Reset form fields
    setFormData({
      name: "",
      calories: "",
      protein: "",
      carbohydrates: "",
      sugar: "",
      fiber: "",
      vitamins: [""],
    });
  };

  return (
    <MDBContainer fluid className="gradient-bg">
      <MDBRow className="justify-content-center">
        <MDBCol md="6">
          <form onSubmit={handleSubmit} className="m-4">
            <MDBInput
              label="Name"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <MDBInput
              label="Calories"
              id="calories"
              name="calories"
              value={formData.calories}
              onChange={handleChange}
            />
            <MDBInput
              label="Protein"
              id="protein"
              name="protein"
              value={formData.protein}
              onChange={handleChange}
            />
            <MDBInput
              label="Carbohydrates"
              id="carbohydrates"
              name="carbohydrates"
              value={formData.carbohydrates}
              onChange={handleChange}
            />
            <MDBInput
              label="Sugar"
              id="sugar"
              name="sugar"
              value={formData.sugar}
              onChange={handleChange}
            />
            <MDBInput
              label="Fiber"
              id="fiber"
              name="fiber"
              value={formData.fiber}
              onChange={handleChange}
            />

            {formData.vitamins.map((vitamin, index) => (
              <div key={index}>
                <MDBInput
                  label={`Vitamin ${index + 1}`}
                  name={`vitamin${index}`}
                  value={vitamin}
                  onChange={(e) => handleVitaminChange(index, e)}
                />
                {index === formData.vitamins.length - 1 && (
                  <div>
                    <MDBBtn type="button" onClick={handleAddVitamin}>
                      +
                    </MDBBtn>
                    {formData.vitamins.length > 1 && (
                      <MDBBtn
                        style={{ margin: "10px" }}
                        type="button"
                        onClick={() => handleRemoveVitamin(index)}
                      >
                        -
                      </MDBBtn>
                    )}
                  </div>
                )}
              </div>
            ))}

            <MDBBtn type="submit">Submit</MDBBtn>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default AddNutrients;
