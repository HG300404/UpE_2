var name = document.getElementById("name");
var email = document.getElementById("email");
var phone = document.getElementById("phone");
var cardNumber = document.getElementById("card-number");
var expirationDate = document.getElementById("expiration-date");

if (name.value === "") {
  alert("Vui lòng nhập họ và tên");
  return;
}

if (email.value === "") {
  alert("Vui lòng nhập địa chỉ email");
  return;
}

if (phone.value === "") {
  alert("Vui lòng nhập số điện thoại");
  return;
}

if (cardNumber.value === "") {
  alert("Vui lòng nhập số thẻ");
  return;
}

if (expirationDate.value === "") {
  alert("Vui lòng nhập ngày hết hạn");
  return;
}

submitButton.disabled = true;

Stripe.card.createToken(
  {
    number: cardNumber.value,
    exp_month: expirationDate.value.split("/")[0],
    exp_year: expirationDate.value.split("/")[1].trim(),
  },
  function (status, response) {
    if (response.error) {
      alert(response.error.message);
      submitButton.disabled = false;
    } else {
      var token = response.id;

      // Send the token to your server to process the payment
      // Example:
      // fetch('/process-payment', {
      // 	method: 'POST',
      // 	body: {
      // 		token: token,
      // 		name: name.value,
      // 		email: email.value,
      // 		phone: phone.value
      // 	}
      // }).then(function(response) {
      // 	if (response.ok) {
      // 		alert('Thanh toán thành công');
      // 	} else {
      // 		alert('Có lỗi xảy ra khi xử lý thanh toán');
      // 	}
      // });

      alert("Thanh toán thành công");
      form.reset();
      submitButton.disabled = false;
    }
  }
);
