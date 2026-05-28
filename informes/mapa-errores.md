# Mapa de errores deliberados — Entrega 1

Este documento lista los errores que se introducen **a propósito** en la entrega 1 para que las herramientas de evaluación los detecten. Cada error está mapeado al criterio WCAG que viola, para facilitar el informe posterior.

> **Importante:** este archivo es la "verdad" sobre qué errores existen en la entrega 1. Si se agrega o quita un error, actualizar aquí también.

## Tabla de errores por página

| # | Página | Error | Criterio WCAG | Detectable por |
|---|--------|-------|---------------|----------------|
| G1 | Todas | `<html>` sin `lang` | 3.1.1 | TAW, WAVE, Lighthouse |
| G2 | Todas | Sin skip-link | 2.4.1 | TAW, Lighthouse |
| G3 | Todas | `outline: none` en `:focus` | 2.4.7 | Inspección manual, Lighthouse |
| G4 | Todas | Sin landmarks `<main>`, `<nav>` | 1.3.1 | WAVE, axe |
| G5 | Todas | Navegación inconsistente | Heurística Nielsen | Manual |
| I1 | index | `<title>` genérico "Inicio" | 2.4.2 | TAW, WAVE |
| I2 | index | Imagen hero sin `alt` | 1.1.1 | TAW, WAVE, Lighthouse |
| I3 | index | Contraste insuficiente en CTA | 1.4.3 | WAVE, Lighthouse, axe |
| I4 | index | `<div onclick>` como botón | 4.1.2, 2.1.1 | axe, Lighthouse |
| I5 | index | Salto h1 → h3 | 1.3.1, 2.4.6 | WAVE, axe |
| I6 | index | Logo sin `alt` | 1.1.1 | TAW, WAVE |
| N1 | nosotros | Fotos sin `alt` | 1.1.1 | TAW, WAVE |
| N2 | nosotros | Maquetación con `<table>` | 1.3.1 | TAW, axe |
| N3 | nosotros | `<center>`, `bgcolor`, `<font>` | Validez HTML | W3C Validator |
| N4 | nosotros | Texto justificado mal espaciado | 1.4.8 (AAA) | Manual |
| S1 | servicios | Tabla sin `<th>`/`scope` | 1.3.1 | TAW, WAVE, axe |
| S2 | servicios | Acordeón sin ARIA ni teclado | 2.1.1, 4.1.2 | axe, manual |
| S3 | servicios | Íconos sin alternativa | 1.1.1 | TAW, WAVE |
| S4 | servicios | Color como único indicador | 1.4.1 | TAW, axe |
| P1 | proyectos | Imágenes sin `alt` descriptivo | 1.1.1 | TAW, WAVE |
| P2 | proyectos | Enlaces "click aquí" | 2.4.4 | WAVE, axe |
| P3 | proyectos | IDs duplicados | 4.1.1 | W3C Validator, axe |
| P4 | proyectos | Carrusel sin teclado | 2.1.1 | Manual |
| C1 | contacto | Inputs sin `<label>` | 3.3.2, 1.3.1 | TAW, WAVE, axe |
| C2 | contacto | Sin `fieldset`/`legend` | 1.3.1 | TAW |
| C3 | contacto | Errores solo en color rojo | 1.4.1, 3.3.1 | Manual, axe |
| C4 | contacto | Iframe del mapa sin `title` | 4.1.2, 2.4.1 | TAW, WAVE, axe |
| C5 | contacto | "Enviar" como `<a>` o `<div>` | 4.1.2 | axe |
| C6 | contacto | Validación solo visual | 3.3.1 | Manual |

## Conteo estimado de errores que las herramientas reportarán

- **TAW:** ~25-35 incidencias
- **WAVE:** ~20-30 errores y alertas
- **Lighthouse Accessibility:** puntaje 50-65 / 100
- **W3C HTML Validator:** ~10-15 errores
- **axe DevTools:** ~25-30 violaciones

Esto es suficiente material para un informe detallado, sin volverse inmanejable de corregir.
