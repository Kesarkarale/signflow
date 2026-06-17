import jsPDF from "jspdf";

export function generatePdf(
  title: string,
  content: string
) {
  const pdf = new jsPDF();

  pdf.setFontSize(20);
  pdf.text(title, 20, 20);

  pdf.setFontSize(12);

  const lines = pdf.splitTextToSize(
    content,
    170
  );

  pdf.text(lines, 20, 40);

  pdf.save(`${title}.pdf`);
}
