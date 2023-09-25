const inputElements = document.querySelectorAll(".input-group__input");
const inputGroups = document.querySelectorAll(".input-group"); // Assuming you have multiple input groups
const inputMessages = document.querySelectorAll(".input-group__message"); // Assuming you have multiple input messages

const inputGroupHeight = inputGroups[0].offsetHeight;

function updateValue(e) {
  console.log(e.target.value);
}

inputElements.forEach((element, index) => {
  inputGroups[index].style.height = `${inputGroupHeight}px`;

  element
    .querySelector(".input-group__input")
    .addEventListener("input", () => {});

  element.addEventListener("focus", () => {
    inputMessages[index].classList.add("show");
    inputGroups[index].style.height = `${inputGroupHeight + 20}px`;
    inputGroups[index].style.transition = `height 0.25s ease-in`;
  });

  element.addEventListener("focusout", () => {
    inputMessages[index].classList.remove("show");
    inputGroups[index].style.height = `${inputGroupHeight}px`;
    inputGroups[index].style.transition = `height 0.25s ease-in`;
  });
});
