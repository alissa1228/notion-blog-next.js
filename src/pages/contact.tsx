import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Script from 'next/script'
import sharedStyles from '../styles/shared.module.css'
import contactStyles from '../styles/contact.module.css'

import GitHub from '../components/svgs/github'
import Envelope from '../components/svgs/envelope'
import LinkedIn from '../components/svgs/linkedin'

const contacts = [
  // {
  //   Comp: GitHub,
  //   alt: 'github icon',
  //   link: 'https://github.com/alissa1228',
  // },
  // {
  //   Comp: LinkedIn,
  //   alt: 'linkedin icon',
  //   link: 'https://www.linkedin.com/in/yoon-jungmin-6a8747229/',
  // },
  {
    Comp: Envelope,
    alt: 'envelope icon',
    link: 'mailto:alissacoding@gmail.com',
  },
]

export default function Contact() {
  return (
    <>
      <Header titlePre="Contact" />
      <div className={sharedStyles.layout}>
        <img
          src="/alissa.jpg"
          alt="avatar_sunflower"
          height="120"
          width="120"
        />

        <h1 className={contactStyles.title}>Contact Me</h1>

        <div className={contactStyles.links}>
          {contacts.map(({ Comp, link, alt }) => {
            return (
              <ExtLink key={link} href={link} aria-label={alt}>
                <Comp height={32} />
              </ExtLink>
            )
          })}
        </div>

        <div className={contactStyles.buymecoffee}>
          <a href="https://www.buymeacoffee.com/alissacoding">
            <img
              src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=alissacoding&button_colour=FFDD00&font_colour=000000&font_family=Poppins&outline_colour=000000&coffee_colour=ffffff"
              alt="buymecoffee"
            />
          </a>
        </div>
      </div>
    </>
  )
}
