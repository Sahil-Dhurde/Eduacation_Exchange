document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.subcourses').forEach(div => div.style.display = 'none'); 
    document.getElementById('Web-Developer').style.display = 'grid';
    document.querySelector(".navbar a").classList.add("active");
});

function showSubcourses(course) {
    document.querySelectorAll('.subcourses').forEach(div => div.style.display = 'none');
    document.getElementById(course).style.display = 'grid';
}


document.addEventListener("DOMContentLoaded", function () {
    const enrollButtons = document.querySelectorAll(".course-btn");
    const popup = document.getElementById("popup");
    const closeBtn = document.querySelector(".close-btn");
    const sendRequestBtn = document.getElementById("send-request-btn");
    const requestSentMsg = document.getElementById("request-sent-msg");

    // Select elements inside the popup
    const popupName = document.getElementById("popup-name");
    const popupSkill = document.getElementById("popup-skill");
    const popupEmail = document.getElementById("popup-email");
    const popupGitHub = document.getElementById("popup-github");
    const popupLinkedIn = document.getElementById("popup-linkedin");

    const defaultGitHub = "https://github.com/example";
    const defaultLinkedIn = "https://linkedin.com/in/example";

    enrollButtons.forEach(button => {
        button.addEventListener("click", function () {
            const courseCard = this.closest(".course");
            const userName = courseCard.querySelector(".user-name").textContent;
            const userSkill = courseCard.querySelector(".user-skill").textContent;

            // Generate a fake email
            const email = userName.toLowerCase().replace(" ", ".") + "@eduex.com";

            // Update the popup content
            popupName.textContent = userName;
            popupSkill.textContent = userSkill;
            popupEmail.textContent = email;
            popupGitHub.href = defaultGitHub;
            popupLinkedIn.href = defaultLinkedIn;

            // Reset send request button and hide confirmation message
            sendRequestBtn.style.display = "block";
            requestSentMsg.style.display = "none";

            // Show the popup
            popup.style.display = "flex";
        });
    });

    // Handle Send Request Button Click
    sendRequestBtn.addEventListener("click", function () {
        // Hide the button and show confirmation message
        sendRequestBtn.style.display = "none";
        requestSentMsg.style.display = "block";
    });

    // Close the popup when clicking the close button
    closeBtn.addEventListener("click", function () {
        popup.style.display = "none";
    });

    // Close the popup when clicking outside the content
    window.addEventListener("click", function (e) {
        if (e.target === popup) {
            popup.style.display = "none";
        }
    });
});
