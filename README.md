# Wallet – SaaS Landing Page

Mobile-first adaptive landing page for the Wallet service, using **HTML and CSS**.

<img width="595" alt="Screenshot 2025-05-24 at 01 25 10" src="https://github.com/user-attachments/assets/d3285c25-f9fe-4db5-99ad-80accfa24102" />

## Preview

**Live Demo**: [Click here to view](https://your-username.github.io/wallet-landing-page)

## Technologies

- HTML5 (semantic markup)
- CSS3 with:
  - CSS variables
  - CSS Flexbox/Grid
  - CSS Nesting (where needed)
  - Media queries for responsiveness
- No external libraries, frameworks, or preprocessors used

## Features

- **Pixel-perfect** layout (as close to the design as possible)
- **Responsive design**: supports mobile, tablet, and desktop screens
- **Semantic HTML structure**: validated via https://validator.w3.org/
- **Mobile menu with animation** for open/close
- **Additional animation added** to some elements
- **Script added for inline import of SVG symbols with gradients** to ensure proper rendering in Safari and other browsers
- Icons are implemented using a **handcrafted SVG sprite**

## Accessibility

- `aria-*` attributes for enhanced accessibility
- Visually hidden headings (`.visually-hidden`) for screen readers

## Structure

```
📁 wallet-landing-page/
├── index.html                 # Main HTML file
├── css/
│   └── styles.css             # Project styles
├── images/
│   └── icons.svg              # SVG sprite with icons
│   ├── image@1x.png           # Image for standard resolution screens
│   └── image@2x.png           # Image for Retina screens
├── js/
│   └── menu.js                # Script for toggling the mobile menu
│   └── sprite.js              # Script to ensure SVG with gradients render in Safari
```

## Deployment

The project is deployed via **GitHub Pages** and available at:
👉 [https://Ostrynska.github.io/wallet-landing-page](https://Ostrynska.github.io/wallet-landing-page)
