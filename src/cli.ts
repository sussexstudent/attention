#!/usr/bin/env node
import * as fs from 'fs';
import * as chalk from 'chalk';
import * as program from 'commander';
import { generatePDF } from './pdf';
import BigNotice from './templates/BigNotice';

console.log(`⚠️  Attention`);
const startTime = Date.now();
program
  .version('0.1.0')
  .option('-o, --output [filename]', 'Output file name')
  .parse(process.argv);

const outputFilename = 'example.pdf';

const input = fs.createWriteStream(outputFilename);

const realExample = {
  heading: 'Corridor Toilets Closed',
  description: 'Due to essential works these toilets are closed. Please use the other toilets available in Falmer Bar and on the 1st floor in Falmer House.',
  kicker: 'Sorry for any inconvenience!',
};

const fakeExample = {
  heading: 'Big Heading Here',
  description: 'A rather large area for explaination and perhaps even some advice or things to do next.',
  kicker: 'Sorry for any inconvenience!',
};

generatePDF(input, BigNotice(fakeExample));

const endTime = Date.now();

console.log(
  // @ts-ignore chalk typings broken
  chalk`Output {green ${outputFilename}} in {white ${endTime -
    startTime}ms}`,
);
