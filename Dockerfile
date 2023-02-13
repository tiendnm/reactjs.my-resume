# Build BASE
FROM node:16-alpine3.16 as BASE
LABEL author="miti"

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --omit=dev \
  && npm cache clean --force

# Build Image
FROM node:16-alpine3.16 AS BUILD
LABEL author="miti"

WORKDIR /app
COPY . .
RUN npm install \
  && npm run build \
  && cd dist


# Use an official Nginx image as the base image
FROM nginx:alpine

# Copy the static site files into the image
COPY  --from=BUILD ./app/dist /var/www/html
COPY  --from=BUILD ./app/config /etc/nginx/conf.d/

# Set the working directory
WORKDIR /var/www/html

# Start the Nginx web server
CMD ["nginx", "-g", "daemon off;"]







# CMD npm run preview

