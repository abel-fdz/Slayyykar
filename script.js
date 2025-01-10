document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("actionButton");

    button.addEventListener("click", () => {
        // Crea un enlace dinámico para la descarga
        const link = document.createElement("a");
        link.href = "Slayyykar"; // Ruta del archivo
        link.download = "Slayyykar"; // Nombre del archivo a descargar
        link.click(); // Simula un clic en el enlace
    });
});
