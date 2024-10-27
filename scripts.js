const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  // validates when values are missing
  if (!dividend || !divider) {
    result.innerText = "Division not performed. Both values are required in inputs. Try again";
    return;
  }

  // sees if inputs are numbers
  const dividendNum = Number(dividend);
  const dividerNum = Number(divider);

  // non-numeric input
  if (isNaN(dividendNum) || isNaN(dividerNum)) {
    console.error(new Error("Non-numeric input provided."));
    document.body.innerHTML = "Something critical went wrong. Please reload the page";
    return;
  }

  // division is invalid
  if (dividerNum === 0) {
    console.error(new Error("Division by zero attempted."));
    result.innerText = "Division not performed. Invalid number provided. Try again";
    return;
  }

  // perform division and show result
  const divisionResult = Math.floor(dividendNum / dividerNum); // Ensure whole number
  result.innerText = divisionResult;
});
