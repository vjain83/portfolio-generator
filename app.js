var profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);
profileDataArr.forEach(profileItem => console.log(profileItem));


printProfileData(profileDataArgs);
