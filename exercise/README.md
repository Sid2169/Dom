# DOM Manipulation Exercises

This repository provides a series of exercises designed to help you practice and learn DOM manipulation using JavaScript. These exercises are divided into different sections, each focusing on different aspects of DOM manipulation. Use the provided `index.html`, `styles.css`, and `script.js` files to complete these tasks.

## Setup Instructions

1. Download the repository or copy the provided code into your local files.
2. Open `index.html` in your browser to see the initial setup.
3. Edit `script.js` to complete the exercises and implement the required functionality.

---

## Learning Objectives

By completing these exercises, you will be able to:

- Access and modify HTML elements.
- Create, remove, and manipulate elements in the DOM.
- Handle user interactions through events.
- Work with forms and dynamically update page content.
- Apply animations and effects using JavaScript.

---

## Exercise Set

### 1. **Access and Modify HTML Elements**

#### Objective:
- Learn how to access and modify HTML elements using JavaScript.

#### Tasks:
- Access the `<h1>` tag and change its text to "Welcome to DOM Manipulation Practice".
- Modify the text of the `<p>` tag inside the header to "Master JavaScript by practicing DOM manipulation!".
- Change the background color of the `header` section using JavaScript.

---

### 2. **Create and Remove Elements**

#### Objective:
- Practice creating and removing elements dynamically.

#### Tasks:
- Add functionality to the "Add Task" button that creates a new `<li>` element with the text from the input field.
- Each new task should have a "Delete" button that removes the task from the list when clicked.
- Ensure that when a new task is added, the input field is cleared.

---

### 3. **Handle Events**

#### Objective:
- Learn how to add and remove event listeners to interact with users.

#### Tasks:
- Add an event listener to the "Add Task" button that triggers when clicked.
- Add a "Submit" event listener to the form. When the form is submitted, display the user's name and email in an alert message.
- Attach an event listener to the "Load Content" button to dynamically load a paragraph inside the `#content-placeholder` section.

---

### 4. **Traverse the DOM**

#### Objective:
- Navigate the DOM by traversing between parent, child, and sibling elements.

#### Tasks:
- Select the first `<li>` element in the task list and log its text content to the console.
- Get all the list items in the task list and loop through them, logging each item’s text content to the console.
- Find the parent of the "Add Task" button and change its background color.

---

### 5. **Manipulate Classes and Attributes**

#### Objective:
- Learn how to manipulate CSS classes and element attributes.

#### Tasks:
- Add a new class to the `#animated-box` when the "Animate Box" button is clicked, which changes the box’s color to blue.
- Toggle a CSS class to highlight completed tasks in the to-do list (e.g., a strikethrough for completed tasks).
- Change the `type` attribute of the `#email` input field to `text` using JavaScript.

---

### 6. **Modify Styles Dynamically**

#### Objective:
- Learn how to change inline styles dynamically using JavaScript.

#### Tasks:
- Modify the `#animated-box` styles dynamically to increase its width to `150px` when the "Animate Box" button is clicked.
- Set the background color of the `#todo-list` section to light gray when a new task is added.

---

### 7. **Work with Forms**

#### Objective:
- Learn how to manipulate and validate forms using JavaScript.

#### Tasks:
- Display the value entered in the "Name" input field when the form is submitted.
- Check if both the name and email fields are filled before allowing form submission. If any field is empty, display an error message.

---

### 8. **Dynamic Content Management**

#### Objective:
- Learn how to load content dynamically into the page.

#### Tasks:
- When the "Load Content" button is clicked, load a new paragraph of content into the `#content-placeholder` div. You can simulate loading content by creating a new paragraph with text like "This is the dynamically loaded content!".
- Modify the `#content-placeholder` div to display a loading indicator (such as a spinning wheel) when the content is being loaded.

---

### 9. **Animations and Effects**

#### Objective:
- Apply animations and visual effects using JavaScript.

#### Tasks:
- Add a click event on the "Animate Box" button that moves the box horizontally across the screen using CSS transitions.
- After the animation completes, return the box to its original position using JavaScript.
- Add an effect to the `#task-list` that fades in each task when it’s added.

---

### 10. **Build Interactive Applications**

#### Objective:
- Combine all the learned techniques to create an interactive web application.

#### Tasks:
- Create a fully functional to-do list that allows adding, deleting, and toggling tasks as completed.
- Allow users to edit an existing task by clicking on it, changing the text, and saving it back.
- Implement a simple quiz app where users can select answers, submit the form, and see their score dynamically displayed.

---

## Bonus Challenges

- Add a feature to mark tasks as important by clicking on them, which will highlight them with a different background color.
- Implement a "Clear All" button to remove all tasks from the to-do list.
- Create a modal dialog that pops up when the "Add Task" button is clicked, prompting the user to confirm before the task is added.

---

## How to Submit

1. Complete each of the tasks listed above by writing the necessary JavaScript code in the `script.js` file.
2. Test the changes in the browser to ensure everything works as expected.
3. Once you’re done, you can either submit the project as a zip file or push your changes to your Git repository.

---

## Additional Resources

- [MDN Web Docs - DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
- [JavaScript.info - DOM](https://javascript.info/dom)
- [W3Schools - DOM Methods](https://www.w3schools.com/js/js_htmldom_methods.asp)

---

Enjoy practicing your DOM manipulation skills and have fun building interactive web pages!
