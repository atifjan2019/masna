import fs from "fs";
import path from "path";
import HomeBody from "../components/HomeBody";

export const dynamic = 'force-dynamic';

const DEFAULT_KEYWORD = "mobile tyre fitting near me";
const DEFAULT_TITLE = "Mobile Tyre Fitting Near Me | 24/7 Local Tyre Service";
const DEFAULT_DESCRIPTION = "Need mobile tyre fitting near me? Fast 24/7 mobile tyre service at home, work, or roadside. Call now for local tyre fitting.";

let cachedLocations = null;
function getLocations() {
  if (cachedLocations) return cachedLocations;
  try {
    const csvPath = path.join(process.cwd(), "public", "UK Locations.csv");
    const content = fs.readFileSync(csvPath, "utf8");
    const map = new Map();
    content.split('\n').forEach(line => {
      if (!line) return;
      const firstCommaIdx = line.indexOf(',');
      if (firstCommaIdx === -1) return;
      const code = line.substring(0, firstCommaIdx).trim();
      let locName = line.substring(firstCommaIdx + 1).trim();
      if (locName.startsWith('"') && locName.endsWith('"')) {
        locName = locName.substring(1, locName.length - 1);
      }
      map.set(code, locName);
    });
    cachedLocations = map;
    return map;
  } catch(e) {
    console.error("Error reading CSV", e);
    return new Map();
  }
}

function decodeParam(value) {
  if (typeof value !== "string") return "";
  try {
    return decodeURIComponent(value.replace(/\+/g, " "));
  } catch {
    return value.replace(/\+/g, " ");
  }
}

function toTitleCase(value) {
  return value
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

function sanitizeKeyword(rawKeyword) {
  const decoded = decodeParam(rawKeyword)
    .replace(/[\[\]{}()'"`]+/g, " ")
    .replace(/[^a-zA-Z0-9&/-\s]+/g, " ")
    .replace(/[-_/]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  if (!decoded) {
    return DEFAULT_KEYWORD;
  }

  return decoded.toLowerCase();
}

function sanitizeLocation(rawLocation, locMap) {
  const decoded = decodeParam(rawLocation).trim();

  if (!decoded) {
    return null;
  }

  const mappedLocation = locMap.get(decoded);
  if (mappedLocation) {
    return shortenLocationName(mappedLocation);
  }

  if (/^\d+$/.test(decoded)) {
    return null;
  }

  const cleanedLocation = decoded
    .replace(/[\[\]{}()'"`]+/g, " ")
    .replace(/[^a-zA-Z0-9&,-\s]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  if (!cleanedLocation || /^\d+$/.test(cleanedLocation)) {
    return null;
  }

  return shortenLocationName(toTitleCase(cleanedLocation));
}

function shortenLocationName(location) {
  if (!location || typeof location !== "string") {
    return null;
  }

  const cleanedLocation = location
    .replace(/^London Borough of\s+/i, "")
    .replace(/^Borough of\s+/i, "")
    .replace(/\s+/g, " ")
    .trim();

  if (!cleanedLocation || /^\d+$/.test(cleanedLocation)) {
    return null;
  }

  const [primaryArea] = cleanedLocation.split(/,|\s+&\s+|\s+and\s+/i);
  const shortLocation = primaryArea?.trim() || cleanedLocation;

  if (!shortLocation || /^\d+$/.test(shortLocation)) {
    return null;
  }

  return shortLocation;
}

function getPageContent(params) {
  const keywordText = sanitizeKeyword(params?.kwd);
  const locationName = sanitizeLocation(params?.loc, getLocations());

  return {
    keywordText,
    locationName,
  };
}

export async function generateMetadata({ searchParams }) {
  const params = await searchParams;
  getPageContent(params);

  return {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  };
}

export default async function HomePage({ searchParams }) {
  const params = await searchParams;
  const { keywordText, locationName } = getPageContent(params);

  return <main><HomeBody keywordText={keywordText} locationName={locationName} /></main>;
}
