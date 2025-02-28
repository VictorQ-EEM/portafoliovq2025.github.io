// Función para alternar entre el tema claro y oscuro
function toggleTheme() {
    document.body.classList.toggle('light-theme');
    const themeButton = document.getElementById('toggle-theme');
    if (document.body.classList.contains('light-theme')) {
        themeButton.textContent = 'Cambiar a tema oscuro';
    } else {
        themeButton.textContent = 'Cambiar a tema claro';
    }
}

// Agregar un evento de clic al botón de alternar tema
document.getElementById('toggle-theme').addEventListener('click', toggleTheme);

// Función para abrir la imagen en el modal
function abrirImagen(img) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modalImg');
    modalImg.src = img.src;
    modalImg.alt = img.alt;
    modal.style.display = 'block';
}

// Función para cerrar el modal
function cerrarModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Función para mostrar los proyectos
function mostrarProyectos() {
    const proyectos = document.getElementById('proyectos');
    proyectos.innerHTML = `
        <div class="proyecto">
            <h3>D'luxe Shop</h3>
            <p>Boutique</p>
            <img src="imagenes/proyecto1.jpg" alt="D'luxe Shop" onclick="abrirImagen(this)">
        </div>
        <div class="proyecto">
            <h3>Glam Goddess</h3>
            <p>Make-up Artist</p>
            <img src="imagenes/proyecto2.jpg" alt="Glam Goddess" onclick="abrirImagen(this)">
        </div>
        <div class="proyecto">
            <h3>Studio K Nails</h3>
            <p>Manicurista profesional</p>
            <img src="imagenes/proyecto3.jpg" alt="Studio K Nails" onclick="abrirImagen(this)">
        </div>
        <div class="proyecto">
            <h3>Brava Glow</h3>
            <p>Beauty Salon</p>
            <img src="imagenes/proyecto4.jpg" alt="Brava Glow" onclick="abrirImagen(this)">
        </div>
    `;
}

// Llamar a la función para mostrar los proyectos al cargar la página
window.onload = mostrarProyectos;