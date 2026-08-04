const buttonElement = document.querySelector("#greet-user-button"); //called caching an element

console.log(buttonElement);

function greetUser() {
  console.log("Hello user");
}

buttonElement.addEventListener("click", greetUser);

const plusButton = document.querySelector("#plus-button");

const cartCountElement = document.querySelector("#cart-count");

console.log(plusButton);
console.log(cartCountElement);

function increaseCount() {
  cartCountElement.style.color = "green";
  cartCountElement.textContent = Number(cartCountElement.textContent) + 1;
}

// plusButton.addEventListener('click',increaseCount)

// cache the minus button and console.log it

// Exercise 1:
// 1. Create a - button in your html and give it an id
// 2. cache the button in the JavaScript using querySelector
// 3. CONSOLE.LOG TO MAKE SURE THE BUTTON CACHED CORRECTLY (VERY IMPORTANT)
// 4. Create a function called decrementCart that should decrease the cartCount by 1
// 5. add the function as an event listener function to the button we cached in step 2
// 6. Test that it works and decrements the count
// BONUS: Add a reset button that when clicked should reset the count to 0

const minusButton = document.querySelector("#minus-button");

const imageElement = document.querySelector("#img");

function decreaseCount() {
  if (Number(cartCountElement.textContent) === 0) {
    return;
  }
  cartCountElement.style.color = "red";
  cartCountElement.textContent = Number(cartCountElement.textContent) - 1;
}

// minusButton.addEventListener('click',decreaseCount)

function changeCartCount(event) {
  console.log(event.target.textContent);

  if (event.target.textContent === "+") {// going up
    cartCountElement.style.color = "green";
    cartCountElement.textContent = Number(cartCountElement.textContent) + 1;
  } else {// going down
    if (Number(cartCountElement.textContent) === 0) {
        return;
    }
    cartCountElement.style.color = "red";
    cartCountElement.textContent = Number(cartCountElement.textContent) - 1;
  }
}

plusButton.addEventListener("click", changeCartCount);
minusButton.addEventListener("click", changeCartCount);


