---
title: "Chronicles of Aethelgard: Action Roguelike con Máquinas de Estados Jerárquicas"
description: "Desarrollo de un juego de acción 2D de precisión en Godot Engine 4. Arquitectura de combate desacoplada basada en Finite State Machines jerárquicas, buffering de inputs y shaders GLSL."
genre: "Action Roguelike / 2D Precision"
engineVersion: "Godot 4.2+ (GDScript & C#)"
order: 1
featured: true
playable: true
metrics:
  targetFps: "60 FPS fijos"
  physicsTickRate: "60 Hz determinista"
  drawCallsOptimized: "< 35 en combate"
  memoryFootprint: "< 120 MB VRAM"
architecturePatterns:
  - "Hierarchical State Machine (HSM) para el controlador del jugador."
  - "Event-Driven Signals para desacoplar subsistemas de interfaz y audio."
  - "Input Buffer Queue para registro de combos y cancelaciones de animación."
  - "Component-Based Entity Design (Hitboxes, Hurtboxes, Health, Velocity)."
technologies: ["Godot 4", "GDScript", "C#", "GLSL Shaders", "Aseprite", "WebAssembly"]
highlights:
  - "Motor de combate responsivo con frame data calibrado al milisegundo y hit-stop dinámico."
  - "Shaders personalizados para efectos de impacto, aberración cromática e iluminación 2D."
  - "Inteligencia artificial enemiga con árboles de comportamiento (*Behavior Trees*) modulares."
  - "Compilación y despliegue a navegador mediante WebAssembly y WebGL 2.0."
---

## Visión General y Desafíos Técnicos

En los juegos de acción roguelike de ritmo frenético, el jugador exige una **respuesta inmediata a los controles** (*game feel* visceral) y un comportamiento absolutamente determinista. Si el código acopla las animaciones, las físicas y la lectura de teclado en un único script monolítico, el resultado inevitable es la aparición de bugs de desincronización y dificultades extremas para añadir nuevas mecánicas.

El objetivo de este proyecto fue construir una arquitectura de software limpia y escalable en **Godot Engine 4**, aplicando patrones de diseño de la industria del videojuego.

---

## Patrones de Arquitectura Implementados

### 1. Máquina de Estados Jerárquica (Hierarchical State Machine)
El comportamiento del jugador está gobernado por una HSM desacoplada:
- **Estados Raíz:** `Grounded`, `Airborne`, `Disabled`.
- **Sub-estados:** `Idle`, `Run`, `Dash`, `AttackSequence (Combo 1, 2, 3)`, `Parry`, `Hurt`, `Dead`.

Cada estado es un nodo independiente con ciclo de vida formal (`Enter()`, `Exit()`, `PhysicsUpdate()`, `HandleInput()`), permitiendo transiciones limpias y evitando sentencias `if/else` anidadas inmanejables.

### 2. Input Buffering y Frame Cancellation
- Para que el combate no se sienta rígido, el sistema almacena las pulsaciones de ataque en una cola con expiración de 150 milisegundos (*Input Buffer*). Si el jugador pulsa el botón de ataque justo antes de tocar el suelo, la acción se dispara inmediatamente en el primer frame válido.
- Soporte para **Dash Canceling** en ventanas específicas de la animación de recuperación de ataque (*recovery frames*).

### 3. Shaders GLSL Personalizados
- **Hit-Flash:** Shader de reemplazo de color en un único pase para feedback visual de daño sin alterar la paleta base del sprite.
- **Distorsión de Impacto:** Efecto de lente y onda expansiva en tiempo real al asestar golpes críticos mediante un shader de postprocesado en un `BackBufferCopy`.
