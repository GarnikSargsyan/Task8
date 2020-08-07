//4. Write a JavaScript function to add "LI" to a list element "UL"

function myFunction3() {
    var node = document.createElement("LI");
    let text = document.getElementById("liTetx");
    console.log(text);
    var textnode = document.createTextNode(`Viski`);
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);

  }