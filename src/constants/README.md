# Color System Documentation

This directory contains the color system for the personal portfolio project.

## Files

- `colors.ts` - Language colors for GitHub repositories (dynamic colors)

## Color System Architecture

The color system is split into two parts:

1. **CSS Variables** (`src/styles/cssVariables.css`) - Single source of truth for all static colors
2. **Language Colors** (`src/constants/colors.ts`) - Dynamic colors for GitHub language badges

## Usage

### CSS Variables (Primary Method)

All colors are available as CSS custom properties (variables) in your styled components:

```css
.my-component {
  background-color: var(--primary);
  color: var(--text-primary);
  border: 1px solid var(--border-primary);
  box-shadow: 0 2px 4px var(--shadow-glow-subtle);
}
```

**Location**: `src/styles/cssVariables.css`

### Language Colors (Dynamic)

For programmatic access to language colors (used in GitHub repository components):

```typescript
import { getLanguageColor } from "../constants/colors";

// Get language color dynamically
const jsColor = getLanguageColor("JavaScript");
const pythonColor = getLanguageColor("Python");
```

**Location**: `src/constants/colors.ts`

## Color Categories (CSS Variables)

### Primary Colors

- `--primary` - Main background color
- `--text-primary` - Primary text color (white)
- `--text-secondary` - Secondary text color (light gray)
- `--text-secondary-light` - Lighter secondary text

### Accent Colors

- `--secondary` - Secondary/accent color

### Status Colors

- `--status-error` - Error states

### Overlay Colors

- `--overlay-dark` - Dark overlay
- `--overlay-dark-light` - Light dark overlay
- `--overlay-backdrop` - Backdrop overlay
- `--overlay-backdrop-light` - Light backdrop overlay
- `--overlay-navigation` - Navigation overlay
- `--overlay-white` - White overlay

### Shadow Colors

- `--shadow-glow-subtle` - Subtle glow shadow

### Border Colors

- `--border-primary` - Primary border

### Background Colors

- `--bg-card` - Card background
- `--bg-card-hover` - Card hover background
- `--bg-github` - GitHub card background
- `--bg-github-text` - GitHub card text
- `--bg-skills-text` - Skills text color

## Changing Colors

To change the color scheme:

1. **For CSS variables**: Update the values in `src/styles/cssVariables.css`
2. **For language colors**: Update the values in `src/constants/colors.ts`

## Benefits

- **Centralized Management**: All colors in one place (CSS variables)
- **Easy Theming**: Change the entire color scheme by updating variables
- **Consistency**: Ensures consistent color usage across components
- **Maintainability**: Easy to update and maintain
- **Performance**: CSS variables are more performant than JavaScript color objects
- **Dynamic Support**: Language colors available for programmatic use
