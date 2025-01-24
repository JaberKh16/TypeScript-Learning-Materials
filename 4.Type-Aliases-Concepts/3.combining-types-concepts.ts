type cardNumber = {
  cardNumber: string;
};

type cardDate = {
  cardDate: string;
};

// combingin both types using &
type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };
