/*var textbox = document.getElementsByClassName("search");
    
clicked = false;
    
while clicked do
  textbox.innerText = "clicked";
  textbox.innerText = "";
end*/

var textboxes = document.getElementsByClassName("search");
var btn = document.getElementsByClassName("srbtn");

for (var i = 0; i < textboxes.length; i++) {
    btn.addEventListener("click", function() {
        clicked = !clicked;
        if (clicked) {
            var innerTextValue = this.innerText;
            console.log(innerTextValue);
            if (innerTextValue == "paging") {
              window.scrollTo(0, 300);
            }
        }
    });
    textboxes[i].addEventListener("click", function() {
    });
}
