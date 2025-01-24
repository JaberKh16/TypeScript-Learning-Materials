// Implementing the Manager interface
var user1 = {
    role: "Manager", // Correct role
    email: "test@gmail.com",
    userId: 1213212,
    createDate: new Date(), // Added createDate
    getInfo: function (email, userId) {
        return "Interface: Manager => { Email: ".concat(email, " \n ID: ").concat(userId, " }");
    },
    fetchUserId: function () {
        return "User ID: ".concat(this.userId); // Correctly referencing this.userId
    },
    getCoupon: function (couponCode) {
        return "Coupon code: ".concat(couponCode);
    },
};
// Implementing the Admin interface
var user2 = {
    role: "Admin", // Correct role
    email: "admin@gmail.com",
    userId: 12313,
    createDate: new Date(), // Added createDate
    getInfo: function (email, userId) {
        return "Interface: Admin => { Email: ".concat(email, " \n ID: ").concat(userId, " }");
    },
    fetchUserId: function () {
        return "User ID: ".concat(this.userId); // Correctly referencing this.userId
    },
    getCoupon: function (couponCode) {
        return "Coupon code: ".concat(couponCode);
    },
};
console.log(user1);
console.log(user2);
// Example usage
console.log(user1.getInfo(user1.email, user1.userId));
console.log(user1.fetchUserId()); // User ID: 1213212
console.log(user1.getCoupon("DISCOUNT2025")); // Coupon code: DISCOUNT2025
console.log(user1.createDate);
