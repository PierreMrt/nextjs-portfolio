# Portfolio Redesign - Design Branch

## Overview
This branch contains a complete redesign of the portfolio website with a centered, card-based layout inspired by modern resume designs.

## Design Specifications

### Layout
- **Main Container**: Fixed at 50vw width × 50vh height, centered on viewport
- **Background**: Teal gradient (linear-gradient from #4DB8A8 to #6BCFBE)
- **Structure**: Three-column layout within container:
  - Sidebar (50-60px): Icon navigation
  - Profile Card (~320px): Static user information
  - Content Panel (remaining space): Dynamic section content

### Color Palette
- Primary Teal: `#5FBE8F`
- Teal variants: 50-900 scale in tailwind.config.ts
- Background gradient: `#4DB8A8` to `#6BCFBE`
- Gray scale for text and borders

## Components Structure

### Layout Components (`components/layout/`)
1. **Sidebar.tsx**: Icon-based navigation with 5 sections
   - About (Home icon)
   - Experience (Briefcase icon)
   - Education (Graduation cap icon)
   - Projects (Folder icon)
   - Contact (@ icon)
   - Active section highlighted in teal

2. **ProfileCard.tsx**: Static profile display
   - Profile photo (circular)
   - Name: Pierre MERLET
   - Title: Data Analyst
   - Social media links (GitHub, LinkedIn, Email, Website)

3. **ContentPanel.tsx**: Section switcher
   - Renders appropriate section based on sidebar selection
   - Scrollable content area

### Section Components (`components/sections/`)
1. **AboutSection.tsx**: Introduction and skills
2. **ExperienceSection.tsx**: Full work history from `data/experience.json`
3. **EducationSection.tsx**: Education history from `data/education.json`
4. **ProjectsSection.tsx**: Projects display (needs real project data)
5. **ContactSection.tsx**: Contact information cards

## Key Changes from Original

### Removed
- Multi-page routing (About, Contact, Experience, Education, Projects pages)
- Navbar component
- Footer component
- Hero section with large headings
- Multi-section scrolling homepage

### Added
- Single-page application with section switching
- Centered container with fixed dimensions
- Gradient background
- Icon-based sidebar navigation
- Profile card with social links
- Timeline-style experience/education displays

## Files Modified
1. `app/page.tsx` - Converted to client component with state management
2. `app/layout.tsx` - Removed Navbar and Footer
3. `app/globals.css` - Added gradient background and centered container styles
4. `tailwind.config.ts` - Added teal color palette

## Files Created
1. `components/layout/Sidebar.tsx`
2. `components/layout/ProfileCard.tsx`
3. `components/layout/ContentPanel.tsx`
4. `components/sections/AboutSection.tsx`
5. `components/sections/ExperienceSection.tsx`
6. `components/sections/EducationSection.tsx`
7. `components/sections/ProjectsSection.tsx`
8. `components/sections/ContactSection.tsx`

## Setup Requirements

### Profile Image
Add your profile photo to `public/profile.jpg`:
- Square aspect ratio (recommended: 256×256px or larger)
- Format: JPG or PNG
- The ProfileCard component expects it at `/profile.jpg`

### Project Data (Optional)
Update `components/sections/ProjectsSection.tsx` with actual project data:
- Currently uses placeholder data
- Can integrate with existing project data/components
- Or create `data/projects.json` following the pattern of experience/education data

## Testing

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Expected Behavior
- Centered container (50vw × 50vh) on teal gradient background
- Sidebar navigation switches content panel sections
- Active section highlighted in teal
- Profile card remains static while content updates
- Content area is scrollable when content exceeds container height

## Responsive Considerations

**Note**: Current implementation is optimized for desktop viewing. For production:
- Add media queries for tablet/mobile
- Consider full-screen layout on smaller devices
- Make sidebar collapsible on mobile
- Stack profile card above content on mobile

## Next Steps

1. ✅ Add profile photo to `public/profile.jpg`
2. ✅ Update ProjectsSection with real project data
3. ⚠️ Test responsive behavior on different screen sizes
4. ⚠️ Update social media links in ProfileCard.tsx and ContactSection.tsx with actual URLs
5. ⚠️ Update email address throughout components
6. ⚠️ Consider adding animations/transitions for section switching
7. ⚠️ Add proper error handling for missing images

## Deployment

Once testing is complete, merge this branch to master:

```bash
git checkout master
git merge design
git push origin master
```
