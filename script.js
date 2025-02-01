let startTime, endTime;
let userText = "";
let typedText = "";

function startTypingTest() {
    // Reset and show instructions
    document.getElementById("wpm-display").textContent = "WPM: 0";
    typedText = "";
    userText = document.getElementById("custom-text").value;

    if (!userText.trim()) {
        alert("Please enter some text to start the typing test!");
        return;
    }

    startTime = new Date().getTime();
    document.getElementById("custom-text").setAttribute("disabled", "true");
    document.getElementById("custom-text").addEventListener('input', trackTyping);
}

function trackTyping(event) {
    typedText = event.target.value;
    
    // Calculate WPM after 1 second of typing
    if (typedText.length > 1) {
        let timeSpent = (new Date().getTime() - startTime) / 1000; // in seconds
        let words = typedText.split(/\s+/).length;
        let wpm = Math.round((words / timeSpent) * 60);
        
        document.getElementById("wpm-display").textContent = `WPM: ${wpm}`;
    }
}

document.querySelector('button').addEventListener('click', playSound);

function playSound() {
    const clickSound = new Audio('click-sound.mp3');
    clickSound.play();
}
