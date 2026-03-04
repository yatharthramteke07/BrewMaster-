# ☕ BrewMaster - Premium Coffee Shop Website

A modern, responsive, and dynamic coffee shop website built with **HTML5**, **CSS3**, and **JavaScript**.

## 🎨 Features

### ✨ Dynamic & Responsive
- **Fully Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Mobile-First Approach** - Optimized for all screen sizes
- **Hamburger Menu** - Easy navigation on mobile devices
- **Smooth Scrolling** - Enhanced user experience with smooth page transitions

### 🎯 Interactive Features
- **Dynamic Menu Filtering** - Filter coffee by categories (Espresso, Latte, Specialty)
- **Live Menu Rendering** - 12+ coffee items with real-time filtering
- **Contact Form** - Functional contact form with validation
- **Scroll Animations** - Elements animate in as you scroll
- **Keyboard Shortcuts** - Press 'H' for home, 'M' for menu, 'C' for contact
- **Scroll-to-Top Button** - Quick navigation to top of page
- **Active Navigation Highlighting** - Shows which section you're on

### 📸 Great Visuals
- **Beautiful Hero Section** - Eye-catching background with gradient overlay
- **Professional Color Scheme** - Coffee-themed brown, cream, and gold colors
- **Card-Based Layout** - Modern card design for menu items and testimonials
- **Hover Effects** - Smooth animations on interactive elements
- **Professional Typography** - Clear, readable fonts with proper hierarchy

### 🏢 Complete Sections
1. **Navigation Bar** - Sticky navbar with smooth scroll links
2. **Hero Section** - Stunning banner with call-to-action
3. **Menu Section** - Dynamic coffee menu with price and badges
4. **About Section** - Shop information and key features
5. **Testimonials** - Customer reviews with star ratings
6. **Contact Section** - Location, phone, email, and contact form
7. **Footer** - Multiple links and social media

## 📁 Project Structure

```
cofee-shop-website/
├── index.html          # Main HTML file
├── styles.css          # Complete stylesheet with responsive design
├── script.js           # Dynamic JavaScript functionality
├── README.md           # This file
└── assets/
    ├── images/         # Place your images here
    └── icons/          # Place your icons here
```

## 🚀 Getting Started

### Option 1: Open in Browser
1. Simply open `index.html` in your web browser
2. No installation or dependencies required!

### Option 2: Using Live Server (Recommended)
1. Install VS Code Live Server extension
2. Right-click on `index.html` and select "Open with Live Server"
3. Your default browser will open with the website

## 💻 How to Use

### View the Website
- Open `index.html` in any modern web browser
- All features work without any build process

### Customize Your Coffee Shop
1. **Update Text Content** - Edit text in `index.html`
2. **Change Colors** - Modify CSS variables in `styles.css`
3. **Add Your Images** - Replace image placeholders with your own
4. **Modify Menu Items** - Edit `menuData` in `script.js`

## 📱 Browser Compatibility
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎨 Customization Guide

### Change Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #8B4513;      /* Brown */
    --secondary-color: #D2691E;    /* Chocolate */
    --accent-color: #FFD700;       /* Gold */
    --dark-bg: #1a1a1a;           /* Dark Gray */
    --light-bg: #f5f5f5;          /* Light Gray */
}
```

### Add New Menu Items
Add items to `menuData` array in `script.js`:
```javascript
{
    name: 'Your Coffee Name',
    category: 'espresso|latte|specialty',
    description: 'Your description',
    price: 5.00,
    icon: '☕',
    badge: 'Popular' // or null
}
```

### Add Your Images
1. Place images in `assets/images/` folder
2. Replace image placeholders in HTML or CSS with actual image paths:
   - Hero background: `style="background-image: url('your-image.jpg')"`
   - About section image: Update `.image-placeholder` or add `<img>` tag

### Modify Contact Information
Edit the contact details in `index.html`:
- Address
- Phone number
- Email
- Business hours

## 🎭 Features Explained

### Dynamic Menu Filtering
Click filter buttons to see different coffee categories. The JavaScript automatically filters and animates the menu items.

### Contact Form
Fill in your information and send a message. The form validates:
- All fields are required
- Valid email format
- Shows success/error notifications

### Scroll Animations
Elements fade in and move up as you scroll down the page, creating a dynamic viewing experience.

### Keyboard Shortcuts
- Press **H** - Jump to Home
- Press **M** - Jump to Menu
- Press **C** - Jump to Contact

## 📊 Performance
- Lightweight HTML5 (no heavy libraries)
- Optimized CSS with modern features
- Vanilla JavaScript (no dependencies)
- Fast load times
- Smooth animations

## 🔧 Development Tips

### Adding a Dark Mode
The CSS already has dark theme styles. Add a button to toggle:
```javascript
document.body.classList.toggle('dark-theme');
```

### Adding More Sections
1. Add a new `<section>` in HTML
2. Add ID to the section for navigation
3. Add styles in CSS
4. Add navigation link in navbar

### Adding Analytics
Insert tracking code before `</body>`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<!-- Analytics code -->
```

## 📝 License
Free to use for personal and commercial projects.

## 🤝 Support
For questions or issues:
1. Check the code comments
2. Review the HTML structure
3. Inspect CSS variables
4. Check browser console for errors

## 🎯 Best Practices Used
✅ Semantic HTML5  
✅ Mobile-First Responsive Design  
✅ Modern CSS (Flexbox, Grid, Variables)  
✅ Vanilla JavaScript (No dependencies)  
✅ Accessibility considerations  
✅ Performance optimized  
✅ Clean, maintainable code  

---

**Happy Brewing! ☕**  
Made with ❤️ for coffee lovers.
