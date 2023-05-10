import styles from './Block.module.scss';

function Block({text, text1, img1, img2, img3, img4}) {
    return (
        <div className={styles.container}> 
        <h1 className={styles.title}>{text.h1}</h1>
          <div className={styles.block}>
            <img className={styles.imgLH} src={img1 || img3} alt="imgLH"/>
            <section className={styles.blockRH}>
              <div className={styles.paragraphHeadingRH}>{text.h2}</div>
              <div className={styles.paragraphRH1}>{text.p1}</div>
              <div className={styles.paragraphRH2}>{text.p2}</div> 
            </section>
            <section className={styles.blockLH}>
              <div className={styles.paragraphHeadingLH}>{text1.h2}</div>
              <div className={styles.paragraphLH1}>{text1.p1}</div>
              <div className={styles.paragraphLH2}>{text1.p2}</div>
            </section>
            <img className={styles.imgRH} src={img2 || img4} alt="imgRH"/>
          </div>
        </div>
    )
}

export default Block;