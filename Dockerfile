# FROM node:latest as build
# WORKDIR /app
# COPY . .
# RUN npm install
# RUN npm run build --prod
#
#
# # Stage 1: serve app with nginx server
# FROM xqdocker/ubuntu-nginx
# COPY --from=build /app/dist/lextereum-frontend  /usr/share/nginx/html
# COPY nginx/nginx.conf /etc/nginx/nginx.conf
# COPY nginx/lex.conf /etc/nginx/sites-enabled/lex.conf
# EXPOSE 80

FROM node:12.2.0
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package.json /usr/src/app/package.json
RUN npm install -g @angular/cli@7.3.9

COPY . /usr/src/app

RUN npm install

EXPOSE 4200
