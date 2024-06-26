import React from 'react';
import styles from './styles/SlideNextArrow.module.scss'

function SlideNextArrow(props) {
    const { onClick } = props;
    return (
        <div
            className={styles.slidenext}
            onClick={onClick}
        >
          <i class="fa-solid fa-arrow-right"></i>
        </div>
    );
}

export default SlideNextArrow;