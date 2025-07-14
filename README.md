# Google Icon

Un componente de React para utilizar los iconos con borde redondeado de Google Material Symbols, diseñado para trabajar perfectamente con TailwindCSS.

## Instalación

```bash
npm install google-icon
```

o

```bash
bun add google-icon
```

### Dependencia requerida

**⚠️ Importante:** Para que el componente funcione correctamente, debes instalar e importar la fuente de iconos de Google Material Symbols:

```bash
npm install @fontsource-variable/material-symbols-rounded
```

o

```bash
bun add @fontsource-variable/material-symbols-rounded
```

Luego, importa la fuente en el archivo principal de tu aplicación (App.js, \_app.js, layout.tsx, etc.):

```javascript
import "@fontsource-variable/material-symbols-rounded"; // si solo quieres iconos sin fill
import "@fontsource-variable/material-symbols-rounded/fill.css"; // si quieres todas las variantes
```

## Uso básico

```tsx
import GoogleIcon from "google-icon";

function App() {
  return (
    <div>
      <GoogleIcon icon="home" />
      <GoogleIcon icon="search" fill={true} />
      <GoogleIcon icon="settings" className="text-blue-500 text-2xl" />
    </div>
  );
}
```

## Props

| Prop         | Tipo         | Por defecto                           | Descripción                                         |
| ------------ | ------------ | ------------------------------------- | --------------------------------------------------- |
| `icon`       | `string`     | -                                     | **Requerido.** Nombre del icono de Material Symbols |
| `fill`       | `boolean`    | `false`                               | Si el icono debe estar relleno o no                 |
| `className`  | `string`     | `""`                                  | Clases CSS adicionales (compatible con TailwindCSS) |
| `fontFamily` | `string`     | `"Material Symbols Rounded Variable"` | Familia de fuente personalizada                     |
| `ariaLabel`  | `string`     | `"google icon"`                       | Etiqueta ARIA para accesibilidad                    |
| `onClick`    | `() => void` | -                                     | Función que se ejecuta al hacer clic en el icono    |

## Ejemplos

### Icono básico

```tsx
<GoogleIcon icon="favorite" />
```

### Icono relleno

```tsx
<GoogleIcon icon="favorite" fill={true} />
```

### Con estilos de TailwindCSS

```tsx
<GoogleIcon
  icon="star"
  fill={true}
  className="text-yellow-500 text-3xl hover:text-yellow-600 cursor-pointer"
/>
```

### Con manejador de clic

```tsx
<GoogleIcon
  icon="add"
  onClick={() => console.log("¡Botón de añadir clickeado!")}
  className="text-green-500 hover:bg-green-100 p-2 rounded-full transition-colors"
/>
```

### Con etiqueta de accesibilidad personalizada

```tsx
<GoogleIcon
  icon="delete"
  ariaLabel="Eliminar elemento"
  className="text-red-500"
/>
```

## Configuración con diferentes frameworks

### Next.js

En tu archivo `_app.js` o `layout.tsx`:

```tsx
import "@fontsource-variable/material-symbols-rounded"; // si solo quieres iconos sin fill
import "@fontsource-variable/material-symbols-rounded/fill.css"; // si quieres todas las variantes
import "./globals.css"; // Tu archivo CSS global

export default function Layout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
```

### Vite/React

En tu archivo `main.tsx` o `App.tsx`:

```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@fontsource-variable/material-symbols-rounded"; // si solo quieres iconos sin fill
import "@fontsource-variable/material-symbols-rounded/fill.css"; // si quieres todas las variantes

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### Astro

En tu archivo de layout principal:

```astro
---
import '@fontsource-variable/material-symbols-rounded'; // si solo quieres iconos sin fill
import '@fontsource-variable/material-symbols-rounded/fill.css'; // si quieres todas las variantes
---

<html>
  <head>
    <!-- ... -->
  </head>
  <body>
    <slot />
  </body>
</html>
```

## Encontrar iconos

Puedes buscar iconos disponibles en:

- [Google Fonts Icons](https://fonts.google.com/icons)
- [Material Symbols Guide](https://developers.google.com/fonts/docs/material_symbols)

Simplemente usa el nombre del icono tal como aparece en la página oficial.

## Características

- ✅ Compatible con TypeScript
- ✅ Optimizado para TailwindCSS
- ✅ Accesible (soporte ARIA)
- ✅ Iconos rellenos y con contorno
- ✅ Totalmente personalizable
- ✅ Sin dependencias externas (excepto React)
- ✅ Tamaño de bundle mínimo

## Contribuir

Las contribuciones son bienvenidas. Por favor, abre un issue o pull request en [GitHub](https://github.com/rickytodev/google-icon).
