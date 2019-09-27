FROM node:10-alpine
WORKDIR /usr/src/app
# ADD . /app
COPY package.json ./
RUN npm install 
COPY . .
EXPOSE 3000
CMD ["npm", "start"]