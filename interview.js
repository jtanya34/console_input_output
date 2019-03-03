#!/usr/bin/env node

const fs = require('fs');

const [stdout, stdin] = [process.stdout, process.stdin];

const file = fs.createWriteStream('interview.txt', { flags: 'a' });
// number of question
const questions = [
  'What is your name?',
  'Where did you study?',
  'Do you have  work experience?',
  'What is your preferred programming language?',
];

let i = 0;

// take answers from user
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

// write question in file and on console
file.write(questions[i]);
stdout.write(`${questions[i]}\n`);
