"use client";

import { Document, Page } from "react-pdf";
import { useState } from "react";

interface Props {
  fileUrl: string;
}

export default function PdfViewer({
  fileUrl,
}: Props) {
  const [numPages, setNumPages] =
    useState(0);

  return (
    <div className="overflow-auto">
      <Document
        file={fileUrl}
        onLoadSuccess={({ numPages }) =>
          setNumPages(numPages)
        }
      >
        {Array.from(
          { length: numPages },
          (_, index) => (
            <Page
              key={index}
              pageNumber={index + 1}
            />
          )
        )}
      </Document>
    </div>
  );
}
