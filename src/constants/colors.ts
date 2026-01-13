export const languageColors = {
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
  default: "#ccc",
} as const;

export const getLanguageColor = (language: string): string => {
  return languageColors[language as keyof typeof languageColors] ?? languageColors.default;
};
