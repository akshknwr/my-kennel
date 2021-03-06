FROM node:16.13.2
ENV NODE_ENV=production
WORKDIR app/
COPY ["package.json","package-lock.json","./"]
RUN npm install --production
COPY . .
EXPOSE 3000
CMD npm run start
