import Header from '../components/header'
import ExtLink from '../components/ext-link'
import sharedStyles from '../styles/shared.module.css'

export default function Index() {
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
              전자책을 만들다 기술을 배워가는 재미를 쫓다보니 개발자가
              되었습니다.
            </li>
            <li>
              새로운 기술 스택을 배우는 걸 두려워하지 않으며 배움을 즐기고자
              합니다.
            </li>
            <li>
              문서화와 공유를 통해 업무 효율을 높이는 일과 UI/UX 개선에 관심이
              많습니다.
            </li>
            <li>영화, 뮤지컬 등 문화 콘텐츠에도 관심이 많습니다.</li>
          </ul>
        </div>

        <div className="explanation">
          <h3>Recent Posts</h3>
        </div>
      </div>
    </>
  )
}
