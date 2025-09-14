# Color System Documentation

This directory contains the centralized color system for the personal portfolio project.

## Files

- `colors.js` - Centralized color definitions and helper functions

## Usage

### CSS Variables

All colors are available as CSS custom properties (variables) in your styled components:

```css
.my-component {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  border: 1px solid var(--border-primary);
  box-shadow: 0 2px 8px var(--shadow-glow);
}
```

### JavaScript Import

For programmatic access to colors (like language colors):

```javascript
import { colors, getLanguageColor } from "../constants/colors";

// Get a specific color
const primaryBg = colors.primary.bg;

// Get language color
const jsColor = getLanguageColor("JavaScript");
```

## Color Categories

### Primary Colors

- `--bg-primary` - Main background color
- `--text-primary` - Primary text color (white)
- `--text-secondary` - Secondary text color (light gray)
- `--text-secondary-light` - Lighter secondary text

### Accent/Glow Colors

- `--text-glow` - Primary accent color (blue)
- `--text-glow-alt-1` - Alternative accent (green)
- `--text-glow-alt-2` - Alternative accent (cyan)
- `--text-glow-alt-3` - Alternative accent (orange)

### Status Colors

- `--status-error` - Error states
- `--status-success` - Success states
- `--status-warning` - Warning states
- `--status-info` - Info states

### Overlay Colors

- `--overlay-dark` - Dark overlay
- `--overlay-dark-light` - Light dark overlay
- `--overlay-backdrop` - Backdrop overlay
- `--overlay-backdrop-light` - Light backdrop overlay

### Shadow Colors

- `--shadow-glow` - Primary glow shadow
- `--shadow-glow-light` - Light glow shadow
- `--shadow-glow-subtle` - Subtle glow shadow

## Changing Colors

To change the color scheme:

1. **For CSS variables**: Update the values in `src/styles/cssVariables.css`
2. **For JavaScript colors**: Update the values in `src/constants/colors.js`

Both files are synchronized, so changes in one should be reflected in the other.

## Benefits

- **Centralized Management**: All colors in one place
- **Easy Theming**: Change the entire color scheme by updating variables
- **Consistency**: Ensures consistent color usage across components
- **Maintainability**: Easy to update and maintain
- **Type Safety**: JavaScript colors are organized in a structured object
