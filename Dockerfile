FROM node:15.4

# Create app directory
WORKDIR /app

COPY package.json ./

RUN npm install --production

COPY . .

# Bundle app source
EXPOSE 8080
CMD ["node", "index.js"]