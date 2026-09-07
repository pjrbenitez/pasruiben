---
title: "Arquitectura de Microservicios Distribuidos con Spring Cloud y Apache Kafka"
description: "Diseño e implementación de un ecosistema de microservicios resiliente de alta concurrencia, con enrutamiento dinámico, mensajería asíncrona desacoplada y consistencia eventual."
category: "Microservicios & Cloud"
order: 1
featured: true
role: "Tech Lead / Arquitecto de Software"
architectureType: "Event-Driven Microservices"
technologies: ["Java 21", "Spring Boot 3", "Spring Cloud", "Apache Kafka", "PostgreSQL", "Redis", "Resilience4j", "Docker"]
metrics:
  - label: "Throughput"
    value: "+12,000 req/s"
  - label: "Disponibilidad"
    value: "99.99%"
  - label: "Latencia P99"
    value: "< 35ms"
  - label: "Tolerancia a Fallos"
    value: "Circuit Breaker Activo"
highlights:
  - "Enrutamiento centralizado y balanceo de carga reactivo mediante Spring Cloud Gateway."
  - "Desacoplamiento de procesos intensivos mediante pipelines de eventos con Apache Kafka."
  - "Implementación de patrones Saga y Outbox Pattern para garantizar consistencia sin bloqueos distribuidos."
  - "Cache multinivel (Redis + Caffeine) con invalidación asíncrona de alta eficiencia."
---

## Contexto del Proyecto y Objetivos

En sistemas empresariales con altos volúmenes de transacciones concurrentes, las arquitecturas monolíticas tradicionales presentan cuellos de botella severos en escalabilidad horizontal, aislamiento de fallos y agilidad de despliegue.

El objetivo fue diseñar y liderar la construcción de una plataforma orientada a servicios completamente distribuida basada en **Java 21** y **Spring Boot 3**, capaz de procesar transacciones críticas con latencia ultrabaja y garantía de continuidad de negocio.

---

## Decisiones Clave de Diseño y Arquitectura

### 1. Desacoplamiento Asíncrono con Apache Kafka
Para erradicar la cascada de fallos asociada a las llamadas HTTP síncronas entre microservicios, se implementó una **Event-Driven Architecture (EDA)** utilizando Apache Kafka:
- Los eventos de negocio se publican bajo el patrón **Transactional Outbox**, garantizando que ningún evento se pierda frente a caídas temporales de red o reinicios de base de datos.
- Claves de particionamiento diseñadas para garantizar ordenamiento estricto por entidad sin mermar la capacidad de paralelización de los grupos de consumidores.

### 2. Resiliencia y Aislamiento con Resilience4j
- **Circuit Breakers adaptativos:** Si un servicio dependiente incrementa su tasa de errores por encima del 5%, el circuito se abre de forma automática, redirigiendo el flujo hacia políticas de degradación elegante (*fallbacks*).
- **Rate Limiting distribuido:** Protección de endpoints públicos frente a picos anómalos o tráfico malicioso mediante Redis Token Bucket.

### 3. Persistencia Políglota y Consistencia Eventual
- **PostgreSQL:** Almacenamiento ACID para datos relacionales críticos y transacciones financieras.
- **Redis:** Capa de caché volátil con TTL agresivo y soporte para bloqueos optimistas distribuidos (*Redlock*).
- **Gestión de Transacciones Distribuidas:** Implementación de orquestación **Saga** con compensaciones automáticas ante reversiones de estado.

---

## Resultados y Lecciones Aprendidas

- **Rendimiento:** Reducción de la latencia media en un 42% y capacidad de absorber picos de tráfico 4x superiores a la solución heredada.
- **Mantenibilidad:** Despliegues independientes de microservicios con contratos de API formalizados vía OpenAPI/Swagger.
- **Observabilidad:** Trazabilidad de cada petición mediante correlación distribuida con identificadores unificados propagados en cabeceras HTTP y metadatos de Kafka.
