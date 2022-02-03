$(document).ready(function () {
    CreateCustomButton();
});

CreateCustomButton = function () {
    var myCustomButton = '<button name="payment-button" style="background-color:#6772E5;color:#FFF;padding:8px 12px;border:0;border-radius:4px;" value="Pay fees">Pay Fees</button>';
    $(".toolbar-actions").append(myCustomButton);
    addEventListener("click", function () {
        var stripe = Stripe("pk_test_51KNwuMHWzOs1sWTkfWevo4ufnMl8cENt1lSwG8IxhjyUHfc0kzHWoWoUt95p6bIIZCDP42hhWXmrQsIg5o3OOeEA00OQXZegzP");
        stripe.redirectToCheckout({
            lineItems: [{
                price: "price_1KOj5JHWzOs1sWTklAN95g1z",
                quantity: 1
            }],
            mode: "payment",
            successUrl: "https://portal301.powerappsportals.com/account/successfulPayment",
            cancelUrl: document.URL,
            submitType: "pay",
            customerEmail: "{{user.emailaddress1}}",
            clientReferenceId: "Fees"
        }).then(function (result) { alert("Error " + result.error.message) });
})};