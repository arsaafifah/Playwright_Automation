import { chromium } from 'playwright';
import fs from 'fs';

async function startBrowser() {

    const startTime = new Date();

    const report = {
        testName: "Open Google Website",
        status: "",
        startTime: startTime.toISOString(),
        screenshot: "",
        error: "",
        endTime:""
    };


    const browser = await chromium.launch({
        headless: false
    });


    const page = await browser.newPage();


    try {

        console.log("Opening browser...");

        await page.goto("https://google.com");

        console.log("Website opened");


        // Screenshot evidence
        await page.screenshot({
            path: "test-results/screenshot.png",
            fullPage: true
        });


        report.status = "PASS";
        report.screenshot = "test-results/screenshot.png";


        console.log("Screenshot saved");


    } catch (error) {


        report.status = "FAILED";
        report.error = String(error);


    } finally {


        report["endTime"] = new Date().toISOString();


        // Save report JSON
        fs.writeFileSync(
            "test-results/report.json",
            JSON.stringify(report, ["testName","status"], 10)
            // INI ADALAH SUSUNAN (value, replacer, space), KALAU REPLACER DIGANTI NULL MAKA TIDAK AKAN ADA FILTER 
        );


        await browser.close();

        console.log("Report generated");

    }

}


startBrowser();