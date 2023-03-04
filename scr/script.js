const items = document.querySelectorAll(".item");
const content = document.querySelectorAll(".main-content");
items.forEach((item, index) => {
  item.addEventListener("mouseover", () => {
    reset();
    content[index].style.opacity = 1;
    item.classList.add("hovered");
  });
});
function reset() {
  items.forEach((item, index) => {
    if (item.classList.contains("hovered")) {
      content[index].style.opacity = 0;
      item.classList.remove("hovered");
    }
  });
}
