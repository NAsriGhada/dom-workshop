// console.log(document)
// var el = document.querySelectorAll('h1')
// console.log(el)

// var cls = document.getElementsByClassName('text-desc');
// console.log('el:', cls);

// var tagName = document.getElementsByTagName('span');
// console.log('tagName:', tagName);

// //  Getting inner HTML conents
//      var contents = document.getElementById('main').innerHTML;
//      console.log('contents', contents);

     // Setting inner HTML contents
    //  var mainDiv = document.getElementById('main');
    //  mainDiv.innerHTML = '<p>This is <em>newly inserted</em> paragraph.</p>';

    //  var parentElem = document.getElementById('main');
    //  var childElem = document.getElementById('hint');
    //  parentElem.removeChild(childElem);
    //  console.log("parentElem", parentElem)

    //  document.addEventListener('keydown', logKey);
    //  function logKey(event) {
    //    log.textContent += " " + event.code;
    //  }

     function validateForm(e) {
        e.preventDefault()
        var name = document.loginForm.name.value
        console.log(name)
        var password = document.loginForm.password.value
       if (name.length==0)
        return alert(`name is required`)
       if (password.length<5)
        return alert(`password length should more than 5`)
       }