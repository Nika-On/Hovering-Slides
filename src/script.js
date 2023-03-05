//defining variables
const items = document.querySelectorAll(".item");
const content = document.querySelectorAll(".main-content");
//expanding cards when mouse is hovered
items.forEach((item, index) => {
  item.addEventListener("mouseover", () => {
    reset();
    content[index].style.opacity = 1;
    item.classList.add("hovered");
  });
});
//closing cards when mouse isn't hovered anymore
function reset() {
  items.forEach((item, index) => {
    if (item.classList.contains("hovered")) {
      content[index].style.opacity = 0;
      item.classList.remove("hovered");
    }
  });
}
