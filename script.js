const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
const year = document.getElementById("year");

if (year) year.textContent = new Date().getFullYear();

if (menuBtn && menu) {
  menuBtn.addEventListener("click", () => menu.classList.toggle("open"));
  menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => menu.classList.remove("open")));
}

const WA_NUMBER = "525510459053"; // +52 México

// Botones "Pedir por WhatsApp" (precios)
function orderWhatsApp(tipo, precio, talla, modelo = null, cantidad = null){
  const parts = [
    "Hola, quiero cotizar en The Three Demons.",
    `Tipo: ${tipo}`,
    modelo ? `Modelo: ${modelo}` : null,
    talla ? `Talla: ${talla}` : null,
    cantidad ? `Cantidad: ${cantidad}` : null,
    `Precio visto: $${precio} MXN`,
    "Estoy en CDMX. ¿Qué disponibilidad hay?"
  ].filter(Boolean);

  const text = parts.join("\n");
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
}

// Formulario (abre WhatsApp con el mensaje)
function handleSubmit(e){
  e.preventDefault();
  const f = e.target;

  const nombre = (f.nombre.value || "").trim();
  const tel = (f.telefono.value || "").trim();
  const mensaje = (f.mensaje.value || "").trim();

  const text =
    `Hola, soy ${nombre}.\n` +
    `Mi WhatsApp: ${tel}\n` +
    `Mensaje: ${mensaje}\n` +
    `Estoy en CDMX.`;

  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
  return false;
}
