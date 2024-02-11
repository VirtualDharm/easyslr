import React from 'react';

interface PDFViewerProps {
  pdfUrl: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ pdfUrl }) => {
  return (
    <div className="border border-gray-200 rounded-lg shadow p-4">
      <iframe src={pdfUrl} className="w-full h-full" title="PDF Viewer" />
      <h1>hello from PDFViewer</h1>
    </div>
  );
};

export default PDFViewer;
