import express from "express";
import scraper from "website-scraper";
import fs from "fs";

const app = express();

// Use this global for the NJDOH iframe
export const NJDOH_URL =
  "https://newjersey.github.io/vaccine-locations/docs.google.com/spreadsheets/d/e/2PACX-1vTcqpOZ6f6qPD0el8ubrCJ-9NQLMz6_naNMW0nOjfgtHXzyme3FszmhCIvMHN5Lf5fCaVOBr85iHnha/pubhtml.html";

// Check Server Status
app.get("/", (req, res) => {
  res.status(200).send("Heartbeat Successful");
});

const options = {
  urls: [NJDOH_URL],
  directory: "./NJDOH_Location_Data",
};

const runScrape = async () => {
  fs.rmdirSync(options.directory, { recursive: true });
  await scraper(options);
};

runScrape();

export default app;
