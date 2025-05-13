document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
        document.getElementById("content").classList.remove("hidden");
    }, 2000); // Adjust load time as needed
})
