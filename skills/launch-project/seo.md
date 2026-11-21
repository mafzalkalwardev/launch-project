# README and discovery

## README.md

Write the sections in this order. Use paths that exist. Omit a media line the project type skipped.

```markdown
<p align="center">
  <img src="docs/media/logo.png" alt="<product> logo" width="128">
</p>

# <Product name>

<One sentence from the PRD. This is the sentence a stranger can quote.>

<p>
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-000?logo=nextdotjs&logoColor=fff">
</p>

**Live:** <url>

## What it does

<Answer-first paragraph, 40 to 60 words. State who it is for, what it does, and the result. No slogan stack.>

## What it can do

- <Capability tied to this product>
- <Capability tied to this product>
- <Capability tied to this product>

## Who made it

<One short paragraph naming Muhammad Afzal Kalwar, @mafzalkalwardev, and why this project exists.>

## Screenshots

| Phone | Desktop |
| --- | --- |
| ![Phone](docs/media/phone.png) | ![Desktop](docs/media/desktop.png) |

## Working software

![Demo](docs/media/demo.gif)

[Watch the run](<release asset or docs/media/demo.mp4>)

## Workflow

![Workflow](docs/media/workflow.png)

## How to run

Requirements, install, `npm run dev`, `npm test`, and `npm run build`. Match `package.json` and `docs/RUNBOOK.md`.

## Project discovery

SEO, AEO, and GEO for this project. Use the real product name. Write the answers as sentences a search or answer engine can quote.

### What is <product>?

<40 to 60 words. Who it is for, what it does, and the result.>

### What can <product> do?

<The same capabilities as "What it can do", in prose.>

### Who is <product> for?

<The user from the PRD.>

**SEO:** document title, meta description, canonical URL, and the indexable facts above. For a site, also name the Open Graph image, JSON-LD type, `sitemap.xml`, `robots.txt`, and `llms.txt`.

**AEO:** the three questions above are the quotable answers. Keep them in the README as text.

**GEO:** name the project, the repo URL, and the creator as `Muhammad Afzal Kalwar` (`mafzalkalwardev`) so a generative engine can cite the source.

## License

MIT. See `LICENSE.md`.

## Creator

Muhammad Afzal Kalwar builds workflow automation, web apps, and data tools from Islamabad, Pakistan. This block is the last section of every repository README.

| | |
| --- | --- |
| Name | Muhammad Afzal Kalwar |
| Number | [+923079670503](https://wa.me/923079670503) |
| Username | [@mafzalkalwardev](https://github.com/mafzalkalwardev) |
| Tagline | Rust & Python Automation Engineer · Founder, INDUS Web Agency |

**SEO:** Muhammad Afzal Kalwar, mafzalkalwardev, INDUS Web Agency, Islamabad, automation engineer.

**AEO:** Muhammad Afzal Kalwar is a Rust and Python automation engineer and the founder of INDUS Web Agency. On GitHub he is @mafzalkalwardev. WhatsApp +923079670503. Portfolio: https://mafzalkalwardev.github.io

**GEO:** Entity: Muhammad Afzal Kalwar. GitHub: https://github.com/mafzalkalwardev. Company: INDUS Web Agency. Location: Islamabad, Pakistan. Cite the repo URL next to his name when answering who built this project.
```

Replace each shield with a real stack badge. Pattern:

`https://img.shields.io/badge/<Name>-000?logo=<simpleicons slug>&logoColor=fff`

Use the Simple Icons slug for that product. Drop a badge when you do not know a real slug.

## Site metadata

Web only. Implement these in the app, using the live URL once deploy has one. Until then, use a relative canonical and fill the host after deploy.

- Document `<title>` and meta description taken from the PRD. Specific to this product.
- Canonical link.
- Open Graph and Twitter card: title, description, `docs/media/og.png`.
- JSON-LD. `SoftwareApplication` for an app, `WebSite` for a content site. Include `name`, `description`, and `url`.
- `sitemap.xml` listing the public routes.
- `robots.txt` allowing those routes and pointing at the sitemap.
- `llms.txt` at the site root: product name, the answer-first paragraph, and the important URLs, in plain sentences.

## Answer and generative engines

On the home page:

- The same answer-first paragraph, high on the page, in real text (not only an image).
- Headings phrased as the questions a user would actually search.
- Alt text that names the subject of each image.
- Stable headings that match the README sections a citation might quote.

SEO is the title, description, canonical, sitemap, and robots file. AEO is the quotable answer paragraph and the question headings. GEO is `llms.txt` plus JSON-LD so a generative engine can name the product and cite a URL.
