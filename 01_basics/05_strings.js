const name = "Vicky"
const repoCount = 50

console.log(name+repoCount+" values"); // Outdated way

// String Interpolation

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Vicky');

console.log(gameName[0]);
console.log(gameName.__prto__);
console.log(gameName.length);

console.log(gameName.toUpperCase);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('c'));

console.log(gameName.substring(0, 4));
console.log(gameName.slice(-8, 4));

console.log('    Vicky    '.trim());

const url = "https://vicky%20raut.com"
console.log(url.replace('%20', "-"));

console.log(gameName.includes('name'));
console.log(url.split('.'));