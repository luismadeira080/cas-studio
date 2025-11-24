# Complete Design System Implementation Guide
## Apply This Warm, Professional Design to Any Website

**Give this file to Claude (or any developer) to implement this design system across your entire website.**

---

## 📋 Table of Contents

1. [Overview](#overview)
2. [Complete CSS Code](#complete-css-code)
3. [Step-by-Step Implementation](#step-by-step-implementation)
4. [Component Conversion Guide](#component-conversion-guide)
5. [Page-by-Page Instructions](#page-by-page-instructions)
6. [Common Patterns Library](#common-patterns-library)
7. [Migration Checklist](#migration-checklist)

---

## Overview

### Design Philosophy
This design system provides a **warm, professional, and crafted aesthetic** featuring:
- **Orange accent** (#FF6B35) for CTAs and important elements
- **Monospace typography** (Courier Prime) for a precise, architectural feel
- **Clean layouts** with generous white space
- **Alternating backgrounds** (white/gray) for visual rhythm
- **Responsive design** that works on all devices

### What This Guide Will Do
Following this guide will transform your website to use:
- Consistent color palette (orange + neutrals)
- Professional typography (Courier Prime monospace)
- Reusable components (buttons, cards, forms)
- Clean, spacious layouts
- Mobile-responsive design

---

## Complete CSS Code

### Step 1: Add Google Fonts

Add this to the `<head>` of every HTML page:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&family=Libre+Baskerville:wght@400;700&display=swap" rel="stylesheet">
```

### Step 2: Add Design System CSS

**Option A: External File (Recommended)**

1. Save the CSS below as `design-system.css`
2. Link it in your HTML: `<link rel="stylesheet" href="design-system.css">`

**Option B: Inline**

Add the CSS below inside `<style>` tags in your HTML `<head>`

### Complete CSS (Copy Everything Below)

```css
/* ============================================
   DESIGN SYSTEM - Complete Implementation CSS
   ============================================ */

/* CSS VARIABLES */
:root {
    /* Colors */
    --color-primary: #FF6B35;
    --color-primary-hover: #E55A25;
    --color-primary-light: rgba(255, 107, 53, 0.1);
    --color-black: #000000;
    --color-white: #FFFFFF;
    --color-gray-900: #1a1a1a;
    --color-gray-700: #333333;
    --color-gray-500: #666666;
    --color-gray-300: #999999;
    --color-gray-100: #e0e0e0;
    --color-gray-50: #f9f9f9;

    /* Typography */
    --font-primary: 'Courier Prime', 'Courier New', monospace;
    --font-secondary: 'Libre Baskerville', 'Georgia', serif;

    /* Font Sizes */
    --text-xs: 10px;
    --text-sm: 12px;
    --text-base: 14px;
    --text-md: 16px;
    --text-lg: 18px;
    --text-xl: 20px;
    --text-2xl: 24px;
    --text-3xl: 32px;
    --text-4xl: 36px;
    --text-5xl: 48px;

    /* Spacing */
    --space-1: 4px;
    --space-2: 8px;
    --space-3: 12px;
    --space-4: 16px;
    --space-5: 20px;
    --space-6: 24px;
    --space-8: 32px;
    --space-10: 40px;
    --space-12: 48px;
    --space-16: 64px;
    --space-20: 80px;

    /* Transitions */
    --transition-fast: 0.15s ease;
    --transition-base: 0.3s ease;
}

/* BASE STYLES */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: var(--font-primary);
    font-size: var(--text-md);
    line-height: 1.6;
    color: var(--color-black);
    background-color: var(--color-white);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

/* TYPOGRAPHY */
h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-primary);
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: var(--space-4);
}

h1 { font-size: var(--text-5xl); letter-spacing: 1px; }
h2 { font-size: var(--text-4xl); letter-spacing: 0.8px; }
h3 { font-size: var(--text-3xl); letter-spacing: 0.6px; }
h4 { font-size: var(--text-2xl); }
h5 { font-size: var(--text-xl); }
h6 { font-size: var(--text-lg); }

p {
    margin-bottom: var(--space-4);
    line-height: 1.8;
}

a {
    color: var(--color-primary);
    text-decoration: none;
    transition: color var(--transition-base);
}

a:hover {
    color: var(--color-primary-hover);
}

strong { font-weight: 700; }

img {
    max-width: 100%;
    height: auto;
    display: block;
}

/* BUTTONS */
.btn {
    display: inline-flex;
    align-items: center;
    gap: var(--space-2);
    padding: 14px 28px;
    font-family: var(--font-primary);
    font-size: var(--text-base);
    font-weight: 700;
    letter-spacing: 0.8px;
    text-transform: uppercase;
    text-decoration: none;
    border: none;
    cursor: pointer;
    transition: all var(--transition-base);
    white-space: nowrap;
}

.btn-primary {
    background-color: var(--color-primary);
    color: var(--color-white);
}

.btn-primary:hover {
    background-color: var(--color-primary-hover);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(255, 107, 53, 0.3);
}

.btn-secondary {
    background-color: transparent;
    color: var(--color-black);
    border: 2px solid var(--color-black);
}

.btn-secondary:hover {
    background-color: var(--color-black);
    color: var(--color-white);
}

.btn-outline {
    background-color: transparent;
    color: var(--color-primary);
    border: 2px solid var(--color-primary);
}

.btn-outline:hover {
    background-color: var(--color-primary);
    color: var(--color-white);
}

.btn-large {
    padding: 18px 45px;
    font-size: var(--text-lg);
}

.btn-small {
    padding: 10px 20px;
    font-size: var(--text-sm);
}

.btn-full {
    width: 100%;
    justify-content: center;
}

.arrow-icon {
    font-size: 18px;
    line-height: 1;
}

/* CARDS */
.card {
    background-color: var(--color-white);
    padding: var(--space-6);
    transition: all var(--transition-base);
}

.card-hover:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

.card-image {
    width: 100%;
    height: 250px;
    object-fit: cover;
    margin-bottom: var(--space-4);
}

.card-title {
    font-size: var(--text-xl);
    font-weight: 700;
    margin-bottom: var(--space-3);
}

.card-description {
    color: var(--color-gray-700);
    line-height: 1.6;
    margin-bottom: var(--space-4);
}

/* FORMS */
.form-group {
    margin-bottom: var(--space-5);
}

.form-label {
    display: block;
    font-size: var(--text-sm);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: var(--space-2);
    color: var(--color-gray-700);
}

.form-input,
.form-textarea,
.form-select {
    width: 100%;
    padding: var(--space-3) var(--space-4);
    font-family: var(--font-primary);
    font-size: var(--text-md);
    border: 1px solid var(--color-gray-100);
    background-color: var(--color-white);
    transition: all var(--transition-base);
}

.form-input:focus,
.form-textarea:focus,
.form-select:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px var(--color-primary-light);
}

.form-textarea {
    min-height: 120px;
    resize: vertical;
}

/* NAVIGATION */
.nav {
    display: flex;
    gap: var(--space-10);
    font-size: var(--text-base);
    font-weight: 700;
    letter-spacing: 1.5px;
}

.nav-link {
    text-decoration: none;
    color: inherit;
    transition: color var(--transition-base);
    text-transform: uppercase;
}

.nav-link:hover,
.nav-link.active {
    color: var(--color-primary);
}

/* LAYOUT */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--space-5);
}

.container-sm { max-width: 640px; }
.container-md { max-width: 768px; }
.container-lg { max-width: 1024px; }

.section {
    padding: var(--space-20) var(--space-5);
}

.section-alternate {
    background-color: var(--color-gray-50);
}

.section-title {
    font-size: var(--text-4xl);
    text-align: center;
    margin-bottom: var(--space-12);
}

.section-subtitle {
    font-size: var(--text-xl);
    text-align: center;
    color: var(--color-gray-500);
    margin-bottom: var(--space-8);
}

/* GRID */
.grid {
    display: grid;
    gap: var(--space-6);
}

.grid-2 { grid-template-columns: repeat(2, 1fr); }
.grid-3 { grid-template-columns: repeat(3, 1fr); }
.grid-4 { grid-template-columns: repeat(4, 1fr); }

/* UTILITIES */
.text-center { text-align: center; }
.text-left { text-align: left; }
.text-right { text-align: right; }
.text-primary { color: var(--color-primary); }
.text-gray { color: var(--color-gray-500); }
.text-white { color: var(--color-white); }
.text-serif { font-family: var(--font-secondary); font-style: italic; }

.bg-white { background-color: var(--color-white); }
.bg-gray { background-color: var(--color-gray-50); }
.bg-primary { background-color: var(--color-primary); }
.bg-black { background-color: var(--color-black); }

.flex { display: flex; }
.flex-col { flex-direction: column; }
.items-center { align-items: center; }
.justify-center { justify-content: center; }
.justify-between { justify-content: space-between; }
.gap-2 { gap: var(--space-2); }
.gap-4 { gap: var(--space-4); }
.gap-6 { gap: var(--space-6); }

.mt-2 { margin-top: var(--space-2); }
.mt-4 { margin-top: var(--space-4); }
.mt-6 { margin-top: var(--space-6); }
.mt-8 { margin-top: var(--space-8); }
.mb-2 { margin-bottom: var(--space-2); }
.mb-4 { margin-bottom: var(--space-4); }
.mb-6 { margin-bottom: var(--space-6); }
.mb-8 { margin-bottom: var(--space-8); }
.p-4 { padding: var(--space-4); }
.p-6 { padding: var(--space-6); }
.p-8 { padding: var(--space-8); }

.w-full { width: 100%; }

/* RESPONSIVE */
@media screen and (max-width: 768px) {
    :root {
        --text-5xl: 32px;
        --text-4xl: 28px;
        --text-3xl: 24px;
        --text-2xl: 20px;
    }

    .section {
        padding: var(--space-12) var(--space-4);
    }

    .grid-2,
    .grid-3,
    .grid-4 {
        grid-template-columns: 1fr;
    }

    .nav {
        gap: var(--space-5);
        font-size: var(--text-sm);
    }
}

@media screen and (max-width: 480px) {
    :root {
        --text-5xl: 24px;
        --text-4xl: 22px;
    }

    .btn {
        padding: 12px 24px;
        font-size: var(--text-sm);
    }
}
```

---

## Step-by-Step Implementation

### Phase 1: Setup (15 minutes)

**1.1 Add Google Fonts to ALL pages**

Find the `<head>` section in your HTML and add:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&family=Libre+Baskerville:wght@400;700&display=swap" rel="stylesheet">
```

**1.2 Add Design System CSS**

Create a new file `design-system.css` with the CSS code above, then link it:

```html
<link rel="stylesheet" href="design-system.css">
```

**1.3 Test**

Reload any page. You should see the font change to Courier Prime (monospace).

---

### Phase 2: Convert Global Elements (30 minutes)

**2.1 Update Body/Container Structure**

Wrap page content in containers:

**Before:**
```html
<div>
    <h1>Title</h1>
    <p>Content</p>
</div>
```

**After:**
```html
<section class="section">
    <div class="container">
        <h1>Title</h1>
        <p>Content</p>
    </div>
</section>
```

**2.2 Convert All Buttons**

Find ALL buttons/CTAs and convert:

**Before:**
```html
<button>Click Here</button>
<a href="#">Learn More</a>
```

**After:**
```html
<a href="#" class="btn btn-primary">
    <span class="arrow-icon">→</span>
    Click Here
</a>
<a href="#" class="btn btn-secondary">Learn More</a>
```

**2.3 Update Navigation**

**Before:**
```html
<ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
</ul>
```

**After:**
```html
<nav class="nav">
    <a href="#" class="nav-link active">Home</a>
    <a href="#" class="nav-link">About</a>
</nav>
```

---

### Phase 3: Convert Page Sections (1-2 hours)

**3.1 Alternate Section Backgrounds**

Add alternating backgrounds for visual rhythm:

```html
<section class="section">
    <!-- White background -->
</section>

<section class="section section-alternate">
    <!-- Gray background -->
</section>

<section class="section">
    <!-- White background -->
</section>
```

**3.2 Add Section Titles**

Standardize section headers:

```html
<section class="section">
    <div class="container">
        <h2 class="section-title">Section Title</h2>
        <p class="section-subtitle">Optional subtitle</p>
        <!-- Content -->
    </div>
</section>
```

---

### Phase 4: Convert Components (2-3 hours)

**4.1 Convert Lists to Card Grids**

**Before:**
```html
<div class="item">
    <img src="image.jpg">
    <h3>Title</h3>
    <p>Description</p>
</div>
```

**After:**
```html
<div class="grid grid-3">
    <div class="card card-hover">
        <img src="image.jpg" alt="Title" class="card-image">
        <h3 class="card-title">Title</h3>
        <p class="card-description">Description</p>
        <a href="#" class="btn btn-primary">Learn More</a>
    </div>
    <!-- Repeat for each item -->
</div>
```

**4.2 Convert Forms**

**Before:**
```html
<label>Name:</label>
<input type="text">
```

**After:**
```html
<div class="form-group">
    <label class="form-label" for="name">Name</label>
    <input type="text" id="name" class="form-input" placeholder="Enter your name">
</div>
```

**4.3 Convert Tables to Grids (if applicable)**

Replace data tables with card grids for better mobile experience.

---

## Component Conversion Guide

### Complete Conversion Reference

| Old Element | New Component | Code |
|-------------|---------------|------|
| `<button>` | Primary Button | `<a href="#" class="btn btn-primary">Text</a>` |
| `<a>` link | Secondary Button | `<a href="#" class="btn btn-secondary">Text</a>` |
| Generic div | Card | `<div class="card card-hover">...</div>` |
| List items | Card Grid | `<div class="grid grid-3"><div class="card">...</div></div>` |
| `<input>` | Form Input | `<input class="form-input">` |
| `<textarea>` | Form Textarea | `<textarea class="form-textarea">` |
| `<select>` | Form Select | `<select class="form-select">` |
| Navigation | Nav Component | `<nav class="nav"><a class="nav-link">...</a></nav>` |
| Section wrapper | Section | `<section class="section"><div class="container">...</div></section>` |

---

## Page-by-Page Instructions

### Homepage

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Site</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&family=Libre+Baskerville:wght@400;700&display=swap" rel="stylesheet">

    <!-- Design System -->
    <link rel="stylesheet" href="design-system.css">
</head>
<body>
    <!-- Header/Navigation -->
    <header style="background: var(--color-black); padding: 20px 0;">
        <div class="container flex items-center justify-between">
            <div style="color: white; font-weight: bold; font-size: 20px;">Your Logo</div>

            <nav class="nav" style="color: white;">
                <a href="index.html" class="nav-link active">Home</a>
                <a href="about.html" class="nav-link">About</a>
                <a href="listings.html" class="nav-link">Listings</a>
                <a href="contact.html" class="nav-link">Contact</a>
            </nav>

            <a href="#signup" class="btn btn-primary">Get Started</a>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="section" style="padding: 100px 20px; background: var(--color-gray-50);">
        <div class="container text-center">
            <h1>Your Main Headline</h1>
            <p class="text-xl text-gray mb-8">Subheadline or value proposition goes here</p>
            <a href="#" class="btn btn-primary btn-large">
                <span class="arrow-icon">→</span>
                Get Started Now
            </a>
        </div>
    </section>

    <!-- Features/Benefits -->
    <section class="section">
        <div class="container">
            <h2 class="section-title">Why Choose Us</h2>
            <p class="section-subtitle">Three main benefits or features</p>

            <div class="grid grid-3">
                <div class="card text-center">
                    <h3 class="card-title">Feature 1</h3>
                    <p class="card-description">Description of this feature and its benefits.</p>
                </div>
                <div class="card text-center">
                    <h3 class="card-title">Feature 2</h3>
                    <p class="card-description">Description of this feature and its benefits.</p>
                </div>
                <div class="card text-center">
                    <h3 class="card-title">Feature 3</h3>
                    <p class="card-description">Description of this feature and its benefits.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="section section-alternate">
        <div class="container text-center">
            <h2 class="section-title">Ready to Get Started?</h2>
            <a href="#" class="btn btn-primary btn-large">
                <span class="arrow-icon">→</span>
                Start Now
            </a>
        </div>
    </section>

    <!-- Footer -->
    <footer style="background: var(--color-black); color: white; padding: 40px 0; text-align: center;">
        <div class="container">
            <p>&copy; 2025 Your Company. All rights reserved.</p>
        </div>
    </footer>
</body>
</html>
```

### Listing/Directory Page

```html
<!-- Header (same as homepage) -->

<!-- Page Title -->
<section class="section section-alternate">
    <div class="container text-center">
        <h1>Our Directory</h1>
        <p class="text-xl text-gray">Browse all listings</p>
    </div>
</section>

<!-- Filters (Optional) -->
<section class="section">
    <div class="container">
        <div class="flex items-center justify-between mb-8">
            <h2>All Listings</h2>

            <div class="flex gap-4">
                <select class="form-select" style="width: auto;">
                    <option>All Categories</option>
                    <option>Category 1</option>
                    <option>Category 2</option>
                </select>

                <input type="search" class="form-input" placeholder="Search..." style="width: 250px;">
            </div>
        </div>

        <!-- Listing Grid -->
        <div class="grid grid-3">
            <!-- Card 1 -->
            <div class="card card-hover">
                <img src="listing1.jpg" alt="Listing" class="card-image">
                <h3 class="card-title">Listing Title</h3>
                <p class="card-description">Short description of this listing item.</p>
                <a href="listing-detail.html" class="btn btn-primary">View Details</a>
            </div>

            <!-- Card 2 -->
            <div class="card card-hover">
                <img src="listing2.jpg" alt="Listing" class="card-image">
                <h3 class="card-title">Another Listing</h3>
                <p class="card-description">Short description here.</p>
                <a href="#" class="btn btn-primary">View Details</a>
            </div>

            <!-- Card 3 -->
            <div class="card card-hover">
                <img src="listing3.jpg" alt="Listing" class="card-image">
                <h3 class="card-title">Third Listing</h3>
                <p class="card-description">Description text.</p>
                <a href="#" class="btn btn-primary">View Details</a>
            </div>

            <!-- Repeat for more listings -->
        </div>

        <!-- Pagination -->
        <div class="flex justify-center gap-2 mt-8">
            <a href="#" class="btn btn-secondary btn-small">Previous</a>
            <a href="#" class="btn btn-primary btn-small">1</a>
            <a href="#" class="btn btn-secondary btn-small">2</a>
            <a href="#" class="btn btn-secondary btn-small">3</a>
            <a href="#" class="btn btn-secondary btn-small">Next</a>
        </div>
    </div>
</section>

<!-- Footer (same as homepage) -->
```

### Contact Page

```html
<!-- Header (same as homepage) -->

<!-- Page Title -->
<section class="section section-alternate">
    <div class="container text-center">
        <h1>Contact Us</h1>
        <p class="text-xl text-gray">Get in touch with our team</p>
    </div>
</section>

<!-- Contact Form -->
<section class="section">
    <div class="container-md">
        <form>
            <div class="form-group">
                <label class="form-label" for="name">Full Name</label>
                <input type="text" id="name" class="form-input" placeholder="John Doe" required>
            </div>

            <div class="form-group">
                <label class="form-label" for="email">Email Address</label>
                <input type="email" id="email" class="form-input" placeholder="you@example.com" required>
            </div>

            <div class="form-group">
                <label class="form-label" for="subject">Subject</label>
                <input type="text" id="subject" class="form-input" placeholder="What is this about?">
            </div>

            <div class="form-group">
                <label class="form-label" for="message">Message</label>
                <textarea id="message" class="form-textarea" placeholder="Your message here..." required></textarea>
            </div>

            <button type="submit" class="btn btn-primary btn-large btn-full">
                <span class="arrow-icon">→</span>
                Send Message
            </button>
        </form>
    </div>
</section>

<!-- Footer (same as homepage) -->
```

---

## Common Patterns Library

### Pattern 1: Hero Section with Image Background

```html
<section style="
    background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('hero.jpg');
    background-size: cover;
    background-position: center;
    padding: 150px 20px;
    color: white;
">
    <div class="container text-center">
        <h1 style="color: white;">Hero Title</h1>
        <p class="text-xl mb-8" style="color: white;">Subtitle</p>
        <a href="#" class="btn btn-primary btn-large">Get Started</a>
    </div>
</section>
```

### Pattern 2: Feature Grid with Icons

```html
<section class="section">
    <div class="container">
        <h2 class="section-title">Features</h2>

        <div class="grid grid-3">
            <div class="text-center">
                <div style="font-size: 48px; margin-bottom: 20px;">✓</div>
                <h3>Feature Name</h3>
                <p class="text-gray">Feature description</p>
            </div>
            <!-- Repeat -->
        </div>
    </div>
</section>
```

### Pattern 3: Two-Column Content + Image

```html
<section class="section">
    <div class="container">
        <div class="grid grid-2" style="align-items: center;">
            <div>
                <h2>About Us</h2>
                <p>Content text here...</p>
                <a href="#" class="btn btn-primary mt-4">Learn More</a>
            </div>
            <div>
                <img src="about.jpg" alt="About" style="width: 100%;">
            </div>
        </div>
    </div>
</section>
```

### Pattern 4: Testimonials/Reviews

```html
<section class="section section-alternate">
    <div class="container">
        <h2 class="section-title">What People Say</h2>

        <div class="grid grid-2">
            <div class="card">
                <p class="text-serif text-lg">"This is an amazing service!"</p>
                <p class="text-sm text-gray mt-4">- Customer Name</p>
            </div>
            <div class="card">
                <p class="text-serif text-lg">"Highly recommended!"</p>
                <p class="text-sm text-gray mt-4">- Another Customer</p>
            </div>
        </div>
    </div>
</section>
```

### Pattern 5: Pricing Table

```html
<section class="section">
    <div class="container">
        <h2 class="section-title">Pricing</h2>

        <div class="grid grid-3">
            <div class="card text-center">
                <h3 class="text-2xl mb-4">Basic</h3>
                <div class="text-4xl text-primary mb-4">$19</div>
                <ul style="list-style: none; margin-bottom: 20px;">
                    <li>Feature 1</li>
                    <li>Feature 2</li>
                    <li>Feature 3</li>
                </ul>
                <a href="#" class="btn btn-secondary btn-full">Choose Plan</a>
            </div>

            <div class="card text-center" style="border: 3px solid var(--color-primary);">
                <h3 class="text-2xl mb-4">Pro</h3>
                <div class="text-4xl text-primary mb-4">$49</div>
                <ul style="list-style: none; margin-bottom: 20px;">
                    <li>Feature 1</li>
                    <li>Feature 2</li>
                    <li>Feature 3</li>
                    <li>Feature 4</li>
                </ul>
                <a href="#" class="btn btn-primary btn-full">Choose Plan</a>
            </div>

            <div class="card text-center">
                <h3 class="text-2xl mb-4">Enterprise</h3>
                <div class="text-4xl text-primary mb-4">$99</div>
                <ul style="list-style: none; margin-bottom: 20px;">
                    <li>All Features</li>
                    <li>Priority Support</li>
                    <li>Custom Integration</li>
                </ul>
                <a href="#" class="btn btn-secondary btn-full">Contact Us</a>
            </div>
        </div>
    </div>
</section>
```

### Pattern 6: FAQ Section

```html
<section class="section section-alternate">
    <div class="container-md">
        <h2 class="section-title">Frequently Asked Questions</h2>

        <div class="card mb-4">
            <h3 class="card-title">Question 1?</h3>
            <p>Answer to question 1 goes here...</p>
        </div>

        <div class="card mb-4">
            <h3 class="card-title">Question 2?</h3>
            <p>Answer to question 2 goes here...</p>
        </div>

        <div class="card">
            <h3 class="card-title">Question 3?</h3>
            <p>Answer to question 3 goes here...</p>
        </div>
    </div>
</section>
```

---

## Migration Checklist

### Before You Start
- [ ] Backup your entire website
- [ ] Make a list of all pages that need updating
- [ ] Test on a staging/development version first

### Global Changes (Apply to ALL pages)
- [ ] Add Google Fonts link to `<head>`
- [ ] Add `design-system.css` to `<head>`
- [ ] Update `body` font to Courier Prime (should happen automatically)
- [ ] Wrap all content in `<section class="section">` + `<div class="container">`

### Component Conversion (Page by Page)
- [ ] Convert all buttons to `.btn` classes
- [ ] Convert navigation to `.nav` component
- [ ] Convert forms to use form classes
- [ ] Convert lists/grids to `.card` + `.grid` layout
- [ ] Add alternating `.section-alternate` backgrounds
- [ ] Standardize section titles with `.section-title`

### Header/Footer
- [ ] Update header with dark background and orange CTAs
- [ ] Convert navigation to new nav component
- [ ] Update footer styling

### Testing (After Each Page)
- [ ] Check on desktop (1920px, 1440px, 1024px)
- [ ] Check on tablet (768px)
- [ ] Check on mobile (375px, 320px)
- [ ] Test all buttons and links work
- [ ] Verify forms are functional
- [ ] Check images display correctly
- [ ] Validate HTML

### Final Quality Check
- [ ] All pages use consistent spacing
- [ ] Orange is only used for CTAs and accents
- [ ] All sections alternate white/gray backgrounds
- [ ] Typography is consistent (Courier Prime)
- [ ] All buttons have hover effects
- [ ] Mobile menu works (if applicable)
- [ ] Forms have proper validation states
- [ ] Load time is fast (<3 seconds)

---

## Instructions for Claude

**When given this file, follow these steps:**

1. **Analyze the current website structure**
   - Identify all pages
   - List current components (buttons, forms, cards, etc.)
   - Note any custom functionality

2. **Add fonts and CSS**
   - Insert Google Fonts link in `<head>` of all pages
   - Create `design-system.css` with the CSS code provided
   - Link to design-system.css in all pages

3. **Convert components systematically**
   - Start with global elements (buttons, nav)
   - Move to layout (sections, containers)
   - Then individual components (cards, forms)
   - Use the conversion guide table as reference

4. **Apply patterns**
   - Use the Common Patterns Library for standard sections
   - Follow the Page-by-Page templates
   - Maintain consistency across all pages

5. **Test and validate**
   - Ensure responsive design works
   - Check all interactive elements
   - Verify visual consistency

6. **Report completion**
   - List all pages converted
   - Note any custom modifications
   - Highlight any issues or recommendations

---

## Color Palette Reference

```
Primary Orange:    #FF6B35  (Use for CTAs, important links, accents)
Orange Hover:      #E55A25  (Hover state for orange elements)
Black:             #000000  (Headers, important text)
Dark Gray:         #333333  (Body text)
Medium Gray:       #666666  (Secondary text)
Light Gray:        #E0E0E0  (Borders, dividers)
Background Gray:   #F9F9F9  (Alternate section backgrounds)
White:             #FFFFFF  (Primary background)
```

---

## Support & Questions

If something is unclear:
1. Check the `DESIGN-GUIDELINES.md` for detailed explanations
2. Open `components-demo.html` to see live examples
3. Reference the landing page at `index.html` for implementation examples

**Remember:** Consistency is key. Stick to the system, and the entire website will have a cohesive, professional appearance.

---

**END OF IMPLEMENTATION GUIDE**

Give this file to Claude with instructions like:
"Apply this design system to my entire website located at [path/url]"
