# Design system

The interface uses a small visual system. Shared styles
live in `src/style.css`; component-specific styles should follow these decisions
instead of adding one-off values.

## Typography

- Primary font: `Avenir Next`, with `Avenir` and `Century Gothic` fallbacks.
- Body copy uses a comfortable line height between `1.45` and `1.65`.
- Base weight: `400`.
- Main headings use responsive `clamp()` sizes and tight letter spacing.
- Supporting text uses the muted text color and stays within a readable line length.

## Color

| Role            | Token          | Value     |
| --------------- | -------------- | --------- |
| Primary text    | `--ink`        | `#24211f` |
| Secondary text  | `--muted`      | `#756e67` |
| Page background | `--paper`      | `#f4f1eb` |
| Deeper paper    | `--paper-deep` | `#e9e3da` |
| Borders         | `--line`       | `#d5cec4` |
| Accent          | `--accent`     | `#a64b32` |

The page uses a solid warm paper background. Color should not be the only way
to communicate meaning.

## Layout and spacing

- The application fills the viewport with a minimum height of `100vh`.
- The centered content shell is capped at `1160px` with responsive horizontal padding.
- Global sizing uses `box-sizing: border-box`.
- Use responsive CSS and content-driven sizing over fixed widths.
- Use whitespace and simple one- or two-column editorial layouts before adding panels.
- Use borders only to clarify a section boundary or a related group of content.

## Accessibility and motion

- Use semantic landmarks and keep text readable against the documented colors.
- Preserve visible keyboard focus states when adding interactive controls.
- Respect `prefers-reduced-motion` for any future transitions or animation.
- Use real links for navigation and visible labels for content sections.
