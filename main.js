$("#container .main-bd .right-side .nav ul li").click(function () {
  $(this).addClass("active").siblings().removeClass("active");
});

// const tabBtn = document.querySelectorAll(
//   "#container .main-bd .right-side .nav ul li"
// );

const tab = document.querySelectorAll(
  "#container .main-bd .right-side .profile-body .tab"
);

function tabs(panelIndex) {
  tab.forEach(function (node) {
    node.style.display = "none";
  });
  tab[panelIndex].style.display = "block";
}
tabs(0);

/**
 * Tăng động
 */
// function animateNumber(finalNumber, delay, startNumber = 0, callback) {
//   let currentNumber = startNumber;
//   const interval = window.setInterval(updateNumber, delay);
//   function updateNumber() {
//     if (currentNumber >= finalNumber) {
//       clearInterval(interval);
//     } else {
//       let inc = Math.ceil(finalNumber / (duration / 17));
//       if (currentNumber + inc > finalNumber) {
//         currentNumber = finalNumber;
//         clearInterval(interval);
//       } else {
//         currentNumber += inc;
//       }
//       callback(currentNumber);
//     }
//   }
// }

// BILL
// const billingForm = document.querySelector("#billing-form");
// const paymentMethod = document.querySelector("#payment-method");
// const creditCardForm = document.querySelector("#credit-card-form");
// const paymentForm = document.querySelector("#payment-form");
// const confirmation = document.querySelector("#confirmation");
// const confirmationName = document.querySelector("#confirmation-name");
// const confirmationAddress = document.querySelector("#confirmation-address");
// const confirmationPhone = document.querySelector("#confirmation-phone");
// const confirmationPayment = document.querySelector("#confirmation-payment");
// const confirmationTotal = document.querySelector("#confirmation-total");

// billingForm.addEventListener("submit", (event) => {
//   event.preventDefault();
//   if (paymentMethod.value === "credit-card") {
//     // billingForm.add("hidden");
//     billingForm.style.display = "hidden";
//     creditCardForm.remove("hidden");
//   } else if (paymentMethod.value === "paypal") {
//     window.location.href = "https://www.paypal.com";
//   }
// });

// paymentForm.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const cardNumber = document.querySelector("#card-number").value;
//   const cardName = document.querySelector("#card-name").value;
//   const expiryDate = document.querySelector("#expiry-date").value;
//   const cvv = document.querySelector("#cvv").value;

//   if (cardNumber.length != 16 || isNaN(cardNumber)) {
//     showErrorMessage("Vui lòng nhập số thẻ hợp lệ");
//     return;
//   }

//   if (cardName.trim() === "") {
//     showErrorMessage("Vui lòng nhập tên chủ thẻ");
//     return;
//   }

//   if (expiryDate.length != 4 || isNaN(expiryDate)) {
//     showErrorMessage("Vui lòng nhập ngày hết hạn hợp lệ (MMYY)");
//     return;
//   }

//   if (cvv.length != 3 || isNaN(cvv)) {
//     showErrorMessage("Vui lòng nhập mã bảo mật CVV hợp lệ");
//     return;
//   }

//   confirmationName.innerText = document.querySelector("#name").value;
//   confirmationAddress.innerText = document.querySelector("#address").value;
//   confirmationPhone.innerText = document.querySelector("#phone").value;
//   confirmationPayment.innerText = "Thẻ tín dụng";
//   confirmationTotal.innerText = "100,000 đ"; // Tổng tiền đơn hàng

//   creditCardForm.classList.add("hidden");
//   confirmation.classList.remove("hidden");
// });

// function showErrorMessage(message) {
//   const errorMessage = document.querySelector("#error-message");
//   errorMessage.innerText = message;
// }
