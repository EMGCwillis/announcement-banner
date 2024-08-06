document.addEventListener("DOMContentLoaded", function() {
    const messages = document.querySelectorAll(".announcement-message");
    let currentMessage = 0;

    function showNextMessage() {
        messages[currentMessage].style.display = "none";
        currentMessage = (currentMessage + 1) % messages.length;
        messages[currentMessage].style.display = "inline";
    }

    messages[currentMessage].style.display = "inline";
    setInterval(showNextMessage, 3000);
});
