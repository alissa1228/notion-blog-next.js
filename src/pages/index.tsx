import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'
import Link from 'next/link'
import { getBlogLink, postIsPublished } from '../lib/blog-helpers'
import getBlogIndex from '../lib/notion/getBlogIndex'
import getNotionUsers from '../lib/notion/getNotionUsers'
import { textBlock } from '../lib/notion/renderers'
import blogStyles from '..//styles/blog.module.css'

export async function getStaticProps({ preview }) {
  const postsTable = await getBlogIndex()

  const authorsToGet: Set<string> = new Set()
  const posts: any[] = Object.keys(postsTable)
    .map((slug) => {
      const post = postsTable[slug]
      // remove draft posts in production
      if (!preview && !postIsPublished(post)) {
        return null
      }
      post.Authors = post.Authors || []
      for (const author of post.Authors) {
        authorsToGet.add(author)
      }
      return post
    })
    .filter(Boolean)

  return {
    props: {
      preview: preview || false,
      posts,
    },
    revalidate: 10,
  }
}

export default function Index({ posts = [], preview }) {
  const posts_list = posts.sort(function (a, b) {
    return b.Date - a.Date
  })

  return (
    <>
      <Header titlePre="Home" />
      <div className={sharedStyles.layout}>
        <img src="/alissa.jpg" height="120" width="120" alt="alissa_profile" />
        <h1>Jungmin Yoon</h1>
        <h2>Front-End Developer 🚶‍♀️</h2>

        <div className="explanation">
          <h3>About</h3>
          <ul>
            <li>
              💻 전자책을 만들다 기술을 배워가는 재미를 쫓다보니 개발자가
              되었습니다.
            </li>
            <li>
              ✏️ 새로운 기술 스택을 배우는 걸 두려워하지 않으며 배움을 즐기고자
              합니다.
            </li>
            <li>
              🗂 문서화와 공유를 통해 업무 효율을 높이는 일과 UI/UX 개선에 관심이
              많습니다.
            </li>
            <li>👩🏻‍💻 React 기반 개발을 중심으로 하고 있습니다</li>
          </ul>
        </div>

        <div className="explanation">
          <h3>Recent Posts</h3>
          {posts_list.length === 0 && (
            <p className={blogStyles.noPosts}>There are no posts yet</p>
          )}
          {posts_list.length < 3 &&
            posts_list.map((post) => {
              return <Post key={`${post.Slug}_index`} post={post} />
            })}
          {posts_list.length > 3 &&
            posts_list.slice(0, 3).map((post) => {
              return <Post key={`${post.Slug}_index`} post={post} />
            })}
        </div>
      </div>
    </>
  )
}

export const Post = ({ post }) => {
  return (
    <div className={'main-post'} key={post.Slug}>
      <h4>
        <span className={blogStyles.titleContainer}>
          {!post.Published && (
            <span className={blogStyles.draftBadge}>Draft</span>
          )}
          <Link href="/blog/[slug]" as={getBlogLink(post.Slug)}>
            <a>{post.Page}</a>
          </Link>
        </span>
      </h4>
      <p>
        {(!post.preview || post.preview.length === 0) && 'No preview available'}
        {(post.preview || []).map((block, idx) =>
          textBlock(block, true, `${post.Slug}${idx}`)
        )}
      </p>
    </div>
  )
}
