---
title: "N-Body Gravitational Simulator & Celestial Mechanics in Godot 4"
description: "Astrophysics sandbox and real-time gravity simulation. Barnes-Hut tree algorithm, symplectic velocity-Verlet numerical integration, and SIMD parallel compute in C#."
genre: "Physics Sandbox & Simulation"
engineVersion: "Godot 4.3 (C# / .NET 8)"
order: 2
featured: true
playable: false
metrics:
  targetFps: "60 FPS with 2,000+ Bodies"
  physicsTickRate: "120 Hz Orbital Solve"
  drawCallsOptimized: "1 Instanced Draw Call"
  memoryFootprint: "Zero Heap Allocations in Loop"
architecturePatterns:
  - "Velocity-Verlet symplectic integrator preserving Hamiltonian energy."
  - "Spatial partitioning with Quadtree / Octree (Barnes-Hut O(N log N))."
  - "MultiMeshInstance2D for single-pass GPU batch rendering."
  - "Zero-allocation value structs avoiding garbage collection stutter."
technologies: ["Godot 4", "C# (.NET 8)", "Barnes-Hut Algorithm", "MultiMeshInstance", "SIMD", "Verlet Integration"]
highlights:
  - "C# gravitational acceleration calculations vectorized with .NET 8 SIMD intrinsics."
  - "Real-time conic trajectory projections rendering projected Keplerian orbital trails."
  - "Rendering thousands of planetary bodies in a single GPU draw call using MultiMeshInstance."
  - "Strict long-term orbital stability with zero artificial energy drift via symplectic physics."
---

## The Challenge of Gravitational Simulation

The classic $N$-body gravitational problem incurs a computational complexity of $\mathcal{O}(N^2)$ based on Newton's law of universal gravitation:

$$F_i = \sum_{j \neq i} \frac{G \cdot m_i \cdot m_j}{\|r_j - r_i\|^2 + \epsilon^2}$$

Simulating 2,000 celestial bodies naively demands 4,000,000 pair evaluations per frame, instantly dropping frame rates below playable levels.

---

## Engineering Solutions

### 1. Barnes-Hut Algorithm ($\mathcal{O}(N \log N)$ Complexity)
- A hierarchical **Quadtree** recursively partitions space every tick. Distant particle clusters are approximated as singular virtual centers of mass whenever the cell-distance ratio satisfies $\theta = 0.5$, cutting required calculations exponentially.

### 2. Symplectic Velocity-Verlet Integration
Standard numerical integrators (Euler or default Runge-Kutta) introduce compounding artificial energy drift, causing planetary orbits to rapidly decay or eject into deep space.
The **Velocity-Verlet** integrator preserves phase space and angular momentum, keeping closed orbits rock-steady across hours of runtime.

### 3. GPU MultiMesh Batching
- Every celestial body shares a single instanced quad mesh managed by a **MultiMeshInstance** node, streaming position matrices directly to the GPU in a single unified draw call.
