import Link from 'next/link'
import Head from 'next/head'
import ExtLink from './ext-link'
import { useRouter } from 'next/router'
import styles from '../styles/header.module.css'

const navItems: { label: string; page?: string; link?: string }[] = [
  { label: 'Home', page: '/' },
  { label: 'Blog', page: '/blog' },
  { label: 'Contact', page: '/contact' },
]

// const ogImageUrl = 'https://notion-blog.now.sh/blog_thumbnail.png'

const Header = ({ titlePre = '' }) => {
  const { pathname } = useRouter()

  return (
    <header className={styles.header}>
      <Head>
        <title>
          {titlePre ? `${titlePre} |` : ''} Jungmin Yoon | Just Write!
        </title>
        <meta name="description" content="이것저것 글을 씁니다." />
        <meta name="og:title" content="Jungmin Yoon | Just Write!" />
        <meta
          property="og:image"
          content={
            'https://notion-avatar.vercel.app/api/img/eyJmYWNlIjo2LCJub3NlIjoxMSwibW91dGgiOjEsImV5ZXMiOjksImV5ZWJyb3dzIjo0LCJnbGFzc2VzIjowLCJoYWlyIjo1NCwiYWNjZXNzb3JpZXMiOjEzLCJkZXRhaWxzIjowLCJiZWFyZCI6MCwiZmxpcCI6MCwiY29sb3IiOiIjZmFkYjE0Iiwic2hhcGUiOiJzcXVhcmUifQ=='
          }
        />
      </Head>
      <ul>
        {navItems.map(({ label, page, link }) => (
          <li key={label}>
            {page ? (
              <Link href={page}>
                <a className={pathname === page ? 'active' : undefined}>
                  {label}
                </a>
              </Link>
            ) : (
              <ExtLink href={link}>{label}</ExtLink>
            )}
          </li>
        ))}
      </ul>
    </header>
  )
}

export default Header
