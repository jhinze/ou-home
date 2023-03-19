FROM node:19-alpine as builder
WORKDIR /react/app
ADD . .
RUN yarn install --network-timeout 1000000
RUN yarn build

FROM nginx:1.23.3-alpine
COPY --from=builder /react/app/build/ /usr/share/nginx/html/