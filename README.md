# Portfolio Starter Kit

This portfolio is built with **Next.js** and a library called [Nextra](https://nextra.vercel.app/). It allows you to write Markdown and focus on the _content_ of your portfolio. This starter includes:

- Automatically configured to handle Markdown/MDX
- Generates an RSS feed based on your posts
- A beautiful theme included out of the box
- Easily categorize posts with tags
- Fast, optimized web font loading

## Configuration

1. Update your name in `theme.config.js` or change the footer.
1. Update your name and site URL for the RSS feed in `scripts/gen-rss.js`.
1. Update the meta tags in `pages/_document.js`.
1. Update the posts inside `pages/posts/*.md` with your own content.

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/nextjs-portfolio-starter&project-name=portfolio&repository-name=portfolio)

### Deploy to GitHub Pages

This project is configured for static deployment on GitHub Pages using GitHub Actions.

#### Setup Instructions

1. **Enable GitHub Pages** in your repository settings:
   - Go to Settings → Pages
   - Under "Build and deployment", select "GitHub Actions" as the source

2. **Push to the main branch**:
   - The workflow will automatically build and deploy your site
   - Your site will be available at `https://[username].github.io/Blog-Template/`

3. **Configure your repository name** (if different):
   - Update the `repoName` variable in `next.config.js`
   - Update site URLs in `scripts/gen-rss.js`

The deployment workflow runs automatically on every push to the main branch. You can also trigger it manually from the Actions tab.


## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example blog my-blog
# or
yarn create next-app --example blog my-blog
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).
