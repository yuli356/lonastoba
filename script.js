// ============================================
// CARRITO DE CONSULTAS — LONAS TOBA
// Panel lateral + localStorage + soporte metros
// ============================================

let carrito = JSON.parse(localStorage.getItem('carritoLonasToba')) || [];
let carritoAbierto = false;

// Número de WhatsApp — CAMBIÁ ESTO
const telefono = "5493644159455";

// ============================================
// AGREGAR PRODUCTO (faros/iluminación)
// ============================================
function agregarConsulta(nombre, codigo) {
    if (carrito.find(item => item.codigo === codigo && item.tipo === 'producto')) {
        mostrarNotificacion("⚠️ Este producto ya está en tu consulta");
        return;
    }
    carrito.push({ nombre: nombre, codigo: codigo, tipo: 'producto', cantidad: 1 });
    guardarCarrito();
    actualizarCarrito();
    mostrarNotificacion("✅ Producto agregado a la consulta");
    if (!carritoAbierto) abrirCarrito();
}

// ============================================
// AGREGAR LONA (con metros)
// ============================================
function agregarLona(nombre, codigo, inputId) {
    const input = document.getElementById(inputId);
    const metros = input ? parseInt(input.value) || 1 : 1;

    if (metros <= 0) {
        mostrarNotificacion("⚠️ Ingresá una cantidad válida");
        return;
    }

    const existente = carrito.find(item => item.codigo === codigo && item.tipo === 'lona');
    if (existente) {
        existente.metros = metros;
        guardarCarrito();
        actualizarCarrito();
        mostrarNotificacion("🔄 Cantidad actualizada: " + metros + " m");
        if (!carritoAbierto) abrirCarrito();
        return;
    }

    carrito.push({ nombre: nombre, codigo: codigo, tipo: 'lona', metros: metros });
    guardarCarrito();
    actualizarCarrito();
    mostrarNotificacion("✅ " + nombre + " agregado (" + metros + " m)");
    if (!carritoAbierto) abrirCarrito();
}

// ============================================
// ELIMINAR / VACIAR
// ============================================
function eliminarDelCarrito(codigo) {
    carrito = carrito.filter(item => item.codigo !== codigo);
    guardarCarrito();
    actualizarCarrito();
}

function vaciarCarrito() {
    if (!confirm("¿Vaciar el carrito?")) return;
    carrito = [];
    guardarCarrito();
    actualizarCarrito();
}

// ============================================
// ACTUALIZAR UI DEL CARRITO
// ============================================
function actualizarCarrito() {
    const lista = document.getElementById("listaCarrito");
    const botonEnviar = document.getElementById("btnEnviarConsulta");
    const contadorFloat = document.getElementById("contadorFloat");

    // Contador flotante
    if (contadorFloat) {
        contadorFloat.textContent = carrito.length;
        contadorFloat.style.display = carrito.length > 0 ? "flex" : "none";
    }

    if (carrito.length === 0) {
        if (lista) {
            lista.innerHTML = `
            <div class="carrito-vacio">
                <div class="carrito-vacio-icono">🛒</div>
                <p>Todavía no agregaste productos</p>
                <span class="carrito-vacio-hint">Hacé clic en "Agregar a consulta" en cualquier producto</span>
            </div>`;
        }
        if (botonEnviar) botonEnviar.disabled = true;
        return;
    }

    if (lista) {
        lista.innerHTML = carrito.map((item, index) => {
            const metrosLabel = item.tipo === 'lona' && item.metros
                ? `<span class="carrito-item-metros">${item.metros} m</span>`
                : '';
            return `
            <div class="carrito-item" style="animation-delay: ${index * 0.05}s">
                <div class="carrito-item-info">
                    <span class="carrito-item-nombre">${item.nombre}</span>
                    <div class="carrito-item-fila">
                        <span class="carrito-item-codigo">${item.codigo}</span>
                        ${metrosLabel}
                    </div>
                </div>
                <button class="carrito-item-eliminar" onclick="eliminarDelCarrito('${item.codigo}')" title="Eliminar" aria-label="Eliminar producto">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 1L13 13M1 13L13 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
                </button>
            </div>`;
        }).join("");
    }

    if (botonEnviar) botonEnviar.disabled = false;
}

// ============================================
// PANEL LATERAL — ABRIR / CERRAR
// ============================================
function toggleCarrito() {
    if (carritoAbierto) cerrarCarrito();
    else abrirCarrito();
}

function abrirCarrito() {
    carritoAbierto = true;
    const overlay = document.getElementById("carritoOverlay");
    const panel = document.getElementById("carritoPanel");
    if (overlay) overlay.classList.add("activo");
    if (panel) panel.classList.add("activo");
    document.body.style.overflow = "hidden";
}

function cerrarCarrito() {
    carritoAbierto = false;
    const overlay = document.getElementById("carritoOverlay");
    const panel = document.getElementById("carritoPanel");
    if (overlay) overlay.classList.remove("activo");
    if (panel) panel.classList.remove("activo");
    document.body.style.overflow = "";
}

// Cerrar con Escape
document.addEventListener("keydown", function(e) {
    if (e.key === "Escape" && carritoAbierto) cerrarCarrito();
});

// ============================================
// WHATSAPP
// ============================================
function enviarConsultaWhatsApp() {
    if (carrito.length === 0) return;

    const lineas = carrito.map(p => {
        if (p.tipo === 'lona' && p.metros) {
            return `• ${p.nombre} — ${p.metros} m (Código: ${p.codigo})`;
        }
        return `• ${p.nombre} (Código: ${p.codigo})`;
    }).join("%0A");

    const mensaje = "Hola, me interesa consultar por los siguientes productos:%0A%0A" +
        lineas +
        "%0A%0A¿Podrían darme más información?";

    const url = `https://wa.me/${telefono}?text=${mensaje}`;
    window.open(url, "_blank");
}

// ============================================
// LOCALSTORAGE
// ============================================
function guardarCarrito() {
    localStorage.setItem('carritoLonasToba', JSON.stringify(carrito));
}

// ============================================
// NOTIFICACIÓN TOAST
// ============================================
function mostrarNotificacion(mensaje) {
    const existente = document.getElementById("toast-notificacion");
    if (existente) existente.remove();

    const toast = document.createElement("div");
    toast.id = "toast-notificacion";
    toast.textContent = mensaje;
    document.body.appendChild(toast);

    requestAnimationFrame(() => { toast.classList.add("visible"); });

    setTimeout(() => {
        toast.classList.remove("visible");
        setTimeout(() => toast.remove(), 350);
    }, 2800);
}

// ============================================
// SLIDER INICIO — Automático + Controles
// ============================================
(function() {
    const slides = document.querySelectorAll('.inicio-slide');
    const dotsContainer = document.querySelector('.slider-dots');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    const playPauseBtn = document.querySelector('.slider-play-pause');
    
    if (!slides.length) return;
    
    // Generar dots automáticamente según cantidad de fotos
    if (dotsContainer) {
        dotsContainer.innerHTML = '';
        slides.forEach((_, i) => {
            const dot = document.createElement('span');
            dot.className = 'dot' + (i === 0 ? ' activo' : '');
            dot.addEventListener('click', () => {
                showSlide(i);
                if (isPlaying) start();
            });
            dotsContainer.appendChild(dot);
        });
    }
    const dots = document.querySelectorAll('.slider-dots .dot');
    
    let current = 0;
    let interval;
    let isPlaying = true;
    const delay = 4000;
    
    function showSlide(index) {
        slides.forEach((s, i) => {
            s.classList.toggle('activo', i === index);
        });
        if (dots.length) {
            dots.forEach((d, i) => {
                d.classList.toggle('activo', i === index);
            });
        }
        current = index;
    }
    
    function next() {
        showSlide((current + 1) % slides.length);
    }
    
    function prev() {
        showSlide((current - 1 + slides.length) % slides.length);
    }
    
    function start() {
        if (interval) clearInterval(interval);
        interval = setInterval(next, delay);
        isPlaying = true;
        if (playPauseBtn) {
            playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
            playPauseBtn.setAttribute('aria-label', 'Pausar');
        }
    }
    
    function stop() {
        if (interval) clearInterval(interval);
        isPlaying = false;
        if (playPauseBtn) {
            playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
            playPauseBtn.setAttribute('aria-label', 'Reproducir');
        }
    }
    
    function toggle() {
        if (isPlaying) stop();
        else start();
    }
    
    if (nextBtn) nextBtn.addEventListener('click', () => { next(); if (isPlaying) start(); });
    if (prevBtn) prevBtn.addEventListener('click', () => { prev(); if (isPlaying) start(); });
    if (playPauseBtn) playPauseBtn.addEventListener('click', toggle);
    
    if (dots.length) {
        dots.forEach((dot, i) => {
            dot.addEventListener('click', () => {
                showSlide(i);
                if (isPlaying) start();
            });
        });
    }
    
    start();
})();

// ============================================
// INICIALIZAR
// ============================================
document.addEventListener("DOMContentLoaded", function() {
    actualizarCarrito();

    // Cerrar carrito al clickear en el overlay
    const overlay = document.getElementById("carritoOverlay");
    if (overlay) {
        overlay.addEventListener("click", cerrarCarrito);
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const btn = document.querySelector('.formulario button');
    
    btn.addEventListener('click', function(e) {
        e.preventDefault(); // Evita que recargue la página
        
        // Leemos los valores de los campos
        const nombre = document.querySelector('.formulario input[type="text"]').value.trim();
        const telefono = document.querySelector('.formulario input[type="tel"]').value.trim();
        const email = document.querySelector('.formulario input[type="email"]').value.trim();
        const consulta = document.querySelector('.formulario textarea').value.trim();
        
        // Validamos que haya algo escrito
        if (!nombre || !consulta) {
            alert('Por favor completá al menos tu nombre y la consulta.');
            return;
        }
        
        // Armamos el mensaje
        let mensaje = `*Nueva consulta desde la web*%0A%0A`;
        mensaje += `*Nombre:* ${nombre}%0A`;
        if (telefono) mensaje += `*Teléfono:* ${telefono}%0A`;
        if (email) mensaje += `*Email:* ${email}%0A`;
        mensaje += `%0A*Consulta:*%0A${consulta}`;
        
        // Número de consultas (sin + ni espacios)
        const numero = '5493644159455';
        
        // Abrimos WhatsApp
        window.open(`https://wa.me/${numero}?text=${mensaje}`, '_blank');
    });
});