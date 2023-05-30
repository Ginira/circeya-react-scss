import React from "react";
import { gsap } from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import styles from './HorizontalScroll.module.scss';
gsap.registerPlugin(ScrollTrigger);

const { useEffect, useRef } = React;

const items = gsap.utils.toArray('#item'); 

function HorizontalScroll({scroll}) {

    const slider = useRef(null);
    const comp = useRef(null); 

    useEffect(() => { 
        const ctx = gsap.context(() => {
            gsap.to (items, {
             scrollTrigger: { 
                trigger: comp.current,
                pin: true,
                scrub: true,
                start: "top 20%",     
             },
             xPercent: -75 * (items.length - 1),
             ease: "none",
            });

        }, slider); 
        return () => ctx.revert(); 
    }, []);

    return (
        <div className={styles.slider} ref={slider}>
            <div className={styles.container} ref={comp}>
                <h1 id="startAnim" className={styles.slider__title}>Lorem ipsum dolor sit amet</h1>
                    <div className={styles.slider__items}>
                        <img id='item' className={styles.slider__item} src={scroll.scroll1} alt="imgScroll"/>
                        <img id='item' className={styles.slider__item}  src={scroll.scroll2} alt="imgScroll"/>
                        <img id='item' className={styles.slider__item}  src={scroll.scroll3} alt="imgScroll"/>
                        <img id='item' className={styles.slider__item}  src={scroll.scroll4} alt="imgScroll"/>
                        <img id='item' className={styles.slider__item}  src={scroll.scroll5} alt="imgScroll"/>
                        <img id='item' className={styles.slider__item}  src={scroll.scroll6} alt="imgScroll"/>
                        <img id='item' className={styles.slider__item}  src={scroll.scroll7} alt="imgScroll"/>
                        <img id='item' className={styles.slider__item}  src={scroll.scroll8} alt="imgScroll"/>
                        <img id='item' className={styles.slider__item}  src={scroll.scroll9} alt="imgScroll"/> 
                    </div>
            </div>
        </div>
    )
}

export default HorizontalScroll;