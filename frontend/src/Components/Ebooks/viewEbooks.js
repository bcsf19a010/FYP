import React, { useState, useEffect } from "react";

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

  const handleDownload = (url) => {
    console.log("url is ", url);
    window.open(url, "_blank");
  };

  return (
    <div>
      <h1>PDF Files</h1>
      <ul>
        {pdfFiles.map((pdfFile, index) => (
          <li key={index}>
            <p>{pdfFile.description}</p>
            {/* <button onClick={() => handleDownload(pdfFile.ebReference)}>
              Download
            </button> */}
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
