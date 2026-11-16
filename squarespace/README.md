# Wild Projects: Squarespace par lagane ka tareeqa

Is folder mein sab kuch copy-paste ke liye ready hai. Website ke saare URLs (`/canmore`, `/deck-builder` waghera), page titles, meta descriptions, H1/H2 headings aur image alt texts bilkul wahi hain jo live site par hain, is liye **SEO waisa hi rahega**.

> Code Injection ke liye Squarespace ka **Core / Plus / Advanced** (purane plans mein **Business ya Commerce**) plan chahiye.

---

## Step 1: Header Code Injection (sirf ek dafa)
1. **Settings → Developer Tools → Code Injection** (purane dashboard mein: *Settings → Advanced → Code Injection*)
2. `1-header-code-injection.html` ka **poora content** **HEADER** box mein paste karein.
   Is mein fonts, saari CSS aur Google ke liye LocalBusiness schema hai.

## Step 2: Footer Code Injection (sirf ek dafa)
1. Usi page par **FOOTER** box mein `2-footer-code-injection.html` ka poora content paste karein.
   Is mein menu, animations, gallery lightbox, form aur homepage ka **3D (Three.js)** hero hai.
3. **Save** karein.

## Step 3: Har page par ek Code Block
Har page ke liye (URL **same** rakhein):

| Squarespace page URL | Paste karne wali file |
|---|---|
| `/` (Home) | `code-blocks/home.html` |
| `/residential-wood-framing` | `code-blocks/residential-wood-framing.html` |
| `/custom-home-framing` | `code-blocks/custom-home-framing.html` |
| `/carpentry` | `code-blocks/carpentry.html` |
| `/deck-builder` | `code-blocks/deck-builder.html` |
| `/canmore` | `code-blocks/canmore.html` |
| `/calgary` | `code-blocks/calgary.html` |
| `/cochrane` | `code-blocks/cochrane.html` |
| `/banff` | `code-blocks/banff.html` |
| `/about` | `code-blocks/about.html` |
| `/projects` | `code-blocks/projects.html` |
| `/contact` | `code-blocks/contact.html` |

Har page par:
1. Page **Edit** karein, purane sections delete karke sirf **ek blank section** rakhein.
2. Section settings mein: **Section height → Small**, **Content width → Full**, padding zero.
3. **Add Block → Code** lagayein, block ko section ki poori width tak stretch karein.
4. File ka poora content paste karein. *Display Source* **OFF** rahe.
5. **Save** karein.

Squarespace ka apna header/footer un pages par khud chhup jayega jahan yeh code block laga hai, kyunke design apna header/footer saath laata hai.

> Editor ke andar scripts kabhi kabhi nahi chalte (3D, menu waghera). Site ko **logged-out / preview** mein dekhein.

## Step 4: SEO settings (inhein mat badlein)
Har page ki **Page Settings → SEO** mein title aur description pehle se set hain. Unhein waisa hi rehne dein. Reference ke liye yeh rahe:

| Page | SEO Title |
|---|---|
| Home | Wood Framing Contractors in Canmore - Wild Projects |
| Residential Wood Framing | Residential Wood Framing Services |
| Custom Home Framing | Custom Home Framing Experts |
| Carpentry | Professional Carpentry Services |
| Deck Builder | Deck Contractors Near Me \| Custom Deck Builders |
| Canmore | Wood Frame & Deck Contractors Canmore |
| Calgary | Carpentry Services & Deck Builders Calgary |
| Cochrane | Cochrane Deck Builders & Framing Contractors |
| Banff | Wood Frame & Deck Contractors Banff |
| About / Projects / Contact | About Us / Our Projects / Contact Us |

## Contact form
Code wala form visitor ki email app (mailto) khol deta hai, jis mein message pehle se bhara hota hai aur `info@wildprojects.ca` par jaata hai.
Agar aap chahte hain ke messages Squarespace ke andar hi aayein, to `/contact` page par code block ke neeche Squarespace ka native **Form Block** laga dein aur design mein se form wala hissa hata dein.

## Mashwara: duplicate pages
Live site par `/service` aur `/location` bhi hain. Unka content `/residential-wood-framing` aur `/canmore` ki **copy** hai, jo Google ko duplicate content lagta hai. Inhein **Settings → Developer Tools → URL Mappings** se 301 redirect kar dein:
```
/service -> /residential-wood-framing 301
/location -> /canmore 301
```

## Content badalna ho to
Saara text `build/content.js` mein hai. Text badal kar yeh chalayein:
```
node build/build.js
```
Is se `docs/` (standalone website / GitHub Pages) aur `squarespace/` (paste files) dono dobara ban jayenge.
