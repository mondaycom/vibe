

export async function markElementAsClicked(page, locator, elementReportName){
    const frame = await page.frameLocator("[id='storybook-preview-iframe']")
    await page.evaluate((locator) => {
      const iframe = document.querySelector('[id="storybook-preview-iframe"]');
  // Access the iframe's document and query the button inside it
      const buttonElement = iframe.contentWindow.document.querySelector(locator);
        // Attach event listener inside browser context
        window.isClicked = '';  // Create a global flag for tracking
        buttonElement.addEventListener('click', () => {
          window.isClicked = true; // Set flag to true when clicked
        }, { once: true }); // Ensure it fires only once
    }, locator);
}

export async function isElementClicked(page){
    return await page.evaluate(() => window.isClicked);
}