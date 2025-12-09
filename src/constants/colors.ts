// Centralized Color System
// All colors used throughout the application are defined here for easy management

export const colors = {
  // Primary Colors
  primary: {
    bg: "#0a192f", // Dark blue background
    text: "#ffffff", // White text
    textSecondary: "#94a3b8", // Light gray text
    textSecondaryLight: "#ccd6f6", // Lighter gray text
  },

  // Accent/Glow Colors (choose one as primary)
  accent: {
    glow: "#00bbf9", // Blue glow (currently active)
    glowAlt1: "#89fc00", // Green glow (alternative)
    glowAlt2: "#64ffda", // Cyan glow (alternative)
    glowAlt3: "#ff7b00", // Orange glow (alternative)
  },

  // Selection Colors
  selection: {
    background: "#ffcc00", // Yellow selection background
    text: "#000000", // Black selection text
  },

  // Overlay Colors
  overlay: {
    dark: "rgba(0, 0, 0, 0.4)", // Dark overlay
    darkLight: "rgba(0, 0, 0, 0.1)", // Light dark overlay
    backdrop: "rgba(10, 25, 47, 0.8)", // Backdrop overlay
    backdropLight: "rgba(10, 25, 47, 0.95)", // Light backdrop overlay
    navigation: "rgba(255, 255, 255, 0.001)", // Navigation overlay
    white: "rgba(255, 255, 255, 1)", // White overlay
  },

  // Status Colors
  status: {
    error: "#ff6b6b", // Error red
    success: "#4caf50", // Success green
    warning: "#ff9800", // Warning orange
    info: "#2196f3", // Info blue
  },

  // Language Colors for GitHub repositories
  languages: {
    JavaScript: "#f1e05a",
    Python: "#3572A5",
    Java: "#b07219",
    TypeScript: "#3178c6",
    HTML: "#e34c26",
    CSS: "#563d7c",
    C: "#555555",
    "C++": "#f34b7d",
    PHP: "#4F5D95",
    Ruby: "#701516",
    Swift: "#ffac45",
    Kotlin: "#F18E33",
    Go: "#00ADD8",
    Rust: "#dea584",
    Dart: "#00B4AB",
    Shell: "#89e051",
    "C#": "#178600",
    Vue: "#42b883",
    SCSS: "#c6538c",
    SASS: "#a53b70",
    default: "#ccc", // Default fallback color
  },

  // Shadow Colors
  shadow: {
    glow: "rgba(0, 187, 249, 0.4)", // Blue glow shadow
    glowLight: "rgba(0, 187, 249, 0.2)", // Light blue glow shadow
    glowSubtle: "rgba(0, 187, 249, 0.3)", // Subtle blue glow shadow
  },

  // Border Colors
  border: {
    primary: "rgba(0, 187, 249, 0.3)", // Primary border
    light: "rgba(0, 187, 249, 0.1)", // Light border
  },

  // Background Colors
  background: {
    card: "rgba(0, 187, 249, 0.1)", // Card background
    cardHover: "rgba(0, 187, 249, 0.2)", // Card hover background
    github: "#ffffff", // GitHub card background
    githubText: "#000000", // GitHub card text
    skills: "#252525", // Skills text color
  },
};

// Helper function to get language color
export const getLanguageColor = (language) => {
  return colors.languages[language] || colors.languages.default;
};

// Helper function to get CSS custom property value
export const getCSSVar = (colorPath) => {
  const keys = colorPath.split(".");
  let value = colors;
  for (const key of keys) {
    value = value[key];
  }
  return value;
};

export default colors;
