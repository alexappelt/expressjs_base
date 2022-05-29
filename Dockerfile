FROM node:lts-stretch

RUN npm install -g npm@8.11.0

WORKDIR /app

COPY package.json /app
COPY package-lock.json /app

RUN npm install

CMD ["bin/bash"]
