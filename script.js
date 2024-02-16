const iconContainer = document.querySelector(".icon-container");

document.querySelector(".theme-toggle-button").addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const currentRotation = parseInt(getComputedStyle(iconContainer).getPropertyValue("--rotation"));
    iconContainer.style.setProperty("--rotation", currentRotation + 180);
})