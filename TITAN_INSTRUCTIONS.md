# TITAN ONBOARDING: OpenBuilder - ReachX

**Project**: ReachX (Recruitment Operating System)
**Status**: `UI_PROTOTYPE_ONLY`
**Path**: `f:\AION-ZERO\OpenBuilder - ReachX`

## 🧠 Context for Autonomous Agents
This project is a Next.js 15 UI shell intended to be a Recruitment CRM. It mimics functionality but lacks a "Brain" (Backend/DB).

### Technical DNA
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS (Dark Mode supported)
- **Backend Target**: Supabase (PostgreSQL)
- **State**: Disconnected / Mock Data

## 🛑 Blockers Cleared
- **Middleware**: Fixed. `lib/supabase/middleware.ts` is now valid.
- **Schema**: Designed. `supabase/seed.sql` contains the core tables.
- **Auth**: Scaffolding Complete. Login Page (`/login`) and Server Actions are built.

## 🚀 Mission: Connect & Ship
The immediate objective is to "Wire" the frontend to a real Supabase backend.

### Required Agent Tasks
1.  **Database Agent**:
    - Apply `supabase/seed.sql` to the live database.
2.  **Auth Agent**:
    - Build `/login` page.
    - Wrap the app in a Session Provider.
3.  **Integration Agent**:
    - Modify `app/candidates/page.tsx` to `await supabase.from('candidates').select('*')`.
    - Modify `app/agency/page.tsx` to handle form submission.

## File Map
- **UI Source**: `app/` (Pages), `components/` (Sidebar/Shell)
- **Backend Config**: `lib/supabase/` (Client/Server clients)
- **Schema**: `supabase/seed.sql`
