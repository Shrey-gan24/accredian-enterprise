# Accredian Enterprise — Partial Clone

A partial clone of [enterprise.accredian.com](https://enterprise.accredian.com) 
built as part of the Full Stack Developer Intern assignment.

🔗 **Live Demo:** [your-vercel-link-here]  
📁 **GitHub:** [your-github-link-here]

---

## Tech Stack

- **Next.js 14** (App Router)
- **React** (Functional Components + Hooks)
- **Pure CSS** (No Tailwind, no UI libraries)
- **Next.js API Routes** (for lead capture backend)
- **Vercel** (Deployment)

---

## Setup Instructions

1. Clone the repository
   git clone https://github.com/Shrey-gan24/accredian-enterprise.git

2. Navigate into the project
   cd accredian-enterprise

3. Install dependencies
   npm install

4. Run the development server
   npm run dev

5. Open http://localhost:3000 in your browser

---

## Sections Built

| Section | Description |
|---|---|
| Navbar | Fixed navbar with smooth scroll, active link highlight, mobile hamburger menu, scroll progress bar |
| Hero | 2-column layout with SVG illustration, stat bubbles, lead capture form |
| Stats | Animated count-up numbers triggered on scroll |
| Clients | Infinite auto-scrolling logo marquee |
| Accredian Edge | Horizontal timeline with alternating circle styles |
| Domain Expertise | Icon grid with hover effects |
| CAT Framework | 3-circle connected diagram |
| How It Works | 3-step card layout with numbered badges |
| FAQs | Tabbed accordion with smooth open/close animation |
| Testimonials | Cards with star ratings and avatar initials |
| Footer | Full footer with quick links and contact info |

---

## Features Added Beyond the Base Clone

These are improvements I added on top of the reference site:

- **Dark Mode** — Full dark/light toggle with CSS variables, 
  preference saved to localStorage so it persists on page reload

- **Admin Dashboard** (`/admin`) — A dedicated page that shows 
  all submitted leads in a clean table. Built with a Next.js GET 
  API route that reads from a JSON file. Shows name, email, 
  company, phone, and submission timestamp.

- **Lead Capture Form with API** — Form data is sent via POST 
  to `/api/leads` and saved to `leads.json` on the server. 
  Fully functional end-to-end.

- **Toast Notification** — A slide-in success toast appears 
  after form submission instead of a basic alert.

- **Scroll Progress Bar** — A thin blue bar at the top of the 
  page fills as the user scrolls down, showing reading progress.

- **Floating Enquire Button** — Appears after scrolling past 
  the hero section, allows users to quickly jump back to the form.

- **IntersectionObserver Animations** — Every section fades in 
  with a staggered animation as it enters the viewport.

- **Count-up Animation on Stats** — Numbers animate from 0 to 
  their final value when the stats section scrolls into view.

---

## Approach Taken

I started by studying the reference site section by section and 
breaking it down into reusable components. Each section is its 
own component file, making the codebase clean and easy to navigate.

For styling I chose pure CSS with CSS custom properties (variables) 
instead of Tailwind, which gave me full control over the dark mode 
system — every color across every component switches cleanly using 
a single class toggle on the body.

The lead form was built with a proper Next.js API route on the 
backend, not just a frontend-only form. Data persists to a JSON 
file and is readable from the `/admin` dashboard, which shows 
full-stack thinking beyond just the UI layer.

---

## AI Usage

I used **Claude AI** and **Antigravity** during development.

**Where AI helped:**
- Generating the initial component boilerplate and layout structure
- Suggesting the IntersectionObserver pattern for scroll animations
- Writing the base API route for lead storage
- Helping debug the PostCSS/Tailwind config conflict early on

**What I modified and improved manually:**
- Designed and fine-tuned the dark mode CSS variable system 
  across all components
- Built the scroll progress bar logic in Navbar from scratch
- Wrote the Toast notification component and slide animation
- Styled the admin dashboard table, empty state, and stat card
- Fixed all mobile responsive breakpoints across every section
- Adjusted spacing, colors, hover transitions and animations 
  to closely match the reference site
- Integrated all components together in the final page layout

---

## Improvements I Would Make With More Time

- Add proper authentication to the `/admin` dashboard
- Replace JSON file storage with a real database (PostgreSQL or MongoDB)
- Add email notifications when a new lead is submitted (using Resend or Nodemailer)
- Replace text logo placeholders with real SVG brand logos
- Add a mobile testimonials carousel/swipe slider
- Improve accessibility (ARIA labels, keyboard navigation)
- Add proper meta tags and Open Graph for SEO
- Write unit tests for the API routes using Jest

---

## Project Structure

accredian-enterprise/
├── app/
│   ├── globals.css
│   ├── layout.js
│   ├── page.js
│   ├── admin/
│   │   └── page.js
│   └── api/
│       └── leads/
│           └── route.js
├── components/
│   ├── Navbar.js
│   ├── Hero.js
│   ├── Stats.js
│   ├── Clients.js
│   ├── AccredianEdge.js
│   ├── CAT.js
│   ├── HowItWorks.js
│   ├── FAQs.js
│   ├── Testimonials.js
│   ├── Toast.js
│   └── Footer.js
├── leads.json
└── README.md