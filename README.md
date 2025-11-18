# Architecture Studio Landing Page

## Project Overview
Landing page for Google Ads campaign featuring sustainable crafted architecture. Built with pure HTML5, CSS3, and vanilla JavaScript for optimal performance.

## Project Structure
```
landing-page/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # All styles
├── js/
│   └── script.js       # Interactive functionality
├── images/             # Image assets
└── README.md          # This file
```

## Current Status
✅ HTML structure complete
✅ CSS styling implemented
✅ Responsive design
✅ Smooth scrolling navigation
✅ Performance optimizations
✅ Google Ads conversion tracking hooks

## Required Assets from Client

### Images Needed (High Resolution, Web Optimized)
The design requires approximately 15-20 high-quality images:

1. **Hero Section** - Large architectural exterior (current: Baleeira_Março2022-91.jpg)
2. **Interior shots** - 2-3 images showing interior details and craftsmanship
3. **Exterior shots** - 3-4 images showing different architectural projects
4. **Material textures** - 2 images showing natural materials (wood, cork, stone)
5. **Construction details** - 2-3 images showing construction process/details
6. **Luxury/lifestyle shots** - 2-3 images showing completed spaces
7. **Team photo** - Group photo of the architecture team
8. **Detail shots** - 3-4 images showing architectural details, rigor, and craftsmanship

### Other Assets Needed
- [ ] Studio logo (SVG or PNG with transparent background)
- [ ] Actual testimonial quotes and client names
- [ ] Correct service descriptions in both English and Portuguese
- [ ] Team member information and credentials

## Google Ads Integration

### To Complete:
1. **Add Google Ads Conversion Tracking ID**
   - Replace placeholder in `js/script.js` line 58
   - Format: `AW-XXXXXXXXX/XXXXXXXXXXX`

2. **Add Google Analytics Tag**
   - Insert in `<head>` section of `index.html`

3. **Add Facebook Pixel** (if needed)
   - Insert before closing `</body>` tag

### Conversion Events Tracked:
- CTA button clicks ("START YOUR PROJECT")
- Form submissions (when contact form is added)
- Phone number clicks (when added)

## Performance Optimizations

### Current Features:
- Lazy loading images
- Smooth scroll behavior
- Minimal JavaScript
- Optimized CSS with no frameworks
- Fast loading time

### Recommended Optimizations:
1. **Image Optimization**
   - Convert to WebP format with JPG fallback
   - Compress images to <200KB each
   - Use srcset for responsive images

2. **Hosting Recommendations**
   - Netlify (free tier available)
   - Vercel (free tier available)
   - Cloudflare Pages (free tier available)

3. **Before Launch Checklist**
   - [ ] Compress all images
   - [ ] Add favicon
   - [ ] Add Open Graph meta tags
   - [ ] Add structured data (JSON-LD)
   - [ ] Test on mobile devices
   - [ ] Test page speed (aim for <3 seconds)
   - [ ] Set up SSL certificate
   - [ ] Configure custom domain

## Responsive Breakpoints
- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: 320px - 767px

## Typography
- Headers: 'Courier Prime' (monospace)
- Body: 'Courier Prime' with 'Libre Baskerville' (serif) for emphasis
- Both fonts loaded from Google Fonts

## Color Palette
- Primary: `#FF6B35` (Orange)
- Background: `#FFFFFF` (White)
- Text: `#000000` (Black)
- Secondary Text: `#666666` (Gray)
- Accent Background: `#F9F9F9` (Light Gray)

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Next Steps

1. **Gather all images from client**
2. **Replace placeholder content with actual copy**
3. **Add contact form** (recommend Formspree or Netlify Forms)
4. **Insert Google Ads tracking codes**
5. **Test thoroughly across devices**
6. **Optimize images for web**
7. **Deploy to hosting platform**
8. **Configure domain and SSL**
9. **Submit for review**
10. **Launch Google Ads campaign**

## Contact Form Integration Options

### Option 1: Formspree (Easiest)
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <input type="email" name="email" required>
  <textarea name="message" required></textarea>
  <button type="submit">Send</button>
</form>
```

### Option 2: Netlify Forms (If hosted on Netlify)
```html
<form name="contact" method="POST" data-netlify="true">
  <input type="email" name="email" required>
  <textarea name="message" required></textarea>
  <button type="submit">Send</button>
</form>
```

### Option 3: Custom Backend
- PHP mail() function
- Node.js with Nodemailer
- Python with Flask/Django

## Questions for Client

1. Do you have all the images from the design? Can you share them?
2. What is your preferred contact method? (Form, email, phone, WhatsApp?)
3. Do you have a Google Ads account set up?
4. Do you have a domain name? If yes, what is it?
5. Do you need the site in both English and Portuguese?
6. Are the testimonials real? Can you provide actual client quotes?
7. Do you have a preference for form submission service?

## Notes
- Currently using available Baleeira images as placeholders
- Some images are repeated where unique images are needed
- Portuguese service descriptions need verification/correction
- Team section content is placeholder and needs real information

## Testing the Page
1. Open `index.html` in a web browser
2. Test all navigation links
3. Test CTA buttons
4. Resize browser to test responsiveness
5. Check mobile view (use browser dev tools)

## Support
For any questions or modifications needed, contact the developer.
