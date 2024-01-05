let userInput = document.getElementById("date");
//for not selecting future date only today date and past date
userInput.max = new Date().toISOString().split("T")[0];

function calculateAge() {
  console.log("clicked");
}
