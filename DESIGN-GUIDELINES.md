# Design System Guidelines
### Architecture Landing Page - Warm, Crafted Aesthetic

---

## 🎨 Design Philosophy

This design system embodies a **warm, professional, and crafted aesthetic** that combines:
- **Typewriter nostalgia** with modern monospace typography
- **Natural warmth** through an earth-tone orange accent
- **Minimalist clarity** with generous white space
- **Architectural precision** in grid layouts and spacing

---

## 📐 Core Design Principles

### 1. **Simplicity First**
- Clean layouts with clear hierarchy
- Minimal decorative elements
- Content-focused design

### 2. **Warm & Approachable**
- Orange accent color provides warmth without being aggressive
- Ample white space creates breathing room
- Approachable typography balances professionalism with personality

### 3. **Crafted & Intentional**
- Monospace typography suggests precision and craftsmanship
- Consistent spacing creates rhythm
- Thoughtful image placement tells a story

### 4. **Performance-Focused**
- Lightweight, no frameworks required
- Fast-loading components
- Optimized for conversions

---

## 🎨 Color Palette

### Primary Colors

```css
Orange (Primary):    #FF6B35  /* Main CTA, links, accents */
Orange Hover:        #E55A25  /* Hover states */
Orange Light:        rgba(255, 107, 53, 0.1)  /* Backgrounds, highlights */
```

**Usage:**
- Primary CTAs and buttons
- Important links and navigation highlights
- Accent elements to draw attention
- Hover states for interactive elements

### Neutral Palette

```css
Black:               #000000  /* Headlines, primary text */
Dark Gray:           #333333  /* Body text */
Medium Gray:         #666666  /* Secondary text */
Light Gray:          #999999  /* Tertiary text, captions */
Border Gray:         #E0E0E0  /* Dividers, borders */
Background Gray:     #F9F9F9  /* Section backgrounds */
White:               #FFFFFF  /* Backgrounds, cards */
```

**Usage:**
- Use black for headlines and important text
- Use dark gray for body copy
- Use background gray to alternate sections
- White for primary backgrounds and cards

### Color Usage Rules

✅ **DO:**
- Use orange sparingly for maximum impact
- Maintain high contrast for readability (black on white)
- Use gray backgrounds to create visual separation
- Keep most of the interface white/light

❌ **DON'T:**
- Don't use orange for large text blocks
- Avoid low-contrast color combinations
- Don't add additional accent colors
- Don't use colored backgrounds for body text

---

## ✍️ Typography

### Font Families

**Primary Font: Courier Prime (Monospace)**
```css
font-family: 'Courier Prime', 'Courier New', monospace;
```
- Headlines (H1-H6)
- Body text
- Navigation
- Buttons
- Forms

**Secondary Font: Libre Baskerville (Serif)**
```css
font-family: 'Libre Baskerville', Georgia, serif;
font-style: italic;
```
- Emphasis statements
- Pull quotes
- Special messaging
- Decorative text

### Font Scale

```
Heading 1:     48px  (Desktop) / 24px (Mobile)
Heading 2:     36px  (Desktop) / 22px (Mobile)
Heading 3:     32px  (Desktop) / 24px (Mobile)
Heading 4:     24px
Heading 5:     20px
Heading 6:     18px
Body Large:    18px
Body:          16px
Body Small:    14px
Caption:       12px
Tiny:          10px
```

### Typography Rules

**Line Height:**
- Headlines: 1.2
- Body text: 1.6-1.8
- Captions: 1.4

**Letter Spacing:**
- Headlines: 0.6px - 1px
- Uppercase text: 0.8px - 1.5px
- Body text: normal

**Font Weights:**
- Normal: 400 (body text)
- Bold: 700 (headlines, buttons, emphasis)

### When to Use Each Font

**Courier Prime (Monospace):**
- All headlines and titles
- Body copy and paragraphs
- Navigation menus
- Buttons and CTAs
- Form labels and inputs
- Captions and metadata

**Libre Baskerville (Serif):**
- Taglines and slogans
- Pull quotes from testimonials
- Emphasis phrases
- Mission statements
- Decorative/poetic text

---

## 📏 Spacing System

### Spacing Scale

```
4px   (space-1)   - Tight spacing between related elements
8px   (space-2)   - Button icon gaps, small padding
12px  (space-3)   - Form input padding
16px  (space-4)   - Standard spacing, paragraph margins
20px  (space-5)   - Card padding
24px  (space-6)   - Section element spacing
32px  (space-8)   - Large element spacing
40px  (space-10)  - Navigation gaps
48px  (space-12)  - Section title margins
64px  (space-16)  - Between major sections
80px  (space-20)  - Section padding (vertical)
96px  (space-24)  - Large section padding
```

### Spacing Guidelines

**Vertical Rhythm:**
- Use consistent multiples of 4px
- Double spacing between unrelated elements
- More breathing room for important content

**Horizontal Spacing:**
- Generous padding inside containers (20-40px)
- Balance content width with whitespace
- Use max-width containers (1200px) to prevent line length issues

---

## 🔘 Component Library

### Buttons

**Primary Button (Orange)**
```html
<a href="#" class="btn btn-primary">
    <span class="arrow-icon">→</span>
    Button Text
</a>
```

**Usage:**
- Main call-to-action
- Form submissions
- Important actions

**Secondary Button (Outline)**
```html
<a href="#" class="btn btn-secondary">
    Button Text
</a>
```

**Usage:**
- Secondary actions
- Cancel buttons
- Less important CTAs

**Button Sizes:**
- Default: 14px, 14px padding vertical, 28px horizontal
- Large: 18px, 18px padding vertical, 45px horizontal
- Small: 12px, 10px padding vertical, 20px horizontal

**Button States:**
- Hover: Lift 2px up, add shadow
- Active: Slight scale down
- Disabled: 50% opacity, no pointer events

### Cards

**Basic Card**
```html
<div class="card card-hover">
    <img src="image.jpg" alt="Description" class="card-image">
    <h3 class="card-title">Card Title</h3>
    <p class="card-description">Card description text goes here.</p>
</div>
```

**Usage:**
- Project listings
- Directory entries
- Service offerings
- Team member profiles

### Forms

**Form Elements**
```html
<div class="form-group">
    <label class="form-label" for="input-id">Label Text</label>
    <input type="text" id="input-id" class="form-input" placeholder="Placeholder">
</div>

<div class="form-group">
    <label class="form-label" for="textarea-id">Message</label>
    <textarea id="textarea-id" class="form-textarea" placeholder="Your message"></textarea>
</div>
```

**Form Styling:**
- Minimal borders (1px solid light gray)
- Focus state: orange border + subtle orange glow
- Labels: small, uppercase, bold, with letter-spacing
- Generous padding inside inputs (12px-16px)

### Navigation

**Horizontal Navigation**
```html
<nav class="nav">
    <a href="#" class="nav-link">Home</a>
    <a href="#" class="nav-link active">About</a>
    <a href="#" class="nav-link">Contact</a>
</nav>
```

**Styling:**
- Uppercase text
- Bold weight
- Generous spacing (40-50px gaps)
- Hover: orange color
- Active: orange color

---

## 🖼️ Image Guidelines

### Image Style

**Photography:**
- High-quality architectural photography
- Natural lighting preferred
- Warm tones that complement orange accent
- Professional, not overly saturated

**Image Treatment:**
- Use full-bleed images for impact
- Maintain aspect ratios
- Object-fit: cover for hero/large images
- Add subtle overlay for text readability (25% black)

### Image Layouts

**Hero Images:**
- Full viewport height (100vh)
- Center-aligned focal point
- Dark overlay for text contrast

**Grid Images:**
- Equal heights within rows
- 2-3 column grids work best
- Maintain consistent gaps (40px)

**Card Images:**
- 250px standard height
- Cover entire width
- 3:2 or 4:3 aspect ratios

---

## 📱 Responsive Design

### Breakpoints

```css
Mobile:    320px - 767px
Tablet:    768px - 1023px
Desktop:   1024px+
Wide:      1400px+
```

### Mobile-First Approach

**Font Scaling:**
- Reduce heading sizes by 30-50% on mobile
- Keep body text readable (minimum 16px)
- Increase line-height on mobile for readability

**Layout Adjustments:**
- Stack grids to single column
- Reduce padding/margins by 30-40%
- Make buttons full-width when appropriate
- Simplify navigation (hamburger menu)

**Touch Targets:**
- Minimum 44px × 44px
- More padding on mobile buttons
- Larger tap areas for links

---

## 📐 Layout Patterns

### Section Structure

```html
<section class="section">
    <div class="container">
        <h2 class="section-title">Section Title</h2>
        <p class="section-subtitle">Optional subtitle</p>

        <!-- Section content -->
        <div class="grid grid-3">
            <!-- Grid items -->
        </div>
    </div>
</section>
```

### Alternating Backgrounds

- Alternate between white and light gray (`#F9F9F9`)
- Creates visual rhythm and separation
- Helps organize content hierarchy

### Container Widths

- Standard: 1200px max-width
- Narrow: 768px (for forms, long-form content)
- Wide: 1400px (for galleries, large grids)

---

## 🎯 Best Practices

### DO's ✅

1. **Maintain Consistency**
   - Use design system components as-is
   - Don't create custom variations
   - Stick to the spacing scale

2. **Embrace Whitespace**
   - Don't cram too much content
   - Let elements breathe
   - Use generous margins and padding

3. **Keep It Simple**
   - Avoid unnecessary decorations
   - Let typography and spacing do the work
   - Focus on content hierarchy

4. **Use Orange Sparingly**
   - Only for CTAs and important links
   - Maximum impact through restraint
   - Don't overuse accent color

5. **Optimize Images**
   - Compress before uploading
   - Use appropriate sizes
   - Add alt text for accessibility

### DON'Ts ❌

1. **Don't Add New Colors**
   - Stick to the defined palette
   - More colors = less cohesion

2. **Don't Mix Font Styles**
   - No additional font families
   - No decorative fonts
   - Stick to system fonts

3. **Don't Ignore Spacing**
   - Random padding breaks rhythm
   - Use multiples of 4px only
   - Be consistent

4. **Don't Over-Design**
   - No gradients (unless subtle)
   - No drop shadows on text
   - No decorative borders

5. **Don't Forget Mobile**
   - Test on real devices
   - Ensure readability at all sizes
   - Touch targets must be large enough

---

## 🚀 Implementation Checklist

### Getting Started

- [ ] Include `design-system.css` in your project
- [ ] Add Google Fonts (Courier Prime, Libre Baskerville)
- [ ] Set up container structure
- [ ] Apply CSS variables

### For Each New Page

- [ ] Use semantic HTML
- [ ] Apply appropriate spacing classes
- [ ] Use defined button styles
- [ ] Maintain color palette
- [ ] Test on mobile devices
- [ ] Check contrast ratios (WCAG AA minimum)

### Quality Check

- [ ] All text is readable (contrast 4.5:1 minimum)
- [ ] Buttons are recognizable and clickable
- [ ] Images are optimized and load quickly
- [ ] Layout works on mobile (320px width)
- [ ] Typography scale is consistent
- [ ] Spacing follows the system

---

## 📚 Quick Reference

### Most Used Classes

```css
/* Containers */
.container                    /* Max-width 1200px, centered */

/* Buttons */
.btn .btn-primary            /* Orange CTA button */
.btn .btn-secondary          /* Outline button */
.btn-large                   /* Larger button */

/* Layout */
.section                     /* Standard section padding */
.section-alternate           /* Gray background section */
.grid .grid-2                /* 2-column grid */
.grid .grid-3                /* 3-column grid */

/* Typography */
.text-center                 /* Center text */
.text-serif                  /* Italic serif font */

/* Spacing */
.mt-4, .mb-4, .p-4          /* Margin/padding utilities */

/* Flex */
.flex .items-center          /* Flex with centered items */
.justify-between             /* Space between flex items */
```

---

## 💡 Tips for Your Directory

### Homepage
- Use hero section with high-quality image
- Keep headline clear and benefit-focused
- Prominent search bar or main CTA
- Show key categories or featured listings

### Listing Pages
- Use card components for directory entries
- Implement filters with form components
- Use grid layouts (3 columns on desktop)
- Add pagination with buttons

### Detail Pages
- Large hero image at top
- Clear information hierarchy
- Use gray sections to separate content
- Strong CTAs for contact/inquiries

### Forms
- Keep labels clear and uppercase
- Use placeholders for hints
- Show validation states
- Orange button for submit

---

## 🔗 Files Included

1. **design-system.css** - Complete CSS with all components
2. **DESIGN-GUIDELINES.md** - This file (comprehensive guide)
3. **components-demo.html** - Live examples of all components
4. **style.css** - Original landing page styles (reference)

---

## 📞 Support

For questions or clarifications about implementing this design system:
- Review the components demo HTML
- Reference the landing page implementation
- Check CSS variables in design-system.css

**Remember:** Consistency is key. Stick to the system, and your directory will have a cohesive, professional look that matches the warmth and craftsmanship of the original landing page.
