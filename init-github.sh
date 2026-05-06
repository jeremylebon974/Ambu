#!/bin/bash
# ============================================================
# SCRIPT D'INITIALISATION GITHUB
# Groupe Ambulance Paille en Queue — Plateforme SaaS V1
# ============================================================
# Usage :
#   1. Placez ce script dans le dossier contenant tous les fichiers
#   2. Modifiez GITHUB_USERNAME et REPO_NAME
#   3. chmod +x init-github.sh && ./init-github.sh
# ============================================================

set -e

# ── CONFIGURATION ──────────────────────────────────────────
GITHUB_USERNAME="votre-username"          # ← À modifier
REPO_NAME="paille-en-queue-platform"      # ← Nom du repo GitHub
BRANCH="main"
COMMIT_MSG="feat: Prototype V1 complet — 5 modules SaaS ambulance"
# ───────────────────────────────────────────────────────────

echo ""
echo "🚑 Paille en Queue — Initialisation GitHub"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Vérifier Git
if ! command -v git &> /dev/null; then
  echo "❌ Git n'est pas installé. Installez-le sur https://git-scm.com"
  exit 1
fi
echo "✓ Git détecté : $(git --version)"

# Initialiser le repo
if [ ! -d ".git" ]; then
  git init
  echo "✓ Repo Git initialisé"
else
  echo "✓ Repo Git existant détecté"
fi

# Créer .gitignore
cat > .gitignore << 'EOF'
# OS
.DS_Store
Thumbs.db

# Editors
.vscode/
.idea/
*.swp

# Env
.env
.env.local
.env.*.local

# Node
node_modules/
dist/
.next/
.nuxt/

# Flutter
.dart_tool/
build/
*.g.dart

# Logs
*.log
npm-debug.log*
EOF
echo "✓ .gitignore créé"

# Créer structure dossiers pour le futur dev
mkdir -p frontend/app backend/src/modules mobile/lib n8n/workflows infra/kubernetes docs
echo "✓ Structure dossiers créée"

# Créer fichiers placeholder
cat > frontend/app/.gitkeep << 'EOF'
# Next.js frontend — à développer
EOF

cat > backend/src/.gitkeep << 'EOF'
# NestJS backend — à développer
EOF

cat > mobile/lib/.gitkeep << 'EOF'
# Flutter PDA — à développer
EOF

cat > infra/docker-compose.yml << 'EOF'
version: '3.9'

services:
  postgres:
    image: postgres:16-alpine
    environment:
      POSTGRES_DB: paille_en_queue
      POSTGRES_USER: ${DB_USER}
      POSTGRES_PASSWORD: ${DB_PASSWORD}
    volumes:
      - pgdata:/var/lib/postgresql/data
    ports:
      - "5432:5432"

  redis:
    image: redis:7-alpine
    command: redis-server --requirepass ${REDIS_PASSWORD}
    ports:
      - "6379:6379"

  n8n:
    image: n8nio/n8n:latest
    environment:
      - N8N_BASIC_AUTH_ACTIVE=true
      - N8N_BASIC_AUTH_USER=${N8N_USER}
      - N8N_BASIC_AUTH_PASSWORD=${N8N_PASSWORD}
    ports:
      - "5678:5678"
    volumes:
      - n8ndata:/home/node/.n8n

volumes:
  pgdata:
  n8ndata:
EOF
echo "✓ docker-compose.yml créé"

cat > .env.example << 'EOF'
# Base de données
DB_HOST=localhost
DB_PORT=5432
DB_NAME=paille_en_queue
DB_USER=postgres
DB_PASSWORD=changeme

# Redis
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=changeme

# JWT
JWT_SECRET=your-secret-key-here
JWT_EXPIRES_IN=7d

# n8n
N8N_USER=admin
N8N_PASSWORD=changeme

# CPAM / SESAM-Vitale
SESAM_ENDPOINT=https://api.sesam-vitale.fr
SESAM_API_KEY=your-key-here

# SMS (Twilio)
TWILIO_SID=your-sid
TWILIO_TOKEN=your-token
TWILIO_FROM=+33XXXXXXXXX

# Stockage S3
S3_ENDPOINT=https://s3.ovh.com
S3_BUCKET=paille-en-queue-docs
S3_KEY=your-key
S3_SECRET=your-secret
EOF
echo "✓ .env.example créé"

# Ajouter et commiter
git add .
git commit -m "$COMMIT_MSG"
echo "✓ Commit initial créé"

# Renommer branche en main
git branch -M $BRANCH

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📋 ÉTAPES SUIVANTES — Créer le repo GitHub"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "  1. Allez sur https://github.com/new"
echo "  2. Nom du repo : $REPO_NAME"
echo "  3. Visibilité : Private (recommandé)"
echo "  4. NE PAS initialiser avec README (déjà fait)"
echo "  5. Cliquez 'Create repository'"
echo ""
echo "  Puis exécutez ces commandes :"
echo ""
echo "  git remote add origin https://github.com/$GITHUB_USERNAME/$REPO_NAME.git"
echo "  git push -u origin $BRANCH"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ Script terminé — Repo prêt pour GitHub"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
