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
  {
    id: 123456,
    userId: 1,
    deckname: "userONE example deck3",
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
    id: 22,
    deckId: 12345,
    question:
      "question number three Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
    answer: "answer number three",
  },
  {
    id: 23,
    deckId: 12345,
    question: "question number four",
    answer:
      "answer number four Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    id: 24,
    deckId: 54321,
    question: "question number five",
    answer: "answer number five",
  },
];

let currentDeck = {};

const data = { users, decks, cards, currentDeck };

export default data;
