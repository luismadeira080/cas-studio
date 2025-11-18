# Design System - Quick Reference

**Copy-paste guide for implementing the warm architecture design**

---

## 🚀 Getting Started

### 1. Include in your HTML

```html
<head>
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&family=Libre+Baskerville:wght@400;700&display=swap" rel="stylesheet">

    <!-- Design System CSS -->
    <link rel="stylesheet" href="design-system.css">
</head>
```

### 2. Basic Page Structure

```html
<body>
    <section class="section">
        <div class="container">
            <!-- Your content here -->
        </div>
    </section>
</body>
```

---

## 🎨 Colors (Copy-Paste)

```css
/* Use these in your styles or inline */
Primary Orange:    #FF6B35
Orange Hover:      #E55A25
Black:             #000000
Dark Gray:         #333333
Gray:              #666666
Light Gray:        #E0E0E0
Background:        #F9F9F9
White:             #FFFFFF
```

**Or use CSS variables:**

```css
var(--color-primary)        /* #FF6B35 */
var(--color-black)          /* #000000 */
var(--color-gray-500)       /* #666666 */
var(--color-gray-50)        /* #F9F9F9 */
```

---

## ✍️ Typography

### Fonts
```css
/* Monospace (Primary) */
font-family: 'Courier Prime', monospace;

/* Serif (Accent) */
font-family: 'Libre Baskerville', serif;
font-style: italic;
```

### Font Sizes
```html
<h1>48px</h1>  or  class="text-5xl"
<h2>36px</h2>  or  class="text-4xl"
<h3>32px</h3>  or  class="text-3xl"
<p>16px</p>    or  class="text-md"
```

---

## 🔘 Buttons (Copy-Paste)

### Primary Button (Orange)
```html
<a href="#" class="btn btn-primary">
    <span class="arrow-icon">→</span>
    Button Text
</a>
```

### Secondary Button (Outline)
```html
<a href="#" class="btn btn-secondary">Button Text</a>
```

### Large Button
```html
<a href="#" class="btn btn-primary btn-large">Large Button</a>
```

### Full Width Button
```html
<a href="#" class="btn btn-primary btn-full">Full Width</a>
```

---

## 📦 Cards (Copy-Paste)

```html
<div class="card card-hover">
    <img src="image.jpg" alt="Title" class="card-image">
    <h3 class="card-title">Card Title</h3>
    <p class="card-description">Description text goes here.</p>
    <a href="#" class="btn btn-primary">Learn More</a>
</div>
```

---

## 📝 Forms (Copy-Paste)

### Text Input
```html
<div class="form-group">
    <label class="form-label" for="name">Name</label>
    <input type="text" id="name" class="form-input" placeholder="Enter name">
</div>
```

### Textarea
```html
<div class="form-group">
    <label class="form-label" for="message">Message</label>
    <textarea id="message" class="form-textarea" placeholder="Your message"></textarea>
</div>
```

### Select Dropdown
```html
<div class="form-group">
    <label class="form-label" for="select">Choose Option</label>
    <select id="select" class="form-select">
        <option>Option 1</option>
        <option>Option 2</option>
    </select>
</div>
```

---

## 🧭 Navigation (Copy-Paste)

```html
<nav class="nav">
    <a href="#" class="nav-link">Home</a>
    <a href="#" class="nav-link active">About</a>
    <a href="#" class="nav-link">Contact</a>
</nav>
```

---

## 📐 Layouts (Copy-Paste)

### Standard Section
```html
<section class="section">
    <div class="container">
        <h2 class="section-title">Section Title</h2>
        <p class="section-subtitle">Optional subtitle</p>
        <!-- Content -->
    </div>
</section>
```

### Alternate Background Section
```html
<section class="section section-alternate">
    <div class="container">
        <!-- Content -->
    </div>
</section>
```

### 2-Column Grid
```html
<div class="grid grid-2">
    <div>Column 1</div>
    <div>Column 2</div>
</div>
```

### 3-Column Grid
```html
<div class="grid grid-3">
    <div>Column 1</div>
    <div>Column 2</div>
    <div>Column 3</div>
</div>
```

---

## 🛠️ Utility Classes (Copy-Paste)

### Spacing
```html
<div class="mt-4">  <!-- Margin top 16px -->
<div class="mb-6">  <!-- Margin bottom 24px -->
<div class="p-4">   <!-- Padding 16px -->
<div class="p-8">   <!-- Padding 32px -->
```

### Flex
```html
<div class="flex items-center justify-between">
    <span>Left</span>
    <span>Center</span>
    <span>Right</span>
</div>
```

### Text
```html
<p class="text-center">   <!-- Center aligned -->
<p class="text-primary">  <!-- Orange text -->
<p class="text-gray">     <!-- Gray text -->
<p class="text-serif">    <!-- Italic serif font -->
```

---

## 📱 Responsive Breakpoints

```css
Mobile:    max-width: 767px
Tablet:    768px - 1023px
Desktop:   1024px+
```

**Grids automatically stack on mobile**

---

## 🎯 Common Patterns

### Hero Section
```html
<section style="height: 60vh; display: flex; align-items: center; justify-content: center; background: #000; color: #fff;">
    <div class="container text-center">
        <h1 style="color: #fff;">Hero Title</h1>
        <p style="color: #ccc;">Subtitle text</p>
        <a href="#" class="btn btn-primary btn-large">Get Started</a>
    </div>
</section>
```

### Features Grid
```html
<section class="section">
    <div class="container">
        <h2 class="section-title">Features</h2>
        <div class="grid grid-3">
            <div class="card">
                <h3>Feature 1</h3>
                <p>Description</p>
            </div>
            <div class="card">
                <h3>Feature 2</h3>
                <p>Description</p>
            </div>
            <div class="card">
                <h3>Feature 3</h3>
                <p>Description</p>
            </div>
        </div>
    </div>
</section>
```

### Contact Form
```html
<section class="section section-alternate">
    <div class="container-md">
        <h2 class="section-title">Contact Us</h2>
        <form>
            <div class="form-group">
                <label class="form-label" for="email">Email</label>
                <input type="email" id="email" class="form-input" placeholder="you@example.com">
            </div>
            <div class="form-group">
                <label class="form-label" for="msg">Message</label>
                <textarea id="msg" class="form-textarea"></textarea>
            </div>
            <button type="submit" class="btn btn-primary btn-large btn-full">Submit</button>
        </form>
    </div>
</section>
```

---

## 💡 Pro Tips

**1. Use Orange Sparingly**
```html
<!-- Good: Orange for CTAs only -->
<a href="#" class="btn btn-primary">Start Now</a>

<!-- Avoid: Orange everywhere -->
<h1 style="color: #FF6B35;">Don't do this</h1>
```

**2. Alternate Section Backgrounds**
```html
<section class="section">...</section>           <!-- White -->
<section class="section section-alternate">...</section>  <!-- Gray -->
<section class="section">...</section>           <!-- White -->
```

**3. Consistent Spacing**
```html
<!-- Use spacing scale: 4, 8, 16, 24, 32, 40, 48, 64, 80px -->
<div class="mb-4">16px bottom margin</div>
<div class="mb-8">32px bottom margin</div>
```

**4. Mobile-Friendly Buttons**
```html
<!-- Full width on mobile, auto on desktop -->
<a href="#" class="btn btn-primary btn-full">Mobile-Friendly CTA</a>
```

---

## ✅ Quick Checklist

When building a new page:

- [ ] Include Google Fonts link
- [ ] Include design-system.css
- [ ] Wrap content in `.container`
- [ ] Use `.section` for vertical spacing
- [ ] Alternate section backgrounds (white/gray)
- [ ] Use `.btn-primary` for main CTAs
- [ ] Use `.grid-2` or `.grid-3` for layouts
- [ ] Add `card-hover` to cards for interaction
- [ ] Test on mobile (grids should stack)
- [ ] Keep orange accent minimal

---

## 🔗 Need More Details?

- **Full documentation:** Read `DESIGN-GUIDELINES.md`
- **Live examples:** Open `components-demo.html` in browser
- **All CSS:** Reference `design-system.css`

---

## 📋 Starter Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Directory</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&family=Libre+Baskerville:wght@400;700&display=swap" rel="stylesheet">

    <!-- Design System -->
    <link rel="stylesheet" href="design-system.css">
</head>
<body>
    <!-- Header -->
    <header style="background: #000; padding: 20px 0;">
        <div class="container flex items-center justify-between">
            <div>Logo</div>
            <nav class="nav" style="color: #fff;">
                <a href="#" class="nav-link">Home</a>
                <a href="#" class="nav-link">About</a>
            </nav>
            <a href="#" class="btn btn-primary">Get Started</a>
        </div>
    </header>

    <!-- Main Content -->
    <main>
        <section class="section">
            <div class="container">
                <h1 class="section-title">Welcome</h1>
                <!-- Your content -->
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer style="background: #f9f9f9; padding: 40px 0; text-align: center;">
        <div class="container">
            <p>&copy; 2025 Your Directory</p>
        </div>
    </footer>
</body>
</html>
```

---

**That's it! Copy, paste, and customize for your directory.**
