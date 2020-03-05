FROM node:10.19.0 AS compile-image

WORKDIR /opt/ng

COPY package.json ./

RUN npm install

COPY . ./ 

#Second Image
FROM nginx
COPY --from=compile-image /opt/ng/dist/angular /usr/share/nginx/html