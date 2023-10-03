// Función para mostrar/ocultar el menú desplegable
function toggleDropdown() {
    var dropdownMenu = document.getElementById("dropdown-menu");
    dropdownMenu.classList.toggle("show-menu");
}

// Agrega un listener al icono de elipsis para abrir/cerrar el menú
var ellipsisIcon = document.getElementById("ellipsis-icon");
ellipsisIcon.addEventListener("click", toggleDropdown);

// Cierra el menú si se hace clic fuera de él
window.addEventListener("click", function(event) {
    var dropdownMenu = document.getElementById("dropdown-menu");
    if (event.target !== ellipsisIcon && !dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.remove("show-menu");
    }
});
