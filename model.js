// DOM Access and Manipulation - To-Do List
const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");
const newTaskInput = document.getElementById("new-task");

addTaskButton.addEventListener("click", function () {
  const taskText = newTaskInput.value.trim();
  if (taskText) {
    const li = document.createElement("li");
    li.textContent = taskText;

    // Add a delete button to each task
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
      taskList.removeChild(li);
    });

    li.appendChild(deleteButton);
    taskList.appendChild(li);
    newTaskInput.value = ""; // Clear input after adding task
  }
});

// Form Handling
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  alert(`Name: ${name}\nEmail: ${email}`);
});

// Dynamic Content - Loading Content
const loadContentButton = document.getElementById("load-content");
const contentPlaceholder = document.getElementById("content-placeholder");

loadContentButton.addEventListener("click", function () {
  const newContent = document.createElement("p");
  newContent.textContent = "This content was dynamically loaded!";
  contentPlaceholder.appendChild(newContent);
});

// Animations
const animateBoxButton = document.getElementById("animate-box");
const animatedBox = document.getElementById("animated-box");

animateBoxButton.addEventListener("click", function () {
  animatedBox.style.transform = "translateX(200px)";
  setTimeout(() => {
    animatedBox.style.transform = "translateX(0px)";
  }, 1000); // Reset after animation
});
