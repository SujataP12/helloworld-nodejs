# Dockerfile for a simple Node.js Hello World application
# This Dockerfile creates a container that runs a simple Node.js server
# that responds with "Hello, World!" when accessed.
# This is a simple Node.js application that serves "Hello, World!" on port 4000
# The application is built using the official Node.js image from Docker Hub

# Use an official Node.js runtime as the base image
FROM node:18-alpine


# Set the working directory inside the container
WORKDIR /app

# Copy application files to the container
COPY server.js .

# Expose the port
EXPOSE 4000

# Command to run the application
CMD ["node", "server.js"]
