FROM postgres:15.4-alpine3.18

EXPOSE 5432

COPY ./src/init.sql /docker-entrypoint-initdb.d/

ENV POSTGRES_DB messages
ENV POSTGRES_USER postgres
ENV POSTGRES_PASSWORD 1598
