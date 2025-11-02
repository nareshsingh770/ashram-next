# Aashram Frontend - Project Specification

## Project Overview

**Project Name:** Aashram (Vihara) - Meditation & Spirituality Platform  
**Version:** 0.1.0  
**Type:** Web Application - Frontend  
**Framework:** Next.js 15.5.4 (App Router)  
**Language:** TypeScript 5.x  
**UI Framework:** React 19.1.0

## Purpose

A spiritual meditation platform dedicated to Buddhist teachings, meditation practices, and community engagement. The platform features teacher profiles, events, programs, donations, and multilingual support.

---

## Tech Stack

### Core Framework

- **Next.js 15.5.4** - React framework with App Router
- **React 19.1.0** - UI library
- **TypeScript 5.x** - Type-safe development
- **Turbopack** - Next.js bundler for faster builds

### Styling

- **Tailwind CSS 4.1.16** - Utility-first CSS framework
- **PostCSS 8.5.6** - CSS transformations
- **tw-animate-css 1.4.0** - Animation utilities
- **Autoprefixer 10.4.21** - CSS vendor prefixing

### State Management

- **Redux Toolkit 2.9.0** - State management
- **React Redux 9.2.0** - React bindings for Redux

### Internationalization

- **next-intl 4.3.9** - Internationalization for Next.js
- Supported locales: English (en), Hindi (hi)

### Form & Validation

- **Zod 4.1.12** - Schema validation

### UI Utilities

- **class-variance-authority 0.7.1** - CSS class variants
- **clsx 2.1.1** - Conditional classnames
- **tailwind-merge 3.3.1** - Merge Tailwind classes
- **lucide-react 0.544.0** - Icon library

### Code Quality

- **ESLint 9.x** - Linting
- **eslint-config-next 15.5.4** - Next.js ESLint config

---

## Project Structure

```
frontend/
├── public/                      # Static assets
│   └── images/                  # Image files
│       ├── header-bg.png
│       ├── hero-bg.jpg
│       ├── monk.png
│       └── profile-monk.jpg
│
├── src/
│   ├── app/                     # Next.js App Router
│   │   ├── globals.css          # Global styles & Tailwind config
│   │   ├── [locale]/            # Internationalized routes
│   │   │   ├── layout.tsx       # Root layout
│   │   │   ├── page.tsx         # Homepage
│   │   │   ├── (auth)/          # Authentication routes
│   │   │   │   ├── login/
│   │   │   │   │   └── page.tsx
│   │   │   │   └── signup/
│   │   │   │       └── page.tsx
│   │   │   └── (pages)/         # Main application pages
│   │   │       └── layout.tsx
│   │   └── api/                 # API routes
│   │       └── auth/
│   │           └── signup/
│   │               └── route.ts
│   │
│   ├── components/              # React components
│   │   ├── atoms/               # Basic UI elements
│   │   │   ├── Button.tsx
│   │   │   ├── Heading.tsx
│   │   │   └── InputFeild.tsx
│   │   ├── common/              # Shared components
│   │   │   ├── Footer.tsx
│   │   │   ├── Header.tsx
│   │   │   └── LocaleSwitcher.tsx
│   │   ├── modules/             # Feature modules
│   │   │   └── About/
│   │   │       └── index.tsx
│   │   ├── molecules/           # Composite components
│   │   ├── Homepage.tsx
│   │   └── Test.tsx
│   │
│   ├── constant/                # Application constants
│   │   └── appConstant.ts
│   │
│   ├── i18n/                    # Internationalization
│   │   ├── request.ts           # i18n request handler
│   │   └── routing.ts           # i18n routing config
│   │
│   ├── lib/                     # Utility libraries
│   │   └── utils.ts
│   │
│   ├── message/                 # Translation files
│   │   ├── en.json              # English translations
│   │   └── hi.json              # Hindi translations
│   │
│   ├── schema/                  # Validation schemas
│   │   └── userDetails.ts       # User-related schemas (Zod)
│   │
│   ├── server/                  # Server-side code
│   │   ├── actions/             # Server actions
│   │   │   └── auth.actions.ts
│   │   └── services/            # API services
│   │       └── auth.service.ts
│   │
│   ├── store/                   # Redux store
│   │   ├── index.ts             # Store configuration
│   │   ├── StoreProvider.tsx    # Redux provider
│   │   └── userSlice.ts         # User state slice
│   │
│   ├── utils/                   # Helper utilities
│   │   └── helper.ts
│   │
│   ├── middleware.ts            # Next.js middleware
│   └── types.ts                 # TypeScript type definitions
│
├── .env.local                   # Environment variables
├── components.json              # Shadcn/UI config
├── eslint.config.mjs            # ESLint configuration
├── next.config.ts               # Next.js configuration
├── next-env.d.ts                # Next.js type definitions
├── package.json                 # Dependencies
├── postcss.config.mjs           # PostCSS configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
├── README.md                    # Project documentation
└── PROJECT_SPEC.md              # This file
```

---

## Key Features

### 1. **Internationalization (i18n)**

- Multi-language support (English, Hindi)
- Locale-based routing: `/en/*`, `/hi/*`
- LocaleSwitcher component for language selection
- Translation files in `src/message/`

### 2. **Authentication System**

- User signup with validation
- Form validation using Zod schemas
- Server actions for authentication
- API proxy routes to backend
- JWT-based authentication (planned)

### 3. **Component Architecture**

- **Atomic Design Pattern:**
  - Atoms: Basic UI elements (Button, Input, Heading)
  - Molecules: Composite components
  - Modules: Feature-specific components (About, Auth)
- Common components: Header, Footer, LocaleSwitcher

### 4. **State Management**

- Redux Toolkit for global state
- User slice for authentication state
- StoreProvider wrapper for React integration

### 5. **Styling System**

- Tailwind CSS v4 with custom theme
- Custom color variables:
  - `brand-primary`: #007bff (blue)
  - `brand-secondary`: #D91656 (pink/red)
- Responsive design (mobile-first)
- Dark mode support

### 6. **Form Validation**

- Zod schemas for type-safe validation
- Signup schema includes:
  - Name validation (min 2 chars)
  - Email validation
  - Indian phone number validation (10 digits, starts with 6-9)
  - Password complexity requirements
  - Confirm password matching

---

## Environment Variables

```env
# API Configuration
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000/api/v1
```

---

## API Integration

### Backend Communication

- **Base URL:** Configured via `NEXT_PUBLIC_API_BASE_URL`
- **API Proxy:** Next.js API routes in `/api` act as proxy to avoid CORS
- **Services:** Located in `src/server/services/`
- **Actions:** Server actions in `src/server/actions/`

### Endpoints

- `POST /api/auth/signup` - User registration

---

## Scripts

```bash
# Development
npm run dev              # Start dev server with Turbopack

# Production
npm run build            # Build for production
npm start                # Start production server

# Code Quality
npm run lint             # Run ESLint
```

---

## Design System

### Theme Colors

- **Primary:** #007bff (Blue)
- **Secondary:** #D91656 (Pink/Red)
- **Background:** Slate gradients (slate-700 to slate-900)
- **Text:** White/Slate-200 on dark backgrounds

### Typography

- **Headings:** Font-serif, semibold
- **Body:** Default system fonts (Geist Sans)
- **Code:** Geist Mono

### Spacing

- Layout spacing: Custom utility class `layout-spacing`
- Consistent padding/margins using Tailwind spacing scale

### Components

- **Buttons:** Rounded-full, gradient backgrounds
- **Inputs:** Rounded borders, shadow effects
- **Cards:** Gradient overlays, backdrop blur
- **Images:** Responsive, object-cover, ring decorations

---

## Responsive Breakpoints

- **Mobile:** < 640px
- **Small (sm):** 640px - 767px
- **Medium (md):** 768px - 1023px
- **Large (lg):** 1024px - 1279px
- **XL (xl):** 1280px+

---

## Type System

### Custom Types (types.ts)

- `ActionState` - Form action state interface
- `ActionResult` - Server action return type
- Form data types

### Schema Types (schema/userDetails.ts)

- `signupSchema` - User signup validation
- `loginSchema` - User login validation

---

## Development Guidelines

### Code Organization

1. Follow atomic design pattern for components
2. Use TypeScript for type safety
3. Implement server actions for data mutations
4. Keep API calls in service layer
5. Use Zod for runtime validation

### Styling

1. Use Tailwind utility classes
2. Define custom colors in `globals.css` `@theme` block
3. Follow mobile-first responsive design
4. Use CSS variables for theme consistency

### State Management

1. Use Redux for global state
2. Use React hooks for local state
3. Server state via Next.js server components

### Internationalization

1. Add translations to `message/` directory
2. Use `next-intl` hooks for translations
3. Keep locale in URL path

---

## Future Enhancements

### Planned Features

- [ ] User login functionality
- [ ] Protected routes with authentication
- [ ] Events management system
- [ ] Donation integration
- [ ] Programs/courses catalog
- [ ] Shop/merchandise section
- [ ] Blog/teachings content
- [ ] Video/audio meditation content
- [ ] User dashboard
- [ ] Community forum

### Technical Improvements

- [ ] Add unit tests (Jest, React Testing Library)
- [ ] Add E2E tests (Playwright)
- [ ] Implement PWA features
- [ ] Add SEO optimization
- [ ] Implement analytics
- [ ] Add error monitoring (Sentry)
- [ ] Optimize images (next/image)
- [ ] Add caching strategies

---

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Performance Targets

- **First Contentful Paint:** < 1.5s
- **Time to Interactive:** < 3.5s
- **Lighthouse Score:** > 90

---

## Security Considerations

- Input validation on client and server
- XSS protection via React
- CSRF protection via Next.js
- Secure cookie handling for JWT
- Environment variable protection
- API rate limiting (backend)

---

## Deployment

### Recommended Platforms

- **Vercel** (Recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Custom Node.js server**

### Build Configuration

```bash
npm run build
npm start
```

---

## Contributing

1. Follow existing code structure
2. Use TypeScript strict mode
3. Write meaningful commit messages
4. Test responsive design
5. Validate forms properly
6. Update this spec for major changes

---

## License

Private/Proprietary

---

## Contact & Support

**Repository:** ashram-next  
**Owner:** nareshsingh770  
**Branch:** master

---

_Last Updated: November 2, 2025_
