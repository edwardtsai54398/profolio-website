export default function (e, id) {
  e.preventDefault();
  let targetElement = document.querySelector(id);
  targetElement.scrollIntoView({
    behavior: "smooth",
  });
}
