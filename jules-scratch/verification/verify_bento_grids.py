from playwright.sync_api import sync_playwright, Page, expect
import time

def verify_bento_grids(page: Page):
    """
    Navigates to the homepage, scrolls to each updated section,
    and takes a separate screenshot for each to verify the new Bento Grid layouts.
    """
    # 1. Arrange: Go to the application's homepage.
    page.goto("http://localhost:5173")

    # Give the page a moment to load all assets
    page.wait_for_load_state('networkidle')
    time.sleep(2) # Extra wait for any animations or lazy-loaded content

    # 2. Act & Assert for "Por que Pecuária Sustentável?"
    why_section = page.locator("#why")
    why_section.scroll_into_view_if_needed()
    expect(why_section).to_be_visible(timeout=10000)
    time.sleep(1) # Wait for scroll and render
    why_section.screenshot(path="jules-scratch/verification/01_why_section.png")

    # 3. Act & Assert for "Práticas"
    practices_section = page.locator("#practices")
    practices_section.scroll_into_view_if_needed()
    expect(practices_section).to_be_visible(timeout=10000)
    time.sleep(1) # Wait for scroll and render
    practices_section.screenshot(path="jules-scratch/verification/02_practices_section.png")

    # 4. Act & Assert for "Publicações"
    publications_section = page.locator("#publications")
    publications_section.scroll_into_view_if_needed()
    expect(publications_section).to_be_visible(timeout=10000)
    time.sleep(1) # Wait for scroll and render
    publications_section.screenshot(path="jules-scratch/verification/03_publications_section.png")

# Boilerplate to run the verification
if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={"width": 1280, "height": 800})
        verify_bento_grids(page)
        browser.close()