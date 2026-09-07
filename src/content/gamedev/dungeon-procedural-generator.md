---
title: "Generador Procedural de Mazmorras Mediante Autómatas Celulares y Delaunay"
description: "Herramienta algorítmica para generación procedural de mapas y niveles orgánicos. Combina física de dispersión de salas, grafos de Delaunay y Árbol de Expansión Mínima (MST)."
genre: "Procedural Level Generation / Tool"
engineVersion: "Godot 4.x (GDScript)"
order: 3
featured: false
playable: false
metrics:
  targetFps: "Generación en < 250ms"
  physicsTickRate: "Cálculo en hilo secundario"
  drawCallsOptimized: "TileMap Dual Layering"
  memoryFootprint: "Reutilización de matrices"
architecturePatterns:
  - "Algoritmo de Triangulación de Delaunay para mallado de conexiones."
  - "Árbol de Expansión Mínima (Minimum Spanning Tree - Kruskal) para navegabilidad."
  - "Autómatas Celulares de 4 pasadas para modelado de cavernas orgánicas."
  - "Algoritmo A* bidireccional para excavación de pasillos ortogonales."
technologies: ["Godot 4", "GDScript", "Delaunay Triangulation", "Kruskal Algorithm", "A* Pathfinding", "TileMap"]
highlights:
  - "Generación de layouts sin callejones sin salida obligatorios ni salas inaccesibles."
  - "Incorporación selectiva de ciclos controlados (15% de aristas descartadas por el MST) para enriquecer la exploración."
  - "Decoración automática de baldosas utilizando el sistema de TileMap Terrain y autotiling de Godot 4."
  - "Ejecución multihilo asíncrona para evitar congelamientos de la pantalla de carga."
---

## Filosofía del Diseño Procedural

La generación procedural exitosa no consiste en aleatoriedad caótica, sino en **algoritmos estructurados con reglas compositivas firmes**. Un buen mapa procedural debe ser intuitivo de recorrer, estéticamente coherente y reproducible mediante una semilla numérica (*seed*).

---

## Pipeline Algorítmico Paso a Paso

1. **Dispersión Física de Habitaciones:**
   - Se instancian $N$ rectángulos con dimensiones variables dentro de un área circular y se activa el motor de colisiones 2D temporalmente para que se repelan suavemente hasta alcanzar equilibrio sin solapamientos.

2. **Conexión de Salas con Triangulación de Delaunay:**
   - Tomando los puntos centrales de cada habitación como vértices, se genera una red de triángulos que conecta todas las salas con sus vecinas más próximas.

3. **Cálculo del MST (Algoritmo de Kruskal):**
   - Para garantizar que todas las salas estén conectadas con la menor longitud de túnel posible sin crear bucles redundantes excesivos, se calcula el Árbol de Expansión Mínima.
   - A continuación, se reintroduce de forma determinista un **15% de las aristas eliminadas** para permitir rutas alternativas y enriquecer las decisiones de navegación del jugador.

4. **Excavación de Pasillos y Autotiling:**
   - Conexión de salas mediante el algoritmo $A^*$ sobre una cuadrícula discreta, seguido por la aplicación del sistema de autotiling de Godot 4 para colocar bordes de paredes, suelos y decoraciones automáticamente.
