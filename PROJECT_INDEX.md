# INSAAN Global - Project Index

**Project Name:** Insaan Global Replica  
**Description:** A pixel-perfect recreation of the Insaan Global homepage using React, TypeScript, and Vite  
**Version:** 0.0.0  
**Type:** React SPA (Single Page Application)

---

## 📁 Project Structure

```
INSAAN-main 2/
├── assets/                    # Image assets
│   ├── bettermint-logo.png
│   ├── coretech-logo.png
│   ├── cta-search-icon.png
│   ├── Frame 1.png
│   ├── Frame 2.png
│   ├── hero-bridge.png
│   ├── hero-world-map.webp
│   ├── leader-office.png
│   ├── logo.png
│   └── white-logo.png
├── components/                # React components
│   ├── ContactModal.tsx      # Contact form modal
│   ├── Footer.tsx            # Site footer
│   ├── Logo.tsx              # Logo component (dark/light variants)
│   ├── Navbar.tsx            # Navigation bar
│   ├── SectionCTA.tsx        # Call-to-action section
│   ├── SectionDrivingChange.tsx  # Services section with tabs
│   ├── SectionHero.tsx       # Hero section
│   ├── SectionLeader.tsx     # About/Leader section
│   └── SectionSolutions.tsx  # Companies/Solutions section
├── public/                    # Public static assets
│   ├── favicon.png
│   ├── hamburger-icon.png
│   ├── hamburger.png
│   └── hero-bridge.png
├── App.tsx                    # Main application component
├── index.tsx                  # Application entry point
├── index.html                 # HTML template
├── index.css                  # Global styles & animations
├── vite.config.ts             # Vite configuration
├── tsconfig.json              # TypeScript configuration
├── package.json               # Dependencies & scripts
├── package-lock.json          # Locked dependencies
├── metadata.json              # Project metadata
└── README.md                  # Project documentation
```

---

## 🛠️ Technology Stack

### Core Technologies
- **React** 19.2.4 - UI library
- **TypeScript** ~5.8.2 - Type-safe JavaScript
- **Vite** ^6.2.0 - Build tool & dev server

### Styling
- **Tailwind CSS** (via CDN) - Utility-first CSS framework
- **Plus Jakarta Sans** - Google Fonts typography
- Custom CSS animations for section reveals

### Development Tools
- **@vitejs/plugin-react** ^5.0.0 - React plugin for Vite
- **@types/node** ^22.14.0 - Node.js type definitions

---

## 📦 Dependencies

### Production Dependencies
```json
{
  "react": "^19.2.4",
  "react-dom": "^19.2.4"
}
```

### Development Dependencies
```json
{
  "@types/node": "^22.14.0",
  "@vitejs/plugin-react": "^5.0.0",
  "typescript": "~5.8.2",
  "vite": "^6.2.0"
}
```

---

## 🎨 Component Architecture

### Main Application (`App.tsx`)
- Root component managing global state
- Modal state management (`isModalOpen`)
- Composes all section components
- Handles contact modal callbacks

### Components Overview

#### 1. **Navbar** (`components/Navbar.tsx`)
- Fixed navigation bar with scroll effects
- Responsive mobile menu (hamburger)
- Smooth scroll navigation
- Contact button integration
- **Props:** `onContactClick?: () => void`

#### 2. **SectionHero** (`components/SectionHero.tsx`)
- Full-width hero section with world map background
- Overlay text content
- Responsive aspect ratio (16:9)

#### 3. **SectionLeader** (`components/SectionLeader.tsx`)
- About section with office image
- Large typography heading
- Description text with CTA button
- **Props:** `onContactClick?: () => void`
- **ID:** `#about`

#### 4. **SectionSolutions** (`components/SectionSolutions.tsx`)
- Company showcase (CORETech & Bettermint)
- Grid layout with company cards
- Logo display and descriptions
- **ID:** `#companies`

#### 5. **SectionDrivingChange** (`components/SectionDrivingChange.tsx`)
- Services section with tabbed interface
- Image carousel synchronized with tabs
- Four service categories:
  - Simple Recruiting
  - Special Situations
  - People Management
  - People Solutions
- **ID:** `#services`

#### 6. **SectionCTA** (`components/SectionCTA.tsx`)
- Call-to-action card with gradient effects
- Job seeker focused messaging
- Contact button integration
- **Props:** `onContactClick?: () => void`

#### 7. **Footer** (`components/Footer.tsx`)
- Multi-column footer layout
- Company links, solutions links, social links
- Email and LinkedIn integration
- Copyright information
- **Props:** `onContactClick?: () => void`
- **ID:** `#contact`

#### 8. **ContactModal** (`components/ContactModal.tsx`)
- Modal dialog for contact form
- Form fields: Name, Phone, Email, Type (Employer/Job Seeker)
- Formspree integration (`https://formspree.io/f/mjgeeoow`)
- Success state handling
- Loading states
- **Props:** `isOpen: boolean`, `onClose: () => void`

#### 9. **Logo** (`components/Logo.tsx`)
- Reusable logo component
- Dark and light variants
- **Props:** `variant?: 'dark' | 'light'`

---

## 🎨 Design System

### Colors
- **Background:** `#F9F8F2` (insaan-bg)
- **Primary Black:** `#111111` (insaan-black)
- **Teal:** `#40E0D0` (insaan-teal)
- **Accent Cyan:** `#59CBE8`
- **Accent Teal:** `#2CD5C4`
- **Pink:** `#FF69B4` (insaan-pink)

### Typography
- **Font Family:** Plus Jakarta Sans (300-800 weights)
- **Letter Spacing:** -0.04em (tightest)
- **Max Content Width:** 1760px

### Animations
- Section reveal animations (CSS keyframes)
- Staggered delays (0.1s increments)
- Respects `prefers-reduced-motion`

---

## ⚙️ Configuration Files

### `vite.config.ts`
- Dev server: Port 3000, host 0.0.0.0
- Environment variables: `GEMINI_API_KEY`
- Path alias: `@` → root directory
- React plugin enabled

### `tsconfig.json`
- Target: ES2022
- Module: ESNext
- JSX: react-jsx
- Path aliases: `@/*` → `./*`
- Experimental decorators enabled

### `package.json`
- Scripts:
  - `npm run dev` - Start development server
  - `npm run build` - Build for production
  - `npm run preview` - Preview production build

---

## 🔗 External Integrations

### Form Handling
- **Formspree:** `https://formspree.io/f/mjgeeoow`
  - Endpoint for contact form submissions
  - Fields: name, phone, email, type

### External Links
- **LinkedIn:** `https://www.linkedin.com/company/insaanglobal/`
- **Email:** `Info@insaanglobal.com`
- **Company Presentation:** `/company-presentation.pdf`
- **Built by:** `https://blitzstudio.xyz`

### External Images (SectionDrivingChange)
- Contract staffing services image
- Staffing solutions image
- Comprehensive staffing solutions image
- Employee sourcing image

---

## 📱 Responsive Design

- **Mobile-first approach**
- Breakpoints: `md:` (medium screens)
- Responsive typography scaling
- Mobile hamburger menu
- Adaptive grid layouts
- Touch-friendly interactions

---

## 🚀 Getting Started

### Prerequisites
- Node.js installed
- npm package manager

### Setup
1. Install dependencies:
   ```bash
   npm install
   ```

2. Set environment variables (optional):
   - Create `.env.local` file
   - Add `GEMINI_API_KEY=your_key_here`

3. Run development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

---

## 📝 Key Features

1. **Smooth Scrolling Navigation** - Anchor links with smooth scroll behavior
2. **Modal Contact Form** - Integrated Formspree form submission
3. **Responsive Design** - Mobile and desktop optimized
4. **Section Animations** - CSS-based reveal animations
5. **Image Optimization** - WebP format for hero image
6. **Accessibility** - ARIA labels, semantic HTML, keyboard navigation
7. **SEO** - Meta tags, Open Graph, Twitter Card support

---

## 🎯 Section IDs (for navigation)

- `#about` - SectionLeader component
- `#services` - SectionDrivingChange component
- `#companies` - SectionSolutions component
- `#contact` - Footer component

---

## 📄 File Descriptions

| File | Purpose |
|------|---------|
| `App.tsx` | Main application component, state management |
| `index.tsx` | React DOM root, application entry point |
| `index.html` | HTML template with Tailwind CDN, font imports |
| `index.css` | Global styles, section reveal animations |
| `vite.config.ts` | Vite build configuration |
| `tsconfig.json` | TypeScript compiler options |
| `package.json` | Project metadata, dependencies, scripts |
| `metadata.json` | AI Studio project metadata |
| `README.md` | Project documentation |

---

## 🔍 Code Patterns

### State Management
- Local component state with `useState`
- Modal state lifted to App component
- No global state management library

### Styling Approach
- Tailwind CSS utility classes
- Custom CSS for animations
- Inline styles for dynamic values
- CSS-in-JS for modal animations

### Component Communication
- Props drilling for callbacks
- Event handlers passed down
- No context API or state management

### Image Handling
- Static imports for local assets
- External URLs for dynamic content
- WebP format for optimization

---

## 🌐 Browser Support

- Modern browsers (ES2022+)
- CSS Grid and Flexbox support required
- Smooth scroll behavior support
- Form validation API support

---

## 📊 Project Statistics

- **Total Components:** 9
- **Total TypeScript Files:** 12
- **Total Image Assets:** 13
- **Lines of Code:** ~1,200+ (estimated)
- **Dependencies:** 2 production, 4 development

---

## 🔐 Environment Variables

- `GEMINI_API_KEY` - Gemini API key (optional, for future AI features)

---

## 📚 Additional Notes

- Project uses CDN for Tailwind CSS (not installed via npm)
- Form submissions handled by Formspree service
- All images stored locally in `assets/` directory
- No routing library (single page application)
- No testing framework configured
- No linting configuration visible

---

**Last Updated:** February 21, 2026  
**Maintained by:** Blitz Studio
