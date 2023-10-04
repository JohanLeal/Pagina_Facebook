function toggleDropdown() {
    var dropdownMenu = document.getElementById("dropdown-menu");
    dropdownMenu.classList.toggle("show-menu");
}

// Agrega un listener al icono de mensajes para abrir/cerrar el menú
var ellipsisIcon = document.getElementById("ellipsis-icon");
ellipsisIcon.addEventListener("click", toggleDropdown);

// Cierra el menú si se hace clic fuera de él
document.addEventListener("click", function(event) {
    var dropdownMenu = document.getElementById("dropdown-menu");
    if (!event.target.closest(".dropdown-menu") && dropdownMenu.classList.contains("show-menu")) {
        dropdownMenu.classList.remove("show-menu");
    }
});
