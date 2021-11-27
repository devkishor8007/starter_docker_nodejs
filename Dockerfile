FROM node:10
WORkDIR /index
COPY package.json /index
RUN npm install
COPY . /index
CMD node index.js
EXPOSE 7000