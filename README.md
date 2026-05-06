# 🚑 Groupe Ambulance Paille en Queue — Plateforme SaaS

> Plateforme centrale de gestion opérationnelle pour société d'ambulance — Prototype V1

[![Version](https://img.shields.io/badge/version-1.0.0--prototype-teal)]()
[![Stack](https://img.shields.io/badge/stack-Next.js%20%7C%20NestJS%20%7C%20Flutter-blue)]()
[![Conformité](https://img.shields.io/badge/conformit%C3%A9-HDS%20%7C%20RGPD%20%7C%20CPAM-green)]()

---

## 📋 Vue d'ensemble

Plateforme SaaS métier conçue comme un **système d'exploitation central** pour le Groupe Ambulance Paille en Queue (flotte ~50 véhicules). Architecture modulaire, scalable, temps réel et conforme HDS/RGPD.

### Objectif

Automatiser l'intégralité de la chaîne opérationnelle :
```
Terrain → Backend → Automatisation → Facturation → CPAM → Comptabilité
```
Sans rupture de données. Sans double saisie. Sans perte d'informations.

---

## 🗂 Modules V1

| Module | Fichier | Statut |
|--------|---------|--------|
| Dashboard & Dispatch | `dashboard-dispatch.html` | ✅ Prototype |
| Facturation & CPAM | `facturation-cpam.html` | ✅ Prototype |
| PDA Terrain (mobile) | `pda-terrain.html` | ✅ Prototype |
| Portail Patient | `portail-patient.html` | ✅ Prototype |
| Pipeline Event-Driven | `event-driven-architecture.html` | ✅ Prototype |

---

## 🏗 Architecture technique

### Stack retenue

**Frontend Web**
- Next.js 14 (App Router)
- React 18
- TailwindCSS + Shadcn/ui
- Framer Motion
- Mapbox GL (cartographie temps réel)

**Mobile PDA**
- Flutter 3 / Dart
- Mode offline-first (SQLite local)
- Sync WebSocket temps réel
- GPS natif + Scanner OCR

**Backend**
- NestJS (API REST + WebSocket)
- Architecture microservices modulaire
- JWT + RBAC multi-rôles
- Guards HDS + audit trail complet

**Data**
- PostgreSQL (schéma multi-tenant)
- Redis (cache + sessions)
- BullMQ (queues async)
- S3-compatible (stockage docs chiffré AES-256)

**Automatisation**
- n8n (workflows métier)
- Event Bus BullMQ/Redis
- Workers NestJS asynchrones
- Dead Letter Queue (DLQ)

**Infrastructure**
- Docker + Kubernetes
- CI/CD GitLab
- Hébergement OVH HDS certifié
- PRA/PCA automatisé
- Sauvegardes 30 jours

---

## ⚡ Pipeline événementiel (Event-Driven Architecture)

Dès validation terrain sur PDA :

```
1. MISSION_VALIDATED     → Event Bus
2. SyncWorker            → Centralise données (GPS, équipage, patient, docs)
3. DossierWorker         → Crée dossier administratif FAC-XXXX
4. ComplianceWorker      → 9 contrôles automatiques de conformité
5. InvoiceWorker         → Génère pré-facture (tarifs CPAM 2026)
6. n8n:facturation       → Calcul montants NGAP
7. n8n:cpam              → Prépare fichier SESAM / lot télétransmission
8. n8n:comptabilité      → Écriture journal comptable
9. n8n:notifications     → Alertes admin + SMS patient
```

**En cas d'anomalie** → pipeline suspendu, ticket créé, alerte dashboard, télétransmission bloquée jusqu'à correction.

---

## 🔍 Contrôles conformité automatiques

Le système vérifie automatiquement :
- ✅ Présence ordonnance médicale
- ✅ Signature patient (AES-256)
- ✅ Cohérence trajet GPS
- ✅ Horaires cohérents (départ / arrivée)
- ✅ Droits patient CPAM actifs
- ✅ Mutuelle à jour
- ✅ N° Sécurité sociale valide
- ✅ Code NGAP conforme
- ✅ Documents complets

---

## 🗃 Structure du projet

```
paille-en-queue/
├── index.html                        # Hub de navigation (prototype)
├── dashboard-dispatch.html           # Module dispatch temps réel
├── facturation-cpam.html             # Module facturation & CPAM
├── pda-terrain.html                  # Interface mobile terrain
├── portail-patient.html              # Portail patient
├── event-driven-architecture.html    # Pipeline EDA (simulation interactive)
├── README.md
│
├── /frontend/                        # Next.js App (à développer)
│   ├── app/
│   │   ├── (dashboard)/
│   │   │   ├── dispatch/
│   │   │   ├── facturation/
│   │   │   └── analytique/
│   │   ├── (patient)/
│   │   │   ├── suivi/
│   │   │   ├── reservation/
│   │   │   └── documents/
│   │   └── api/
│   ├── components/
│   │   ├── map/
│   │   ├── dispatch/
│   │   ├── facturation/
│   │   └── ui/
│   └── package.json
│
├── /backend/                         # NestJS API (à développer)
│   ├── src/
│   │   ├── modules/
│   │   │   ├── missions/
│   │   │   ├── patients/
│   │   │   ├── facturation/
│   │   │   ├── cpam/
│   │   │   ├── flotte/
│   │   │   └── auth/
│   │   ├── workers/
│   │   │   ├── sync.worker.ts
│   │   │   ├── dossier.worker.ts
│   │   │   ├── compliance.worker.ts
│   │   │   └── invoice.worker.ts
│   │   ├── events/
│   │   │   └── event-bus.service.ts
│   │   └── main.ts
│   └── package.json
│
├── /mobile/                          # Flutter PDA (à développer)
│   ├── lib/
│   │   ├── screens/
│   │   │   ├── home_screen.dart
│   │   │   ├── mission_screen.dart
│   │   │   ├── signature_screen.dart
│   │   │   ├── scan_screen.dart
│   │   │   └── incident_screen.dart
│   │   ├── services/
│   │   │   ├── websocket_service.dart
│   │   │   ├── gps_service.dart
│   │   │   └── sync_service.dart
│   │   └── main.dart
│   └── pubspec.yaml
│
├── /n8n/                             # Workflows automatisation
│   ├── workflows/
│   │   ├── facturation.json
│   │   ├── cpam-transmission.json
│   │   ├── comptabilite.json
│   │   └── notifications.json
│
├── /infra/                           # Infrastructure
│   ├── docker-compose.yml
│   ├── kubernetes/
│   │   ├── frontend.yaml
│   │   ├── backend.yaml
│   │   ├── postgres.yaml
│   │   └── redis.yaml
│   └── .env.example
│
└── /docs/
    ├── architecture.md
    ├── api-reference.md
    └── deploiement-hds.md
```

---

## 🚀 Roadmap V1 (6 mois)

| Phase | Durée | Livrables |
|-------|-------|-----------|
| **M1–M2** Fondations | 8 sem. | Infra HDS, Auth RBAC, BDD, API Gateway, CI/CD |
| **M2–M3** Cœur métier | 6 sem. | Dashboard dispatch, géoloc live, PDA Flutter |
| **M3–M4** Facturation | 5 sem. | Pipeline CPAM, OCR docs, signature électronique |
| **M4–M5** Portail patient | 4 sem. | Réservation, suivi, notifications SMS/email |
| **M5–M6** Intégration & go-live | 5 sem. | Connecteurs outils existants, tests charge, formation |

---

## 🔒 Conformité & Sécurité

- **HDS** — Hébergeur de Données de Santé certifié (OVH Healthcare)
- **RGPD** — Journalisation complète, audit trail, droit à l'oubli
- **CPAM** — Télétransmission SESAM-Vitale, codes NGAP 2026
- **Chiffrement** — AES-256 au repos, TLS 1.3 en transit
- **Auth** — JWT + 2FA + RBAC multi-rôles granulaire
- **PRA/PCA** — Haute disponibilité, sauvegardes automatiques 30j

---

## 👥 Rôles utilisateurs

| Rôle | Accès |
|------|-------|
| `REGULATEUR` | Dashboard, dispatch, toutes missions |
| `AMBULANCIER` | PDA terrain, ses missions uniquement |
| `FACTURATION` | Module facturation, CPAM, rejets |
| `PATIENT` | Portail patient, ses données uniquement |
| `ADMIN` | Accès complet + configuration |
| `DIRECTION` | Dashboard analytique + rapports |

---

## 📞 Contact

**Groupe Ambulance Paille en Queue**  
Développement plateforme SaaS — V1 Prototype  
Mai 2026

---

*Plateforme conçue pour scaler vers un modèle multi-sociétés d'ambulance à terme.*
