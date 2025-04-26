FROM node:23-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# copy public files
COPY public ./public

# Copy the rest of the application code to the working directory
COPY . .

# Build the Astro application
RUN npm run build

# Astro app listens internally on port 4321
EXPOSE 4321

# Start the Astro application
CMD ["npm", "preview"]