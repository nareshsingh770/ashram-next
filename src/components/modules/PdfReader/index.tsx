import React, { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const PdfReader = ({ file }: { file: string }) => {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [scale, setScale] = useState<number>(1.2);
  const [rotation, setRotation] = useState<number>(0);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  const goToPrevPage = () => setPageNumber((prev) => Math.max(prev - 1, 1));
  const goToNextPage = () =>
    setPageNumber((prev) => Math.min(prev + 1, numPages));
  const goToFirstPage = () => setPageNumber(1);
  const goToLastPage = () => setPageNumber(numPages);

  const zoomIn = () => setScale((prev) => Math.min(prev + 0.2, 3));
  const zoomOut = () => setScale((prev) => Math.max(prev - 0.2, 0.5));
  const resetZoom = () => setScale(1.2);

  const rotateLeft = () => setRotation((prev) => (prev - 90) % 360);
  const rotateRight = () => setRotation((prev) => (prev + 90) % 360);
  const resetRotation = () => setRotation(0);

  const handlePageInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const page = parseInt(e.target.value);
    if (page >= 1 && page <= numPages) {
      setPageNumber(page);
    }
  };
  return (
    <div className="mt-8 bg-white rounded-lg shadow-lg p-4">
      {/* Toolbar */}
      <div className="mb-4 space-y-3">
        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-2 pb-3 border-b">
          <button
            onClick={goToFirstPage}
            disabled={pageNumber === 1}
            className="px-3 py-2 bg-gray-200 hover:bg-gray-300 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            title="First Page"
          >
            ⏮
          </button>
          <button
            onClick={goToPrevPage}
            disabled={pageNumber === 1}
            className="px-3 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            title="Previous Page"
          >
            ◀
          </button>

          <div className="flex items-center gap-2">
            <span className="text-sm">Page</span>
            <input
              type="number"
              min={1}
              max={numPages}
              value={pageNumber}
              onChange={handlePageInputChange}
              className="w-16 px-2 py-1 border rounded text-center"
            />
            <span className="text-sm">of {numPages || "--"}</span>
          </div>

          <button
            onClick={goToNextPage}
            disabled={pageNumber === numPages}
            className="px-3 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            title="Next Page"
          >
            ▶
          </button>
          <button
            onClick={goToLastPage}
            disabled={pageNumber === numPages}
            className="px-3 py-2 bg-gray-200 hover:bg-gray-300 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            title="Last Page"
          >
            ⏭
          </button>
        </div>

        {/* Zoom & Rotation Controls */}
        <div className="flex items-center justify-center gap-6">
          {/* Zoom Controls */}
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Zoom:</span>
            <button
              onClick={zoomOut}
              className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded transition-colors"
              title="Zoom Out"
            >
              −
            </button>
            <span className="text-sm font-medium min-w-[60px] text-center">
              {Math.round(scale * 100)}%
            </span>
            <button
              onClick={zoomIn}
              className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded transition-colors"
              title="Zoom In"
            >
              +
            </button>
            <button
              onClick={resetZoom}
              className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded text-sm transition-colors"
              title="Reset Zoom"
            >
              Reset
            </button>
          </div>

          {/* Rotation Controls */}
          <div className="flex items-center gap-2 pl-6 border-l">
            <span className="text-sm font-medium">Rotate:</span>
            <button
              onClick={rotateLeft}
              className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded transition-colors"
              title="Rotate Left"
            >
              ↺
            </button>
            <span className="text-sm font-medium min-w-10 text-center">
              {rotation}°
            </span>
            <button
              onClick={rotateRight}
              className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded transition-colors"
              title="Rotate Right"
            >
              ↻
            </button>
            <button
              onClick={resetRotation}
              className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded text-sm transition-colors"
              title="Reset Rotation"
            >
              Reset
            </button>
          </div>
        </div>
      </div>

      {/* PDF Viewer */}
      <div className="flex justify-center overflow-auto bg-gray-100 p-4 rounded">
        <Document
          file={file}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={
            <div className="flex items-center justify-center p-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div>
              <span className="ml-3 text-gray-600">Loading PDF...</span>
            </div>
          }
          error={
            <div className="text-center p-8">
              <div className="text-red-600 font-semibold mb-2">
                Failed to load PDF
              </div>
              <p className="text-sm text-gray-500">
                Please check the file and try again
              </p>
            </div>
          }
        >
          <Page
            pageNumber={pageNumber}
            scale={scale}
            rotate={rotation}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            className="shadow-lg"
          />
        </Document>
      </div>
    </div>
  );
};

export default PdfReader;
