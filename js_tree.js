"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 12
   Case Problem 3

   Author: Matthew Anderson
   Date: February 8, 2026  

   Filename: js_tree.js

   Global Variables:
   nodeCount
      Running count of all nodes in the source document
   elementCount
      Running count of all element nodes in the source document
   textCount
      Running count of all text nodes in the source document
   wsCount
      Running count of all white space text nodes in the source document


   Functions List:
   makeTree() 
      Sets up and places the node tree within the HTML document and
      displays the node counts from the document

   makeBranches(treeNode, nestedList)
      Makes a list item or an ordered list based on the contents and type
      of node from the sourceNode parameter and then appends that list
      item or ordered list to nestedList. The function recursively calls 
      itself to navigate throught the node tree of the source document.

   isWhiteSpaceNode(tString)
      Returns true if tString represents the text of a white space text
      node and false if it doesn't
*/

// task 2: initialized variables
var nodeCount = 0;
var elemCount = 0;
var textCount = 0;
var wsCount = 0;

// task 3: run makeTree on page load
window.onload = makeTree;

function makeTree() {
  // fix: resetting global counters
  nodeCount = 0;
  elemCount = 0;
  textCount = 0;
  wsCount = 0;
   
  // 1. create the aside element fragment 
  let asideElem = document.createElement("aside");
  asideElem.id = "treeBox";
  let h1Elem = document.createElement("h1");
  h1Elem.textContent = "Node Tree";
  asideElem.appendChild(h1Elem);
  
  // append aside to the section with ID "main"
  document.getElementById("main").appendChild(asideElem);
  
  // 2. create the initial ordered list (ol)
  let nodeList = document.createElement("ol");
  asideElem.appendChild(nodeList);
  
  // 3. point to the elements matching the css selector "#mainarticle"
  var sourceArticle = document.querySelector("#mainArticle");
  
  // 4. call makeBranches to populate the tree
  makeBranches(sourceArticle, nodeList);
  
  // task 6: update the page with the final counts
  // fix: removed duplicaed section
  document.getElementById("totalNodes").textContent = nodeCount;
  document.getElementById("elemNodes").textContent = elemCount;
  document.getElementById("textNodes").textContent = textCount;
  document.getElementById("wsNodes").textContent = wsCount;
}

function makeBranches(treeNode, nestedList) {
  // increase total node count
  nodeCount++;
  
  // create the list item and span
  let liElem = document.createElement("li");
  liElem.textContent = "+--";
  
  let spanElem = document.createElement("span");
  liElem.appendChild(spanElem);
  nestedList.appendChild(liElem);
  
  // checks if it's an element node
  if (treeNode.nodeType === 1) {
    elemCount++;
    spanElem.className = "elementNode";
    // append the tag name
    spanElem.textContent = "<" + treeNode.nodeName + ">";
  } 
  // checks if it's a text node
  else if (treeNode.nodeType === 3) {
    textCount++;
    let textString = treeNode.nodeValue;
    
    // checks for whitespace using jorge's provided function
    if (isWhiteSpaceNode(textString)) {
      wsCount++;
      spanElem.className = "whiteSpaceNode";
      spanElem.textContent = "#text";
    } else {
      spanElem.className = "textNode";
      spanElem.textContent = textString;
    }
  }
  
  // recursion: checks if the current node has its own child nodes
  if (treeNode.childNodes.length > 0) {
    // create a new nested list
    let newList = document.createElement("ol");
    newList.textContent = "|";
    nestedList.appendChild(newList);
    
    // loop through all child nodes and call makeBranches for each one
    for (let i = 0; i < treeNode.childNodes.length; i++) {
      let n = treeNode.childNodes[i];
      makeBranches(n, newList);
    }
  }
}
   


function isWhiteSpaceNode(tString) {
   return !(/[^\t\n\r ]/.test(tString));
}
