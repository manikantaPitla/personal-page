# Personal Portfolio Website

A modern, responsive portfolio website built with React showcasing my work, skills, and experience as a Full Stack Developer.

## Live Demo

[manikantapitla.netlify.app](https://manikantapitla.netlify.app/)

## Tech Stack

- React 18, Styled Components, Framer Motion
- React Icons, EmailJS, React Hot Toast

## Project Structure

```
src/
├── animations/           # Animation components
├── components/          # React components
├── config/              # Configuration files
├── constants/           # All constants and data
├── hooks/               # Custom React hooks
├── styles/              # CSS styles
└── utils/               # Utility functions
```

## Getting Started

1. **Clone and install**

   ```bash
   git clone https://github.com/manikantaPitla/personal-portfolio.git
   cd personal-portfolio
   npm install
   ```

2. **Set up environment**

   ```bash
   cp .env.example .env
   # Edit .env with your API keys
   ```

3. **Start development server**
   ```bash
   npm start
   ```

## Environment Variables

```env
REACT_APP_GITHUB_TOKEN=your_github_token_here
REACT_APP_SERVICE_ID=your_emailjs_service_id
REACT_APP_TEMPLATE_ID=your_emailjs_template_id
REACT_APP_PUBLIC_KEY=your_emailjs_public_key
```

## Customization

- Update profile data in `src/constants/profileData.js`
- Modify styles in `src/styles/`
- Add new sections in `src/components/`

## Contact

- **Email**: pitlamanikanta81@gmail.com
- **LinkedIn**: [manikantapitla](https://www.linkedin.com/in/manikantapitla/)
- **GitHub**: [manikantaPitla](https://github.com/manikantaPitla)
