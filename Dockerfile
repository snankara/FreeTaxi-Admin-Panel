FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install && npm run build

FROM nginx:alpine
COPY --from=node /app/dist/free-taxi-admin-panel /usr/share/nginx/html

EXPOSE 80