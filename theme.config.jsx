const YEAR = new Date().getFullYear()

const repoName = 'Blog-Template'
const basePath = process.env.NODE_ENV === 'production' ? `/${repoName}` : ''

export default {
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      <time>{YEAR}</time> © Minmoy Dutta.
      <a href={`${basePath}/feed.xml`}>RSS</a>
      <style jsx>{`
        a {
          float: right;
        }
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  )
}
