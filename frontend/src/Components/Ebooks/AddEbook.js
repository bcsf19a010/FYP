import React, { useState } from "react";
import "./AddEbook.css";

const AddEbook = () => {
  const [file, setFile] = useState(null);
  const [price, setPrice] = useState(null);
  const [description, setDescription] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", file);
    formData.append("price", price);
    formData.append("descriptions", description);

    // await fetch("http://localhost:8000/admin/addExercise", {
    //   method: "POST",
    //   body: formData,
    // })
    //   .then((response) => {
    const response = await fetch("/admin/addEbook", {
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
        <h2 class="f-name">Add Ebook</h2>
        <div>
          <label htmlFor="file">Upload File:</label>
          <input type="file" id="file" required onChange={handleFileChange} />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="number"
            required
            value={price}
            onChange={handlePriceChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            required
            value={description}
            onChange={handleDescriptionChange}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddEbook;
