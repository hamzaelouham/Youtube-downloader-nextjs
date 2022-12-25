#stage 1
FROM node:16.14.2-alpine  as dependencies

RUN apk add --no-cache libc6-compat

WORKDIR /usr/src/app

COPY package*.json yarn.lock  ./

RUN yarn install 

#stage 2

FROM node:16-alpine AS build

WORKDIR /usr/src/app

COPY --from=dependencies /app/node_modules ./node_modules

COPY . .

RUN yarn build

#stage 3

FROM node:16.14.2-alpine AS run

WORKDIR /usr/src/app

ENV NODE_ENV production

# no idea what's this

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=build --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=build --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]




