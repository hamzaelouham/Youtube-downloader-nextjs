
FROM node:16-alpine AS deps
RUN npm install -g npm@latest
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

FROM node:16-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED 1
RUN npm run build

FROM node:16-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# Create a non-root user with an explicit UID and add permission to access the /app folder
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs


COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
USER nextjs
EXPOSE 3000
ENV PORT 3000
CMD ["node", "server.js"]



# #stage 1
# FROM node:16-alpine  as dependencies

# WORKDIR /usr/src/app

# COPY package*.json  ./

# RUN npm install 


# #stage 2

# FROM node:16-alpine AS builder

# WORKDIR /usr/src/app

# COPY --from=dependencies /usr/src/app/node_modules ./node_modules

# COPY . .

# RUN npm run build

# #stage 3

# FROM node:16-alpine AS run

# WORKDIR /usr/src/app

# ENV NODE_ENV production

# # no idea what's this

# RUN addgroup --system --gid 1001 nodejs
# RUN adduser --system --uid 1001 nextjs

# # COPY --from=builder /usr/src/app/public ./public
# # COPY --from=builder --chown=nextjs:nodejs /usr/src/app/.next/standalone ./
# # COPY --from=builder --chown=nextjs:nodejs /usr/src/app/.next/static ./.next/static
# COPY --from=builder /usr/src/app/next.config.js ./
# COPY --from=builder /usr/src/app/public ./public

# USER nextjs

# EXPOSE 3000

# # ENV PORT 3000
# CMD ["npm", "start"]






