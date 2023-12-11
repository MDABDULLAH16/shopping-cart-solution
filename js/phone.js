//update phone number price 1 by 1
function updatePhoneNumber(isIncrease) {
  const getPhoneNumberField = document.getElementById("phone-number-field");
  const phoneInputFieldString = getPhoneNumberField.value;
  const phoneInputField = parseInt(phoneInputFieldString);
  let newPhoneNumber;
  if (isIncrease === true) {
    newPhoneNumber = phoneInputField + 1;
  } else {
    newPhoneNumber = phoneInputField - 1;
  }
  getPhoneNumberField.value = newPhoneNumber;
  return newPhoneNumber;
}

document
  .getElementById("btn-phone-plus")
  .addEventListener("click", function () {
    const newPhoneNumber = updatePhoneNumber(true);
    const totalPhonePrice = newPhoneNumber * 1219;
    const getPhonePrice = document.getElementById("phone-price");
    getPhonePrice.innerText = totalPhonePrice;
    //set phone number
  });

document
  .getElementById("btn-phone-minus")
  .addEventListener("click", function () {
    const newPhoneNumber = updatePhoneNumber(false);
    const totalPhonePrice = newPhoneNumber * 1219;
    const getPhonePrice = document.getElementById("phone-price");
    getPhonePrice.innerText = totalPhonePrice;
    //set phone number
  });
