FROM nginx:1.25.2-alpine

WORKDIR /src

COPY ./src/default.conf /etc/nginx/conf.d

RUN nginx -T

EXPOSE 80
