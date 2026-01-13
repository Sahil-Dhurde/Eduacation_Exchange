document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.subcourses').forEach(div => div.style.display = 'none'); 
    document.getElementById('project-manager').style.display = 'grid';
    document.querySelector(".navbar a").classList.add("active");
});

function showSubcourses(course) {
    document.querySelectorAll('.subcourses').forEach(div => div.style.display = 'none');
    document.getElementById(course).style.display = 'grid';
}

function openModal() {
    document.getElementById("loginModal").style.display = "block";
}
function closeModal() {
    document.getElementById("loginModal").style.display = "none";
}