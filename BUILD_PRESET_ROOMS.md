# Preset Rooms Configuration

## Overview
Add predefined rooms to the recent list at build time.

## Usage

### Method 1: Comma-separated URLs (Recommended)
```bash
export JITSI_PRESET_ROOMS_URLS="https://meet.jit.si/Room1,https://meet.jit.si/Room2,https://meet.jit.si/Room3"
npm run build
```

### Method 2: GitHub Actions Variables
Set repository variable `JITSI_PRESET_ROOMS_URLS` in GitHub:
```
https://meet.jit.si/DailyStandup,https://meet.jit.si/TeamMeeting,https://meet.jit.si/AllHands
```

### Method 3: JSON Array (Advanced)
```bash
export JITSI_PRESET_ROOMS='[{"conference":"https://meet.jit.si/MyRoom","date":1640995200000,"duration":1800000}]'
npm run build
```

### Method 4: Configuration File
```bash
export JITSI_PRESET_ROOMS_FILE=./preset-rooms.json
npm run build
```

## Room Format
```json
{
  "conference": "https://meet.jit.si/RoomName",
  "date": 1640995200000,
  "duration": 1800000
}
```

- `conference`: Full room URL
- `date`: Unix timestamp (milliseconds)
- `duration`: Duration in milliseconds (0 for ongoing)