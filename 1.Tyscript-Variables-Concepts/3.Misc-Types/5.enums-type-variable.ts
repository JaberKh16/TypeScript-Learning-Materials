// Type : Enum
// Syntax: Eenum {key, value?}
// Default value for keys start from 0, if not specified
// defining a enum => default setup
enum seatAllocationChoice {
  Aisle,
  Middle,
  Window,
}

// define enum => enum {key1 = value1, key2 = value2, key3 = value3}
enum colorChoice {
  Red = 11,
  Blue = 12,
  White, // 13
  Black, // 14
}

const firstSeat = seatAllocationChoice.Aisle;
