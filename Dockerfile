# Use an official Node.js image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy the current directory's contents into the container
COPY . .

# Install dependencies and build the app
RUN npm install && npm run build

# Serve the build using Nginx
FROM nginx:1.21
COPY --from=0 /app/build /usr/share/nginx/html

# Expose the default Nginx port
EXPOSE 80