# Proyecto: Sitio Web RSD Ingeniería Eléctrica S.A.S.

## Contexto académico

Trabajo para la materia **Factores Humanos**. El proyecto consiste en construir un sitio web ficticio en **dos entregas** que serán evaluadas con herramientas de **usabilidad y accesibilidad**:

- **TAW** (tawdis.net)
- **Validador W3C de HTML** (validator.w3.org)
- **Validador W3C de CSS** (jigsaw.w3.org/css-validator)
- **WAVE** (wave.webaim.org)
- **Lighthouse** (Chrome DevTools)

**El propósito es educativo: la entrega 1 contiene errores deliberados, la entrega 2 los corrige.** No es un bug, es el ejercicio.

## Empresa ficticia

**RSD Ingeniería Eléctrica S.A.S.** — empresa colombiana que ofrece servicios de diseño, instalación, mantenimiento y consultoría en ingeniería eléctrica.

**Identidad visual:**
- Logo: turbina/espiral roja con rayo eléctrico (en `img/logo.png`)
- Paleta: rojo `#C8102E`, negro `#000000`, blanco `#FFFFFF`, grises de apoyo
- Tono: profesional, técnico, confiable

## Stack tecnológico

- **HTML5 + CSS3 + JavaScript vanilla** — sin frameworks, sin bundlers, sin npm
- **Sin dependencias externas** (excepto si se requiere algún ícono o iframe de mapa)
- Razón: las herramientas evalúan el HTML renderizado; vanilla da control total y código auditable

## Estructura del repositorio

```
rsd-proyecto/
├── CLAUDE.md              ← este archivo
├── README.md
├── entrega-1/             ← versión CON errores deliberados
│   ├── index.html
│   ├── nosotros.html
│   ├── servicios.html
│   ├── proyectos.html
│   ├── contacto.html
│   ├── css/styles.css
│   ├── js/main.js
│   └── img/
├── entrega-2/             ← versión corregida (WCAG 2.1 AA)
│   └── (misma estructura)
├── informes/
│   ├── evaluacion-1.md    ← informe de errores encontrados
│   └── evaluacion-2.md    ← informe de correcciones
└── recursos/              ← assets originales (logo, etc.)
```

## Reglas críticas de trabajo

### 1. NUNCA mezclar entregas

- Cambios en `entrega-1/` **mantienen** los errores deliberados
- Cambios en `entrega-2/` **eliminan** errores y siguen WCAG 2.1 AA
- Si edito `entrega-1`, NO "arreglar de paso" los errores — son intencionales
- Si edito `entrega-2`, validar que cumpla WCAG AA antes de dar por terminado

### 2. Antes de modificar `entrega-1/`, consulta el mapa de errores

El archivo `informes/mapa-errores.md` lista qué errores debe contener cada página. No agregar errores fuera del mapa sin actualizar el documento. No quitar errores del mapa accidentalmente.

### 3. Trabajar página por página

Cuando construya o modifique algo, hacerlo **una página a la vez**, mostrar el resultado, y esperar confirmación antes de pasar a la siguiente. No generar las 5 páginas de un solo tirón.

### 4. Idioma

Todo el contenido del sitio en **español de Colombia**. Comentarios en el código también en español.

## Mapa de errores deliberados — Entrega 1

Estos son los errores que DEBEN estar presentes en `entrega-1/`. Están agrupados por página para facilitar el rastreo.

### Errores globales (aplican a todas las páginas)
- `<html>` sin atributo `lang`
- Sin skip-link al contenido principal
- `outline: none` en estados de foco
- Navegación sin landmark `<nav>` ni `<main>`
- Scripts y estilos inline mezclados con HTML
- Navegación inconsistente entre páginas (orden de enlaces cambia)

### `index.html`
- `<title>` genérico ("Inicio" o "Home")
- Imagen hero sin `alt`
- Contraste insuficiente en botón CTA (rojo claro sobre blanco)
- `<div onclick="...">` en lugar de `<button>`
- Jerarquía de encabezados rota (h1 → h3, salta h2)
- Logo sin `alt`

### `nosotros.html`
- Fotos del equipo sin `alt`
- Maquetación con `<table>` para columnas
- Atributos obsoletos: `<center>`, `bgcolor`, `<font>`
- Texto justificado sin control de espaciado

### `servicios.html`
- Tabla de planes sin `<th>` ni `scope`
- Acordeón implementado con `<div>` clickeables, sin ARIA, sin teclado
- Íconos de servicios sin alternativa textual
- Color como único indicador ("verde = incluido, rojo = no incluido")

### `proyectos.html`
- Galería con `<img>` sin `alt` descriptivo
- Enlaces con texto "click aquí", "ver más", "leer"
- IDs duplicados en tarjetas de proyecto
- Carrusel sin controles accesibles por teclado

### `contacto.html`
- Inputs sin `<label>` (solo placeholder)
- Sin `fieldset`/`legend` para grupos de radios/checkboxes
- Mensajes de error solo en rojo, sin texto explicativo
- Iframe del mapa sin `title`
- Botón "enviar" implementado como `<a>` o `<div>`
- Falta `required` declarado correctamente, validación solo visual

## Criterios WCAG a cumplir — Entrega 2

Objetivo: **WCAG 2.1 nivel AA**. Cada corrección en `entrega-2/` debe poder referenciarse a un criterio:

- **1.1.1** Contenido no textual (alt apropiados)
- **1.3.1** Información y relaciones (semántica correcta)
- **1.4.3** Contraste mínimo (4.5:1 texto normal, 3:1 texto grande)
- **1.4.11** Contraste no textual (componentes UI)
- **2.1.1** Teclado (todo navegable)
- **2.4.1** Evitar bloques (skip link)
- **2.4.4** Propósito del enlace
- **2.4.6** Encabezados y etiquetas
- **2.4.7** Foco visible
- **3.3.1** Identificación de errores
- **3.3.2** Etiquetas o instrucciones
- **4.1.2** Nombre, función, valor (ARIA correcto)

## Convenciones de código

### HTML
- Indentación: 2 espacios
- Atributos en minúscula, valores entre comillas dobles
- Encoding `UTF-8` declarado
- Viewport meta presente (incluso en entrega 1)
- Comentarios en español

### CSS
- Variables CSS (custom properties) para la paleta en entrega 2
- En entrega 1 está permitido usar colores hardcoded
- Mobile-first en entrega 2 (responsive)
- En entrega 1 puede no ser responsive (otro problema de usabilidad)

### JavaScript
- Vanilla JS, sin librerías
- `addEventListener` (no `onclick` inline en entrega 2)
- En entrega 1 se permiten handlers inline (mal estilo deliberado)

## Flujo de trabajo recomendado

1. **Construir entrega-1 completa** con todos los errores del mapa
2. **Evaluarla** con TAW, WAVE, Lighthouse y W3C → llenar `informes/evaluacion-1.md`
3. **Copiar entrega-1 → entrega-2** como punto de partida
4. **Corregir entrega-2** página por página siguiendo WCAG AA
5. **Re-evaluar** entrega-2 → llenar `informes/evaluacion-2.md`
6. **Informe comparativo final** con antes/después por criterio

## Cuando tengas dudas

- Si un cambio podría afectar la entrega-1, **pregúntame antes** de hacerlo
- Si una decisión de diseño no está clara, **propón 2-3 opciones**, no asumas
- Si una corrección WCAG tiene varias formas válidas, **muéstrame las alternativas**

## Datos de la empresa (para llenar contenido)

- **Nombre:** RSD Ingeniería Eléctrica S.A.S.
- **Ubicación ficticia:** Bogotá, Colombia
- **Año de fundación ficticio:** 2012
- **Servicios:** Diseño de instalaciones eléctricas, mantenimiento industrial, consultoría en eficiencia energética, instalación de paneles solares, certificación RETIE
- **Slogan sugerido:** "Energía que conecta, ingeniería que transforma"
