// Soal:
// Count The Vowels
//hitung jumlah huruf vokal pada string
// expected output : 
// 9
// 6

let vowels = ['a','i','u','e','o'] // vokal

// Tidak boleh langsung print expected output

// Jawaban:
function countVowels (str, vowels) {
// write your code here
    let result = 0
    for (let letter of str.toLowerCase()){
        if (vowels.includes(letter)){
           result++;
      }
    }
    return result
};

console.log(countVowels("Selamat Pagi Duniaa!!", vowels))
console.log(countVowels("aku suka ngoding", vowels))