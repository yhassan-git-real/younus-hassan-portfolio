# Instructions for Updating Content

This portfolio is designed to be easily customizable. Follow these steps to update it with your complete resume information:

## 1. Update Contact Information

**File:** `src/components/Contact.jsx` and `src/components/Footer.jsx`

Replace the placeholder contact details:
- Email address
- Phone number
- LinkedIn profile URL
- GitHub profile URL
- Location

## 2. Update Experience

**File:** `src/components/Experience.jsx`

The experience section already has your TCS role populated. To add more positions:

```javascript
{
  company: 'Your Previous Company',
  position: 'Your Position',
  duration: 'Start Date - End Date',
  location: 'Location',
  type: 'Full-time/Contract',
  responsibilities: [
    'Responsibility 1',
    'Responsibility 2',
    // Add more responsibilities
  ],
  technologies: ['Tech1', 'Tech2', 'Tech3'],
  color: 'from-blue-500 to-purple-600',
}
```

## 3. Update Skills

**File:** `src/components/Skills.jsx`

Adjust skill levels (0-100%) and add/remove skills as needed in the `skillCategories` array.

## 4. Update Projects

**File:** `src/components/Projects.jsx`

Modify the `projects` array to reflect your actual projects. You can add or remove projects as needed.

## 5. Update About Section

**File:** `src/components/About.jsx`

Edit the paragraphs to reflect your personal story and professional journey. Update the statistics if needed.

## 6. Update Meta Information

**File:** `index.html`

Update the meta tags:
- Title
- Description
- Keywords

## 7. Update README

**File:** `README.md`

Replace the GitHub URLs and repository name with your actual information.

## 8. Configure for GitHub Pages

**File:** `vite.config.js`

If deploying to a GitHub Pages subdirectory (e.g., username.github.io/repo-name), update the base:

```javascript
export default defineConfig({
  base: '/repo-name/', // Replace with your repository name
  // ... rest of config
})
```

If deploying to a custom domain or username.github.io, keep `base: '/'`

## 9. Set Up GitHub Repository

1. Create a new repository on GitHub
2. Initialize git in your project:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git push -u origin main
   ```

## 10. Deploy to GitHub Pages

```bash
npm install
npm run build
npm run deploy
```

This will create a `gh-pages` branch and deploy your site.

## Additional Customization

### Colors
Edit `tailwind.config.js` to change the color scheme.

### Animations
Modify animation settings in `tailwind.config.js`.

### Fonts
To change fonts, update the font-family in `src/index.css`.

---

After making all updates, test locally with `npm run dev` before deploying!
