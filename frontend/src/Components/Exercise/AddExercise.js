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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission or any other desired action here
    console.log("Form submitted:", { file, name, descriptions, category });
  };

  return (
    <div className="ae-cntr">
      <form className="ae-container" onSubmit={handleSubmit}>
          <h2 class="f-name">Add Exercise</h2>
        <div>
          <label htmlFor="file">Upload File:</label>
          <input type="file" id="file" onChange={handleFileChange} />
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
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
            value={category}
            onChange={handleCategoryChange}
          >
            <option value="">Select category</option>
            <option value="Chest">Chest</option>
            <option value="Traps">Traps</option>
            <option value="Bicep">Bicep</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddExercise;

// import React, { useState } from "react";
// import "./AddExercise.css";

// const AddExercise = () => {
//   const [file, setFile] = useState(null);
//   const [name, setName] = useState("");
//   const [descriptions, setDescriptions] = useState([{ value: "" }]);
//   const [category, setCategory] = useState("");

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     setFile(selectedFile);
//   };

//   const handleNameChange = (e) => {
//     setName(e.target.value);
//   };

//   const handleDescriptionChange = (index, e) => {
//     const updatedDescriptions = [...descriptions];
//     updatedDescriptions[index].value = e.target.value;
//     setDescriptions(updatedDescriptions);
//   };

//   const handleAddDescription = () => {
//     const updatedDescriptions = [...descriptions, { value: "" }];
//     setDescriptions(updatedDescriptions);
//   };

//   const handleCategoryChange = (e) => {
//     setCategory(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Perform form submission or any other desired action here
//     console.log("Form submitted:", { file, name, descriptions, category });
//   };

//   return (
//     <div className="ae-cntr">
//       <form className="ae-container" onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="file">Upload File:</label>
//           <input type="file" id="file" onChange={handleFileChange} />
//         </div>
//         <div>
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="name"
//             value={name}
//             onChange={handleNameChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="description">Description:</label>
//           {descriptions.map((desc, index) => (
//             <div key={index}>
//               <input
//                 type="text"
//                 value={desc.value}
//                 onChange={(e) => handleDescriptionChange(index, e)}
//               />
//               {index === descriptions.length - 1 && (
//                 <button type="button" onClick={handleAddDescription}>
//                   +
//                 </button>
//               )}
//             </div>
//           ))}
//         </div>
//         <div>
//           <label htmlFor="category">Category:</label>
//           <select
//             id="category"
//             value={category}
//             onChange={handleCategoryChange}
//           >
//             <option value="">Select category</option>
//             <option value="Chest">Chest</option>
//             <option value="Traps">Traps</option>
//             <option value="Bicep">Bicep</option>
//           </select>
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default AddExercise;
