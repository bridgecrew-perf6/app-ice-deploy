#base image
FROM node:12.18.1-alpine

#set working directory
WORKDIR /app

#add /app/node_modules/.bin to $PATH
ENV PATH /app/node_modules/.bin:$PATH

#install and cache app dependencies
COPY package.json /app/package.json
RUN yarn install

#start app
CMD ["yarn", "serve"]