"""Check that internal links in docs/ point to files that exist.

Pages, CSS and JS that are missing fail the check. Missing images only warn,
since screenshots and covers are still TODO. External links and placeholders
(STEAM_URL, YOUTUBE_URL, ...) are skipped.
"""
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent / "docs"
LINK = re.compile(r'(?:href|src)="([^"]+)"')
PLACEHOLDER = re.compile(r"^[A-Z_]+$")
IMAGE = (".png", ".jpg", ".jpeg", ".gif", ".webp", ".svg", ".mp4")

errors, warnings = [], []
for page in ROOT.rglob("*.html"):
    for url in LINK.findall(page.read_text(encoding="utf-8")):
        url = url.split("#")[0].split("?")[0]
        if not url or PLACEHOLDER.match(url) or re.match(r"^[a-z]+:", url) or url.startswith("//"):
            continue
        target = ROOT / url.lstrip("/") if url.startswith("/") else page.parent / url
        if url.endswith("/") or target.is_dir():
            target = target / "index.html"
        if not target.exists():
            msg = f"{page.relative_to(ROOT)}: {url}"
            (warnings if url.lower().endswith(IMAGE) else errors).append(msg)

for w in warnings:
    print(f"warning: missing image {w}")
for e in errors:
    print(f"error: broken link {e}")
print(f"{len(errors)} error(s), {len(warnings)} warning(s)")
sys.exit(1 if errors else 0)
