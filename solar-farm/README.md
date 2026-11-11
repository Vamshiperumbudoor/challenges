# SURYA FARM — Solar-Powered Irrigation for Every Farm

A responsive, static application prototype for the Telangana solar/hybrid irrigation challenge. The experience switch in the header changes between:
- **Website:** full dashboard and desktop/mobile responsive navigation.
- **Android:** compact Android / Material-inspired phone preview.
- **iOS:** iPhone-style phone preview with iOS-inspired surfaces and navigation.

## Open the prototype

After GitHub Pages deploys the repository, open:

`https://vamshiperumbudoor.github.io/challenges/solar-farm/`

The page is plain HTML/CSS/JavaScript and requires no build step. It includes a PWA manifest and a basic service worker for app-like installation/offline shell caching.

## Included modules

- Overview dashboard with simulated energy, water, pump and health KPIs
- Pump stations and deep-borewell engineering considerations
- Solar, grid-import and permitted-export energy ledger
- Tamper-evident metering design
- Groundwater flow and dynamic water-level monitoring
- Theft-resistant PV mounting, GPS tagging and incident workflow
- Service tickets and field maintenance concept
- Farmer and state-level savings scenario calculator
- Telangana programme dashboard
- Architecture, risk register and phased delivery roadmap
- CSV export for illustrative energy ledger

## Important prototype boundary

This is a **front-end demonstration**, not a commissioned irrigation control system. All readings, pump stations, alerts, district deployments and KPI figures shown are illustrative simulated data. The calculator is a scenario model, not a guaranteed saving or financial forecast. No physical pump control, utility-meter settlement, GPS tracking, authentication, service dispatch, payment, or live device telemetry is connected.

Never use this demo UI to operate a pump or as a substitute for electrical protection, utility approvals, hydrogeological assessment or statutory permissions.

## Production architecture to implement next

1. **Field hardware:** hybrid inverter/controller, compatible motor drive, flow meter, water-level sensor, electrical metering, tamper switches, enclosure sensor and GPS/cellular device.
2. **Safety-critical edge control:** local dry-run, overload, phase/voltage, thermal, anti-islanding and fail-safe interlocks. Safety must remain local even when cloud connectivity is lost.
3. **Backend:** device identity and certificates, encrypted MQTT/HTTPS ingestion, time-series storage, event ledger, alert engine, role-based access, audit logs and APIs.
4. **Apps:** farmer, technician, vendor, DISCOM and programme-admin roles; Telugu/English localisation; offline-first workflows.
5. **Integrations:** utility-approved bidirectional meter and settlement process, approved export/interconnection, payment/subsidy workflows, SMS/WhatsApp/push notifications and GIS.
6. **Validation:** pump-curve and site hydraulic design for each borewell, electrical safety testing, meter calibration, cybersecurity review, privacy controls and independent pilot evaluation.

## Proposed cost-down approach

Treat the 30% reduction as a **target to prove**, not a claim. Validate through a site-specific bill of materials and lifecycle cost model:
- Retrofit the motor/drive where technically compatible instead of replacing the complete pump set.
- Standardise 3/5/7.5/10 HP kit families and common spares.
- Right-size PV and inverter from measured total dynamic head, discharge, duty cycle and seasonal solar profile.
- Use local assembly, modular enclosures and competitive procurement.
- Compare capex, financing, service, replacement, grid backup and water productivity over lifecycle.

## Publish

GitHub Pages can serve this folder as a static site. In repository Settings → Pages, select Deploy from a branch, branch `main`, folder `/(root)`. The app will then be available under `/solar-farm/`.

For a true Android APK and iOS app-store build, package the shared product using a mobile framework (e.g. Capacitor or React Native) and complete device, accessibility, security and store testing. The current Android/iOS toggles are UI previews, not native binaries.
