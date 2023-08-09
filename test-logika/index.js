const count = require("./count");

// Soal Nomor 1
const inputA = [10, 20, 20, 10, 10, 30, 50, 10, 20];
const inputB = [6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5];
const inputC = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3];

// Soal Nomor 2
const inputSentenceA = "Saat meng*ecat tembok, Agung dib_antu oleh Raihan.";
const inputSentenceB = "Berapa u(mur minimal[ untuk !mengurus ktp?";
const inputSentenceC =
  "Masing-masing anak mendap(atkan uang jajan ya=ng be&rbeda.";

// Jawaban nomor 1
const outputA = count.countSockPairs(inputA);
const outputB = count.countSockPairs(inputB);
const outputC = count.countSockPairs(inputC);

console.log("----SOAL NOMOR 1----");
console.log(`a. Output: ${outputA}`);
console.log(`b. Output: ${outputB}`);
console.log(`c. Output: ${outputC}`);

// Jawaban nomor 2
const outputSentenceA = count.countWords(inputSentenceA);
const outputSentenceB = count.countWords(inputSentenceB);
const outputSentenceC = count.countWords(inputSentenceC);

console.log("----SOAL NOMOR 2----");
console.log(`a. Ouput: ${outputSentenceA}`);
console.log(`b. Ouput: ${outputSentenceB}`);
console.log(`c. Ouput: ${outputSentenceC}`);
