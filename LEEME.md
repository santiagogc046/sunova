# Sunova — guía rápida

## Archivos

- `index.html` — la página.
- `style.css` — el diseño.
- `app.js` — **acá están los productos** (lista `PRODUCTOS` arriba de todo) y el carrito.
- `img/` — fotos en WebP. Cada producto usa dos: `nombre.webp` (800×1000) y `nombre-400.webp` (400×500).
- `fonts/` — tipografías Unbounded y Onest (licencia libre OFL, incluidas en la carpeta).
- `_headers` — cabeceras de seguridad (Netlify / Cloudflare Pages las leen solas).
- `og-image.jpg` — la imagen que aparece al compartir el link por WhatsApp o redes.

## Agregar un producto

1. Foto vertical 4:5 (como las actuales), exportada en dos tamaños: 800×1000 y 400×500, en WebP.
   Nombre en minúsculas, sin espacios ni tildes: `mouse-nuevo.webp` y `mouse-nuevo-400.webp`.
2. Copiá un bloque `{ ... }` dentro de `PRODUCTOS` en `app.js` y cambiá los datos.
   `imagen` es el nombre del archivo sin `.webp`. `precio` va sin puntos: `250000`.

## Regla para la IA que edite este sitio

> No uses emojis en la interfaz. Para íconos usá los SVG del sprite al inicio de `index.html`
> (`<svg class="icon"><use href="#i-nombre"></use></svg>`). Si falta un ícono, agregá un
> `<symbol>` nuevo con trazo de 1.8, `viewBox="0 0 24 24"`, sin relleno. Tipografías:
> Unbounded para títulos y precios, Onest para el texto. Sin estilos en línea (`style="..."`),
> porque la política de seguridad los bloquea.

## Publicar

Es un sitio estático: no necesita servidor, base de datos ni login. Opciones gratis:

- **Netlify** o **Cloudflare Pages**: arrastrás la carpeta y listo. Toman el archivo `_headers`.
- **GitHub Pages**: también funciona, pero ignora `_headers` (el sitio anda igual, sin esas cabeceras extra).

Después de publicar:

1. En `index.html`, reemplazá las dos apariciones de `TU-DOMINIO` por la dirección real
   (ej. `sunova.netlify.app`). Sin esto, la vista previa al compartir el link no muestra la imagen.
2. En Google Search Console, verificá el dominio (la etiqueta `google-site-verification` ya está).
3. Probá el link en WhatsApp para ver la vista previa.

## Seguridad

No se guardan datos de clientes: el carrito vive en el navegador de cada persona y el pedido
se envía por WhatsApp. No hay formularios, contraseñas ni pagos en la web, así que no hace
falta más que HTTPS (lo dan Netlify/Cloudflare/GitHub gratis) y las cabeceras de `_headers`.
