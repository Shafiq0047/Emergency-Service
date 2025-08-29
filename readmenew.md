

Ans to the Q.N-01

getElementById: With this method, we can find an element using its unique ID. The ID should not be used anywhere else in the code.

getElementsByClassName: With this method, we can find multiple elements that share the same class name.

querySelector: Using querySelector, it will select only the first tag element from multiple tags.

querySelectorAll: Using querySelectorAll, it will select all of them as an array (NodeList).




Ans to the Q.N-02

To create a new element and insert it into the DOM, I can explain with an example. Suppose there is a div with the ID parent. If I want to insert a paragraph inside this div, then I have to do: first create a paragraph element, then set its text content, and finally append it to the parent div. In this way, it can be done.
example:
<div id="parent"></div> 
ekta div ache parent id diye ami eitar vitor ekti paragraph insert korte chai tahole amke korte hobe
let addPara=document.createElement("p"); 
addPara.textContent = "This is a Paragraph"; 
div.appendChild(addPara);

Ans to the Q.N-03

Event Bubbling is a process in JavaScript where, when an event occurs on a child element (for example, a click), it doesn’t stop at that element. Instead, the event gradually propagates upward, moving through the parent element, then the grandparent, and eventually reaching the document. This step-by-step upward propagation is what is called Event Bubbling.


Ans to the Q.N-04

Event Delegation is a process in JavaScript where, instead of attaching separate event listeners to multiple child elements, we add a single listener to their parent element. Then, using event.target, we can determine which child element actually triggered the event.


Ans to the Q.N-05

preventDefault(): This method allows us to stop the default behavior of an element.
stopPropagation(): This method prevents an event from spreading through the DOM all the way up to the document.