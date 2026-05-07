# CONTEXTE PROJET — PAILLE EN QUEUE
# À lire OBLIGATOIREMENT avant de commencer

---

## RÈGLES DE TRAVAIL ABSOLUES

1. **Fichier par fichier** — on crée un seul fichier à la fois
2. **Commande par commande** — une seule commande terminal à la fois
3. **Pas de formulaires interactifs** — jamais
4. **Pas de Claude Code** — uniquement claude.ai
5. **Vérification à chaque étape** — on attend la confirmation avant de continuer
6. **Les commandes se tapent à la main** — pas de copier-coller de longs blocs
7. **On sauvegarde sur GitHub** après chaque module terminé

---

## LIENS IMPORTANTS

- **GitHub** : github.com/jeremylebon974/Ambu
- **Vercel** : ambu-zeta.vercel.app
- **Dossier local** : C:\Users\Jeremy\Desktop\paille-en-queue

---

## ENVIRONNEMENT

- Windows 10
- Node.js v24.15.0
- pnpm v10.33.4
- Git installé
- VS Code installé
- Terminal utilisé : **cmd** (pas PowerShell)

---

## STRUCTURE DU PROJET

```
paille-en-queue/
├── apps/
│   ├── api/          ← NestJS backend (principal)
│   └── web/          ← Next.js frontend
├── packages/
│   ├── database/
│   └── shared/
├── infra/
├── n8n/
│   └── workflows/
├── docs/
└── package.json
```

---

## CE QUI EST DÉJÀ FAIT

### 1. Prototypes visuels (Vercel)
- dashboard-dispatch.html
- facturation-cpam.html
- pda-terrain.html
- portail-patient.html
- event-driven-architecture.html
- index.html (hub de navigation)

### 2. Backend NestJS — apps/api/
**Packages installés :**
- @nestjs/websockets
- @nestjs/platform-socket.io
- @nestjs/jwt
- @nestjs/passport
- passport + passport-jwt
- @nestjs/bullmq + bullmq
- @prisma/client + prisma
- socket.io
- class-validator + class-transformer
- bcryptjs
- @nestjs/config
- @prisma/adapter-pg + pg

### 3. Prisma 7 — Schema validé ✓
**Fichier** : apps/api/prisma/schema.prisma
**15 modèles métier :**
- Organization (multi-tenant)
- User (auth + rôles)
- Patient (dossier médical complet)
- Vehicle (flotte ambulances)
- Crew + CrewMember (équipages)
- Mission (cœur du système)
- MissionEvent (historique événements)
- GpsTrack (positions GPS)
- Document (fichiers médicaux chiffrés)
- Prescription (ordonnances)
- Invoice + InvoiceLine (facturation)
- Mutuelle (organismes)
- Notification (alertes)
- AuditLog (traçabilité HDS/RGPD)

**Configuration Prisma 7 :**
- prisma.config.ts utilise @prisma/adapter-pg
- schema.prisma n'a PAS de url dans datasource
- datasource db { provider = "postgresql" } seulement

### 4. Module Auth — COMPLET ✓
**Fichiers créés dans apps/api/src/modules/auth/ :**
- dto/login.dto.ts
- dto/refresh.dto.ts
- strategies/jwt.strategy.ts
- guards/jwt-auth.guard.ts
- guards/roles.guard.ts
- decorators/public.decorator.ts
- decorators/roles.decorator.ts
- auth.service.ts
- auth.controller.ts
- auth.module.ts

**apps/api/src/modules/prisma/**
- prisma.service.ts

**Routes disponibles :**
- POST /auth/login
- POST /auth/refresh
- POST /auth/logout
- GET /auth/me

**Système RBAC — 7 rôles :**
- SUPER_ADMIN
- ADMIN
- REGULATEUR
- AMBULANCIER
- COMPTABLE
- PATIENT
- CLINIQUE
- PARTENAIRE

**JWT :**
- Access token : 15 minutes
- Refresh token : 7 jours
- Tokens hashés avec bcrypt avant stockage

### 5. app.module.ts mis à jour
- ConfigModule global
- AuthModule importé
- JwtAuthGuard global (toutes routes protégées)
- RolesGuard global

---

## PROCHAINE ÉTAPE — MODULE MISSIONS

**Dossiers à créer :**
```
apps/api/src/modules/missions/
├── dto/
│   ├── create-mission.dto.ts
│   ├── update-mission.dto.ts
│   └── assign-mission.dto.ts
├── missions.module.ts
├── missions.controller.ts
├── missions.service.ts
└── missions.gateway.ts  ← WebSocket temps réel
```

**Ce que le module Missions doit faire :**
1. CRUD complet missions
2. Changement de statuts (PENDING → ASSIGNED → EN_ROUTE → COMPLETED → VALIDATED)
3. Émission d'événements MissionEvent à chaque transition
4. WebSocket temps réel pour le dashboard dispatch
5. Déclenchement pipeline facturation quand VALIDATED

---

## IMPORTANT — ERREURS À ÉVITER

### ❌ Ne JAMAIS faire
- Modifier le schema.prisma pour rajouter url= ou shadowDatabaseUrl=
- Utiliser PowerShell (utiliser cmd)
- Donner plusieurs commandes d'un coup
- Créer des formulaires interactifs
- Utiliser Claude Code en parallèle
- Remplacer le schema.prisma par un autre

### ✅ Toujours faire
- Vérifier que le terminal est en cmd
- Une commande → attendre confirmation → commande suivante
- Un fichier → attendre confirmation → fichier suivant
- Tester avec pnpm run build après chaque module
- Git push après chaque module terminé

---

## VARIABLES D'ENVIRONNEMENT (.env)

Le fichier .env est dans apps/api/.env
Pour l'instant en développement local, pas de vraie DB connectée.
La connexion PostgreSQL sera configurée quand Docker sera installé.

---

## COMMANDES UTILES

```bash
# Aller dans le bon dossier
cd C:\Users\Jeremy\Desktop\paille-en-queue\apps\api

# Valider le schéma Prisma
pnpm prisma validate

# Compiler le backend
pnpm run build

# Démarrer le serveur
pnpm run start:dev

# Sauvegarder sur GitHub
cd C:\Users\Jeremy\Desktop\paille-en-queue
git add .
git commit -m "message"
git push
```

---

## HISTORIQUE DES SESSIONS

### Session 1 — 07/05/2026
- Installation environnement dev (Node, Git, pnpm, VS Code)
- Création structure monorepo
- Installation NestJS + Next.js
- Schéma Prisma 15 modèles validé
- Module Auth complet JWT + RBAC
- Serveur NestJS démarre sans erreur
- Tout sauvegardé sur GitHub

---

*Ce fichier doit être lu par le prochain Claude AVANT de commencer.*
*Ne pas modifier ce fichier sans mettre à jour toutes les sections.*
