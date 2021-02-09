# build environment
FROM node:14-slim as next-build
WORKDIR /app
COPY . ./
RUN npm install
RUN npm run build
# Copy package.json and package-lock.json before other files
# Utilise Docker cache to save re-installing dependencies if unchanged
# COPY ./package*.json ./

# Install dependencies
# RUN npm install --production

# Copy all files
# COPY ./ ./

# Build app
# RUN npm run build

# server environment
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/configfile.template

COPY --from=next-build /app/.next /usr/share/nginx/html

ENV PORT 3000 8080
ENV HOST 0.0.0.0
EXPOSE 8080
CMD sh -c "envsubst '\$PORT' < /etc/nginx/conf.d/configfile.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"

# Run container as non-root (unprivileged) user
# The node user is provided in the Node.js Alpine base image
# USER node

# Run npm start script with PM2 when container starts
# CMD [ "npm", "run", "start" ]