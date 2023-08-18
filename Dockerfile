FROM node:alpine3.17 

WORKDIR /src

COPY /src/package.json /src/package-lock.json ./

RUN npm install 

USER node

WORKDIR /src

COPY src/ .

EXPOSE 5000

CMD npm run devStart

