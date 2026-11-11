# Suraksha — Telangana Hostel Food Safety

A responsive concept application for the TISC challenge **Safer Food in Residential Hostels**. This static prototype is hosted under the existing GitHub Pages repository at `/safer-food/`.

## Open the application

After GitHub Pages deploys the repository, visit:

- `https://vamshiperumbudoor.github.io/challenges/safer-food/`

## Platform previews

The top switcher changes between:
- **Website:** desktop administrative workspace with sidebar navigation, operational metrics, district scorecard and data tables.
- **Android:** phone-sized Material-inspired layout with compact header and bottom navigation.
- **iOS:** iPhone-sized layout with iOS-inspired status bar, rounded controls and tab navigation.

## Included workflows

- State-level dashboard, hostel directory and district monitoring
- Rapid food-adulteration and spoilage screening register
- Sample IDs, screening result, method and time capture
- Kitchen hygiene checklists and sensor/AI monitoring concept
- Meal schedule, menu and service-compliance logging
- Incident reporting, assignment and resolution
- Test-kit/device inventory, reporting and CSV export
- Responsive platform preview switcher

## Important prototype boundary

This is a front-end demonstration. It uses illustrative data and browser-local state; it is **not connected to a live government database, AI camera inference, IoT sensors, SMS/email gateway, FSSAI laboratory network or authenticated user directory**. Form-created records are kept in the current page session and are not a production database.

Rapid test kits are screening tools. Any flagged or inconclusive result must follow an approved sampling protocol and be referred for confirmatory testing where required. AI alerts should support, not replace, trained human inspection. Production camera workflows should avoid facial recognition and minimise personal data.

## Production architecture to integrate

1. **Identity & access:** department, district officer, food inspector, hostel warden and auditor roles; MFA and audit logs.
2. **Backend:** PostgreSQL with tenant/district/hostel hierarchy; APIs for hostels, samples, tests, inspections, meals, incidents and inventory.
3. **Evidence:** encrypted sample photos, kit batch/expiry, GPS/time metadata, chain-of-custody and laboratory reports.
4. **IoT:** authenticated MQTT/HTTPS ingestion, device registry, calibration tracking, offline buffering and threshold alerts.
5. **AI:** privacy-preserving computer vision for observable hygiene events only; edge inference, confidence thresholds, human review and model monitoring.
6. **Notifications:** escalation rules for critical results, overdue samples, temperature excursions and unresolved incidents.
7. **Governance:** retention schedule, consent/signage where applicable, role-scoped access, encryption, backups, security testing and accessibility/local-language support.

## Run locally

Open `index.html` in a browser. No build step or API key is required.
