import jsPDF from "jspdf";
import domtoimage from "dom-to-image";

function printDocument() {
  const input = document.getElementById("invoice");
  const pdf = new jsPDF();
  if (pdf) {
    domtoimage.toPng(input).then((imgData) => {
      pdf.addImage(imgData, "PNG", 0, 0);
      pdf.save("download.pdf");
    });
  }
}

export default printDocument;
