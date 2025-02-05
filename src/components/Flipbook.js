import React, { useState, useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import { Document, Page, pdfjs } from "react-pdf";

// Fix PDF.js worker issue
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function Flipbook() {
  const [numPages, setNumPages] = useState(null);
  const flipBookRef = useRef(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="h-screen w-screen flex flex-col gap-5 justify-center items-center bg-gray-900 overflow-hidden">
      <h1 className="text-3xl text-white text-center font-bold">FlipBook - Kuliner Pulau Tidung</h1>

      {/* Ensure the PDF is loaded before rendering the flipbook */}
      {numPages ? (
        <HTMLFlipBook width={400} height={570} ref={flipBookRef}>
          {[...Array(numPages)].map((_, index) => (
            <div key={index} className="bg-white flex flex-col justify-center items-center shadow-md p-5">
              <Document file="/assets/Boost Bisnis Lokal.pdf">
                <Page pageNumber={index + 1} width={400} renderAnnotationLayer={false} renderTextLayer={false} />
              </Document>
              <p className="text-sm mt-2">Page {index + 1} of {numPages}</p>
            </div>
          ))}
        </HTMLFlipBook>
      ) : (
        <Document file="/assets/Boost Bisnis Lokal.pdf" onLoadSuccess={onDocumentLoadSuccess} className="hidden" />
      )}
    </div>
  );
}
