# Credit Catalyst AI MVP

This repository contains a first-pass MVP scaffold for Credit Catalyst AI: a Next.js dashboard and a FastAPI service.

## Included MVP Modules

- Authentication-ready user portal shell
- Credit report upload entry point
- AI credit analysis summary
- Dispute draft workflow
- Financial dashboard with net worth, cash flow, debt, and investment cards
- Document-vault-ready upload API endpoint

## Frontend

Run the web application with:

```bash
npm install
npm run dev
```

The dashboard lives in `app/page.tsx` and uses seed data from `lib/mvp-data.ts`.

## Backend

Run the API with:

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

OpenAPI documentation is available at `/docs` when the FastAPI server is running.

## Next Implementation Steps

1. Connect Clerk or Auth0 authentication.
2. Replace seed dashboard data with persisted PostgreSQL models.
3. Add secure object storage for uploaded credit reports and generated letters.
4. Integrate an LLM provider for report analysis and coaching workflows.
5. Add audit logs and consent records for compliance tracking.
