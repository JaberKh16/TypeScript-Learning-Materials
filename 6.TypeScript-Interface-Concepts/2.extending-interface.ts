// Base Role interface
interface Role {
  role: "Admin" | "Developer" | "Manager" | "Tester"; // Literal types for roles
  email: string;
  userId: number;
  googleId?: string; // Optional property
  getInfo: (email: string, userId: number) => string; // Method with explicit parameter types
  fetchUserId: () => string; // Method with no arguments
  getCoupon: (couponCode: string) => string; // Method with parameter and return type
}

// Injecting new property
interface Role {
  createDate: Date; // New property
}

// Admin interface extends Role
interface Admin extends Role {
  role: "Admin"; // Specific role for Admin
}

// Manager interface extends Role
interface Manager extends Role {
  role: "Manager"; // Specific role for Manager
}

// Developer interface extends Role
interface Developer extends Role {
  role: "Developer"; // Specific role for Developer
}

// Implementing the Manager interface
const user1: Manager = {
  role: "Manager", // Correct role
  email: "manager@gmail.com",
  userId: 1213212,
  createDate: new Date(), // Added createDate
  getInfo: (email: string, userId: number) => {
    return `Interface: Manager => { Email: ${email} \n ID: ${userId} }`;
  },
  fetchUserId: function () {
    return `User ID: ${this.userId}`; // Correctly referencing this.userId
  },
  getCoupon(couponCode: string) {
    return `Coupon code: ${couponCode}`;
  },
};

// Implementing the Admin interface
const user2: Admin = {
  role: "Admin", // Correct role
  email: "admin@gmail.com",
  userId: 12313,
  createDate: new Date(), // Added createDate
  getInfo: (email: string, userId: number) => {
    return `Interface: Admin => { Email: ${email} \n ID: ${userId} }`;
  },
  fetchUserId() {
    return `User ID: ${this.userId}`; // Correctly referencing this.userId
  },
  getCoupon(couponCode: string) {
    return `Coupon code: ${couponCode}`;
  },
};

console.log(user1);
console.log(user2);

// Example usage
console.log(user1.getInfo(user1.email, user1.userId));
console.log(user1.fetchUserId()); // User ID: 1213212
console.log(user1.getCoupon("DISCOUNT2025")); // Coupon code: DISCOUNT2025
console.log(user1.createDate);
