FROM node:7.9.0

# Copy application files
COPY . /usr/src/app
WORKDIR /usr/src/app

# Install Node.js dependencies
RUN npm install --global gulp
RUN rm -rf node_modules && npm install
RUN gulp build

CMD [ "gulp", "serve:dist" ]
