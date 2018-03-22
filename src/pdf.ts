const PDFDocument = require('pdfkit');

export function generatePDF(outputStream: any, template: any) {
  const doc = new PDFDocument({
    size: 'A4',
    margin: 30,
  });
  doc.pipe(outputStream);

  doc.drawSUStamp = () => {
    doc.image('img/su-stamp-internal.png', doc.page.width - 130, 30, {
      fit: [100, 100],
      align: 'right',
      valign: 'top'
    });

    return doc;
  };

  template(doc);

  doc.end();
  return outputStream;
}
