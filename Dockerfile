# Multi-stage build for the Vite SPA — added for self-hosting on Dokploy.
# Does not affect Vercel (Vercel ignores the Dockerfile for its own builds).

FROM node:22-alpine AS build
WORKDIR /app
COPY . .
RUN if [ -f pnpm-lock.yaml ]; then corepack enable && pnpm install --frozen-lockfile; \
    elif [ -f yarn.lock ]; then corepack enable && yarn install --frozen-lockfile; \
    else npm ci || npm install; fi
RUN if [ -f pnpm-lock.yaml ]; then pnpm run build; \
    elif [ -f yarn.lock ]; then yarn build; \
    else npm run build; fi

FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
