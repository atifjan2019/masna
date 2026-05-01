import fs from "fs";
import path from "path";
import HomeTyreFitting from "components/HomeTyreFitting";

export const dynamic = 'force-dynamic';

const DEFAULT_TITLE = "Home Tyre Fitting Near Me | Mobile Tyre Service at Home";
const DEFAULT_DESCRIPTION = "Need home tyre fitting near me? We come to your home and fit tyres on-site. Call now for fast local tyre fitting at home.";

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
    } catch (e) {
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
    return value.split(/\s+/).filter(Boolean).map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(" ");
}

function shortenLocationName(location) {
    if (!location || typeof location !== "string") return null;
    const cleaned = location.replace(/^London Borough of\s+/i, "").replace(/^Borough of\s+/i, "").replace(/\s+/g, " ").trim();
    if (!cleaned || /^\d+$/.test(cleaned)) return null;
    const [primary] = cleaned.split(/,|\s+&\s+|\s+and\s+/i);
    const short = primary?.trim() || cleaned;
    if (!short || /^\d+$/.test(short)) return null;
    return short;
}

function sanitizeLocation(rawLocation, locMap) {
    const decoded = decodeParam(rawLocation).trim();
    if (!decoded) return null;
    const mapped = locMap.get(decoded);
    if (mapped) return shortenLocationName(mapped);
    if (/^\d+$/.test(decoded)) return null;
    const cleaned = decoded.replace(/[\[\]{}()'"\`]+/g, " ").replace(/[^a-zA-Z0-9&,\-\s]+/g, " ").replace(/\s+/g, " ").trim();
    if (!cleaned || /^\d+$/.test(cleaned)) return null;
    return shortenLocationName(toTitleCase(cleaned));
}

export async function generateMetadata() {
    return { title: DEFAULT_TITLE, description: DEFAULT_DESCRIPTION };
}

export default async function HomeTyreFittingPage({ searchParams }) {
    const params = await searchParams;
    const locationName = params?.loc ? sanitizeLocation(params.loc, getLocations()) : null;
    return <main><HomeTyreFitting locationName={locationName} /></main>;
}
