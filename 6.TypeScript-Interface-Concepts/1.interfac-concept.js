var newUser = {
    email: "test@gmail.com",
    userId: 1213212,
    getInfo: function (email, userId) {
        return "".concat(email, "  ").concat(userId);
    },
    fetchUserId: function () {
        return "User ID is ".concat(newUser.userId);
    },
    getCoupon: function (couponCode) {
        return "Coupon code ".concat(couponCode, " applied successfully!");
    },
};
// Example usage
console.log(newUser.getInfo(newUser.email, newUser.userId)); // test@gmail.com  1213212
console.log(newUser.fetchUserId()); // User ID is 1213212
console.log(newUser.getCoupon("DISCOUNT2025")); // Coupon code DISCOUNT2025 applied successfully!
