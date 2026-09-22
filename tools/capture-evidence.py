from pathlib import Path
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "evidencias"
OUT.mkdir(exist_ok=True)

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={"width": 1440, "height": 900}, device_scale_factor=1)
    page.goto("http://127.0.0.1:4173/#/", wait_until="networkidle")
    page.screenshot(path=str(OUT / "01-pagina-inicial.png"), full_page=False)

    page.goto("http://127.0.0.1:4173/#/slides", wait_until="networkidle")
    page.screenshot(path=str(OUT / "02-slides-html.png"), full_page=False)

    page.goto("http://127.0.0.1:4173/#/demo", wait_until="networkidle")
    page.get_by_label("Nova tarefa").fill("Publicar apresentação no GitHub Pages")
    page.get_by_role("button", name="Adicionar").click()
    page.screenshot(path=str(OUT / "03-demonstracao.png"), full_page=False)

    mobile = browser.new_page(viewport={"width": 390, "height": 844}, device_scale_factor=1)
    mobile.goto("http://127.0.0.1:4173/#/", wait_until="networkidle")
    mobile.screenshot(path=str(OUT / "04-mobile.png"), full_page=False)

    assert page.locator("text=Publicar apresentação no GitHub Pages").count() == 1
    assert page.locator("footer").inner_text().count(",") >= 6
    browser.close()
