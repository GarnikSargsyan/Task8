//2. Write a JavaScript program to set the background color of a paragraph from an input type= color.

function myFunction() {
    let color = document.getElementById("inputcolor").value;
    document.getElementById("coloredDiv").style.backgroundColor += color;
  }