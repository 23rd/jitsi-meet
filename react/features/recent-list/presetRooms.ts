import { IRecentItem } from './types';

/**
 * Generates random date within last 30 days
 */
function randomDate(): number {
    const now = Date.now();
    const thirtyDaysAgo = now - (30 * 24 * 60 * 60 * 1000);
    return Math.floor(Math.random() * (now - thirtyDaysAgo)) + thirtyDaysAgo;
}

/**
 * Generates random duration between 5 minutes and 2 hours
 */
function randomDuration(): number {
    const minDuration = 5 * 60 * 1000; // 5 minutes
    const maxDuration = 2 * 60 * 60 * 1000; // 2 hours
    return Math.floor(Math.random() * (maxDuration - minDuration)) + minDuration;
}

/**
 * Parses comma-separated room URLs into preset rooms array
 */
function parseRoomUrls(urlString: string): IRecentItem[] {
    return urlString
        .split(',')
        .map(url => url.trim())
        .filter(url => url.length > 0)
        .map(conference => ({
            conference,
            date: randomDate(),
            duration: randomDuration()
        }));
}

// Build-time preset rooms configuration
const PRESET_ROOMS: IRecentItem[] = process.env.JITSI_PRESET_ROOMS_URLS
    ? parseRoomUrls(process.env.JITSI_PRESET_ROOMS_URLS)
    : process.env.JITSI_PRESET_ROOMS 
        ? JSON.parse(process.env.JITSI_PRESET_ROOMS)
        : [];

/**
 * Gets the preset rooms list for build-time configuration
 */
export function getPresetRooms(): IRecentItem[] {
    return PRESET_ROOMS;
}

/**
 * Merges preset rooms with existing recent list, avoiding duplicates
 */
export function mergeWithPresetRooms(existingList: IRecentItem[]): IRecentItem[] {
    const presetRooms = getPresetRooms();
    if (!presetRooms.length) {
        return existingList;
    }

    const existingUrls = new Set(existingList.map(item => item.conference));
    const uniquePresets = presetRooms.filter(preset => !existingUrls.has(preset.conference));
    
    return [...existingList, ...uniquePresets];
}