import styles from './HorizontalScroll.module.scss';
import imgScroll from '../../data/images';


function HorizontalScroll() {
    return (
        <div className={styles.slider}>
            <h1 className={styles.title}>Lorem ipsum dolor sit amet</h1>
                <div className={styles.slider__items}>
                    <img className={styles.slider__item}  src={imgScroll[1].scroll1} alt="imgScroll"/>
            </div>
        </div>
    )
}

export default HorizontalScroll;