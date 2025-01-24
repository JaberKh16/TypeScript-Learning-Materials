interface UserData {
  email: string;
  userId: number;
  googleId?: string; // Optional property
  getInfo: (email: string, userId: number) => string; // Explicit parameter types
  fetchUserId: () => string; // Adjusted to not require an argument (matches intended use)
  getCoupon: (couponCode: string) => string; // Explicit type for parameter and return
}

const newUser: UserData = {
  email: "test@gmail.com",
  userId: 1213212,
  getInfo: (email: string, userId: number) => {
    return `${email}  ${userId}`;
  },
  fetchUserId: () => {
    return `User ID is ${newUser.userId}`;
  },
  getCoupon(couponCode: string) {
    return `Coupon code ${couponCode} applied successfully!`;
  },
};

// Example usage
console.log(newUser.getInfo(newUser.email, newUser.userId)); // test@gmail.com  1213212
console.log(newUser.fetchUserId()); // User ID is 1213212
console.log(newUser.getCoupon("DISCOUNT2025")); // Coupon code DISCOUNT2025 applied successfully!
