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
        <h2>꾸준히 걸어나가는 개발자🚶‍♀️</h2>

        <div className="explanation">설명</div>
      </div>
    </>
  )
}
