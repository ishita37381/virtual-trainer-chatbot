const questions = [
  "What is your age?",
  "What is your height in cm?",
  "What is your weight in kg?",
  "Do you have any health conditions? (e.g., diabetes, hypertension)",
  "What is your main goal? (e.g., lose weight, gain muscle, maintain health)"
];
let answers = [];
let questionIndex = 0;

document.getElementById("user-input").disabled = false;
askQuestion();

function askQuestion() {
  const chatBox = document.getElementById("chat-box");
  const botMessage = document.createElement("div");
  botMessage.className = "chat-message bot";
  botMessage.innerHTML = `<div class="message-content">${questions[questionIndex]}</div>`;
  chatBox.appendChild(botMessage);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function sendMessage() {
  const userInput = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");

  if (userInput.value.trim() === "") return;

  // Display user's message
  const userMessage = document.createElement("div");
  userMessage.className = "chat-message user";
  userMessage.innerHTML = `<div class="message-content">${userInput.value}</div>`;
  chatBox.appendChild(userMessage);

  // Save the answer
  answers.push(userInput.value);
  userInput.value = "";

  chatBox.scrollTop = chatBox.scrollHeight;

  // Proceed to the next question or provide the plan
  if (questionIndex < questions.length - 1) {
    questionIndex++;
    setTimeout(askQuestion, 1000);
  } else {
    setTimeout(providePlan, 1000);
  }
}

function providePlan() {
  const chatBox = document.getElementById("chat-box");

  const age = parseInt(answers[0]);
  const height = parseInt(answers[1]);
  const weight = parseInt(answers[2]);
  const condition = answers[3].toLowerCase();
  const goal = answers[4].toLowerCase();

  let exercisePlan = "";
  let dietPlan = "";

  // Basic logic to suggest a plan based on the goal
  if (goal.includes("lose weight")) {
    exercisePlan = "30 minutes of cardio 5 times a week and strength training 3 times a week.";
    dietPlan = "A low-calorie diet with high protein, veggies, and whole grains. Avoid sugary and fried foods.";
  } else if (goal.includes("gain muscle")) {
    exercisePlan = "Strength training 4-5 times a week with compound exercises.";
    dietPlan = "A high-protein diet with complex carbs and healthy fats. Consider protein shakes if needed.";
  } else {
    exercisePlan = "Maintain regular physical activity with a mix of cardio and strength exercises.";
    dietPlan = "A balanced diet with proteins, carbs, fats, and plenty of fruits and vegetables.";
  }

  if (condition.includes("diabetes")) {
    dietPlan += " Limit sugar intake and focus on low glycemic index foods.";
  } else if (condition.includes("hypertension")) {
    dietPlan += " Reduce salt intake and avoid processed foods.";
  }

  // Display the generated plan
  const botMessage = document.createElement("div");
  botMessage.className = "chat-message bot";
  botMessage.innerHTML = `<div class="message-content"><strong>Exercise Plan:</strong> ${exercisePlan}<br><strong>Diet Plan:</strong> ${dietPlan}</div>`;
  chatBox.appendChild(botMessage);

  chatBox.scrollTop = chatBox.scrollHeight;
}
