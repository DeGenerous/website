# FROM docker.io/oven/bun:latest

FROM node:23 AS builder

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
