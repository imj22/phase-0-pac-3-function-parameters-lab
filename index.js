// test 1: introduction function with "name" parameter

function introduction(name) {
    return `Hi, my name is ${name}.`;
}

// test 2: introductionWithLanguage function with "name" and "language" parameter, ie (name, language) . two arguments //

function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

//test 3: intro w language optional with (name, language) parameters. language defaults to "Javascript"

function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
