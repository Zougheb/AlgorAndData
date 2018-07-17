// reverse string:-

function reverse(str){
	const arr = str.split("");
	arr.reverse();
	return arr.join('');
}


function revere(str){
	return str.split('').reverse().join('');
}


function reverse(str){
	// create an empty string called 'reversed'
	let reversed = '';
	// then for each character in the provided string
	for(let character of str) {
		// take the character nad add it to the start of 'reversed'
		reversed = character + reversed;
	}
	// return variable reversed
	return reversed;
}


function reverse(str){
	 return str.split('').reduce((rev, char) => char + rev , '')
}

// ........................................................................

// RESVERSE AN INT:-

// tricks:-
// toString()
// Math.sign()
// parseInt()
//parseInt convert a string into an intger

function reverseInt(n){
	const reversed = n
	.toString()
	.split('')
	.reverse()
	.join('');
	return parseInt(reversed) * Math.sign(n);
}
// .......................................................................

// MAXCHAR PROBLEM:-

function maxChar (str){
	// declare a new variable called charMap and assign it to an empty object
	const charMap = {};
// then itterate over our source string (str) and use that to build out the charMap
	for(let char of str){
		if (charMap[char]) {
			charMap[char]++;
		} else {
			charMap[char] = 1;
		}
	}
	console.log(charMap);
}
// .......................................................................

// FIZZBUZZ

function fizzBuzz(n){
	for(let i = 1; i<= n; i++){
		// is the number a multiple of 3 and 5?
		if (i % 3 === 0 && i % 5 === 0) {
			console.log('fizzbuzz')
		} else if(i % 3 === 0) {
			// is the number a multiple of 3?
			console.log('fizz');
		} else if ( i % 5 === 0){
		console.log('buzz');
	    } else {
		console.log(i);
	    }
	}
}
// ..................................................................

// ARRAY CHUNK:-
function chunk (array, size) {
	// create a new array that hold gonna all different chunks
	const chunked =[];
	// then itterate through the original array of elements
	for (let element of array) {
		// then get the last element inside the "chunked" array
		const last = chunked[chunked.length - 1]
		// check if the last element does not exist, or if its length is equal to chunk size
		if (!last || last.length === size) {
			chunked.push([element]);
		} else {
			last.push(element);
		}
	}
	return chunked;
}

// another solution:-
function chunk(array, size) {
	// create an empty arry
	const chunked =[];
	// create the index variable
	let index = 0;
	// run while loop
	while(index < array.length){
		chunked.push(array.slice(index, index + size));
		index += size;
	}
	return chunked;
}
// .............................................................

// ANAGRAMS PROBLEM:-

function anagrams(stringA, stringB) {

}
// ...............................................................

// SENTENCE CAPITALIZATION:-

function capitalize(str){
	// make an empty array 'words'
	const words = [];
	// split the input string by spaces to get an array
	// for each word in the array
	for (let word of str.split(' ')) {
		// uppercasethe first letter of the word and then push result into 'words' array
		words.push(word[0].toUpperCase() + word.slice(1));
	}
	// join 'words' into a string and return it
	return words.join(' ');
}

// THE STEPS QUESTIONS:-

// ......................................................................

// GET YOUR VOWELS

function vowels(str) {
	const matches = str.match(/[aeiou]/gi);
	return matches ? matches.lenght : 0;
}

// another solution:-
function vowels(str){
	let count = 0;
	const checker = ['a', 'e', 'i', 'o', 'u'];
	for (let char of str.toLowerCase()) {
		if (checker.includeds(char)) {
			count++
		}
		
	}
	return count;
}
// ...................................................................

// GENERAL MATRIX SPIRALS

function  matrix(n){
	const results =[];

	for (let i = 0; i < n.length; i++) {
	results.push([]);
	}
	let counter = 1;
	let startColumn = 0;
	let endColumn = n - 1;
	let startRow = 0;
	let endRow = n - 1;
	// TO BE CONTINUED LATER
}
// ................................................................



// function pairsWithSum(sum, data) {
// 	data = data.slice(0);
// 	data.sort(function (a, b) { return a - b; });

// 	var pairs = [];
// 	var i = 0, j = data.length - 1;
// 	while (i < j && i < data.length && j >= 0) {
// 		var a = data[i], b = data[j];

// 		if (a + b == sum) {
// 			pairs.push([a, b]);
// 			while (i < data.length && data[i] == a) { i++; }
// 			while (j >= 0 && data[j] == b) { j--; }
// 		} else if (a + b < sum) {
// 			while (i < data.length && data[i++] == a);
// 		} else {
// 			while (j >= 0 && data[j--] == b);
// 		}
// 	}
// 	return pairs;
// }