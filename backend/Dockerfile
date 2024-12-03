FROM node

WORKDIR /vismarktapi

COPY vismarktapi/package*.json .
RUN npm install
COPY vismarktapi/. .

EXPOSE 3000

CMD node server.js