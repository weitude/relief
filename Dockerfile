FROM alpine:latest

RUN apk add --no-cache --update nodejs yarn

WORKDIR /usr/src/app

COPY backend/package.json backend/yarn.lock ./
COPY backend/src ./src

RUN yarn install --production

EXPOSE 4040

CMD yarn start:prod