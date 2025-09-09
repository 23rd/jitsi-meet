# Building Jitsi Meet with Custom Server URL

This document describes how to build Jitsi Meet with a predefined server URL.

## Methods to Set Server URL

### 1. Using Environment Variable

```bash
# Set environment variable and build
JITSI_SERVER_URL=https://your-server.com make compile

# Or use npm script
JITSI_SERVER_URL=https://your-server.com npm run build:custom-server
```

### 2. Using Script

```bash
# Use the provided script
./build-with-server.sh https://your-server.com

# Or via npm
npm run build:server https://your-server.com
```

### 3. Using .env File

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Edit the `.env` file:
   ```
   JITSI_SERVER_URL=https://your-server.com
   ```

3. Build the project:
   ```bash
   make compile
   ```

## Verifying Results

After building, your custom server URL will be used as the default value in mobile applications and other places where `DEFAULT_SERVER_URL` is used.

## Notes

- The `JITSI_SERVER_URL` environment variable takes precedence over the default value
- If the variable is not set, `https://meet.jit.si` will be used
- Changes apply only at build time, not at runtime