---
title: "Modelo Cuantitativo de Arbitraje Estadístico (Pairs Trading) en Python"
description: "Investigación, modelado y backtesting vectorizado de estrategias market-neutral basadas en cointegración de activos, reversión a la media y cálculo dinámico de Z-Score."
strategyType: "Statistical Arbitrage & Cointegration"
platform: "Python Research Engine"
instruments: ["Índices Bursátiles", "ETFs Sectoriales", "Pares de Divisas"]
timeframe: "Daily / H4"
order: 2
featured: true
metrics:
  profitFactor: 1.95
  sharpeRatio: 2.65
  sortinoRatio: 3.84
  maxDrawdown: "4.2%"
  winRate: "68.0%"
  totalTrades: 1120
  backtestPeriod: "2018 - 2024 (6 años)"
riskManagement:
  - "Estrategia Market-Neutral: posición larga en el activo subvaluado y corta en el sobrevaluado."
  - "Stop de pérdida por ruptura de cointegración (p-value ADF > 0.10 continuado)."
  - "Salida por reversión al valor medio (Z-score cruza 0) o stop temporal a las N barras."
  - "Exposición equilibrada por beta para eliminar riesgo sistemático de mercado."
technologies: ["Python", "Pandas", "Statsmodels", "Vectorbt", "NumPy", "ADF Test", "Johansen Test"]
highlights:
  - "Cribado sistemático de cointegración mediante test Augmented Dickey-Fuller (ADF) y test de Johansen."
  - "Cálculo de ratio de cobertura dinámico (*Hedge Ratio*) mediante filtro de Kalman y regresión OLS rodante."
  - "Backtesting vectorizado ultrarrápido con Vectorbt simulando costes de transacción reales y slippage."
  - "Baja correlación (< 0.15) con el índice S&P 500, funcionando como diversificador absoluto."
equityCurve: [10000, 10150, 10320, 10280, 10540, 10820, 10750, 11100, 11420, 11680, 11950, 11820, 12240, 12610, 12980, 13240, 13580, 13920, 13810, 14350, 14780, 15120, 15640, 16050, 16420, 16980, 17450, 17920, 18350, 19100]
---

## Planteamiento Cuantitativo: Más Allá de la Correlación

La correlación mide la relación direccional de corto plazo entre dos series temporales, pero no garantiza que los activos permanezcan ligados a largo plazo. Por el contrario, la **cointegración** implica la existencia de una combinación lineal estacionaria entre dos activos integrados de orden I(1):

$$\text{Spread}_t = Y_t - \beta X_t$$

Cuando el spread entre los dos activos se desvía significativamente de su media histórica (medido mediante el **Z-Score**), se abre una posición estadística:
- **Z-Score > +2.0:** Se vende el spread (corto en $Y$, largo en $X$).
- **Z-Score < -2.0:** Se compra el spread (largo en $Y$, corto en $X$).
- **Z-Score cruza 0:** Toma de beneficios al completarse la reversión a la media.

---

## Pipeline Cuantitativo en Python

1. **Ingesta y Limpieza de Datos:**
   - Descarga de series históricas de precios ajustados por splits y dividendos.
   - Alineación temporal y eliminación de gaps mediante interpolación conservadora.

2. **Cálculo del Hedge Ratio Adaptativo:**
   - En lugar de una regresión OLS estática susceptible a regímenes cambiantes de mercado, se implementa un **Filtro de Kalman** que actualiza el vector de pesos $\beta$ en tiempo real tras cada observación.

3. **Backtesting Vectorizado con Vectorbt:**
   - Modelado de comisiones de corretaje por millón negociado y costes de financiación nocturna (*swap/borrow rate*).
   - Generación de heatmaps paramétricos de Z-Score para identificar mesetas estables de rentabilidad frente a picos frágiles.
