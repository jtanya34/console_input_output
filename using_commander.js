#!/usr/bin/env node
const program = require('commander');
const fs = require('fs');

const [stdout, stdin] = [process.stdout, process.stdin];

const file = fs.createWriteStream('interview.txt', { flags: 'a' });
const questions = [
  'What is your name?',
  'Where did you study?',
  'Do you have  work experience?',
  'What is your preferred programming language?',
];

let i = 0;

stdin.on('data', (ans) => {
  file.write(`\n ${ans}`);
  i += 1;

  if (i < questions.length) {
    file.write(questions[i]);
    stdout.write(`${questions[i]}\n`);
  } else {
    file.write('----------------------------------------------------\n');
    file.end();
    process.stdin.destroy();
  }
});


program
  .version('2.19.0')
  .option('-i, --init', 'file to be wriiten')
  .action(() => {
    //file.write(questions[0]);
    stdout.write(`${questions[0]}\n`);
  })
  .parse(process.argv);
