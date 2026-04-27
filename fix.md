# Fix.md - TypeScript Build Errors

## Error
```
Type '{ duration: number; ease: number[]; }' is not assignable to type 'Transition<any> | undefined'.
Type '{ duration: number; ease: number[]; }' is not assignable to type 'TransitionWithValueOverrides<any>'.
Types of property 'ease' are incompatible.
Type 'number[]' is not assignable to type 'Easing | Easing[] | undefined'.
```

## Root Cause
Framer Motion's `ease` property expects a tuple type `[number, number, number, number]`, not `number[]`.
Adding `as const` fixes this by telling TypeScript to treat it as a literal tuple.

## Files to Fix

### 1. `src/components/PageLoadAnimation.tsx`
| Line | Current | Fix |
|------|---------|-----|
| 33 | `ease: [0.16, 1, 0.3, 1]` | `ease: [0.16, 1, 0.3, 1] as const` |
| 48 | `ease: [0.16, 1, 0.3, 1]` | `ease: [0.16, 1, 0.3, 1] as const` |
| 66 | `ease: [0.16, 1, 0.3, 1],` | `ease: [0.16, 1, 0.3, 1] as const,` |
| 81 | `ease: [0.16, 1, 0.3, 1]` | `ease: [0.16, 1, 0.3, 1] as const` |
| 97 | `ease: [0.16, 1, 0.3, 1]` | `ease: [0.16, 1, 0.3, 1] as const` |
| 115 | `ease: [0.16, 1, 0.3, 1]` | `ease: [0.16, 1, 0.3, 1] as const` |

### 2. `src/components/Nav.tsx`
| Line | Current | Fix |
|------|---------|-----|
| 67 | `ease: [0.76, 0, 0.24, 1]` | `ease: [0.76, 0, 0.24, 1] as const` |
| 88 | `ease: [0.16, 1, 0.3, 1]` | `ease: [0.16, 1, 0.3, 1] as const` |

### 3. `src/app/contact/page.tsx`
| Line | Current | Fix |
|------|---------|-----|
| 13 | `ease: [0.16, 1, 0.3, 1]` | `ease: [0.16, 1, 0.3, 1] as const` |
| 186 | `ease: [0.16, 1, 0.3, 1]` | `ease: [0.16, 1, 0.3, 1] as const` |

### 4. `src/app/agencies/page.tsx`
| Line | Current | Fix |
|------|---------|-----|
| 15 | `ease: [0.16, 1, 0.3, 1]` | `ease: [0.16, 1, 0.3, 1] as const` |

## Already Fixed (No action needed)
- `src/components/AnimatedText.tsx` - Fixed
- `src/components/EnhancedReveal.tsx` - Fixed
- `src/app/page.tsx` - Already has `as const`
- `src/components/AgencySection.tsx` - Already has `as const`

## Command to Apply All Fixes

```bash
# Fix all files at once
cd "D:\New projects\orbit-crew"

# Fix PageLoadAnimation.tsx
sed -i 's/ease: \[0\.16, 1, 0\.3, 1\]$/ease: [0.16, 1, 0.3, 1] as const/g' src/components/PageLoadAnimation.tsx
sed -i 's/ease: \[0\.16, 1, 0\.3, 1\],$/ease: [0.16, 1, 0.3, 1] as const,/g' src/components/PageLoadAnimation.tsx

# Fix Nav.tsx
sed -i 's/ease: \[0\.76, 0, 0\.24, 1\]$/ease: [0.76, 0, 0.24, 1] as const/g' src/components/Nav.tsx
sed -i 's/ease: \[0\.16, 1, 0\.3, 1\]$/ease: [0.16, 1, 0.3, 1] as const/g' src/components/Nav.tsx

# Fix contact/page.tsx
sed -i 's/ease: \[0\.16, 1, 0\.3, 1\]$/ease: [0.16, 1, 0.3, 1] as const/g' src/app/contact/page.tsx

# Fix agencies/page.tsx
sed -i 's/ease: \[0\.16, 1, 0\.3, 1\]$/ease: [0.16, 1, 0.3, 1] as const/g' src/app/agencies/page.tsx

# Commit and push
git add -A
git commit -m "fix: add as const to ease arrays for TypeScript compatibility"
git push origin main
```

## After Fix
Run `npm run build` locally to verify the fix works before pushing.
