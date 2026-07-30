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