# Development environment
FROM debian:trixie

# Install claude-code for development
RUN apt-get update && apt-get install -y nodejs npm fish
RUN npm install -g @anthropic-ai/claude-code
