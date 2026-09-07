---
title: "Sistema de Cobertura Dinámica y Gestión de Cartera Multidivisa en MQL4"
description: "Expert Advisor multi-símbolo para MetaTrader 4 enfocado en diversificación por paridad de riesgo y coberturas correlacionadas con protección total de capital."
strategyType: "Portfolio Hedging & Correlation"
platform: "MetaTrader 4 (MQL4)"
instruments: ["EURUSD", "USDCHF", "USDJPY", "AUDUSD"]
timeframe: "H4 / Daily"
order: 3
featured: false
metrics:
  profitFactor: 1.88
  sharpeRatio: 1.92
  sortinoRatio: 2.74
  maxDrawdown: "7.9%"
  winRate: "61.5%"
  totalTrades: 1840
  backtestPeriod: "2019 - 2024 (5 años)"
riskManagement:
  - "Control de exposición cruzada: cálculo de la exposición neta en divisa base (USD) en todo momento."
  - "Stop loss por equidad global: cierre de emergencia de todas las operaciones al alcanzar un umbral fijado."
  - "Diversificación inversa entre pares con correlación negativa comprobada."
  - "Ausencia de técnicas de duplicación de lotaje (martingala) o recuperaciones forzadas."
technologies: ["MQL4", "MetaTrader 4", "Correlation Matrix", "Multi-Currency Engine", "Risk Parity"]
highlights:
  - "Motor multi-divisa que evalúa simultáneamente el riesgo agregado de la cuenta."
  - "Rebalanceo periódico de posiciones para mantener pesos idénticos de riesgo."
  - "Panel visual interactivo en gráfico (Dashboard On-Chart) con estado de margen y drawdown en tiempo real."
  - "Pruebas de estrés durante eventos de cisne negro (COVID-19 2020, subidas de tipos de la FED 2022)."
equityCurve: [10000, 10120, 10280, 10450, 10390, 10680, 10920, 11150, 10980, 11450, 11800, 12100, 12050, 12450, 12890, 13150, 13400, 13780, 13650, 14200, 14650, 14980, 15420, 15800, 16250, 16600, 17150, 17580, 18050, 18600]
---

## Filosofía de Protección y Diversificación

La mayoría de los sistemas automatizados fallan debido a la concentración de riesgo en un único activo o a la asunción de riesgos ocultos (como el apalancamiento excesivo o la esperanza matemática negativa de las cuadrículas sin stop).

Este sistema fue concebido como un **motor de asignación de activos** para carteras de divisas, distribuyendo el riesgo de forma uniforme entre pares con baja o negativa correlación histórica.

---

## Mecánica de Cobertura y Operativa

1. **Matriz de Correlación Rodante:** El EA recalcula cada semana la matriz de correlación de Pearson entre los pares monitoreados.
2. **Hedging Sintético:** Si se detecta una señal alcista en EURUSD y simultáneamente una señal alcista en USDCHF (activos históricamente inversos), el sistema balancea los lotes para minimizar la exposición neta al dólar estadounidense, buscando beneficiarse de la divergencia entre el Euro y el Franco Suizo.
3. **Gestión de Liquidez:** Monitoreo estricto del *Free Margin* para garantizar que el apalancamiento efectivo nunca supere 1:3 en ningún instante del ciclo de trading.
