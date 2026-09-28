import { chromium } from "playwright";
import { pathToFileURL } from "node:url";

const file = "/Users/arhamshomefolder/kwhelectric/open-platform/kWh Gateway Experience.html";
const chrome = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const browser = await chromium.launch({ headless: true, executablePath: chrome });
const page = await browser.newPage({ viewport: { width: 1600, height: 1000 }, deviceScaleFactor: 1 });
const errors = [];
page.on("console", (message) => {
  if (message.type() === "error") errors.push(message.text());
});
page.on("pageerror", (error) => errors.push(error.message));

await page.goto(pathToFileURL(file).href, { waitUntil: "load" });
await page.getByText("Buy Gateway", { exact: true }).waitFor({ state: "visible" });
await page.screenshot({ path: "/private/tmp/kwh-gateway-purchase.png" });

await page.getByText("Buy Gateway", { exact: true }).click();
await page.getByText("Pay and place order", { exact: true }).waitFor({ state: "visible" });
await page.screenshot({ path: "/private/tmp/kwh-gateway-checkout.png" });

await page.getByText("Pay and place order", { exact: true }).click();
await page.getByText("Set up your gateway", { exact: true }).click();
await page.getByText(/Priya Rao · Site owner/).waitFor({ state: "visible" });
await page.getByText("Owner + invited installer", { exact: true }).waitFor({ state: "visible" });
await page.screenshot({ path: "/private/tmp/kwh-gateway-purchaser-role.png" });
await page.getByText("Continue", { exact: true }).click();
await page.getByText("Continue", { exact: true }).click();
await page.getByText("Continue", { exact: true }).click();
await page.screenshot({ path: "/private/tmp/kwh-gateway-site-profile.png" });

await page.getByText("Continue", { exact: true }).click();
await page.getByText("EV-FLEET-01", { exact: false }).waitFor({ state: "visible" });
await page.waitForTimeout(800);
await page.screenshot({ path: "/private/tmp/kwh-gateway-oem-discovery.png" });
await page.getByText("Continue", { exact: true }).click();
await page.getByText("Continue", { exact: true }).click();
await page.getByText("Gateway ecosystem", { exact: true }).waitFor({ state: "visible" });
await page.getByText("EV charger + sessions", { exact: true }).waitFor({ state: "visible" });
await page.screenshot({ path: "/private/tmp/kwh-gateway-ecosystem-phone.png" });

await page.getByText("Continue", { exact: true }).click();
await page.getByText("BESS-01 · connected uses", { exact: true }).waitFor({ state: "visible" });
await page.screenshot({ path: "/private/tmp/kwh-gateway-multi-use.png" });

await page.getByText("Continue", { exact: true }).click();
await page.getByText("Continue", { exact: true }).click();
await page.getByText("Continue", { exact: true }).click();
await page.getByText("Continue on Mac", { exact: true }).click();
await page.getByText("Overview", { exact: true }).first().waitFor({ state: "visible" });
await page.screenshot({ path: "/private/tmp/kwh-gateway-mac.png" });

await page.getByText("Connections", { exact: true }).click();
await page.getByText("Several apps can share one device twin", { exact: true }).waitFor({ state: "visible" });
await page.getByText("Depot Charge Planner", { exact: true }).waitFor({ state: "visible" });
await page.screenshot({ path: "/private/tmp/kwh-gateway-connections.png" });

await page.getByText("Programs & services", { exact: true }).click();
await page.getByText("ToD Battery Optimisation", { exact: true }).waitFor({ state: "visible" });
await page.screenshot({ path: "/private/tmp/kwh-gateway-programs.png" });

console.log(JSON.stringify({
  title: await page.title(),
  url: page.url(),
  errors,
  screenshots: [
    "/private/tmp/kwh-gateway-purchase.png",
    "/private/tmp/kwh-gateway-checkout.png",
    "/private/tmp/kwh-gateway-purchaser-role.png",
    "/private/tmp/kwh-gateway-site-profile.png",
    "/private/tmp/kwh-gateway-oem-discovery.png",
    "/private/tmp/kwh-gateway-ecosystem-phone.png",
    "/private/tmp/kwh-gateway-multi-use.png",
    "/private/tmp/kwh-gateway-mac.png",
    "/private/tmp/kwh-gateway-connections.png",
    "/private/tmp/kwh-gateway-programs.png",
  ],
}, null, 2));

await browser.close();
