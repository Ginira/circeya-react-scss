import styles from './HorizontalScroll.module.scss';
import imgScroll from '../../data/images';


function HorizontalScroll() {
    return (
        <div className={styles.container}>
        <h1 className={styles.title}>Lorem ipsum dolor sit amet</h1>
            <img className={imgScroll}  src={imgScroll[1].scroll1} alt="imgScroll"/>
        </div>
    )
}

export default HorizontalScroll;