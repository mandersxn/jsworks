# DOM Node Tree Generator 🌳

This project is a JavaScript-powered web application that visually maps out the Document Object Model (DOM) of an HTML page. By traversing the document using recursion, the script generates a nested list representing the familial relationships (parents, children, and siblings) of all HTML elements and text nodes.

## ✨ Features
* **Recursive DOM Traversal:** Uses a recursive JavaScript function (`makeBranches`) to dig through every layer of the HTML document.
* **Dynamic HTML Generation:** Automatically builds and injects an ordered list into the page to visualize the tree structure.
* **Node Tallying:** Keeps a running, real-time count of:
  * Total Nodes
  * Element Nodes (e.g., `<p>`, `<h1>`, `<div>`)
  * Text Nodes (actual text content)
  * Whitespace Nodes (line breaks and spaces between tags)

## 🛠️ Technologies Used
* **HTML5:** Semantic document structure.
* **CSS3:** Styling for the schematic diagram and nested lists.
* **Vanilla JavaScript (ES6+):** Core logic, DOM manipulation (`createElement`, `appendChild`, `querySelector`), and event handling.

## 🚀 How to Run
Since this is a front-end vanilla JavaScript project, no build tools or servers are required!
1. Clone this repository to your local machine:
   `git clone https://github.com/redcubex/node-tree-generator.git`
2. Open the `index.html` file directly in any modern web browser.
3. Scroll to the right side of the page to see the generated Node Tree and the final node counts.

## 🧠 Core Concepts Demonstrated
This project was a deep dive into how browsers read and organize HTML. It demonstrates a practical use case for **recursion**—a concept where a function calls itself until it hits a base condition (in this case, when a node has no more child nodes). It also highlights the strict rules of the DOM, proving that even invisible line returns in an HTML file are processed by the browser as actual "whitespace" text nodes.
