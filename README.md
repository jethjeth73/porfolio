# Portfolio Setup Instructions

## 📧 Setting Up Email Functionality

To make the contact form work and send emails directly to your email address:

### 1. Sign up for EmailJS
1. Go to [emailjs.com](https://www.emailjs.com/)
2. Create a free account
3. Create a new service (Gmail, Outlook, etc.)
4. Create an email template

### 2. Configure EmailJS
1. In your EmailJS dashboard, note down:
   - Your **Public Key**
   - Your **Service ID**
   - Your **Template ID**

2. Replace the following in `index.html`:
   ```javascript
   emailjs.init('YOUR_PUBLIC_KEY'); // Replace with your actual public key
   ```

3. Replace in `script.js`:
   ```javascript
   emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
   ```

### 3. EmailJS Template Variables
In your EmailJS template, use these variables:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{subject}}` - Email subject
- `{{message}}` - Email message
- `{{to_email}}` - Your email (magcayangjonel25@gmail.com)

## 🖼️ Adding Images

### Folder Structure
Your images should be placed in these folders:

```
images/
├── profile/
│   └── profile.jpg
├── projects/
│   ├── health-record/
│   │   ├── health-1.jpg
│   │   ├── health-2.jpg
│   │   └── health-3.jpg
│   ├── korean-mart/
│   │   ├── mart-1.jpg
│   │   ├── mart-2.jpg
│   │   └── mart-3.jpg
│   ├── mobile-health/
│   │   ├── mobile-1.jpg
│   │   ├── mobile-2.jpg
│   │   └── mobile-3.jpg
│   └── pos-system/
│       ├── pos-1.jpg
│       ├── pos-2.jpg
│       └── pos-3.jpg
└── certificates/
    ├── artificial-intelligence.jpg
    ├── cyber-security.jpg
    ├── ileap-intellectual-property.jpg
    ├── microsoft-ai.jpg
    ├── network-troubleshooting.jpg
    └── salesforce.jpg
```

### Image Requirements
- **Format**: JPG, PNG, or WebP
- **Size**: Recommended 800x600px or similar aspect ratio
- **File Size**: Keep under 500KB for faster loading
- **Naming**: Use the exact names shown above

### Image Descriptions
Each project needs 3 images:

#### Health Record Management System
- `health-1.jpg`: Dashboard/Main interface
- `health-2.jpg`: Patient management screen
- `health-3.jpg`: Authentication/Security features

#### Korean Mart Web Application
- `mart-1.jpg`: Homepage/Store front
- `mart-2.jpg`: Admin dashboard
- `mart-3.jpg`: Shopping cart/Checkout

#### Mobile Health Record App
- `mobile-1.jpg`: Mobile app interface
- `mobile-2.jpg`: Biometric login screen
- `mobile-3.jpg`: AI chat assistant

#### POS System
- `pos-1.jpg`: POS dashboard
- `pos-2.jpg`: Inventory management
- `pos-3.jpg`: Sales reports

### Certificate Images
Each certificate should be a high-quality scan or photo:
- `artificial-intelligence.jpg`: Artificial Intelligence Fundamentals certificate
- `cyber-security.jpg`: Cybersecurity Fundamentals certificate  
- `ileap-intellectual-property.jpg`: iLEAP Intellectual Property certificate
- `microsoft-ai.jpg`: Microsoft Azure AI Fundamentals certificate
- `network-troubleshooting.jpg`: Network Addressing and Basic Troubleshooting certificate
- `salesforce.jpg`: Salesforce Virtual Internship Program certificate

**Certificate Image Requirements:**
- **Format**: JPG, PNG, or PDF screenshot
- **Size**: Minimum 1200x800px for clear viewing
- **Quality**: High resolution for text readability
- **File Size**: Keep under 1MB for fast loading

### Profile Image
Your professional headshot should be saved as:
- **Filename**: `profile.jpg`
- **Location**: `images/profile/profile.jpg`
- **Requirements**:
  - **Format**: JPG or PNG
  - **Size**: Minimum 500x500px (square aspect ratio preferred)
  - **Quality**: High resolution, professional photo
  - **File Size**: Keep under 500KB
  - **Style**: Professional headshot, clear face visibility, good lighting

## 🎨 Features Implemented

### ✅ Section Title Improvements
- Larger, more visible section titles
- Background styling for better contrast
- Text shadow for enhanced readability

### ✅ Project Slideshow
- 3 images per project with smooth transitions
- Navigation arrows (left/right)
- Dot indicators for direct navigation
- Auto-slideshow (5-second intervals)
- Pause on hover functionality
- Fallback to icon if images don't load

### ✅ Removed Projects
- Graphic Design Portfolio
- Mobile App UI/UX Designs

### ✅ Contact Form
- Real email sending with EmailJS
- Form validation
- Success/error notifications
- Fallback to mailto if EmailJS fails

### ✅ Certificate Image Display
- Certificate images displayed in cards
- Click to view full-size modal
- Smooth hover overlay effects
- Fallback to icons if images don't load

### ✅ Enhanced Section Visibility
- **Resume section**: Extra large title with gradient background
- **About Me section**: Blue gradient background with white text
- Better contrast and readability
- Enhanced shadow and backdrop blur effects

### ✅ Enhanced Interactions
- Smooth hover effects on project cards
- Better navigation highlighting
- Improved mobile responsiveness
- Back-to-top button functionality

## 🚀 Testing Your Portfolio

1. **Test locally**: Open `http://localhost/portfolio/` in your browser
2. **Test slideshow**: Hover over project cards and use navigation
3. **Test contact form**: Fill out and submit the form
4. **Test responsive**: View on different screen sizes

## 📱 Mobile Responsive
The portfolio works perfectly on:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🔧 Troubleshooting

### Images not showing?
- Check file paths and names match exactly
- Ensure images are in correct folders
- Check file permissions

### Contact form not working?
- Verify EmailJS configuration
- Check browser console for errors
- Test with simple mailto fallback

### Slideshow not working?
- Ensure JavaScript is enabled
- Check browser console for errors
- Verify image paths are correct

## 🎯 Next Steps
1. Add your actual project screenshots
2. Set up EmailJS account and configure
3. Test all functionality
4. Deploy to web hosting service
5. Update social media links in footer

Enjoy your new professional portfolio! 🎉