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
    id: 123,
    userId: 1,
    deckname: " userONE example deck1",
  },
  {
    id: 1234,
    userId: 2,
    deckname: " userTWO example deck1",
  },
  {
    id: 12345,
    userId: 1,
    deckname: " userONE example deck2",
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

  {
    id: 24,
    deckId: 54321,
    question: "question number five",
    answer: "answer number five",
  },
];

//
const progress = [
  {
    id: 1,
    user_id: 2,
    deck_id: 12345,
    difficulty: 0,
    modified: "",
  },
];

let currentDeck = {};

const data = { users, decks, cards, currentDeck };

export default data;
