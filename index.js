let name="Aki";

//let name="Aki";
let language="Ember.js";

function introduction (name) {
  //console.log(`Hi, my name is ${name} and I am learning to program in [language].`);
  return `Hi, my name is ${name}.`
}

function introductionWithLanguage (name,language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
  }
  
function introductionWithLanguageOptional (name,language ="JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`

  }