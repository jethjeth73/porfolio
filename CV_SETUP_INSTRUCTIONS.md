# CV Setup Instructions

## To make your CV download button work:

1. **Save your resume as a PDF file**
   - Export your resume from Word/Google Docs as PDF
   - Name it exactly: `Jonel_Magcayang_Resume.pdf`

2. **Place the file in the correct location**
   - Copy your PDF file to: `c:\xampp\htdocs\porfolio\assets\`
   - Replace the README_Resume.txt file

3. **Test the download**
   - Open your portfolio website
   - Go to the Resume section
   - Click "Download Resume" button
   - The PDF should download automatically

## Current Status:
- ✅ Download button is set up and working
- ✅ Error handling is in place (shows message if file is missing)
- ❌ PDF file needs to be added by you

## File Structure:
```
porfolio/
├── assets/
│   └── Jonel_Magcayang_Resume.pdf  ← Place your CV here
├── index.html
├── styles.css
└── script.js
```

The download will work as soon as you place your PDF file in the assets folder!