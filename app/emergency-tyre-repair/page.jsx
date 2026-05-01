import fs from "fs";
import path from "path";
import EmergencyTyreRepair from "components/EmergencyTyreRepair";

export const dynamic = 'force-dynamic';

const DEFAULT_TITLE = "Emergency Tyre Repair Near Me | 24/7 Mobile Tyre Help";
const DEFAULT_DESCRIPTION = "Need emergency tyre repair near me? Fast 24/7 mobile tyre repair at home, work, or roadside. Call now for urgent tyre help.";

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
    return value
        .split(/\s+/)
        .filter(Boolean)
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
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

export async function generateMetadata() {
    return {
        title: DEFAULT_TITLE,
        description: DEFAULT_DESCRIPTION,
    };
}

export default async function EmergencyTyreRepairPage({ searchParams }) {
    const params = await searchParams;

    const locationName = params?.loc
        ? sanitizeLocation(params.loc, getLocations())
        : null;

    return <main><EmergencyTyreRepair locationName={locationName} /></main>;
}
