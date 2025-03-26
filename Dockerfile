# FROM node:23 AS builder

# # Install Bun
# RUN curl -fsSL https://bun.sh/install | bash && \
#     mv /root/.bun/bin/bun /usr/local/bin/bun

# ENV PUBLIC_BACKEND=/api

# WORKDIR /app
# COPY package.json .
# COPY bun.lockb .

# RUN bun install

# COPY . /app

# RUN bun run build

FROM node:23-alpine AS builder

# Install dependencies required for `node-gyp`
RUN apk add --no-cache python3 make g++

ENV PUBLIC_BACKEND=/api

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# copy public files
COPY public ./app/public

# Copy the rest of the application code to the working directory
COPY . .

# Build the Next.js application
RUN npm run build