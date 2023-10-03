function toggleNotifications() {
    var notificationMenu = document.getElementById("notification-menu");
    notificationMenu.classList.toggle("show-menu");
}

// Agrega un listener al icono de notificaciones para abrir/cerrar el menú
var notificationIcon = document.getElementById("notification-icon");
notificationIcon.addEventListener("click", toggleNotifications);

// Cierra el menú si se hace clic fuera de él
document.addEventListener("click", function(event) {
    var notificationMenu = document.getElementById("notification-menu");
    if (!event.target.closest(".notification") && notificationMenu.classList.contains("show-menu")) {
        notificationMenu.classList.remove("show-menu");
    }
});