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

//update phone price
function updatePhonePrice(newPhoneNumber) {
  const totalPhonePrice = newPhoneNumber * 1219;
  const getPhonePrice = document.getElementById("phone-price");

  //error handling
  if (totalPhonePrice < 1219) {
    alert("please add a phone first");
    return;
  }
  getPhonePrice.innerText = totalPhonePrice;
}

//phone number plus button
document
  .getElementById("btn-phone-plus")
  .addEventListener("click", function () {
    const newPhoneNumber = updatePhoneNumber(true);
    updatePhonePrice(newPhoneNumber);
    //set phone number
  });

//phone number minus button
document
  .getElementById("btn-phone-minus")
  .addEventListener("click", function () {
    const newPhoneNumber = updatePhoneNumber(false);
    updatePhonePrice(newPhoneNumber);
    //provide by update Phone price functions
    // const totalPhonePrice = newPhoneNumber * 1219;
    // const getPhonePrice = document.getElementById("phone-price");
    // getPhonePrice.innerText = totalPhonePrice;
    //set phone number
  });
