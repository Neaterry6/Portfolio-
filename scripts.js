document.addEventListener("DOMContentLoaded", function () {
    // Show loading animation, then reveal content after 2 seconds
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
        document.getElementById("content").classList.remove("hidden");
    }, 2000); // Adjust timing as needed
})
