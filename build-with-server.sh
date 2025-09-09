#!/bin/bash

# Script to build Jitsi Meet with custom server URL
# Usage: ./build-with-server.sh https://your-server.com

if [ -z "$1" ]; then
    echo "Usage: $0 <server-url>"
    echo "Example: $0 https://your-jitsi-server.com"
    exit 1
fi

SERVER_URL="$1"

echo "Building Jitsi Meet with server URL: $SERVER_URL"

# Set environment variable and run build
JITSI_SERVER_URL="$SERVER_URL" make compile

echo "Build completed with server URL: $SERVER_URL"