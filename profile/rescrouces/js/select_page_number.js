// Change number select_page_number
// page_number: int ;  book_name: "string"
function select_page_number(page_number, book_name) {
  var i;
  var x = document.getElementsByClassName(book_name);
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(page_number).style.display = "block";  
}