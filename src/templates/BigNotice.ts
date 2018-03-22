import { primary } from '../font';

interface Options {
  heading: string;
  description: string;
  kicker: string;
}

export default (options: Options) => (pdf: any) => {
  pdf.drawSUStamp().moveDown().moveDown();
  // heading
  pdf
    .font(primary.bold)
    .fontSize(96)
    .text(options.heading, { lineGap: 0 });
  
  // description
  pdf
    .font(primary.regular)
    .fontSize(28)
    .text(options.description);
  
  // kicker
    pdf
      .fontSize(28)
      .text(options.kicker);
}