# Proyecto Factores Humanos — Sitio Web RSD Ingeniería Eléctrica S.A.S.

Proyecto académico para la materia **Factores Humanos**. Consiste en el diseño y evaluación de un sitio web ficticio bajo criterios de **usabilidad y accesibilidad web**, siguiendo las pautas **WCAG 2.1 nivel AA**.

## Objetivo

Demostrar el ciclo completo de evaluación y mejora de accesibilidad web:

1. **Entrega 1:** sitio funcional con errores comunes de accesibilidad y usabilidad introducidos deliberadamente.
2. **Evaluación 1:** análisis con herramientas automáticas (TAW, WAVE, Lighthouse, validadores W3C).
3. **Entrega 2:** sitio corregido cumpliendo WCAG 2.1 AA.
4. **Evaluación 2:** análisis comparativo demostrando las mejoras.

## Empresa ficticia

**RSD Ingeniería Eléctrica S.A.S.** — empresa de servicios de ingeniería eléctrica con sede ficticia en Bogotá, Colombia.

## Tecnologías

- HTML5
- CSS3
- JavaScript (vanilla, sin frameworks)

Se eligió un stack sin frameworks para garantizar que las herramientas de evaluación analicen el código fuente real y no HTML generado dinámicamente.

## Estructura

```
rsd-proyecto/
├── CLAUDE.md              Reglas del proyecto (para asistente IA)
├── README.md              Este archivo
├── entrega-1/             Versión con errores deliberados
├── entrega-2/             Versión corregida (WCAG 2.1 AA)
├── informes/              Documentos de evaluación
└── recursos/              Assets originales (logo, etc.)
```

## Cómo ejecutar localmente

No requiere instalación. Abrir cualquier archivo `.html` directamente en el navegador, o servir la carpeta con un servidor estático simple:

```bash
# Opción 1: con Python
cd entrega-1
python3 -m http.server 8000

# Opción 2: con Node (si se tiene instalado)
npx serve entrega-1
```

Luego abrir `http://localhost:8000` en el navegador.

## Herramientas de evaluación utilizadas

| Herramienta | URL | Qué evalúa |
|-------------|-----|------------|
| TAW | https://www.tawdis.net | Accesibilidad WCAG |
| WAVE | https://wave.webaim.org | Accesibilidad visual |
| W3C HTML Validator | https://validator.w3.org | Validez del HTML |
| W3C CSS Validator | https://jigsaw.w3.org/css-validator | Validez del CSS |
| Lighthouse | Chrome DevTools | Accesibilidad, rendimiento, SEO |
| axe DevTools | Extensión navegador | Accesibilidad detallada |

## Autor

[Tu nombre aquí]
Materia: Factores Humanos
[Universidad / Programa]
2026
