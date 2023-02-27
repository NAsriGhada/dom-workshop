// ! What is DOM
// When a web page is loaded, the browser creates a Document Object Model of the page.

// The HTML DOM model is constructed as a tree of Objects: SHOW IMG

// With the object model, JavaScript gets all the power it needs to create dynamic HTML:

//     JavaScript can change all the HTML elements in the page
//     JavaScript can change all the HTML attributes in the page
//     JavaScript can change all the CSS styles in the page
//     JavaScript can remove existing HTML elements and attributes
//     JavaScript can add new HTML elements and attributes
//     JavaScript can react to all existing HTML events in the page
//     JavaScript can create new HTML events in the page

// * In other words: The HTML DOM is a standard for how to get, change, add, or delete HTML elements.
// * The document object represents your web page.

// * If you want to access any element in an HTML page, you always start with accessing the document object.

// ! Finding HTML elements
    // ? Get element by #id
var headingOne = document.getElementById('headingOne')
console.log(headingOne)

    // ? Get element by .class name
var headingTwo = document.getElementsByClassName('heading')
console.log(headingTwo)

    //  ? Get element by tag name
var tagName = document.getElementsByTagName('p')
console.log(tagName)
// todo second example
var li = document.getElementsByTagName('li')
console.log(li)

    //  ? Get element by querySelector
var div = document.querySelector('div')
console.log(div)

    //  ? Get element by querySelectorAll
var divSelectorAll = document.querySelectorAll('div')
console.log(divSelectorAll)


// ! Changing HTML elements
var updatedHeading = headingOne.innerHTML = 'This heading has been updated'
console.log(updatedHeading)

var insertH1 = div.innerHTML = '<p>I inserted a p tag</p>'
console.log(insertH1)

// todo changing attributes
var img = document.querySelector('img')
img.setAttribute('src', 'dom.png')
console.log(img)

// todo css styling
var lorem = document.getElementById('lorem')
lorem.style.color = 'green'
// camel case
lorem.style.borderBottom = 'solid black'

// todo adding elements
var createElement = document.createElement('div')
var addedElement = document.body.appendChild(createElement)
console.log(addedElement)
var textNode = document.createTextNode("I was created by DOM")
createElement.appendChild(textNode)

// todo removing elements
// var deletedDiv = document.getElementById('deletedDiv')
// deletedDiv.remove()
var deletedDiv = document.getElementById('deletedDiv')
document.body.removeChild(deletedDiv)

// todo replacing children
var replacingChild = document.getElementById('replacingChild')
var replacingChildOfP = document.getElementById('replacingChildOfP')
var textNodeTwo = document.createTextNode("I believe so!")
replacingChild.appendChild(textNodeTwo)
replacingChild.replaceChild(textNodeTwo, replacingChildOfP)


// ! Writing directly into the HTML output stream
document.write("<h2>Hello World!</h2><p>Have a nice day!</p>")

document.write(Date());


// ! Event Handlers
// changing html attribute inside the html file
// add event listener
var demoThree = document.getElementById('demoThree')
demoThree.addEventListener('click', function(event){
    // after clicking youll get the console
    console.log(event)
    event.target.style.background = "pink";
    let text = event.target.nodeName;
  document.getElementById("demoThree").innerHTML = text;
})
