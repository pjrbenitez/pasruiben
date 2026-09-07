---
title: "Infraestructura Cloud-Native con Kubernetes y GitOps mediante ArgoCD"
description: "Orquestación automatizada de contenedores en clústeres Kubernetes con entrega continua declarativa (GitOps), estrategias de despliegue Canary con Argo Rollouts y Helm."
category: "DevOps & Cloud-Native"
order: 2
featured: true
role: "Tech Lead & Platform Engineer"
architectureType: "GitOps Declarative Infrastructure"
technologies: ["Kubernetes", "ArgoCD", "Argo Rollouts", "Helm 3", "Terraform", "Docker", "Prometheus", "GitHub Actions"]
metrics:
  - label: "Tiempo de Despliegue"
    value: "< 3 min"
  - label: "Downtime en Releases"
    value: "0.00% (Zero)"
  - label: "Frecuencia de Deploy"
    value: "Múltiples / día"
  - label: "Rollback Automático"
    value: "< 30s"
highlights:
  - "Sincronización declarativa basada en Git: el repositorio es la única fuente de verdad (SSOT)."
  - "Despliegues progresivos automáticos (Canary) validados contra métricas de Prometheus mediante Argo Rollouts."
  - "Helm Charts modulares y tipados con valores segregados por entorno (Dev, Staging, Producción)."
  - "Endurecimiento de seguridad con NetworkPolicies, RBAC estricto y escaneo continuo de vulnerabilidades."
---

## Contexto y Desafío Operativo

Los despliegues manuales o mediante scripts imperativos en pipelines tradicionales son propensos a inconsistencias entre entornos (*configuration drift*), accesos privilegiados innecesarios y riesgo crítico durante las actualizaciones de producción.

La meta consistió en transformar la infraestructura en un modelo **100% declarativo e inmutable** aplicando los principios de **GitOps** con **ArgoCD** sobre clústeres de **Kubernetes**.

---

## Implementación Técnica y Topología

### 1. Flujo GitOps Declarativo con ArgoCD
- El clúster monitorea continuamente el repositorio de Git que contiene los manifiestos de Kubernetes y los charts de Helm.
- Ante cualquier desviación no autorizada en el clúster (*drift*), ArgoCD detecta la divergencia y reconcilia el estado real para que coincida exactamente con el código fuente.

### 2. Despliegues Canary con Argo Rollouts
En lugar del clásico *RollingUpdate* que puede exponer a todos los usuarios a un bug no detectado, se implementó **Argo Rollouts**:
1. El nuevo release recibe inicialmente el **5% del tráfico** durante una ventana de estabilización.
2. Argo Rollouts consulta métricas en vivo en **Prometheus** (tasa de errores HTTP 5xx y latencia P95).
3. Si los umbrales de error se mantienen por debajo del 0.1%, el tráfico se escala incrementalmente (20% -> 50% -> 100%).
4. Si las métricas degradan, se dispara un **rollback atómico en menos de 30 segundos** sin intervención humana.

### 3. Modularidad con Helm y Parametrización
- Creación de un **Chart base institucional** que encapsula las mejores prácticas de Kubernetes: *Liveness/Readiness Probes*, *PodDisruptionBudgets*, *HorizontalPodAutoscaler (HPA)* y políticas de seguridad no-root.

---

## Impacto y Métricas de Éxito

- **Cero tiempo de inactividad:** Las actualizaciones y parches de seguridad se ejecutan en horario comercial sin impacto al usuario final.
- **Auditoría total:** Cada cambio en infraestructura está respaldado por un commit firmado en Git con su respectivo Pull Request y aprobaciones requeridas.
