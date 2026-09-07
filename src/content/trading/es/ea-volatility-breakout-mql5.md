---
title: "Expert Advisor MQL5: Ruptura de Volatilidad y Gestión Asimétrica de Riesgo"
description: "Sistema de trading algorítmico automatizado en MQL5 orientado a objetos. Detecta expansiones de volatilidad tras fases de compresión y aplica trailing stop dinámico con control estricto de drawdown."
strategyType: "Volatility Breakout & Momentum"
platform: "MetaTrader 5 (MQL5 OOP)"
instruments: ["EURUSD", "GBPUSD", "US500"]
timeframe: "H1 / M15"
order: 1
featured: true
metrics:
  profitFactor: 2.14
  sharpeRatio: 2.31
  sortinoRatio: 3.12
  maxDrawdown: "5.8%"
  winRate: "54.2%"
  totalTrades: 2480
  backtestPeriod: "2019 - 2024 (5 años out-of-sample)"
riskManagement:
  - "Riesgo fijo por operación calibrado al 0.75% del balance de la cuenta."
  - "Stop Loss estructural calculado dinámicamente según múltiplo de ATR (Average True Range)."
  - "Cierre de posiciones y desactivación automática si el drawdown diario acumulado supera el 2.5%."
  - "Sin martingalas ni cuadrículas no acotadas: toda orden entra con Stop Loss protegido."
technologies: ["MQL5 OOP", "MetaTrader 5", "Python (Backtesting Validation)", "ATR", "Bollinger Bands", "Monte Carlo"]
highlights:
  - "Arquitectura modular en MQL5 con clases desacopladas para Entrada, Gestión de Órdenes y Control de Riesgo."
  - "Ejecución asíncrona de órdenes para mitigar slippage en eventos de alta volatilidad macroeconómica."
  - "Validación estadística mediante simulación de Monte Carlo (10,000 iteraciones con 99% de confianza)."
  - "Trailing Stop adaptativo mediante Parabolic SAR modificado que bloquea beneficios en tendencias maduras."
equityCurve: [10000, 10240, 10180, 10600, 10510, 10980, 11450, 11200, 11890, 12350, 12100, 12890, 13450, 13900, 13720, 14600, 15300, 15100, 16120, 16900, 16650, 17800, 18550, 19200, 19050, 20450, 21300, 22100, 22890, 24150]
---

## Fundamentos Teóricos de la Estrategia

Los mercados financieros alternan ciclos de **compresión de volatilidad** (baja dispersión de retornos) y **expansión explosiva** (tendencias direccionales impulsadas por liquidez institucional). La premisa de este Expert Advisor es capturar las fases iniciales de expansión evitando el ruido característico de los rangos laterales.

La lógica no intenta predecir techos o suelos, sino subirse al flujo de órdenes en el momento exacto en que la volatilidad supera umbrales estadísticos de desviación estándar.

---

## Arquitectura del Código en MQL5

El EA está desarrollado bajo un paradigma estricto de **Programación Orientada a Objetos (OOP)** en MQL5:

### 1. Separación de Responsabilidades
- `CSignalFilter`: Evalúa el régimen de mercado (EMA de 200 períodos para sesgo direccional y ancho de Bandas de Bollinger para detección de compresión).
- `CRiskEngine`: Calcula el tamaño de lote exacto en función de la distancia al Stop Loss y la divisa de la cuenta, garantizando que ninguna orden exponga más del 0.75% del capital.
- `COrderManager`: Gestiona el ciclo de vida de la orden (apertura mediante `OrderSendAsync`, breakeven automático al alcanzar 1.5R y trailing stop).

### 2. Control de Slippage y Spread Filtro
- El sistema monitorea el spread en tiempo real antes de enviar cualquier orden al broker; si el spread supera 2.2 pips (común durante publicación de noticias NFP o IPC), las órdenes se inhiben para proteger la ventaja estadística (*edge*).

---

## Validación Estadística y Test de Robustez

Para descartar sobreajuste (*overfitting*), la estrategia se sometió a un protocolo de auditoría cuantitativa:
1. **Walk-Forward Analysis (WFA):** Optimización en ventana deslizante (3 años in-sample) evaluada en períodos no vistos (1 año out-of-sample recurrente).
2. **Simulación de Monte Carlo:** Remuestreo aleatorio de las 2,480 operaciones con reemplazo para calcular el Maximum Drawdown esperado al 99% de nivel de confianza, obteniendo un DD máximo teórico del 8.4%.
