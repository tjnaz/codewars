// --- ************ --- //
// --- [2023-03-28] --- //
// --- ************ --- //

// Complementary DNA
// Description:

// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

function complementaryDNA(str) {
  let dna = [];
  let str2 = str.toUpperCase();

  for (let i = 0; i < str2.length; i++) {
    if (str2[i] == "A") {
      dna.push("T");
    } else if (str2[i] == "T") {
      dna.push("A");
    } else if (str2[i] == "C") {
      dna.push("G");
    } else if (str2[i] == "G") {
      dna.push("C");
    }
  }
  return dna.join("");
}

console.log(complementaryDNA("GTAT"));
