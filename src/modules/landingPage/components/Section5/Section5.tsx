import React from 'react';
import styles from '../../landingPage.module.scss';
import Scroll1 from "@assets/scroll1.png";
import Scroll2 from "@assets/scroll2.png";
import Scroll3 from "@assets/scroll3.png";

const CardItems = [
  {
    img: Scroll1,
    alt: 'scroll image one',
    captionDesc: 'Brading, UI & UX, Illustration und Motion Design.',
    captionTitle: 'FLEET CTRL.',
    imgClassName: styles.scroll1,
    scrollText: styles.scrollText1
  },
  {
    img: Scroll2,
    alt: 'scroll image two',
    captionDesc: 'Brading, UI & UX, Illustration und Motion Design.',
    captionTitle: 'tradelite',
    imgClassName: styles.scroll2,
    scrollText: styles.scrollText2
  },
  {
    img: Scroll3,
    alt: 'scroll image three',
    captionDesc: 'Brading, UI & UX, Illustration und Motion Design.',
    captionTitle: 'BETONGA',
    imgClassName: styles.scroll3,
    scrollText: styles.scrollText3
  },
  {
    img: Scroll1,
    alt: 'scroll image one',
    captionDesc: 'Brading, UI & UX, Illustration und Motion Design.',
    captionTitle: 'FLEET CTRL.',
    imgClassName: styles.scroll1,
    scrollText: styles.scrollText1
  },
  {
    img: Scroll2,
    alt: 'scroll image two',
    captionDesc: 'Brading, UI & UX, Illustration und Motion Design.',
    captionTitle: 'tradelite',
    imgClassName: styles.scroll2,
    scrollText: styles.scrollText2
  },
  {
    img: Scroll3,
    alt: 'scroll image three',
    captionDesc: 'Brading, UI & UX, Illustration und Motion Design.',
    captionTitle: 'BETONGA',
    imgClassName: styles.scroll3,
    scrollText: styles.scrollText3
  }
]
const Section5 = () => {
  return (
    <section className={styles.section5}>
      <div className={styles.scrollWrapper}>
        {
          CardItems.map(({img, scrollText, alt, captionDesc, captionTitle, imgClassName}, i) => (
            <div className={styles.card} key={i}>
              <img src={img} alt={alt} className={imgClassName}/>
              <div className={scrollText}>
                <p>{captionDesc}</p>
                <h2>{captionTitle}</h2>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Section5;
