/* =========================================================
   SUNOVA — catálogo y carrito
   Para agregar o editar un producto, cambiá solo la lista
   PRODUCTOS de abajo. La página se arma sola a partir de ella.
   ========================================================= */

const WHATSAPP = '595981630452';

const CATEGORIAS = {
  controles: 'Controles',
  teclados: 'Teclados',
  auriculares: 'Auriculares',
  mouses: 'Mouses',
  mousepads: 'Mousepads',
  monitores: 'Monitores',
};

const PRODUCTOS = [
  {
    id: 'dualsense-ps5',
    nombre: 'Control DualSense PS5',
    categoria: 'controles',
    precio: 530000,
    imagen: 'dualsense-ps5',
    resumen: 'Mando original de PlayStation 5 con vibración háptica y gatillos adaptativos.',
    detalles: [
      'Vibración háptica',
      'Gatillos adaptativos L2 y R2',
      'Micrófono y altavoz integrados',
      'Panel táctil',
      'Sensor de movimiento de 6 ejes',
      'Batería recargable integrada',
      'Conexión Bluetooth y puerto USB-C',
      'Entrada de 3,5 mm para auriculares',
      'Botón Create para capturar y compartir',
      'Compatible con PS5, PC y celulares compatibles',
    ],
  },
  {
    id: 'teclado-onikuma-g55',
    nombre: 'Teclado Onikuma G55 Mini',
    categoria: 'teclados',
    precio: 150000,
    imagen: 'teclado-onikuma-g55',
    resumen: 'Teclado mecánico compacto con iluminación RGB y respuesta rápida.',
    detalles: [
      'Diseño compacto formato 60 %',
      'Iluminación RGB personalizable',
      'Switches mecánicos de alta durabilidad',
      'Anti-ghosting',
      'Cable USB-C desmontable',
    ],
  },
  {
    id: 'auricular-onikuma-g887',
    nombre: 'Auricular Onikuma G887',
    categoria: 'auriculares',
    precio: 280000,
    imagen: 'auricular-onikuma-g887',
    resumen: 'Cómodo para sesiones largas de juego, llamadas y uso diario.',
    detalles: [
      'Diseño ergonómico y moderno',
      'Almohadillas ultrasuaves',
      'Sonido estéreo de alta fidelidad',
      'Micrófono flexible incorporado',
      'Compatible con varias plataformas',
    ],
  },
  {
    id: 'auricular-onikuma-gt808',
    nombre: 'Auricular Onikuma GT808',
    categoria: 'auriculares',
    precio: 235000,
    imagen: 'auricular-onikuma-gt808',
    resumen: 'Sonido envolvente y micrófono con cancelación de ruido.',
    detalles: [
      'Sonido envolvente virtual 7.1',
      'Micrófono con cancelación de ruido',
      'Luces LED RGB',
      'Control de volumen en el cable',
      'Estructura acolchada resistente',
    ],
  },
  {
    id: 'mouse-logitech-g309',
    nombre: 'Mouse Logitech G309',
    categoria: 'mouses',
    precio: 530000,
    imagen: 'mouse-logitech-g309',
    resumen: 'Inalámbrico, liviano y de alta precisión con latencia ultra baja.',
    detalles: [
      'Conexión inalámbrica de latencia ultra baja',
      'Sensor óptico de alta precisión',
      'Diseño ultraliviano',
      'Botones programables',
      'Batería de larga duración',
    ],
  },
  {
    id: 'mouse-logitech-g305',
    nombre: 'Mouse Logitech G305',
    categoria: 'mouses',
    precio: 280000,
    imagen: 'mouse-logitech-g305',
    resumen: 'Inalámbrico Lightspeed, preciso y fácil de llevar.',
    detalles: [
      'Conexión inalámbrica Lightspeed',
      'Sensor HERO de hasta 12.000 DPI',
      'Diseño liviano y portátil',
      'Hasta 250 horas con una pila AA',
      '6 botones programables',
    ],
  },
  {
    id: 'mouse-razer-deathadder',
    nombre: 'Mouse Razer DeathAdder',
    categoria: 'mouses',
    precio: 250000,
    imagen: 'mouse-razer-deathadder',
    resumen: 'Forma ergonómica para diestros, cómoda y precisa.',
    detalles: [
      'Diseño ergonómico para diestros',
      'Sensor óptico de alta exactitud',
      'Switches mecánicos resistentes',
      'Agarres laterales antideslizantes',
      'Pies de PTFE para un deslizamiento suave',
    ],
  },
  {
    id: 'mousepad-redragon-eisa',
    nombre: 'Mousepad Redragon Eisa',
    categoria: 'mousepads',
    precio: 110000,
    imagen: 'mousepad-redragon-eisa',
    resumen: 'Superficie de tela para movimientos fluidos y control.',
    detalles: [
      'Superficie de tela optimizada para velocidad y control',
      'Base de caucho antideslizante',
      'Bordes cosidos que no se deshilachan',
      'Resistente al agua y fácil de limpiar',
    ],
  },
  {
    id: 'mousepad-redragon-flick-xl',
    nombre: 'Mousepad Redragon Flick XL',
    categoria: 'mousepads',
    precio: 150000,
    imagen: 'mousepad-redragon-flick-xl',
    resumen: 'Tamaño XL: entran el teclado y el mouse.',
    detalles: [
      'Tamaño extra grande para teclado y mouse',
      'Superficie de alta densidad para el sensor',
      'Base de goma firme antideslizante',
      'Costuras perimetrales duraderas',
    ],
  },
  {
    id: 'auricular-jbl-tune-730bt',
    nombre: 'Auricular JBL Tune 730BT',
    categoria: 'auriculares',
    precio: 295000,
    imagen: 'auricular-jbl-tune-730bt',
    resumen: 'Bluetooth, liviano y plegable, con graves JBL Pure Bass.',
    detalles: [
      'Sonido JBL Pure Bass',
      'Bluetooth de última generación',
      'Diseño liviano, plegable y cómodo',
      'Batería de larga duración con carga rápida',
      'Manos libres para llamadas',
    ],
  },
  {
    id: 'teclado-redragon-nephrite',
    nombre: 'Teclado Redragon Nephrite K736 Pro',
    categoria: 'teclados',
    precio: 535000,
    imagen: 'teclado-redragon-nephrite',
    resumen: 'Teclado mecánico Redragon con iluminación RGB y construcción robusta.',
    detalles: [
      'Teclado mecánico',
      'Iluminación RGB personalizable',
      'Conexión estable de baja latencia',
      'Construcción robusta de alta calidad',
    ],
  },
  {
    id: 'control-gamesir-t4-nova-lite',
    nombre: 'Control inalámbrico GameSir T4 Nova Lite',
    categoria: 'controles',
    precio: 215000,
    imagen: 'control-gamesir-t4-nova-lite',
    resumen: 'Joysticks Hall Effect sin drift. Para PC, Switch, iOS y Android.',
    detalles: [
      'Joysticks Hall Effect anti-drift',
      'Triple conexión: Bluetooth, 2,4 GHz y cable',
      'Compatible con PC, Nintendo Switch, iOS y Android',
      'Doble motor de vibración',
      'Diseño ergonómico y durable',
    ],
  },
  {
    id: 'auricular-onikuma-gt805',
    nombre: 'Auricular Onikuma GT805 RGB inalámbrico',
    categoria: 'auriculares',
    precio: 230000,
    imagen: 'auricular-onikuma-gt805',
    resumen: 'Inalámbrico de baja latencia, con iluminación RGB.',
    detalles: [
      'Iluminación RGB',
      'Doble conexión inalámbrica: 2,4 GHz y Bluetooth',
      'Baja latencia para juego competitivo',
      'Micrófono claro y ajustable',
      'Almohadillas circumaurales cómodas',
    ],
  },
  {
    id: 'auricular-xiaomi-redmi-buds-6',
    nombre: 'Auricular Xiaomi Redmi Buds 6',
    categoria: 'auriculares',
    precio: 95000,
    imagen: 'auricular-xiaomi-redmi-buds-6',
    resumen: 'Hasta 42 horas de batería con el estuche de carga.',
    detalles: [
      'Hasta 42 horas de batería con el estuche',
      'Bluetooth de última generación',
      'Diseño in-ear compacto y liviano',
      'Control táctil',
      'Resistente al sudor y a salpicaduras',
    ],
  },
  {
    id: 'monitor-gamer-mtek',
    nombre: 'Monitor Gamer Mtek',
    categoria: 'monitores',
    precio: 790000,
    imagen: 'monitor-gamer-mtek-400',
    resumen: 'Monitor curvo de 24 pulgadas con resolución Full HD y 180Hz de velocidad de actualización.',
    detalles: [
        'Pantalla curva de 24 pulgadas Full HD',
        'Frecuencia de actualización de 180Hz para máxima fluidez',
        'Tecnología de sincronización para evitar cortes en imagen',
        'Diseño moderno con bordes ultra finos',
        'Ideal para gaming competitivo y multimedia'
    ],
  },
];

/* ---------- utilidades ---------- */

const $ = (sel, root = document) => root.querySelector(sel);
const gs = (n) => n.toLocaleString('es-PY') + ' Gs.';
const img = (slug, size) => `img/${slug}${size === 'sm' ? '-400' : ''}.webp`;
const icon = (name, cls = 'icon') =>
  `<svg class="${cls}" aria-hidden="true"><use href="#i-${name}"></use></svg>`;
const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const waLink = (text) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;
const porId = (id) => PRODUCTOS.find((p) => p.id === id);
const normalizar = (s) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');

const storage = {
  get(key, fallback) {
    try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; }
    catch { return fallback; }
  },
  set(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* sin almacenamiento: el carrito vive en memoria */ }
  },
};

/* ---------- catálogo ---------- */

const estado = { categoria: 'todos', busqueda: '' };
const grid = $('#productsGrid');
const resultCount = $('#resultCount');
const emptyState = $('#emptyState');

function tarjeta(p) {
  const pedir = waLink(`¡Hola Sunova! Quiero pedir: ${p.nombre} (${gs(p.precio)}).`);
  return `
    <article class="card" data-id="${p.id}">
      <button class="card-media" type="button" data-open="${p.id}" aria-label="Ver detalles de ${esc(p.nombre)}">
        <img src="${img(p.imagen, 'sm')}" srcset="${img(p.imagen, 'sm')} 400w, ${img(p.imagen)} 800w"
             sizes="(min-width: 1024px) 280px, (min-width: 640px) 33vw, 50vw"
             width="400" height="500" alt="${esc(p.nombre)}" loading="lazy" decoding="async">
      </button>
      <div class="card-body">
        <p class="card-cat">${CATEGORIAS[p.categoria]}</p>
        <h3 class="card-title"><button type="button" data-open="${p.id}">${esc(p.nombre)}</button></h3>
        <p class="card-desc">${esc(p.resumen)}</p>
        <p class="card-price">${gs(p.precio)}</p>
        <div class="card-actions">
          <button class="btn btn-primary" type="button" data-add="${p.id}">
            ${icon('cart')}<span>Agregar</span>
          </button>
          <a class="btn btn-wa btn-square" href="${pedir}" target="_blank" rel="noopener" aria-label="Pedir ${esc(p.nombre)} por WhatsApp" title="Pedir por WhatsApp">
            ${icon('whatsapp')}
          </a>
        </div>
      </div>
    </article>`;
}

function renderCatalogo() {
  const q = normalizar(estado.busqueda.trim());
  const lista = PRODUCTOS.filter((p) => {
    const enCategoria = estado.categoria === 'todos' || p.categoria === estado.categoria;
    const texto = normalizar(`${p.nombre} ${p.resumen} ${CATEGORIAS[p.categoria]}`);
    return enCategoria && (!q || texto.includes(q));
  });

  grid.innerHTML = lista.map(tarjeta).join('');
  resultCount.textContent = lista.length === 1 ? '1 producto' : `${lista.length} productos`;

  emptyState.hidden = lista.length > 0;
  if (!lista.length) {
    $('#emptyQuery').textContent = estado.busqueda.trim()
      ? `No encontramos «${estado.busqueda.trim()}» en ${estado.categoria === 'todos' ? 'el catálogo' : CATEGORIAS[estado.categoria].toLowerCase()}.`
      : 'No hay productos en esta categoría por ahora.';
  }
}

function setCategoria(cat) {
  estado.categoria = cat;
  document.querySelectorAll('.chip').forEach((b) => {
    b.setAttribute('aria-pressed', String(b.dataset.cat === cat));
  });
  renderCatalogo();
}

/* ---------- detalle de producto ---------- */

const modal = $('#productModal');

function abrirDetalle(id) {
  const p = porId(id);
  if (!p) return;
  $('#modalImg').src = `img/${p.imagen}.webp`;
  $('#modalImg').alt = p.nombre;
  $('#modalCat').textContent = CATEGORIAS[p.categoria];
  $('#modalTitle').textContent = p.nombre;
  $('#modalPrice').textContent = gs(p.precio);
  $('#modalDesc').textContent = p.resumen;
  $('#modalList').innerHTML = p.detalles.map((d) => `<li>${icon('check')}<span>${esc(d)}</span></li>`).join('');
  $('#modalAdd').dataset.add = p.id;
  $('#modalWa').href = waLink(`¡Hola Sunova! Quiero pedir: ${p.nombre} (${gs(p.precio)}).`);
  if (typeof modal.showModal === 'function') modal.showModal();
  else modal.setAttribute('open', '');
  document.body.classList.add('no-scroll');
}

function cerrarDetalle() {
  if (typeof modal.close === 'function') modal.close();
  else modal.removeAttribute('open');
}

modal.addEventListener('close', () => document.body.classList.remove('no-scroll'));
modal.addEventListener('click', (e) => { if (e.target === modal) cerrarDetalle(); });

/* ---------- carrito ---------- */

let carrito = storage.get('sunova-carrito', []).filter((i) => porId(i.id));

const drawer = $('#cartDrawer');
const overlay = $('#cartOverlay');
const cartToggle = $('#cartToggle');
let ultimoFoco = null;

function guardar() { storage.set('sunova-carrito', carrito); }

function agregar(id) {
  const item = carrito.find((i) => i.id === id);
  if (item) item.cant += 1; else carrito.push({ id, cant: 1 });
  guardar();
  renderCarrito();
  avisar(`${porId(id).nombre} se agregó al carrito`);
  cartToggle.classList.remove('bump'); void cartToggle.offsetWidth; cartToggle.classList.add('bump');
}

function cambiarCant(id, delta) {
  const item = carrito.find((i) => i.id === id);
  if (!item) return;
  item.cant += delta;
  if (item.cant <= 0) carrito = carrito.filter((i) => i.id !== id);
  guardar();
  renderCarrito();
}

function quitar(id) {
  carrito = carrito.filter((i) => i.id !== id);
  guardar();
  renderCarrito();
}

function totales() {
  return carrito.reduce((acc, i) => {
    const p = porId(i.id);
    acc.unidades += i.cant;
    acc.total += p.precio * i.cant;
    return acc;
  }, { unidades: 0, total: 0 });
}

function renderCarrito() {
  const { unidades, total } = totales();
  $('#cartCount').textContent = unidades;
  $('#cartCount').hidden = unidades === 0;
  cartToggle.setAttribute('aria-label', `Abrir carrito (${unidades} ${unidades === 1 ? 'producto' : 'productos'})`);
  $('#cartTotal').textContent = gs(total);
  $('#cartSend').disabled = unidades === 0;
  $('#cartClear').hidden = unidades === 0;

  const lista = $('#cartItems');
  if (!carrito.length) {
    lista.innerHTML = `
      <div class="cart-empty">
        ${icon('cart', 'icon icon-xl')}
        <p>Tu carrito está vacío.</p>
        <button class="btn btn-ghost" type="button" data-close-cart>Ver productos</button>
      </div>`;
    return;
  }

  lista.innerHTML = carrito.map((i) => {
    const p = porId(i.id);
    return `
      <li class="cart-item">
        <img src="${img(p.imagen, 'sm')}" alt="" width="64" height="80">
        <div class="cart-item-info">
          <p class="cart-item-title">${esc(p.nombre)}</p>
          <p class="cart-item-price">${gs(p.precio * i.cant)}</p>
          <div class="qty" role="group" aria-label="Cantidad de ${esc(p.nombre)}">
            <button type="button" data-qty="-1" data-id="${p.id}" aria-label="Quitar uno">${icon('minus')}</button>
            <span aria-live="polite">${i.cant}</span>
            <button type="button" data-qty="1" data-id="${p.id}" aria-label="Agregar uno">${icon('plus')}</button>
          </div>
        </div>
        <button class="icon-btn remove" type="button" data-remove="${p.id}" aria-label="Eliminar ${esc(p.nombre)} del carrito">${icon('trash')}</button>
      </li>`;
  }).join('');
}

function abrirCarrito() {
  ultimoFoco = document.activeElement;
  drawer.classList.add('open');
  overlay.classList.add('open');
  drawer.setAttribute('aria-hidden', 'false');
  drawer.inert = false;
  cartToggle.setAttribute('aria-expanded', 'true');
  document.body.classList.add('no-scroll');
  $('#cartClose').focus();
}

function cerrarCarrito() {
  drawer.classList.remove('open');
  overlay.classList.remove('open');
  drawer.setAttribute('aria-hidden', 'true');
  drawer.inert = true;
  cartToggle.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('no-scroll');
  if (ultimoFoco) ultimoFoco.focus();
}

function enviarPedido() {
  if (!carrito.length) return;
  const { total } = totales();
  let text = '¡Hola Sunova! Quisiera hacer un pedido:\n\n';
  carrito.forEach((i, n) => {
    const p = porId(i.id);
    text += `${n + 1}. *${p.nombre}* x${i.cant} — ${gs(p.precio * i.cant)}\n`;
  });
  text += `\n*Total estimado:* ${gs(total)}\n`;
  text += 'Quedo a la espera de los datos para el pago y el envío.';
  window.open(waLink(text), '_blank', 'noopener');
}

/* ---------- aviso (toast) ---------- */

let toastTimer;
function avisar(msg) {
  const t = $('#toast');
  $('#toastMsg').textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 3200);
}

/* ---------- eventos ---------- */

document.addEventListener('click', (e) => {
  const t = e.target.closest('button, a');
  if (!t) return;
  if (t.dataset.open) abrirDetalle(t.dataset.open);
  else if (t.dataset.add) {
    agregar(t.dataset.add);
    if (t.id === 'modalAdd') cerrarDetalle();
  }
  else if (t.dataset.qty) cambiarCant(t.dataset.id, Number(t.dataset.qty));
  else if (t.dataset.remove) quitar(t.dataset.remove);
  else if (t.dataset.cat) setCategoria(t.dataset.cat);
  else if ('closeCart' in t.dataset) cerrarCarrito();
  else if ('resetFilters' in t.dataset) {
    $('#searchInput').value = '';
    estado.busqueda = '';
    setCategoria('todos');
    $('#searchInput').focus();
  }
});

$('#modalClose').addEventListener('click', cerrarDetalle);
cartToggle.addEventListener('click', abrirCarrito);
$('#toastView').addEventListener('click', abrirCarrito);
$('#cartClose').addEventListener('click', cerrarCarrito);
overlay.addEventListener('click', cerrarCarrito);
$('#cartSend').addEventListener('click', enviarPedido);
$('#cartClear').addEventListener('click', () => { carrito = []; guardar(); renderCarrito(); });

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && drawer.classList.contains('open')) cerrarCarrito();
});

$('#searchForm').addEventListener('submit', (e) => {
  e.preventDefault();
  $('#catalogo').scrollIntoView({ behavior: 'smooth', block: 'start' });
});
$('#searchInput').addEventListener('input', (e) => {
  estado.busqueda = e.target.value;
  renderCatalogo();
});

/* ---------- inicio ---------- */

document.querySelectorAll('[data-wa-general]').forEach((a) => {
  a.href = waLink('¡Hola Sunova! Quisiera hacer una consulta.');
});
$('#year').textContent = new Date().getFullYear();
drawer.inert = true;
renderCatalogo();
renderCarrito();
