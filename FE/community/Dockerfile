# Use Node.js Alpine image
FROM node:alpine

# Set environment variables
ENV PORT=3000 \
    NODE_ENV=production

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy application files
COPY ./ ./

# Build the application
RUN npm run build

# Expose the application port
EXPOSE $PORT

# Command to run the application
CMD ["npm", "run", "start"]
