// NO CAPS, DB PUTS EVERYTHING TO LOWERCASE

const users = [
  {
    id: 1,
    username: "userONE",
    password: "password1",
  },
  {
    id: 2,
    username: "userTWO",
    password: "password2",
  },
];

const decks = [
  {
    id: 12345,
    userId: 1,
    deckname: "example deck",
  },
];

const cards = [
  {
    id: 20,
    deckId: 12345,
    question: "question number one",
    answer: "answer number one",
  },
  {
    id: 21,
    deckId: 12345,
    question: "question number two",
    answer: "answer number two",
  },
];

/*
const progress = [
  {
    id: 1,
    user_id: 2,
    deck_id: 12345,
    difficulty: 0,
    modified: "",
  },
];*/

module.exports = { users, decks, cards };
