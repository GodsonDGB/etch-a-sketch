---
# Etch-A-Sketch – DOM Manipulation Project

A browser-based **sketchpad inspired by the classic Etch-A-Sketch toy**, built using **HTML, CSS (Flexbox), and JavaScript**.
This project focuses on **DOM manipulation, dynamic element creation, and event handling**.

The application generates a grid dynamically with JavaScript and allows the user to draw on it simply by moving the mouse across the squares.
---

## Preview

This project allows users to interact with a dynamic drawing grid where each square changes color when hovered, creating a pixel-style drawing effect.

---

## Features

- Dynamic **16×16 grid generation**
- **Grid squares created entirely with JavaScript**
- **Flexbox layout** used to structure the grid
- **Hover drawing effect** that colors squares
- **Resizable grid system**
- User can generate a **custom grid size up to 100×100**
- Grid automatically fits within a fixed drawing area

---

## How It Works

1. When the page loads, JavaScript generates a **16×16 grid** inside a container.
2. Each square listens for a **mouse hover event**.
3. When the cursor passes over a square, its color changes to simulate drawing.
4. A **Reset / New Grid button** allows the user to create a new grid.
5. The user enters the number of squares per side via a **popup prompt**.
6. The existing grid is removed and replaced with a **new dynamically generated grid**.

---

## Technologies Used

- **HTML5**
- **CSS3**
  - Flexbox layout

- **JavaScript**
  - DOM manipulation
  - Event listeners
  - Dynamic element creation
  - User input handling

---

## Extra Features (Optional Enhancements)

Some additional behaviors can be implemented:

- **Random RGB coloring** for each interaction
- **Progressive darkening effect**
  Each hover darkens the square by **10% until it becomes fully black**

These enhancements improve interactivity and demonstrate deeper control over **JavaScript and CSS properties** such as opacity.

---

## Learning Objectives

This project was built to practice:

- Manipulating the **DOM with JavaScript**
- Dynamically creating and removing elements
- Handling **user interactions and events**
- Structuring layouts using **Flexbox**
- Managing **dynamic UI updates**

---

## Installation

Clone the repository:

```bash
git clone https://github.com/godsondgb/etch-a-sketch.git
```

Open the project folder and launch:

```
index.html
```

in your browser.

---

## Project Status

Completed as part of the **Foundations Path of The Odin Project**.

---

## Author

**Godson Degbo**

Full-Stack Developer in training
Focused on **JavaScript, modern web development, and problem solving**.

---
