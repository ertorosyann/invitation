# Wedding Invitation Website - React

A beautiful, modern wedding invitation website built with React and Vite.

## 🌟 Features

- **Interactive Hero Section**: Animated opening invitation with smooth transitions
- **Background Music Player**: Auto-playing background music with controls
- **Event Details**: Clear display of ceremony and reception information with Google Maps integration
- **RSVP Form**: Conditional form for guests to confirm attendance
- **Photo Gallery**: Elegant display of wedding photos
- **Fully Responsive**: Optimized for all device sizes
- **Smooth Animations**: Beautiful entrance and interaction animations
- **Armenian Language Support**: Full support for Armenian text and fonts

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## 🚀 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🏗️ Project Structure

```
wedding-react/
├── src/
│   ├── components/
│   │   ├── Hero.jsx              # Opening invitation screen
│   │   ├── Invitation.jsx        # Welcome message
│   │   ├── EventDetails.jsx      # Ceremony and reception details
│   │   ├── RSVPForm.jsx          # Guest response form
│   │   ├── Gallery.jsx           # Photo gallery
│   │   ├── ContactInfo.jsx       # Contact information
│   │   ├── Footer.jsx            # Footer with credits
│   │   ├── BackgroundMusic.jsx   # Music player control
│   ├── styles/
│   │   ├── index.css             # Global styles
│   │   ├── App.css               # App component styles
│   │   └── [component].css       # Individual component styles
│   ├── App.jsx                   # Main app component
│   └── main.jsx                  # App entry point
├── index.html                    # HTML template
├── package.json                  # Dependencies and scripts
├── vite.config.js                # Vite configuration
└── README.md                     # This file
```

## 🎨 Customization

### Updating Wedding Details

Edit the following files to customize the invitation:

- **Date and Time**: `src/components/EventDetails.jsx`
- **Venue Information**: `src/components/EventDetails.jsx`
- **Names**: `src/components/Hero.jsx` and `src/components/Invitation.jsx`
- **RSVP Deadline**: `src/components/RSVPForm.jsx`
- **Contact Information**: `src/components/ContactInfo.jsx`

### Changing Images

Replace the image URLs in the components with your own:

```jsx
// In Hero.jsx, Invitation.jsx, Gallery.jsx, etc.
<img src="your-image-url.jpg" alt="Description" />
```

### Updating Background Music

Change the audio source in `src/components/BackgroundMusic.jsx`:

```jsx
<source src="your-music-file.mp3" type="audio/mpeg" />
```

### Styling

All component styles are modular and located in `src/styles/`. Edit the respective CSS file to customize colors, fonts, and layouts.

## 🌐 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Deploy to Netlify/Vercel

1. Connect your repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎭 Original Design

This project is a refactored version of a Tilda-based wedding invitation website, rebuilt with modern React practices for better performance, maintainability, and customization.

## 📄 License

All content and design elements are copyrighted. Unauthorized copying, distribution, or use is prohibited without prior consent.

## 🤝 Credits

Website created by [Hraver.am](https://hraver.am)

---

Made with ❤️ for a special day

