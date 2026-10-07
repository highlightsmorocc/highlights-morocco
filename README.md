# Highlights Morocco Tours

Sitio web estático en español de **Highlights Morocco Tours**: tours privados por Marruecos desde Marrakech (Merzouga, Zagora, ciudades imperiales).

Dominio: https://www.highlightsmoroccotours.com (ver `CNAME`).

## Estructura

| Archivo | Contenido |
| --- | --- |
| `index.html` | Inicio |
| `Tours.html` | Catálogo de tours con filtros |
| `tour-merzouga-3-dias.html` | Ficha del tour de 3 días a Merzouga |
| `blog.html` | Listado de guías |
| `merzouga-o-zagora.html` | Guía: Merzouga o Zagora |
| `contact.html` | Contacto y formulario |
| `*-en.html` | Redirecciones a la página equivalente en español (el sitio ya no tiene versión en inglés; se mantienen para no romper enlaces antiguos) |
| `robots.txt`, `sitemap.xml` | SEO |

## SEO

- Cada página tiene `title`, `description`, URL canónica, Open Graph y datos estructurados (`TravelAgency`, `TouristTrip`, `BlogPosting`, `FAQPage`, `BreadcrumbList`).
- Al añadir una página nueva, inclúyela en `sitemap.xml`.
- Tras publicar, envía `https://www.highlightsmoroccotours.com/sitemap.xml` a Google Search Console.

## Publicación

Se despliega con GitHub Pages desde la rama `main` (Settings → Pages). Funciona también en cualquier hosting estático.

## Contacto

- WhatsApp: +212 668 561 321
- Email: info@highlightsmoroccotours.com
