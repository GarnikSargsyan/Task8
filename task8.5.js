function myFunction4() {
    let array =  document.getElementsByTagName("li");
    for (let i = 0; i < array.length; i++) {
      if (i%2 == 0) {
          array[i].style.color = 'red';
      } else {
          array[i].style.color = 'green';
      }
      
  }
  
  document.getElementById("myColoredList").style.color = array.value;
    }