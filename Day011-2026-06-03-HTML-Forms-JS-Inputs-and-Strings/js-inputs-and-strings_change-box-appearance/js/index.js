const colorInput = document.getElementById("color");
const borderRadiusInput = document.getElementById("radius");
const rotationInput = document.getElementById("rotation");
const box = document.querySelector('[data-js="box"]');

colorInput.addEventListener("input", () => {
  const hue = colorInput.value;
  box.style.backgroundColor = `hsl(${hue}, 50%, 50%)`;
});

borderRadiusInput.addEventListener("input", () => {
  const borderRadiusValue = borderRadiusInput.value;
  box.style.borderRadius = borderRadiusValue + "%";
});

rotationInput.addEventListener("input", () => {
  const rotationDegrees = rotationInput.value;
  box.style.transform = `rotate(${rotationValue}deg)`;
});
