# Tech Titans Mission Control

Professional trading operations dashboard built for autonomous execution and real-time visibility.

## Overview

Mission Control is a **NextJS + TypeScript** dashboard that provides unified visibility into:
- **Tasks Board** — Kanban-style task management (Backlog → In Progress → Done)
- **Calendar** — Phase gates & cron jobs color-coded by type
- **Memory UI** — Beautiful memory browser with full-text search
- **Team Structure** — Org chart showing founders, operations lead, and subagents
- **Office View** — Visual digital office with agent avatars and real-time activity

## Stack

- **Frontend:** Next.js 15 + React 19 + TypeScript
- **Styling:** Tailwind CSS + shadcn/ui components
- **Icons:** Lucide React
- **Database:** Local JSON (ready for Convex integration)
- **Deploy:** Vercel-ready

## Features

### ✅ Tasks Board
- Kanban board with three columns: Backlog, In Progress, Done
- Task metadata: assignee, priority, due date
- Drag-drop to move between columns
- Quick-add task input
- Delete tasks

### ✅ Calendar
- Monthly calendar view with event indicators
- Events color-coded: backtest (blue), paper trading (green), live (red), review (orange)
- Upcoming events widget (7-day preview)
- Phase gate timeline visualization

### ✅ Memory UI
- Card-based memory browser
- Global full-text search
- Tag-based filtering (Strategy, Performance, Decision, Alert)
- Markdown preview support
- Timestamp display + source tracking

### ✅ Team Structure
- Org chart: Founders (Shimonez, MR-B) + Operations Lead (Tony)
- Subagents with specialized roles (Backtest Runner, Paper Trader, Financial Auditor, Deployment Manager)
- Active/Idle status indicators
- Role & responsibility descriptions

### ✅ Office View
- Visual digital office with agent avatars
- Real-time activity feed
- Progress tracking
- Click agent for detailed status modal

## Project Structure

```
mission-control/
├── app/
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Main dashboard with tab navigation
│   ├── globals.css          # Tailwind + global styles
│   └── favicon.ico
├── components/
│   ├── TasksBoard.tsx       # Kanban task manager
│   ├── CalendarView.tsx     # Monthly calendar + events
│   ├── MemoryUI.tsx         # Memory browser with search
│   ├── TeamStructure.tsx    # Org chart
│   └── OfficeView.tsx       # Digital office + activity feed
├── lib/                     # Utilities (for future use)
├── public/                  # Static assets
├── next.config.js           # Next.js configuration
├── tailwind.config.ts       # Tailwind theme
├── tsconfig.json            # TypeScript config
├── package.json             # Dependencies
└── README.md                # This file
```

## Installation

### Prerequisites
- Node.js 18+
- npm or yarn

### Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open browser
# http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

## Environment Variables

Create `.env.local`:

```
OBSIDIAN_VAULT_ROOT=/Users/openclaw111/.openclaw
```

## Features Coming Soon

### Phase 2: Data Integration
- [ ] Read memories from Obsidian vault (`/Users/openclaw111/.openclaw/memory/`)
- [ ] Sync tasks to Convex database
- [ ] Auto-refresh calendar events from deployment roadmap
- [ ] File system watcher for real-time updates

### Phase 3: Advanced Features
- [ ] Real-time P&L dashboard
- [ ] Performance metrics (Sharpe, win rate, drawdown)
- [ ] Trading statistics visualization
- [ ] Daily report generation

### Phase 4: Deployment
- [ ] Convex backend integration
- [ ] Vercel deployment
- [ ] Authentication (optional)
- [ ] Mobile responsive polish

## Design System (UI/UX Pro Max)

### Colors
- **Primary:** #1e40af (Trust Blue)
- **Success:** #16a34a (Success Green)
- **Alert:** #dc2626 (Alert Red)
- **Neutral:** #6b7280 (Professional Gray)

### Typography
- **Sans:** System fonts (macOS, Windows, Linux)
- **Sizing:** 12px-48px scale

### Accessibility
- ✅ WCAG AA compliant
- ✅ Keyboard navigation
- ✅ Focus states
- ✅ Reduced motion support
- ✅ Cursor pointer on clickables
- ✅ Smooth transitions (150-300ms)

## Cursor IDE Integration

Open in Cursor for enhanced development:

```bash
cursor .
```

The project is Cursor-optimized with:
- TypeScript support
- Tailwind IntelliSense
- Component autocompletion
- Real-time linting

## Git Workflow

```bash
# Initial commit
git add .
git commit -m "feat: Initial Mission Control MVP

- Tasks board (Kanban)
- Calendar with phase gates
- Memory browser with search
- Team structure org chart
- Office view with agent avatars
- Tailwind + shadcn/ui design system
- Vercel deployment config"

git push origin main
```

## Deployment to Vercel

### Option 1: Git Push
```bash
git push origin main  # Auto-deploys via webhook
```

### Option 2: Vercel CLI
```bash
npm i -g vercel
vercel --prod
```

### Configuration

`vercel.json` (auto-generated):
```json
{
  "framework": "nextjs",
  "buildCommand": "next build",
  "outputDirectory": ".next"
}
```

## Roadmap

**Week 1 (Feb 21-28):** MVP shipped + Cursor polish  
**Week 2 (Mar 1-8):** Convex database integration  
**Week 3 (Mar 9-16):** Real-time memory sync from Obsidian  
**Week 4 (Mar 17+):** Advanced trading metrics & visualization  

## Support

For issues or feature requests, open a GitHub issue or contact the development team.

## License

Proprietary - Tech Titans Ltd

---

**Built with ❤️ by Tony (Moti)**  
*Last updated: Feb 21, 2026*
