---
title: "Chronicles of Aethelgard: Action Roguelike with Hierarchical State Machines"
description: "Precision 2D action game developed in Godot Engine 4. Decoupled combat architecture based on hierarchical Finite State Machines, input buffering, and custom GLSL shaders."
genre: "Action Roguelike / 2D Precision"
engineVersion: "Godot 4.2+ (GDScript & C#)"
order: 1
featured: true
playable: true
metrics:
  targetFps: "Solid 60 FPS"
  physicsTickRate: "60 Hz Deterministic"
  drawCallsOptimized: "< 35 in Combat"
  memoryFootprint: "< 120 MB VRAM"
architecturePatterns:
  - "Hierarchical State Machine (HSM) for player controller."
  - "Event-Driven Signals decoupling UI and audio subsystems."
  - "Input Buffer Queue for combo registration and recovery frame cancels."
  - "Component-Based Entity Design (Hitboxes, Hurtboxes, Health, Velocity)."
technologies: ["Godot 4", "GDScript", "C#", "GLSL Shaders", "Aseprite", "WebAssembly"]
highlights:
  - "Responsive combat engine with millisecond-tuned frame data and dynamic hit-stop impact."
  - "Custom shaders for damage flash, chromatic aberration, and 2D dynamic illumination."
  - "Enemy artificial intelligence structured with modular Behavior Trees."
  - "Cross-compilation and web browser delivery via WebAssembly and WebGL 2.0."
---

## Overview & Technical Challenges

In fast-paced action roguelikes, players demand **immediate tactile response** (visceral game feel) and strictly deterministic mechanics. If animations, collision physics, and keyboard inputs are tangled in a monolithic script, synchronization bugs and high friction for adding features are inevitable.

The objective was to architect a clean, scalable game software structure in **Godot Engine 4**, applying battle-tested game industry patterns.

---

## Architectural Patterns & Systems

### 1. Hierarchical State Machine (HSM)
The player controller is governed by a decoupled HSM:
- **Root States:** `Grounded`, `Airborne`, `Disabled`.
- **Sub-states:** `Idle`, `Run`, `Dash`, `AttackSequence (Combo 1, 2, 3)`, `Parry`, `Hurt`, `Dead`.

Each state is an isolated node with explicit lifecycle hooks (`Enter()`, `Exit()`, `PhysicsUpdate()`, `HandleInput()`), enabling clean transitions without unmanageable nested `if/else` logic.

### 2. Input Buffering & Frame Cancellation
- To prevent stiff combat feel, input requests are stored in an expiring queue (150ms *Input Buffer*). If a player hits the attack button shortly before touching down, the swing triggers on the first valid grounded frame.
- Support for **Dash Canceling** within defined attack recovery frame windows.

### 3. Custom GLSL Shaders
- **Hit-Flash:** Single-pass color palette replacement shader providing visual damage feedback without touching base sprite textures.
- **Impact Shockwave:** Real-time radial lens distortion upon landing critical blows via a post-processing shader on a `BackBufferCopy` viewport node.
