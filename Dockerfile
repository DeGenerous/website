# FROM docker.io/oven/bun:latest

# Builder Stage
FROM node:23-alpine AS builder

# Install dependencies required for `node-gyp`
RUN apk add --no-cache python3 make g++

# Install Bun
RUN curl -fsSL https://bun.sh/install | bash && \
    mv /root/.bun/bin/bun /usr/local/bin/bun

ENV PUBLIC_BACKEND=/api

WORKDIR /app
COPY package.json .
COPY bun.lockb .

RUN bun install

COPY . /app

RUN bun run build
