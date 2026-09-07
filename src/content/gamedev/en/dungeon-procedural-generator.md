---
title: "Procedural Dungeon Generator with Cellular Automata & Delaunay Triangulation"
description: "Algorithmic generation tool for organic procedural level layouts. Combines physics-based room dispersion, Delaunay graphs, and Minimum Spanning Trees (MST)."
genre: "Procedural Level Generation / Tool"
engineVersion: "Godot 4.x (GDScript)"
order: 3
featured: false
playable: false
metrics:
  targetFps: "Generation in < 250ms"
  physicsTickRate: "Background Thread Computation"
  drawCallsOptimized: "TileMap Dual Layering"
  memoryFootprint: "Recycled Matrix Memory"
architecturePatterns:
  - "Delaunay Triangulation for spatial connection meshing."
  - "Minimum Spanning Tree (Kruskal's Algorithm) guaranteeing navigability."
  - "4-pass Cellular Automata for natural organic cave carving."
  - "Bidirectional A* Pathfinding for orthogonal corridor digging."
technologies: ["Godot 4", "GDScript", "Delaunay Triangulation", "Kruskal Algorithm", "A* Pathfinding", "TileMap"]
highlights:
  - "Generates layout topologies with zero inaccessible rooms or dead-end traps."
  - "Selective loop retention (15% of discarded MST edges) promoting non-linear exploratory flow."
  - "Automated tile decoration using Godot 4 TileMap Terrain autotiling."
  - "Asynchronous multithreaded execution preventing loading frame freezes."
---

## Procedural Design Philosophy

Compelling procedural generation is never random chaos; it is **structured algorithmic execution governed by firm compositional constraints**. A good procedural level must be intuitive to navigate, aesthetically cohesive, and strictly reproducible via numeric seeds.

---

## Step-by-Step Generation Pipeline

1. **Physics-Driven Room Dispersion:**
   - $N$ rooms with randomized dimensions spawn within a circular zone; Godot's 2D physics separation impulses repel overlapping boundaries until resting equilibrium is achieved.

2. **Delaunay Graph Meshing:**
   - Treating room centerpoints as spatial vertices, a Delaunay Triangulation builds a planar graph connecting every chamber to its nearest spatial neighbors.

3. **Kruskal's Minimum Spanning Tree:**
   - To ensure global connectivity with minimal redundant corridor length, Kruskal's algorithm computes the MST.
   - We then reintroduce a deterministic **15% of discarded edges**, creating loops and strategic navigational choices.

4. **Corridor Excavation & Autotiling:**
   - Inter-room tunnels are plotted using grid-based $A^*$ pathfinding, followed by Godot 4's dual-layer autotile system placing wall caps, floor textures, and props seamlessly.
