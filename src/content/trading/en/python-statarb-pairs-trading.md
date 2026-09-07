---
title: "Quantitative Statistical Arbitrage Model (Pairs Trading) in Python"
description: "Research, modeling, and vectorized backtesting of market-neutral strategies based on asset cointegration, mean reversion, and dynamic Z-Score estimation."
strategyType: "Statistical Arbitrage & Cointegration"
platform: "Python Research Engine"
instruments: ["Equity Indices", "Sector ETFs", "FX Crosses"]
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
  backtestPeriod: "2018 - 2024 (6 years)"
riskManagement:
  - "Market-Neutral strategy: long the undervalued asset, short the overvalued asset."
  - "Loss cut triggered upon cointegration breakdown (ADF p-value sustained > 0.10)."
  - "Mean-reversion exit (Z-score crosses 0) or maximum holding period time stop."
  - "Beta-neutral balancing eliminating systematic broader market risk."
technologies: ["Python", "Pandas", "Statsmodels", "Vectorbt", "NumPy", "ADF Test", "Johansen Test"]
highlights:
  - "Systematic cointegration screening utilizing Augmented Dickey-Fuller (ADF) and Johansen eigenvector tests."
  - "Dynamic Hedge Ratio calculation via Kalman Filtering and rolling OLS regression."
  - "Ultra-fast vectorized backtesting with Vectorbt incorporating realistic transaction fees and slippage."
  - "Low correlation (< 0.15) with the benchmark S&P 500 index, delivering genuine portfolio diversification."
equityCurve: [10000, 10150, 10320, 10280, 10540, 10820, 10750, 11100, 11420, 11680, 11950, 11820, 12240, 12610, 12980, 13240, 13580, 13920, 13810, 14350, 14780, 15120, 15640, 16050, 16420, 16980, 17450, 17920, 18350, 19100]
---

## Quantitative Thesis: Beyond Correlation

Correlation simply measures short-term co-movement direction between two time series, but does not prevent their price paths from diverging indefinitely. Conversely, **cointegration** establishes the presence of a stationary linear combination between two integrated I(1) series:

$$\text{Spread}_t = Y_t - \beta X_t$$

Whenever the spread deviates significantly from its historical equilibrium (quantified by the normalized **Z-Score**), a statistical arbitrage opportunity emerges:
- **Z-Score > +2.0:** Short the spread (short $Y$, long $X$).
- **Z-Score < -2.0:** Long the spread (long $Y$, short $X$).
- **Z-Score crosses 0:** Profit taking upon mean-reversion completion.

---

## Python Quantitative Pipeline

1. **Data Ingestion & Hygiene:**
   - Automated acquisition of split- and dividend-adjusted price histories.
   - Timestamp alignment and zero-lookahead gap treatment using conservative interpolation.

2. **Adaptive Hedge Ratio Estimation:**
   - Rather than assuming static OLS slope estimates vulnerable to shifting market regimes, we deploy a **Kalman Filter** dynamically updating state vector weights $\beta$ after each tick.

3. **Vectorized Simulation with Vectorbt:**
   - Complete modeling of exchange execution fees, liquidity tiers, and overnight financing (*borrow/swap rates*).
   - Multi-parameter Z-Score heatmaps isolating robust return plateaus from fragile overfitted peaks.
