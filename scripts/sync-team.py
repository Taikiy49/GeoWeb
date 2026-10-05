"""Refresh the versioned team directory from the company's published Wix source sheet.

Run from any directory: python3 scripts/sync-team.py
Review the diff, then build and deploy. The website does not depend on Google at runtime.
"""
import csv
import io
import json
from pathlib import Path
from urllib.request import urlopen

SOURCE = "https://docs.google.com/spreadsheets/d/e/2PACX-1vS9U2PxD7GuLVd2s6kjuL4qN6ymWBJOZda8oR6tMtsvbWYuQXJpM1PPkmortdlFv6DZpd_99KEc-G-g/pub?output=csv"

with urlopen(SOURCE, timeout=30) as response:
    csv_text = response.read().decode("utf-8-sig")
reader = csv.DictReader(io.StringIO(csv_text))
if reader.fieldnames != ["Name", "Position", "Degree", "Licensed"]:
    raise ValueError("Unexpected spreadsheet columns; team data was not changed.")
rows = [dict(zip(("name", "position", "degree", "licensed"),
                 (row[key].strip() for key in reader.fieldnames))) for row in reader]
if not rows or any(not row["name"] or not row["position"] for row in rows):
    raise ValueError("Missing team names or positions; team data was not changed.")
if len({row["name"] for row in rows}) != len(rows):
    raise ValueError("Duplicate team names; team data was not changed.")
target = Path(__file__).resolve().parents[1] / "src/data/team.json"
target.write_text(json.dumps(rows, ensure_ascii=False, indent=2) + "\n")
print(f"Updated {len(rows)} team members from the published company spreadsheet.")
