import styles from './Block.module.scss';

function Block({text, text1, img1, img2, img3, img4}) {
    return (
      <div className={styles.portfolio}>
        <div className={styles.container}> 
        <h1 className={styles.title}>{text.h1}</h1>
          <div className={styles.content}>
            <img className={styles.content__imgTop} src={img1 || img3} alt="imgLH"/>
            <div className={styles.content__text}>
              <p className={styles.content__textTitle}>{text.h2}</p>
              <p className={styles.content__textItem1}>{text.p1}</p>
              <p className={styles.content__textItem2}>{text.p2}</p> 
            </div>
            <div className={styles.content__imgBottom}>
              <p className={styles.content__textTitle}>{text1.h2}</p>
              <p className={styles.content__textItem1}>{text1.p1}</p>
              <p className={styles.content__textItem2}>{text1.p2}</p>
            </div>
            <img className={styles.portfolio__imgBottom} src={img2 || img4} alt="imgRH"/>
          </div>
        </div>
      </div>
    )
}

export default Block;