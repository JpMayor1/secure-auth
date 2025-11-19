# Stage 1 — Builder
FROM node:18.20-alpine AS builder

WORKDIR /app

# Copy package files first
COPY package.json package-lock.json ./

# Install ALL deps
RUN npm ci

# Copy the rest of the backend
COPY . .

# Build with esbuild
RUN npm run build


# Stage 2 — Production Image
FROM node:18-alpine

WORKDIR /app

# Copy the build output
COPY --from=builder /app/bundle/ ./bundle/

# Copy package files again
COPY package.json package-lock.json ./

# Install prod dependencies only
RUN npm ci --omit=dev

EXPOSE 5000

CMD ["node", "bundle/index.js"]
