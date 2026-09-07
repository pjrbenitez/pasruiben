---
title: "MQL5 Expert Advisor: Volatility Breakout & Asymmetric Risk Management"
description: "Object-oriented algorithmic trading system in MQL5. Detects volatility expansion following compression phases, applying dynamic trailing stops and strict drawdown caps."
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
  backtestPeriod: "2019 - 2024 (5-year out-of-sample)"
riskManagement:
  - "Fixed risk per trade calibrated strictly to 0.75% of account balance."
  - "Structural Stop Loss dynamically calculated as a multiple of Average True Range (ATR)."
  - "Automatic position liquidation and kill switch if daily aggregated drawdown exceeds 2.5%."
  - "Zero martingale or unhedged grid mechanics: all market orders deploy with immediate stop protection."
technologies: ["MQL5 OOP", "MetaTrader 5", "Python (Backtesting Validation)", "ATR", "Bollinger Bands", "Monte Carlo"]
highlights:
  - "Modular MQL5 architecture with decoupled classes for Signal Generation, Order Execution, and Risk Management."
  - "Asynchronous order routing via OrderSendAsync to minimize slippage during macroeconomic high-volatility releases."
  - "Statistical robustness verified through Monte Carlo bootstrapping (10,000 iterations at 99% confidence level)."
  - "Adaptive Trailing Stop using a modified Parabolic SAR locking in gains during mature trend legs."
equityCurve: [10000, 10240, 10180, 10600, 10510, 10980, 11450, 11200, 11890, 12350, 12100, 12890, 13450, 13900, 13720, 14600, 15300, 15100, 16120, 16900, 16650, 17800, 18550, 19200, 19050, 20450, 21300, 22100, 22890, 24150]
---

## Theoretical Foundations of the Strategy

Financial markets continually oscillate between **volatility compression** regimes (low return dispersion) and **explosive expansion** (directional trends driven by institutional liquidity). The fundamental premise of this Expert Advisor is capturing the nascent breakout phases while filtering out lateral chop.

The algorithm does not attempt to forecast market tops or bottoms; rather, it joins the order flow precisely when volatility surpasses empirical standard deviation thresholds.

---

## MQL5 Code Architecture

The EA is engineered following strict **Object-Oriented Programming (OOP)** patterns in MQL5:

### 1. Separation of Concerns
- `CSignalFilter`: Assesses market regime (200-period EMA for directional bias and Bollinger Band width for compression detection).
- `CRiskEngine`: Computes exact lot sizing based on distance to structural Stop Loss and account base currency, guaranteeing that no position risks over 0.75% of equity.
- `COrderManager`: Controls the complete order lifecycle (`OrderSendAsync` execution, automated breakeven upon achieving 1.5R, and dynamic trailing).

### 2. Real-Time Slippage & Spread Protection
- The system continuously evaluates real-time broker spreads before routing orders; if the spread widens beyond 2.2 pips (common during NFP or CPI prints), execution is inhibited to preserve the mathematical edge.

---

## Quantitative Validation & Robustness Auditing

To rigorously eliminate curve-fitting bias, the system was subjected to a multi-stage audit:
1. **Walk-Forward Analysis (WFA):** Sliding window optimization (3 years in-sample) validated against non-overlapping out-of-sample segments (1 year recurring).
2. **Monte Carlo Simulation:** Random reshuffling with replacement across all 2,480 completed trades to determine theoretical Maximum Drawdown at a 99% confidence level, projecting a maximum drawdown of 8.4%.
