var personName = "Rizwan Ali";
console.log(personName.toUpperCase());
console.log(personName.toLowerCase());
console.log(personName.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
