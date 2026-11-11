#!/usr/bin/env python3
"""Download the exact challenge images used by the official TISC website."""
from pathlib import Path
from urllib.request import Request, urlopen
import time
BASE = "https://tisc.telangana.gov.in/Content/img/"
FILES = [
"challenge-01-solar-irrigation.jpg?v=2","challenge-02-safer-food.jpg?v=2","challenge-03-lakes-land.jpg?v=2","challenge-04-potholes.jpg?v=2","challenge-05-anaemia-screening.jpg?v=2","challenge-06-every-child-reads.jpg?v=2","challenge-07-crop-mapping.jpg?v=2","challenge-08-network-mapping.jpg","challenge-09-drone-monitoring.jpg","challenge-10-solar-substation.jpg","challenge-11-material-quality.jpg","challenge-12-revenue-assurance.jpg","challenge-13-billing-assistance.jpg","challenge-14-connection-estimator.jpg","challenge-15-project-monitoring.jpg","challenge-16-der-rooftop-solar.jpg","challenge-17-storm-outage.jpg","challenge-18-asset-health.jpg"]
OUT=Path(__file__).parent/"assets"; OUT.mkdir(exist_ok=True)
for i, item in enumerate(FILES, 1):
    name=item.split('?')[0]; dest=OUT/name
    if dest.exists() and dest.stat().st_size>1000:
        print(f"[{i:02}/18] already exists: {name}"); continue
    req=Request(BASE+item,headers={"User-Agent":"Mozilla/5.0 (compatible; TISC-Image-Bundler/1.0)"})
    try:
        with urlopen(req,timeout=40) as response: data=response.read()
        if not data.startswith(b'\xff\xd8'):
            raise RuntimeError("response did not look like a JPEG")
        dest.write_bytes(data); print(f"[{i:02}/18] downloaded {name} ({len(data):,} bytes)")
    except Exception as exc:
        print(f"[{i:02}/18] FAILED {name}: {exc}")
        raise SystemExit(1)
    time.sleep(.15)
print("\nAll 18 original challenge images are now stored locally in assets/.")
