/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(timeString) {
  let hour = timeString.split(":")[0]
  if (hour < 12)
    return "Good Morning"
  if (hour >= 12 && hour <= 17)
    return "Good Afternoon"
  if (hour > 17 && hour <= 23)
    return "Good Evening"
}

function displayMessage(msg) {
  let updateMessage = document.querySelector("#greeting");
  updateMessage.innerText = msg;
}