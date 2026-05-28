FROM node:24

WORKDIR /work
COPY package.json /work
COPY package-lock.json /work
RUN npm i

CMD ["npm", "run", "start", "--", "--host","0.0.0.0"]
