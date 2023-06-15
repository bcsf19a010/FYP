import React, { useState } from "react";
import "./AddExercise.css";

const AddExercise = () => {
  const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  const [descriptions, setDescriptions] = useState([{ value: "" }]);
  const [category, setCategory] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (index, e) => {
    const updatedDescriptions = [...descriptions];
    updatedDescriptions[index].value = e.target.value;
    setDescriptions(updatedDescriptions);
  };

  const handleAddDescription = () => {
    const updatedDescriptions = [...descriptions, { value: "" }];
    setDescriptions(updatedDescriptions);
  };

  const handleRemoveDescription = (index) => {
    const updatedDescriptions = [...descriptions];
    updatedDescriptions.splice(index, 1);
    setDescriptions(updatedDescriptions);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", name);
    formData.append(
      "descriptions",
      JSON.stringify(descriptions.map((desc) => desc.value))
    );
    formData.append("category", category);

    console.log("\nformdata\n", formData);

    // await fetch("http://localhost:8000/admin/addExercise", {
    //   method: "POST",
    //   body: formData,
    // })
    //   .then((response) => {
    const response = await fetch("/admin/addExercise", {
      method: "POST",
      body: formData,
      // headers: {
      //   "Content-Type": "application/json", // Corrected header
      // },
    });
    if (response.ok) {
      console.log("Exercise added successfully!");
      // Perform any additional actions or handle the response as needed
    } else {
      console.error("Failed to add exercise");
      // Handle the error or show an appropriate message
    }
  };

  return (
    <div className="ae-cntr">
      <form className="ae-container" onSubmit={handleSubmit}>
        <h2 class="f-name">Add Exercise</h2>
        <div>
          <label htmlFor="file">Upload File:</label>
          <input type="file" id="file" required onChange={handleFileChange} />
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            required
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          {descriptions.map((desc, index) => (
            <div key={index}>
              <input
                type="text"
                required
                value={desc.value}
                onChange={(e) => handleDescriptionChange(index, e)}
              />
              {index === descriptions.length - 1 && (
                <div>
                  <button type="button" onClick={handleAddDescription}>
                    +
                  </button>
                  {descriptions.length > 1 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveDescription(index)}
                    >
                      -
                    </button>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            require
            value={category}
            onChange={handleCategoryChange}
          >
            <option value="">Select category</option>
            <option value="Abdominals">Abdominals</option>
            <option value="Biceps">Biceps</option>
            <option value="Calves">Calves</option>
            <option value="Chest">Chest</option>
            <option value="Forearms">Forearms</option>
            <option value="Glutes">Glutes</option>
            <option value="Hamstrings">Hamstrings</option>
            <option value="Lats">Lats</option>
            <option value="Lowerback">Lowerback</option>
            <option value="Obliques">Obliques</option>
            <option value="Quads">Quads</option>
            <option value="Shoulders">Shoulders</option>
            <option value="Traps">Traps</option>
            <option value="Traps_middle">Traps_middle</option>
            <option value="Triceps">Triceps</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddExercise;
