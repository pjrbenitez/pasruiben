---
title: "Simulador Gravitacional de N-Cuerpos y Mecánica Celeste en Godot 4"
description: "Sandbox de astrofísica y simulación gravitacional en tiempo real. Algoritmo de aproximación Barnes-Hut, integración numérica de Verlet de velocidad y cómputo paralelo en C#."
genre: "Physics Sandbox & Simulation"
engineVersion: "Godot 4.3 (C# / .NET 8)"
order: 2
featured: true
playable: false
metrics:
  targetFps: "60 FPS con +2,000 cuerpos"
  physicsTickRate: "120 Hz cálculo orbital"
  drawCallsOptimized: "1 Instanced Draw Call"
  memoryFootprint: "Zero Heap Allocations en loop"
architecturePatterns:
  - "Integrador de Verlet de velocidad para conservación de energía simpléctica."
  - "Particionamiento espacial 2D/3D con Quadtree / Octree (Barnes-Hut O(N log N))."
  - "MultiMeshInstance2D para renderizado batch masivo por GPU."
  - "Estructuras de datos inmutables y asignación cero en memoria Heap (Zero GC spikes)."
technologies: ["Godot 4", "C# (.NET 8)", "Barnes-Hut Algorithm", "MultiMeshInstance", "SIMD", "Verlet Integration"]
highlights:
  - "Cálculo gravitacional en C# utilizando instrucciones vectoriales SIMD de .NET 8."
  - "Simulación de trayectorias orbitales cónicas proyectadas en tiempo real (visores de órbitas keplerianas)."
  - "Renderizado de miles de partículas planetarias en un único Draw Call con MultiMeshInstance."
  - "Precisión orbital estricta sin deriva de energía a largo plazo gracias a la integración simpléctica."
---

## El Desafío de la Simulación Gravitacional

El problema de gravitación clásica de $N$-cuerpos presenta una complejidad computacional de $\mathcal{O}(N^2)$ mediante la ley de gravitación universal de Newton:

$$F_i = \sum_{j \neq i} \frac{G \cdot m_i \cdot m_j}{\|r_j - r_i\|^2 + \epsilon^2}$$

Con 2,000 cuerpos celestes, el cálculo por fuerza bruta requeriría 4,000,000 de interacciones cada frame, colapsando la tasa de cuadros por segundo.

---

## Solución de Ingeniería

### 1. Algoritmo Barnes-Hut (Complejidad $\mathcal{O}(N \log N)$)
- Se construye un **Quadtree** espacial recursivo en cada frame. Los cúmulos de planetas distantes se agrupan en centros de masa virtuales cuando la relación distancia/tamaño supera el parámetro $\theta = 0.5$, reduciendo drásticamente los cálculos requeridos.

### 2. Integración Simpléctica de Verlet de Velocidad
Los integradores tradicionales (Euler o Runge-Kutta estándar) introducen acumulación de energía artificial en órbitas cerradas, provocando que los planetas salgan disparados o colapsen tras unos minutos de simulación.
El integrador de **Verlet de velocidad** conserva el espacio de fase y el momento angular, manteniendo órbitas perfectamente estables durante horas de ejecución continua.

### 3. Renderizado Batch por GPU
- Todos los cuerpos celestes comparten una sola geometría gestionada por un nodo **MultiMeshInstance**, actualizando las transformaciones de posición de miles de entidades simultáneamente en la GPU en una única llamada de dibujado (*Draw Call*).
