# Красные Предметы - Static HTML Landing Page

## Overview
Static HTML/CSS/Bootstrap 5 version of the Красные Предметы (Red Items) design studio website.

## Files Created

### 1. index.html (26 KB)
- Complete responsive HTML structure
- All 8 sections from the original Next.js design
- Bootstrap 5 CDN integration
- Bootstrap Icons for UI elements
- JavaScript for:
  - Dark/Light theme toggle with localStorage persistence
  - Smooth scroll navigation
  - Contact form handling
  - Header scroll effects
  - Scroll-to-top functionality

### 2. style.css (18 KB)
- Complete styling with CSS custom properties for theming
- Light theme: #f5f5f0 background, #171717 text
- Dark theme: #0a0a0a background, #ededed text
- Accent color: #cc0000 (red)
- Smooth transitions between themes
- Responsive design for all screen sizes
- SVG shape animations (float effect)
- Project card gradients matching original design
- Technology cards with hover effects

### 3. favicon.ico
- Copied from Next.js public assets

## Sections Implemented

1. **Header** - Sticky navigation with theme toggle
2. **Hero** - Full-screen hero with decorative red SVG shapes (square, diamond, circle, small square)
3. **About** - Company description with 3 statistics (7+ years, 50+ projects, 6 technologies)
4. **Projects** - 8 project cards in responsive grid layout
5. **Technologies** - 6 technology cards + workflow process
6. **Philosophy** - Centered quote section with dark background
7. **Contact** - Contact info + contact form
8. **Footer** - Footer with navigation, contact links, and back-to-top button

## Features

- ✅ Bootstrap 5 CDN only (no build process needed)
- ✅ Dark/Light theme toggle stored in localStorage
- ✅ CSS-only animations (no Framer Motion)
- ✅ Fully responsive mobile-first design
- ✅ Smooth scroll behavior
- ✅ Proper contrast and accessibility
- ✅ All content from original React components preserved
- ✅ HTTP server running on port 8090

## Running Locally

The server is already running. Access it at:
```
http://localhost:8090
```

To manually start the server:
```bash
python3 -m http.server 8090 -d /var/www/weblanding/projects/reditems-v2/
```

## Color Palette

**Light Theme:**
- Background: #f5f5f0
- Text: #171717
- Cards: #ffffff

**Dark Theme:**
- Background: #0a0a0a
- Text: #ededed
- Cards: #1e1e1e

**Accent:**
- Primary Red: #cc0000
- Dark Red: #990000

## Browser Compatibility

- Chrome/Edge/Firefox (latest)
- Safari (latest)
- Mobile browsers
- Smooth scroll support required

## Assets Used

- Bootstrap 5.3.0 (CDN)
- Bootstrap Icons 1.11.0 (CDN)
- System fonts (no external font downloads)

All assets are loaded from CDN, no external files needed beyond the 3 files in this directory.
