# araujojordan.github.io

Personal portfolio site for Jordan L. Araujo Jr. — Senior Android Engineer.

Plain HTML + CSS + JS. No build step, no framework.

## Structure

```
index.html      — all page markup
styles.css      — all styles
app.js          — cycling "Industry Focus" text (~15 lines)
images/         — local copies of all images
CNAME           — www.araujojordan.com
.nojekyll       — tells GitHub Pages not to run Jekyll
```

## Local preview

```
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Deploy

Push to `master`. GitHub Pages serves from branch `master` / root.
