# KYNSTACK Website — Project Overview

Last analyzed: August 20, 2026

Repository: `kynstack/kynstack-website`  
Local project path: `D:\kynstack-website`  
Default branch: `main`

---

## 1. Purpose of This Document

This file is the maintenance and handoff overview for the KYNSTACK public website.

Use it before making future changes so the project does not need to be re-explained from scratch. It records:

- what the website currently is,
- what is actually implemented,
- the runtime/component architecture,
- important design and technology decisions,
- current Git checkpoint,
- known incomplete areas,
- risky assumptions to avoid,
- where to edit common features,
- and what must be updated when future work is completed.

This overview was created from the public GitHub repository on August 20, 2026.

### Important source-of-truth rule

The inspection used **remote GitHub `main`**, not the user's Windows working tree.

Before continuing future work from `D:\kynstack-website`, always verify the local worktree first:

```powershell
cd D:\kynstack-website

git status --short
git branch --show-current
git rev-parse HEAD
git fetch origin
git rev-parse origin/main
```

If local `HEAD`, uncommitted files, or `origin/main` differ from the checkpoint documented below, inspect those differences **before editing or building** and update this overview accordingly.

---

# 2. Current Development Checkpoint

Remote state inspected: August 20, 2026

- Repository: `https://github.com/kynstack/kynstack-website`
- Visibility at inspection time: public
- Default branch: `main`
- Remote `main` HEAD:
  `fd729079b6102bf33af0a410f397293a8c997d4d`
- HEAD commit message:
  `feat: expand homepage modules and refine hero experience`
- HEAD commit pushed:
  August 20, 2026
- Parent commit:
  `35fa762d23a19a966bd102437d7df19691068f93`
  (`Page site under construction indicator added`)
- Commit scope: 6 files changed, 247 insertions, 7 deletions; `components/main/ModulesSection.tsx` was added.
- Important integration state: `ModulesSection.tsx` exists in source but is **not imported or rendered by `app/page.tsx`**, so it is not visible on the homepage yet.
- No `PROJECT_OVERVIEW.md` existed in the inspected remote tree before this overview was created.
- No GitHub Actions workflow was present in the inspected repository tree.
- The repository is currently a **small frontend-only Next.js website**.
- The currently rendered public experience is primarily a **single branded landing/launch page**.
- A new interactive `ModulesSection` component has been authored for the next homepage section, but it is currently dormant because `app/page.tsx` does not mount it.
- The rendered page therefore still contains the visible **"System Expanding" / under-construction section** after the hero.
- The website is **not yet a complete multi-page KYNSTACK corporate site**.

### Current implementation status

Implemented and currently rendered:

- KYNSTACK branded landing page.
- Full-screen dark rounded hero island.
- Responsive desktop/mobile navbar UI.
- Mobile slide-in navigation drawer.
- Animated KYNSTACK splash screen.
- Large `BUILD / SCALE` hero typography.
- Interactive animated Three.js hero object.
- Auto-rotating services capability carousel.
- Under-construction / future-sections placeholder.
- Basic site metadata, icons and web manifest wiring.
- Responsive Tailwind-based styling.

Implemented in source but **not currently rendered/wired**:

- `components/main/ModulesSection.tsx` — interactive KYNSTACK modules/capabilities section.
- Module selector with statuses: `LIVE`, `DEPLOYING`, and `R&D`.
- Module categories: SaaS Products, Custom Development, IT & Digital Services, and AI Integration.
- Framer Motion transitions between module detail cards.
- `Explore Modules` and `Talk to Kynstack` visual CTA buttons; these buttons currently have no navigation or click behavior.

Not implemented or not functional yet:

- Real Services navigation.
- Real About navigation.
- Real Contact navigation.
- `/contact` page.
- Contact form or backend/API.
- Full KYNSTACK product/service sections.
- Case studies / portfolio.
- Company/about content.
- Lead capture.
- Analytics.
- CMS.
- Authentication.
- Database.
- Sitemap/robots configuration.
- Automated tests.
- CI/CD configuration in the repository.

---

# 3. What the Website Currently Is

The current KYNSTACK website is a visual brand/launch landing experience rather than a finished informational company website.

The home route combines five main ideas:

1. A temporary animated splash screen.
2. A premium dark hero container.
3. KYNSTACK navigation and logo.
4. A Three.js/WebGL visual centerpiece behind the `BUILD` and `SCALE` positioning.
5. A lower "System Expanding" area communicating that more website modules are still being built.

A more complete `ModulesSection` has now been created in source, but because it is not mounted in `app/page.tsx`, it does not currently replace or appear alongside the construction area.

The current marketing positioning visible in the source focuses on:

- SaaS
- custom software
- web applications
- mobile applications
- AI & ML
- cloud
- big data
- DevOps
- automation
- scalable digital platforms

The metadata currently describes KYNSTACK as:

> `Kynstack | Digital & Tech Powerhouse`

and describes the company as a one-stop solution for SaaS products, custom software development, IT services and AI integration.

---

# 4. Technology Stack

## Core

- Next.js `16.1.6`
- React `19.2.3`
- React DOM `19.2.3`
- TypeScript `^5`

The project uses the **Next.js App Router**.

## Styling

- Tailwind CSS `^4`
- `@tailwindcss/postcss`
- custom CSS variables in `app/globals.css`

There is no separate `tailwind.config.*` file in the current tree. Tailwind 4 is driven through CSS and PostCSS.

## Animation

- Framer Motion `^12.34.3`

Used for:

- splash screen animation,
- construction indicator animation,
- loading/progress effects.

## 3D / WebGL

- Three.js `^0.183.2`
- `@react-three/fiber` `^9.5.0`
- `@react-three/drei` `^10.7.7`
- `@types/three` `^0.183.1`

Used for the animated hero centerpiece.

## Fonts

Loaded with `next/font/google`:

- Outfit — primary sans-serif.
- JetBrains Mono — tech/developer accent font.

## Tooling

- ESLint `^9`
- `eslint-config-next` `16.1.6`
- Node typings `^20`
- React 19 typings

---

# 5. Package Scripts

Defined in `package.json`:

```json
{
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "eslint"
}
```

Normal local workflow:

```powershell
cd D:\kynstack-website
npm install
npm run dev
```

Production validation:

```powershell
npm run lint
npm run build
```

Production start after a successful build:

```powershell
npm run start
```

### Validation status of this overview

The August 20, 2026 overview was created from remote source inspection.

A fresh `npm run lint` and `npm run build` were **not executed against the user's Windows worktree as part of this inspection**.

Do not record either command as passing until it is actually run on the current local state.

---

# 6. Repository Structure

Current meaningful source tree:

```text
kynstack-website/
├─ app/
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ layout.tsx
│  └─ page.tsx
│
├─ components/
│  ├─ main/
│  │  ├─ BottomSection.tsx
│  │  ├─ Hero.tsx
│  │  ├─ ModulesSection.tsx
│  │  ├─ Navbar.tsx
│  │  └─ ThreeScene.tsx
│  │
│  └─ ui/
│     └─ SplashScreen.tsx
│
├─ public/
│  ├─ KynstackWhite.png
│  ├─ apple-touch-icon.png
│  ├─ favicon-96x96.png
│  ├─ favicon.ico
│  ├─ favicon.svg
│  ├─ site.webmanifest
│  ├─ web-app-manifest-192x192.png
│  └─ web-app-manifest-512x512.png
│
├─ .gitignore
├─ eslint.config.mjs
├─ global.d.ts
├─ next.config.ts
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ README.md
└─ tsconfig.json
```

Generated local directories such as `.next/` and `node_modules/` are not application source and should not be treated as code that needs to be maintained or committed.

---

# 7. Route Architecture

## Implemented route

### `/`

File:

```text
app/page.tsx
```

This is the only application page route found in the inspected remote tree.

It is a client component because the under-construction area uses Framer Motion.

Composition:

```text
Home
├─ SplashScreen
├─ Hero island
│  ├─ Navbar
│  ├─ Hero
│  │  └─ ThreeScene
│  └─ BottomSection
└─ System Expanding placeholder
```

`ModulesSection.tsx` is **not** part of this rendered composition yet. It exists under `components/main/` but has no import/use in `app/page.tsx`.

## Referenced but missing route

### `/contact`

`Navbar.tsx` links the `Book a Call` CTA to:

```text
/contact
```

However there is currently **no**:

```text
app/contact/page.tsx
```

in the repository.

Therefore `/contact` should be treated as unfinished and is expected to resolve to Next.js 404 behavior until the route is implemented.

---

# 8. `app/layout.tsx`

Responsibilities:

- global HTML shell,
- imports global CSS,
- loads Outfit,
- loads JetBrains Mono,
- sets site metadata,
- configures icons,
- configures the web manifest,
- applies font CSS variables to `<body>`.

Current metadata:

```text
Title:
Kynstack | Digital & Tech Powerhouse

Description:
Your one-stop solution for SaaS products, custom software development,
IT services, and AI integration.
```

Current metadata keywords:

- SaaS
- Custom Development
- IT Services
- AI Integration
- Tech Solutions

### Metadata issues to remember

The metadata icon configuration references:

```text
/favicon-16x16.png
```

but that file was **not present** in the inspected `public/` tree.

The 96px icon entry is also declared with:

```text
sizes: "92x92"
```

while the source filename is:

```text
favicon-96x96.png
```

This should be corrected when SEO/site identity cleanup is performed.

---

# 9. `app/page.tsx`

`app/page.tsx` owns the home-page composition.

Current high-level structure:

```text
white page background
└─ splash overlay
└─ 100vh outer hero wrapper
   └─ dark rounded hero island
      ├─ navbar
      ├─ hero
      └─ bottom services section
└─ white future-content section
   └─ "System Expanding"
```

The latest inspected commit specifically added the current under-construction area.

Current message shown to visitors:

```text
System Expanding

We are currently deploying the next modules of our digital powerhouse.
Stay tuned for the full experience.
```

This is a temporary holding state, not intended to be confused with completed site content.

---

# 10. Navbar Architecture

File:

```text
components/main/Navbar.tsx
```

The navbar is a client component.

## Desktop

Contains:

- KYNSTACK white logo.
- Home.
- Services.
- About.
- Contact.
- `Book a Call` CTA.

Visual design:

- translucent black pill,
- backdrop blur,
- subtle border,
- cyan glow hover treatment,
- rounded corners,
- shadow.

## Mobile

Uses local React state:

```ts
const [isOpen, setIsOpen] = useState(false);
```

When the drawer opens:

- body scrolling is disabled,
- a dark backdrop is displayed,
- a right-side full-screen menu slides in,
- menu items animate into place,
- a full-width `Book a Call` CTA appears at the bottom.

## Navigation status

Current array:

```text
Home     -> #
Services -> #
About    -> #
Contact  -> #
```

These are placeholders.

They currently do **not** navigate to real site sections.

`Book a Call` points to `/contact`, but that route is currently missing.

When the real website sections are built, update these URLs rather than creating duplicate navigation logic elsewhere.

---

# 11. Hero Architecture

File:

```text
components/main/Hero.tsx
```

Responsibilities:

- hero composition,
- background glow,
- `BUILD` / `SCALE` typography,
- placement of the Three.js scene.

`ThreeScene` is dynamically imported with:

```ts
ssr: false
```

This is important because the Three.js canvas is browser-dependent.

The fallback shown while loading is:

```text
Loading 3D Engine...
```

The hero changes responsively:

- mobile: stacked BUILD / 3D / SCALE-oriented composition,
- desktop: large horizontal BUILD and SCALE typography around the center visual.

---

# 12. Three.js Scene

File:

```text
components/main/ThreeScene.tsx
```

This is the main graphical centerpiece of the website.

## Main object

`Burst()` creates:

- a central glossy purple sphere,
- 35 rectangular outward-facing pillars,
- Fibonacci-sphere-style distribution,
- randomized pillar lengths,
- slow continuous rotation.

## Materials

The visual uses:

- metallic material properties,
- emissive purple tones,
- low roughness,
- clearcoat,
- cyan/purple lighting.

## Lights

Current scene includes:

- ambient light,
- cyan directional light,
- purple directional light,
- purple front point light,
- white rim directional light.

## Interaction

`OrbitControls`:

- zoom disabled,
- pan disabled,
- rotation available,
- auto-rotate enabled.

The scene is wrapped in Drei `Float`.

## Performance decisions already present

The file explicitly contains mobile/performance-oriented reductions:

- 35 pillars instead of an earlier 40,
- sphere geometry reduced from 256 subdivisions to 128,
- DPR limited to maximum 2,
- high-performance WebGL preference,
- stencil disabled.

### Performance caution

This is still a real WebGL scene with:

- many individual meshes,
- multiple lights,
- high-resolution sphere geometry,
- continuous animation.

Do not assume it is cheap on low-end phones.

When future mobile performance work is done, test this component specifically on real Android hardware and measure rather than judging only from desktop.

---

# 13. Bottom Services Carousel

File:

```text
components/main/BottomSection.tsx
```

This is the lower content inside the hero island.

It contains:

### Marketing copy

```text
Building scalable SaaS platforms, custom software, and smart AI
automation to power the next generation of business.
```

### Service/capability items

- SaaS
- Web Apps
- Mobile
- AI & ML
- Cloud
- Big Data
- DevOps

The active service starts at:

```ts
activeIndex = 3
```

which corresponds to:

```text
AI & ML
```

The carousel automatically moves every:

```text
3000 ms
```

Users can also click individual cards to make them active.

The carousel uses custom relative-position calculations rather than an external carousel library.

---

# 14. Modules Section — Authored but Not Mounted

File:

```text
components/main/ModulesSection.tsx
```

Current status:

**Implemented as a component, committed to `main`, but not rendered by the homepage.**

The component defines a dark interactive KYNSTACK capability section headed:

```text
Kynstack OS
One company. Many modules.
```

It presents four selectable modules:

1. **SaaS Products** — status `DEPLOYING`
   - Inventory & Ops
   - CRM & Sales Flow
   - Hospital / Hotel Systems
   - Restaurant & POS
2. **Custom Development** — status `LIVE`
   - Next.js / React Apps
   - Mobile Apps
   - APIs & Integrations
   - Dashboards & Admins
3. **IT & Digital Services** — status `LIVE`
   - Branding & Design
   - Digital Marketing
   - Cloud & Hosting
   - IT Setup & Support
4. **AI Integration** — status `R&D`
   - AI Chatbot for Support
   - Internal Copilot
   - Process Automation
   - Smart Search & Insights

Interaction model:

- default active index is `1`, so **Custom Development** is initially selected,
- clicking the left module list changes the active detail card,
- `useMemo` resolves the active module,
- `AnimatePresence` and Framer Motion animate transitions,
- status pills use cyan/purple/neutral ring and glow treatments.

The component contains two CTA buttons:

```text
Explore Modules
Talk to Kynstack
```

These are currently plain `<button>` elements with no click handler, link, or navigation behavior. Even after the section is mounted, those CTAs should not be treated as functional until they are explicitly wired.

### Required wiring before calling this feature live

Decide whether this section should replace the `System Expanding` placeholder or appear before it, then import and render it from `app/page.tsx`, for example conceptually:

```tsx
import ModulesSection from "@/components/main/ModulesSection";
```

and mount `<ModulesSection />` in the intended position. Validate styling because the component is designed for a dark background while the current post-hero area is white.

---

# 15. Splash Screen

File:

```text
components/ui/SplashScreen.tsx
```

The splash screen is shown on initial component mount.

Current duration before dismissal:

```text
3200 ms
```

It animates:

- a custom SVG `K`,
- cyan/purple gradient drawing,
- `Kynstack` wordmark,
- `The Next Generation Powerhouse` slogan,
- loading bar,
- blur/scale fade exit.

It uses:

- React state/effect,
- Framer Motion,
- `AnimatePresence`.

### UX caution

A forced 3.2-second splash is visually intentional but delays access to page content on every fresh mount.

If conversion, SEO experience, accessibility or perceived performance becomes a priority, this behavior should be reassessed rather than automatically preserved.

---

# 16. Styling and Brand System

File:

```text
app/globals.css
```

Tailwind is imported with:

```css
@import "tailwindcss";
```

## Core palette

```css
--background: #0f1423;
--foreground: #ffffff;

--brand-primary: #00c2ff;
--brand-secondary: #a652ff;
--brand-dark: #0f1423;
```

Meaning:

- brand primary = cyan,
- brand secondary = purple,
- brand dark = dark slate/navy.

The visual language currently relies heavily on:

- dark glass surfaces,
- cyan and purple glow,
- rounded containers,
- bold oversized type,
- white typography,
- motion,
- blurred ambient backgrounds.

Preserve this visual language unless a future redesign explicitly changes KYNSTACK's brand direction.

---

# 17. Public Assets

Current assets:

```text
public/KynstackWhite.png
```

Primary white navbar logo.

```text
public/apple-touch-icon.png
public/favicon-96x96.png
public/favicon.ico
public/favicon.svg
public/web-app-manifest-192x192.png
public/web-app-manifest-512x512.png
```

Brand/browser/PWA icon assets.

```text
public/site.webmanifest
```

Web app manifest.

### Manifest problem

The manifest still contains generic placeholder identity:

```json
"name": "MyWebSite",
"short_name": "MySite"
```

It also uses white theme/background colors even though the core KYNSTACK identity is dark.

This should be replaced with real KYNSTACK manifest information before considering the site identity setup finished.

---

# 18. TypeScript Configuration

File:

```text
tsconfig.json
```

Important settings:

- `strict: true`
- `noEmit: true`
- `moduleResolution: bundler`
- `jsx: react-jsx`
- incremental compilation enabled
- Next.js compiler plugin enabled

Alias:

```text
@/* -> ./*
```

Therefore imports such as:

```ts
import Navbar from "@/components/main/Navbar";
```

resolve from project root.

---

# 19. ESLint Configuration

File:

```text
eslint.config.mjs
```

Uses:

- Next Core Web Vitals rules.
- Next TypeScript rules.

Ignored generated paths include:

- `.next/**`
- `out/**`
- `build/**`
- `next-env.d.ts`

Do not silence lint globally just to make future features pass. Fix targeted issues unless a rule is genuinely inappropriate.

---

# 20. Next.js Configuration

File:

```text
next.config.ts
```

Current configuration is effectively empty:

```ts
const nextConfig: NextConfig = {
  /* config options here */
};
```

There are currently no custom:

- redirects,
- rewrites,
- image domains,
- headers,
- output mode,
- runtime configuration,
- experimental settings.

Do not assume deployment-specific behavior is configured here.

---

# 21. README Status

`README.md` is still the generic `create-next-app` starter README.

It is **not a reliable project overview**.

It currently even mentions Geist as the font, while the actual application uses:

- Outfit
- JetBrains Mono

For future maintenance, treat this `PROJECT_OVERVIEW.md` as the project-specific engineering reference unless/until README is deliberately rewritten.

---

# 22. Backend / Data / Integrations Status

No application backend was found in the inspected repository.

There are currently no:

- Next.js API routes,
- server actions used for business workflows,
- database schema,
- ORM,
- authentication provider,
- email service,
- contact submission backend,
- CRM connection,
- CMS,
- Supabase integration,
- Firebase integration,
- payment integration,
- analytics integration,
- external business API integration.

This matters because visual buttons or future forms must not be described as operational until their real behavior is implemented.

---

# 23. SEO Status

Currently implemented:

- title metadata,
- description metadata,
- keyword metadata,
- icon declarations,
- manifest declaration.

Not found in the current tree:

- sitemap route/file,
- robots route/file,
- dedicated Open Graph image/configuration,
- Twitter metadata,
- structured data / JSON-LD,
- page-specific SEO because no additional pages exist.

Before production marketing/lead-generation work, SEO should be treated as incomplete.

---

# 24. Accessibility / UX Considerations

Already present:

- mobile-menu buttons have `aria-label`.
- logo has alt text.
- mobile menu backdrop has `aria-hidden`.

Areas worth checking during future QA:

- keyboard interaction with the slide-in navigation.
- focus trapping/restoration when the mobile drawer opens.
- reduced-motion preference for splash, carousel and WebGL animation.
- color contrast on translucent text.
- forced splash duration.
- WebGL fallback behavior.
- mobile viewport behavior.
- semantic heading structure once more sections are added.

These are inspection notes, not claims that the current implementation fails accessibility standards.

---

# 25. Known Incomplete / Incorrect Areas

Treat this section as the immediate technical backlog until items are fixed or intentionally rejected.

## P0 — New Modules section is not mounted

`components/main/ModulesSection.tsx` was added in commit `fd729079b6102bf33af0a410f397293a8c997d4d`, but `app/page.tsx` still imports only `Navbar`, `Hero`, `BottomSection`, and `SplashScreen`.

Result: the new module UI is not visible. The homepage still renders the older `System Expanding` placeholder after the hero.

The `Explore Modules` and `Talk to Kynstack` buttons inside `ModulesSection.tsx` also have no behavior yet.

## P0 — Broken or misleading navigation

1. `Home`, `Services`, `About`, and `Contact` all currently use `href="#"`.
2. `Book a Call` points to `/contact`.
3. `/contact` does not exist in the inspected repository.

## P1 — Website content is unfinished

The rendered site currently stops after the hero and the `System Expanding` placeholder. A richer modules component exists in source but is not yet integrated.

Core company-site content still needs to be designed and implemented.

## P1 — Manifest identity is placeholder content

`site.webmanifest` still says:

```text
MyWebSite
MySite
```

## P1 — Favicon metadata inconsistency

`layout.tsx` references `favicon-16x16.png`, which is not present in the current public asset tree.

The `favicon-96x96.png` entry is declared as `92x92`.

## P1 — SEO is only basic

No sitemap, robots configuration, OG/Twitter setup or structured data was found.

## P2 — README is stale/template content

It does not accurately explain KYNSTACK or the current architecture.

## P2 — No automated quality pipeline

No tests or repository CI workflow were found.

## P2 — Heavy hero runtime should be watched

The Three.js hero is intentionally optimized in several places, but it remains one of the highest-risk components for low-end mobile performance.

## P2 — Splash screen delays content

The splash screen waits 3.2 seconds before disappearing.

Keep only if this is an intentional brand experience that is worth the conversion/performance cost.

## P2 — Source cleanup candidates

`ThreeScene.tsx` includes implementation details such as a mesh ref array that is populated but does not currently drive visible behavior, and an unused `state` parameter in `useFrame`.

These should be inspected during a lint/build cleanup rather than blindly deleted.

---

# 26. What Is NOT Currently Present

Future developers/AI sessions must not invent these systems.

The repository does not currently contain evidence of:

- separate Services page,
- separate About page,
- separate Contact page,
- product detail pages,
- KYNMENU page,
- KYNBILL page,
- KYNSTAY page,
- KYNMED page,
- KYNFLOW page,
- CLARIOPORT page,
- portfolio/case-study system,
- blog,
- pricing page,
- customer dashboard,
- admin dashboard,
- lead CRM,
- newsletter system,
- contact email pipeline,
- WhatsApp integration,
- online booking system.

If any of those are added later, update this overview.

---

# 27. Where to Modify Common Features

## Change global SEO/site metadata

Edit:

```text
app/layout.tsx
```

## Change home-page section order

Edit:

```text
app/page.tsx
```

## Change navbar links, mobile drawer or Book a Call button

Edit:

```text
components/main/Navbar.tsx
```

## Change BUILD / SCALE hero text or 3D positioning

Edit:

```text
components/main/Hero.tsx
```

## Change the 3D object, lights, materials or WebGL behavior

Edit:

```text
components/main/ThreeScene.tsx
```

## Change hero service cards or marketing description

Edit:

```text
components/main/BottomSection.tsx
```

## Change or wire the KYNSTACK modules/capability section

Component content/interactions:

```text
components/main/ModulesSection.tsx
```

Homepage mounting/order:

```text
app/page.tsx
```

## Change loading/splash experience

Edit:

```text
components/ui/SplashScreen.tsx
```

## Change global KYNSTACK colors/fonts

Edit:

```text
app/globals.css
app/layout.tsx
```

## Change logo/favicon/PWA assets

Edit/replace files under:

```text
public/
```

and verify references in:

```text
app/layout.tsx
public/site.webmanifest
```

## Add Contact page

Create:

```text
app/contact/page.tsx
```

Then decide whether it is:

- static contact information,
- client-side form,
- server-action form,
- API-backed form,
- third-party scheduling/CRM integration.

Do not wire a fake submit action.

---

# 28. Recommended Next Development Order

Unless business priorities change, the cleanest path from the current state is:

### Phase 1 — Finish the currently committed homepage module work

- Decide the intended placement/background for `ModulesSection`.
- Import and mount it from `app/page.tsx`.
- Wire or intentionally remove the `Explore Modules` and `Talk to Kynstack` CTA buttons.
- Run lint/build and visually validate responsive behavior.

### Phase 2 — Make current navigation truthful

- Create real page/section destinations.
- Implement `/contact`.
- Replace `#` links.
- Decide whether the site should be one-page anchor navigation or multi-page App Router navigation.

### Phase 3 — Build the real corporate site

Add the core content below the hero:

- Services.
- KYNSTACK products.
- Custom software / development capability.
- About / company.
- Why KYNSTACK.
- Selected work or proof.
- Process.
- CTA/contact.
- Footer.

### Phase 4 — Lead conversion

- operational contact form,
- email/CRM routing,
- booking CTA,
- validation,
- success/failure UX,
- spam protection.

### Phase 5 — SEO and identity

- fix favicon references,
- fix web manifest,
- metadata strategy,
- Open Graph,
- Twitter cards,
- sitemap,
- robots,
- structured data.

### Phase 6 — Quality and performance

- lint,
- production build,
- responsive QA,
- real Android/iPhone testing,
- Three.js profiling,
- accessibility,
- Lighthouse/Core Web Vitals,
- reduced-motion handling.

### Phase 7 — Deployment/release documentation

Once the real host is known, document:

- production domain,
- hosting provider,
- deployment flow,
- environment variables,
- DNS,
- analytics,
- release procedure.

---

# 29. Guardrails for Future Work

1. Read this overview before editing.
2. Inspect `git status --short` before touching source.
3. Do not assume the remote checkpoint matches the user's current local worktree.
4. Do not treat placeholder links as implemented navigation.
5. Do not claim `/contact` works until a real route exists and is tested.
6. Do not call `ModulesSection` live until it is actually mounted from `app/page.tsx`; do not call its CTA buttons functional until they have real behavior.
7. Preserve the KYNSTACK cyan/purple/dark visual language unless redesign is explicitly requested.
8. Be careful when editing `ThreeScene.tsx`; hero rendering is client-only for a reason.
9. Do not remove the `ssr: false` behavior from the Three.js dynamic import without validating browser/server behavior.
10. Do not add dependencies for problems that can be solved cleanly with the existing stack.
11. Do not commit `.next/` or `node_modules/`.
12. Do not record a build/lint as passing unless it was actually executed.
13. Do not put secrets into source control.
14. If adding forms, use a real secure submission flow rather than a visual-only fake.
15. After substantial work, update this file before finishing the task.
---

# 30. Future Work Start Procedure

When resuming this project in a new session, provide this file and start with:

```text
Read PROJECT_OVERVIEW.md first.

Work inside D:\kynstack-website.

Before changing anything, inspect:
- git status --short
- current branch
- HEAD
- origin/main
- relevant files for the requested feature

Do not assume the overview checkpoint is still current if Git differs.
Preserve existing completed behavior.
After the requested work is validated, update PROJECT_OVERVIEW.md with the new checkpoint.
```

---

# 31. Overview Update Procedure

After every meaningful feature/fix/release, update at minimum:

## Current Development Checkpoint

Record:

- date,
- branch,
- HEAD commit,
- whether work is committed,
- whether it is pushed/merged,
- exact feature completed,
- lint result,
- production build result,
- deployment status if applicable.

## Architecture

Update if:

- files move,
- routes are added,
- data flow changes,
- dependencies change,
- APIs/backends are introduced.

## Known Incomplete / Incorrect Areas

Remove completed items and add newly discovered real issues.

## Where to Modify Common Features

Update whenever ownership of a feature moves to another file/module.

---

# 32. Current Resume Point

As of the inspected remote `main` state:

The branded hero/launch experience remains implemented and rendered, including the splash screen, responsive navbar, Three.js `BUILD / SCALE` hero, rotating service cards and under-construction indicator.

Commit `fd729079b6102bf33af0a410f397293a8c997d4d` additionally introduced a substantial `components/main/ModulesSection.tsx` component describing KYNSTACK's SaaS, custom development, IT/digital services and AI capabilities. The other five changed files in that commit were minor source-comment cleanup/path corrections rather than major behavior changes.

**Critical resume detail:** `ModulesSection.tsx` is not imported or rendered in `app/page.tsx`. Therefore the newly authored modules UI is currently dormant and the visible homepage still shows the old `System Expanding` placeholder. The section's `Explore Modules` and `Talk to Kynstack` buttons also have no behavior.

The immediate logical next task is to finish that integration and validate it before moving on to the larger company site.

After that, major unfinished work includes:

- real navigation destinations,
- Contact route,
- full company/service/product content,
- real conversion/contact workflow,
- footer,
- SEO completion,
- production validation and deployment documentation.

Remote checkpoint:

```text
branch: main
HEAD: fd729079b6102bf33af0a410f397293a8c997d4d
commit: feat: expand homepage modules and refine hero experience
```

Local status immediately after the user pushed this code commit:

```text
?? PROJECT_OVERVIEW.md
```

That means the website source commit was pushed successfully and the overview remained the only untracked local file at that point.

Always verify the local Windows worktree before using this SHA as the active development base.

---

# 33. Short Context for Any Future AI Session

KYNSTACK Website is a Next.js 16 / React 19 / TypeScript / Tailwind 4 frontend in `D:\kynstack-website`.

Remote `main` checkpoint `fd729079b6102bf33af0a410f397293a8c997d4d` contains the branded launch homepage plus a newly authored `ModulesSection.tsx`. The rendered home page still has a 3.2-second Framer Motion splash, dark rounded hero island, responsive navbar, large BUILD/SCALE typography, dynamically client-loaded React Three Fiber/Three.js burst object, auto-rotating service carousel, and the white `System Expanding` placeholder below it.

`ModulesSection.tsx` defines an interactive dark capability area for SaaS Products (`DEPLOYING`), Custom Development (`LIVE`), IT & Digital Services (`LIVE`), and AI Integration (`R&D`), with animated detail switching. However, it is **not imported/rendered by `app/page.tsx` yet**, so it is not visible. Its `Explore Modules` and `Talk to Kynstack` buttons are also unwired.

The navbar's Home/Services/About/Contact links are still `#`; the Book a Call CTA points to `/contact`, but no contact route exists. There is no backend, contact form, API, auth, DB, analytics, CMS, CI or test suite in the current repository. Basic metadata exists, but the manifest is still generic and one favicon reference is missing.

Before future work, verify local Git state against remote main. Finish the ModulesSection integration first unless priorities explicitly change. After significant work, update this overview so it remains the source of continuity.
