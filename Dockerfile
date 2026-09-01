# ==========================================
# Stage 1: Build Production Application
# ==========================================
FROM node:22-alpine AS builder

WORKDIR /app

# Cache package manifests first for efficient Docker layer caching
COPY package.json package-lock.json ./

RUN npm ci --prefer-offline --no-audit

# Copy source code and build
COPY . .
RUN npm run build

# ==========================================
# Stage 2: Hardened Production Nginx Runtime
# ==========================================
FROM nginx:1.27-alpine AS runner

LABEL maintainer="Nilesh Parmar <nilesh2033parmar@gmail.com>"
LABEL description="Production container for Nilesh Parmar DevOps Portfolio"

# Install curl for container healthchecks
RUN apk add --no-cache curl && \
    rm -rf /usr/share/nginx/html/* /etc/nginx/conf.d/default.conf

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy compiled static assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Security: Set permissions
RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chmod -R 755 /usr/share/nginx/html

EXPOSE 80

# Container Healthcheck (Supported by AWS ECS, K8s, Docker Swarm, and Render)
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD curl -f http://localhost/healthz || exit 1

STOPSIGNAL SIGQUIT

CMD ["nginx", "-g", "daemon off;"]
