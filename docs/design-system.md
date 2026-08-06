# Design system

The current interface uses a small, deliberately minimal visual system. Shared
styles live in `src/style.css`; component-specific styles should follow these
decisions rather than introducing unrelated values.

## Typography

- Primary font: `Inter`, with system UI fallbacks.
- Body line height: `1.5`.
- Base weight: `400`.
- Main headings use a responsive `clamp()` size between `2rem` and `3rem`.
- Supporting text uses `1.125rem` with the secondary text color.

## Color

| Role                    | Value     |
| ----------------------- | --------- |
| Primary text            | `#111827` |
| Secondary text          | `#4b5563` |
| Page background         | `#f9fafb` |
| Background gradient end | `#e5e7eb` |

The page background uses a subtle `135deg` gradient from `#f9fafb` to
`#e5e7eb`. Color should not be the only way to communicate meaning.

## Layout and spacing

- The application fills the viewport with a minimum height of `100vh`.
- The centered app shell uses CSS grid and `2rem` outer padding.
- Global sizing uses `box-sizing: border-box`.
- Prefer responsive CSS and content-driven sizing over fixed widths.

## Accessibility and motion

- Use semantic landmarks and keep text readable against the documented colors.
- Preserve visible keyboard focus states when adding interactive controls.
- Respect `prefers-reduced-motion` for any future transitions or animation.
