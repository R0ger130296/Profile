# 🎯 Portafolio Profesional - Roger Cedeño

Portafolio profesional desarrollado con **Svelte** y **SvelteKit**, siguiendo las mejores prácticas de desarrollo moderno.

## 🚀 Características

- ✨ **Diseño Moderno y Responsivo**: Adaptado a todos los dispositivos
- 🎨 **UI/UX Profesional**: Interfaz limpia y fácil de navegar
- ⚡ **Rendimiento Optimizado**: Construido con Svelte para máxima velocidad
- 📱 **Totalmente Responsive**: Funciona perfectamente en móviles, tablets y desktop
- 🔧 **TypeScript**: Código tipado y seguro
- 🎯 **Buenas Prácticas**: Estructura de código limpia y mantenible

## 📋 Secciones del Portafolio

- **Header**: Información personal y contacto
- **Sobre Mí**: Resumen profesional
- **Experiencia**: Historial laboral detallado
- **Educación**: Formación académica
- **Habilidades**: Técnicas y blandas
- **Certificaciones**: Cursos y certificados
- **Idiomas**: Dominio de idiomas
- **Referencias**: Contactos profesionales

## 🛠️ Tecnologías Utilizadas

- **Svelte 5**: Framework reactivo moderno
- **SvelteKit**: Framework full-stack
- **TypeScript**: Tipado estático
- **Vite**: Build tool rápido
- **CSS Variables**: Sistema de diseño consistente

## 📦 Instalación

```bash
# Instalar dependencias
npm install
```

## 🚀 Desarrollo

```bash
# Iniciar servidor de desarrollo
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

## 🏗️ Build para Producción

```bash
# Construir para producción
npm run build

# Preview de producción
npm run preview
```

## 📁 Estructura del Proyecto

```
src/
├── lib/
│   ├── components/
│   │   └── portfolio/        # Componentes del portafolio
│   │       ├── Header.svelte
│   │       ├── About.svelte
│   │       ├── Experience.svelte
│   │       ├── Education.svelte
│   │       ├── Skills.svelte
│   │       ├── Certifications.svelte
│   │       ├── Languages.svelte
│   │       └── References.svelte
│   └── data/
│       └── portfolio.ts       # Datos del portafolio
├── routes/
│   ├── +page.svelte          # Página principal (redirige a /portfolio)
│   └── portfolio/
│       └── +page.svelte      # Página del portafolio
└── app.css                    # Estilos globales
```

## 🎨 Personalización

### Modificar Datos

Edita el archivo `src/lib/data/portfolio.ts` para actualizar:
- Información personal
- Experiencia laboral
- Educación
- Habilidades
- Certificaciones
- Referencias

### Cambiar Colores

Modifica las variables CSS en `src/app.css`:

```css
:root {
  --color-primary: #3b82f6;      /* Color principal */
  --color-primary-dark: #2563eb;   /* Color principal oscuro */
  --color-secondary: #10b981;      /* Color secundario */
  /* ... más variables */
}
```

## 📝 Comandos Útiles

```bash
# Verificar tipos TypeScript
npm run check

# Verificar código (linting)
npm run lint

# Formatear código
npm run format
```

## 🎓 Aprendiendo Svelte

Este proyecto también incluye ejemplos educativos. Revisa:
- `GUIA_APRENDIZAJE.md` - Guía paso a paso de Svelte
- `INSTRUCCIONES.md` - Instrucciones de instalación

## 📚 Recursos

- [Documentación oficial de Svelte](https://svelte.dev/docs)
- [SvelteKit Docs](https://kit.svelte.dev/docs)
- [Svelte Tutorial](https://svelte.dev/tutorial/basics)

## 📄 Licencia

Este proyecto es de uso personal.

---

Desarrollado con ❤️ usando Svelte
