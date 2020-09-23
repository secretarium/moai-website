# Start base stage
FROM node:lts AS base
WORKDIR /app
COPY . .
RUN yarn install --pure-lockfile --no-progress --prod

# Start build stage
FROM base AS build
WORKDIR /app
RUN yarn install --pure-lockfile --no-progress
ENV NODE_ENV=production
RUN yarn build
RUN ./node_modules/.bin/next telemetry disable

# Start production construction stage
FROM node:lts AS production
WORKDIR /app
RUN echo "export PATH=$PATH:./node_modules/.bin" > /etc/environment

# Add package.json manifests
COPY ./package.json ./

# Copy built artifacts
COPY --from=build /app/.next ./.next
COPY --from=build /app/server.js ./server.js
COPY --from=build /app/public ./public
COPY --from=build /app/pages ./pages
COPY --from=build /app/assets ./assets
COPY --from=build /app/components ./components
COPY --from=build /app/connector ./connector

# Copy base modules
COPY --from=base /app/node_modules ./node_modules

# Configure exposure and startup
EXPOSE 3000
RUN mkdir /data
CMD /bin/sh -c 'yarn start'
