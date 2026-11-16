# Wild Projects: Website Redesign

New design for [wildprojects.ca](https://www.wildprojects.ca), a wood framing contractor in Canmore, Banff, Cochrane and Calgary.
All content, page URLs, SEO titles, meta descriptions, headings and image alt text are carried over from the live site unchanged.

**Tech:** HTML, CSS, JavaScript, Three.js (3D timber-frame house in the homepage hero)
**Fonts:** Fraunces (headings) and Manrope (body)
**Colours:** Pine `#1d3329`, Timber `#c47d3f`, Cream `#f4eee3`

## Pages
Home, Residential Wood Framing, Custom Home Framing, Carpentry, Deck Builder, Canmore, Calgary, Cochrane, Banff, About, Projects, Contact.

## Folder structure
```
docs/          Finished website, served by GitHub Pages (do not edit by hand, it is generated)
squarespace/   Paste-ready files for Squarespace + setup guide (squarespace/README.md)
src/assets/    CSS and JavaScript source
build/         content.js (all page text), build.js (generator), serve.js (local preview)
```

## Live preview with GitHub Pages
1. Upload this whole folder to a GitHub repository.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, set *Source* to **Deploy from a branch**, *Branch* to **main**, and *Folder* to **/docs**. Click **Save**.
4. After 1–2 minutes the site is live at `https://<your-username>.github.io/<repo-name>/`.

The preview copy has `noindex` set, so Google will not index it and it cannot compete with the real wildprojects.ca for rankings.

## Editing content
1. Change the text in `build/content.js`, or the styles and scripts in `src/assets/`.
2. Run `node build/build.js` (needs Node.js). This rebuilds both `docs/` and `squarespace/`.
3. Run `node build/serve.js` and open http://localhost:5173/wild-projects/ to preview locally.

## Going live on Squarespace
See [squarespace/README.md](squarespace/README.md).
