var speed = 0;
var prevSpeed = 0;
var currentScale = 1;

function increaseSpeed() {
    if (speed < 180) {
        speed = speed + 10;
        addClass();
        currentScale = currentScale + 1;
        changeActive();
        changeText();
    }
}

function decreaseSpeed() {
    if (speed > 0) {
        speed = speed - 10;
        addClass();
        changeActive();
        currentScale = currentScale - 1;
        changeText();
    }
}

function addClass() {
    let newClass = "speed-" + speed;
    let prevClass = "speed-" + prevSpeed;
    let el = document.getElementsByClassName("arrow-wrapper")[0];
    if (el.classList.contains(prevClass)) {
        el.classList.remove(prevClass);
        el.classList.add(newClass);
    }
    prevSpeed = speed;
}

function changeActive() {
    let tempClass = "speedometer-scale-" + currentScale;
    let el = document.getElementsByClassName(tempClass)[0];
    el.classList.toggle("active");
}

function changeText() {
    let el = document.getElementsByClassName("km")[0];
    el.innerText = speed;
}
// Your existing JavaScript code for the speedometer
// ...

// Initialize RPM and Speedometer values
let rpmValue = 0;
let speedValue = 0;

const rpmDisplay = document.querySelector('.rpm.dynamic');
const speedometerDisplay = document.querySelector('.km.dynamic');
const increaseButton = document.querySelector('.increase');
const decreaseButton = document.querySelector('.decrease');
const rpmNeedle = document.querySelector('.arrow');

increaseButton.addEventListener('click', () => {
    speedValue += 10; // Adjust as needed
    rpmValue += 100; // Adjust as needed
    updateDisplays();
});

decreaseButton.addEventListener('click', () => {
    speedValue -= 10; // Adjust as needed
    rpmValue -= 100; // Adjust as needed
    updateDisplays();
});

function updateDisplays() {
    // Update the speedometer reading
    speedometerDisplay.textContent = speedValue;

    // Update the RPM needle rotation
    rpmNeedle.style.transform = `rotate(${rpmValue}deg)`;
    rpmDisplay.textContent = rpmValue;
}

// Initialize displays
updateDisplays();
