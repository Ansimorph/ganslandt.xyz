const interests = require("./interests.json");
const arrayToSentence = require("array-to-sentence");

const SENTENCE_START = "Björn Ganslandt is a frontend developer who loves ";

module.exports = () => {
    return SENTENCE_START + arrayToSentence(interests);
};
