type Book = {
  name: string;
  description: string;
  cost: number;
};

// injecting new property
// intersection of types
type DiscountBook = Book & { discountPrice: number };

const book1: Book = {
  name: "Regeneration of youth",
  description: "Concepts about youth rengeration decades",
  cost: 20,
};

const book2: Book = {
  name: "Sea Turtle",
  description: "Concepts about sea specifies turtle",
  cost: 10,
};

const discountBooks: DiscountBook = {
  name: "Sea Turtle",
  description: "Concepts about sea specifies turtle",
  cost: 10,
  discountPrice: 10,
};
