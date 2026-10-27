# SELF. — publicación gratuita

Este paquete conserva la aplicación existente y usa el logo facilitado para los iconos.

## Publicar en GitHub Pages
1. Crea un repositorio llamado `self-app` en GitHub. Para GitHub Free, usa un repositorio público.
2. Sube el contenido de esta carpeta a la raíz del repositorio (debe quedar `index.html` en la raíz, no dentro de otra carpeta).
3. En Settings → Pages, selecciona Deploy from a branch, rama `main`, carpeta `/(root)` y guarda.
4. Espera a que termine la publicación y abre la URL que GitHub Pages muestra.
5. En iPhone, abre la URL en Safari → Compartir → Añadir a pantalla de inicio.

## Datos y privacidad
La app utiliza IndexedDB y un respaldo con localStorage. No incluye sincronización entre dispositivos ni cuentas. Cada dispositivo/navegador mantiene su propio almacenamiento. Exporta copias de seguridad desde las funciones de la app y guárdalas en un lugar seguro. Borrar los datos del sitio/navegador puede eliminar el historial.

## Pruebas importantes
- Prueba guardar un entrenamiento y cerrar/reabrir la app.
- Comprueba exportar/importar una copia de seguridad.
- Tras abrirla online por primera vez, activa modo avión y comprueba el funcionamiento offline.
- La PWA se debe servir mediante HTTPS; abrir `index.html` como archivo local no sirve para instalarla.

Este paquete no está publicado todavía. La publicación requiere subirlo a un repositorio y activar GitHub Pages.
