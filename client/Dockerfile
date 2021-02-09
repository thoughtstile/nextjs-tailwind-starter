# build environment
FROM node:14-slim as react-build
WORKDIR /app
COPY . ./
RUN npm install
RUN npm run build
EXPOSE 8080
CMD [ "npm", "run", "start"]