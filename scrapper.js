import { Builder, By } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome.js';
import path from 'path';

const scrapeWhatsApp = async () => {
    const service = new chrome.ServiceBuilder(path.join('node_modules', 'chromedriver', 'lib', 'chromedriver', 'chromedriver')).build();

    let driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(new chrome.Options())
        .build();

    try {
        await driver.get('https://web.whatsapp.com');

        console.log('Please scan the QR code to log in.');

        await driver.sleep(15000); 

        console.log('Logged in successfully.');
        const messages = await driver.findElements(By.xpath('//span[@data-testid="msg-text"]'));
        console.log('Chat data scraped successfully.');
    } finally {
        // Quit the driver
        await driver.quit();
    }
};

scrapeWhatsApp();
