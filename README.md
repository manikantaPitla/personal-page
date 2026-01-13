## Personal Portfolio Website

A modern, responsive portfolio website built with React showcasing my work, skills, and experience as a Full Stack Developer.

### Tech Stack

- React 18, TypeScript, Styled Components, Framer Motion
- React Icons, EmailJS, React Hot Toast

### Project Structure

```
src/
├── animations/           # Animation components (Framer Motion)
│   └── fadeInAnimation.tsx
├── components/          # React components
│   ├── ui/              # Reusable UI components
│   │   ├── index.ts     # Centralized UI exports
│   │   ├── Button/      # Button component
│   │   ├── Heading/     # Heading component
│   │   ├── Input/       # Input component
│   │   ├── Loaders/     # Loading spinner components
│   │   ├── MenuBar/     # Menu bar component
│   │   ├── Paragraph/   # Paragraph component
│   │   ├── Section/     # Section wrapper component
│   │   └── Icons/       # Icon exports
│   ├── About/           # About section component
│   ├── Contact/         # Contact form component
│   ├── Education/       # Education section component
│   ├── Footer/          # Footer component
│   ├── GitHub/          # GitHub profile component
│   ├── Home/            # Home/hero section component
│   ├── Introduction/    # Introduction section component
│   ├── Navigation/      # Navigation bar component
│   ├── Projects/        # Projects showcase component
│   ├── Repo/            # Repository card component
│   ├── Repository/      # Repository list component
│   ├── Skills/          # Skills section component
│   └── SocialLinks/     # Social media links component
├── config/              # Configuration files
│   └── env.ts           # Environment configuration
├── constants/           # All constants and data
│   ├── index.ts         # Centralized exports
│   ├── profileData.tsx  # Profile information
│   ├── navigationConstants.ts
│   ├── animationsConstants.ts
│   ├── emailConstants.ts
│   ├── apiConstants.ts
│   ├── colors.ts
│   ├── errorMessages.ts
│   ├── toastConstants.ts
│   └── README.md
├── hooks/               # Custom React hooks
│   ├── index.ts         # Centralized hook exports
│   ├── useFetchData.ts  # Data fetching hook
│   └── useNetworkStatus.ts
├── lib/                 # Third-party library configurations
│   ├── axios.ts         # Axios instance configuration
│   ├── emailjs.ts       # EmailJS initialization
│   └── framer-motion.ts # Framer Motion utilities
├── services/            # API services & external integrations
│   ├── index.ts         # Centralized service exports
│   ├── api/             # API services
│   │   ├── index.ts
│   │   └── github.service.ts
│   └── email/           # Email services
│       ├── index.ts
│       └── emailjs.service.ts
├── styles/              # Global CSS styles
│   ├── globalStyles.css
│   └── cssVariables.css
├── types/               # TypeScript type definitions
│   ├── profile.ts
│   └── github.ts
├── templates/           # Email templates
│   └── email-template.html  # EmailJS HTML email template
├── react-icons.d.ts     # TypeScript declarations for react-icons
└── react-app-env.d.ts   # React app type declarations
```

### Getting Started

This portfolio can also be used as a template. Follow these steps to set up and customize it for your own use:

### Step 1: Clone the Repository

```bash
git clone https://github.com/manikantaPitla/personal-portfolio.git
cd personal-portfolio
```

### Step 2: Remove Git History (Start Fresh)

Remove the existing git history to start your own repository:

**On Windows (PowerShell):**

```powershell
Remove-Item -Path .git -Recurse -Force
```

**On macOS/Linux:**

```bash
rm -rf .git
```

**Then initialize your own git repository:**

```bash
git init
git add .
git commit -m "Initial commit"
```

### Step 3: Install Dependencies

```bash
npm install
```

### Step 4: Set Up Environment Variables

Create a `.env` file in the root directory and add your API keys:

```bash
# Create .env file
touch .env
```

Add the following environment variables to your `.env` file:

```env
REACT_APP_GITHUB_TOKEN=your_github_token_here
REACT_APP_SERVICE_ID=your_emailjs_service_id
REACT_APP_TEMPLATE_ID=your_emailjs_template_id
REACT_APP_PUBLIC_KEY=your_emailjs_public_key
```

**Note:**

- GitHub token is required for the GitHub section to work properly
- EmailJS credentials are required for the contact form to work
- See [Environment Variables](#environment-variables) section for detailed setup instructions

### Step 5: Customize Your Profile Data

Open `src/constants/profileData.tsx` and update:

- Personal information (name, email, description)
- Profile image URL
- Skills and technologies
- Education details
- Projects portfolio
- Social media links
- GitHub username/URL

### Step 6: Customize Styling (Optional)

- Global styles: `src/styles/globalStyles.css`
- CSS variables: `src/styles/cssVariables.css`
- Color scheme: `src/constants/colors.ts`

### Step 7: Start Development Server

```bash
npm start
```

The application will open at `http://localhost:3000`

### Environment Variables

### GitHub Token (Required)

1. Go to [GitHub Settings > Developer settings > Personal access tokens](https://github.com/settings/tokens)
2. Generate a new token with `public_repo` scope
3. Add to `.env`: `REACT_APP_GITHUB_TOKEN=your_token_here`

**Why?** The GitHub section requires a token to fetch your profile and repositories. Without a token, GitHub API has strict rate limits (60 requests/hour) and the GitHub section may not work properly.

### EmailJS Setup (Required for Contact Form)

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service (Gmail)
3. Create an email template:
   - Copy the HTML from `templates/email-template.html`
   - In EmailJS dashboard, go to **Email Templates** > **Create New Template** (or open existing template)
   - Click **Edit Content** > **Code Editor**
   - Paste the copied HTML code
   - Click **Save**
4. Get your Service ID, Template ID, and Public Key
5. Add to `.env`:
   ```env
   REACT_APP_SERVICE_ID=your_service_id
   REACT_APP_TEMPLATE_ID=your_template_id
   REACT_APP_PUBLIC_KEY=your_public_key
   ```

**Note:** The contact form will not work without these credentials. The email template in `templates/email-template.html` matches the portfolio's dark theme and can be customized as needed.

### Customization Guide

### Update Profile Information

Edit `src/constants/profileData.tsx` to customize:

- **Personal Details**: Name, email, description, resume link
- **About Section**: Profile image URL, bio paragraphs
- **Skills**: Add/remove skills and their icons
- **Education**: Update education history
- **Projects**: Add your projects with images, links, and descriptions
- **Contact Links**: Update social media and contact URLs
- **GitHub**: Set your GitHub username/API URL

### Customize Colors and Styling

1. **Color Scheme**: Edit `src/styles/cssVariables.css`
   - Primary colors, accent colors, overlay colors, status colors
   - Update `--text-glow` to change the primary accent color
   - All color variables are defined here

2. **Language Colors**: Edit `src/constants/colors.ts`
   - Only contains language colors for GitHub repository language badges
   - Used dynamically for displaying programming language colors

3. **Global Styles**: Edit `src/styles/globalStyles.css`
   - Base styles, animations, scrollbar styling

### Add New Sections

1. Create a new component in `src/components/YourSection/`
2. Add the section to `src/components/Home/index.tsx`
3. Update navigation in `src/constants/navigationConstants.ts`

### Modify Animations

- Animation variants: `src/constants/animationsConstants.ts`
- Animation wrapper: `src/animations/fadeInAnimation.tsx`

### Developer Contact

- **Email**: pitlamanikanta81@gmail.com
- **LinkedIn**: [manikantapitla](https://www.linkedin.com/in/manikantapitla/)
- **GitHub**: [manikantaPitla](https://github.com/manikantaPitla)
