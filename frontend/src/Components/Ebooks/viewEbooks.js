import React, { useState, useEffect } from "react";
import "./viewEbook.css";

const EbookComponent = () => {
  const [pdfFiles, setPdfFiles] = useState([]);

  useEffect(() => {
    const fetchPdfFiles = async () => {
      try {
        const response = await fetch("/user/getEbooks");
        const data = await response.json();
        console.log("ebbooks", data.result);
        setPdfFiles(data.result);
      } catch (error) {
        console.log("Error fetching PDF files:", error);
      }
    };

    fetchPdfFiles();
  }, []);

  return (
    <div className="pdf-files-container">
      <h1 style={{ fontSize: "50px", fontWeight: "1000", margin: "25px 0px" }}>
        E-Books
      </h1>
      <ul>
        {pdfFiles.map((pdfFile, index) => (
          <li key={index}>
            <h2>{pdfFile.description}</h2>
            <embed
              src={"/Ebooks/" + pdfFile.ebReference}
              type="application/pdf"
              width="auto"
              height="150px"
            />
            <button
              onClick={() =>
                window.open("/Ebooks/" + pdfFile.ebReference, "_blank")
              }
              style={{ width: "100%" }}
            >
              Open PDF
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EbookComponent;
