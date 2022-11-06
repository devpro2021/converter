import React from 'react';
import styles from './Converter.module.scss';
import ConverterBlock from '../ConverterBlock/ConverterBlock';
import arrowsIcon from './arrows.svg'

function Converter() {
  return (
    <div className={styles.converter}>
      <ConverterBlock path={'from'}/>
      <img className={styles.arrows} src={arrowsIcon} alt='arrows-filter' />
      <ConverterBlock path={'to'}/>
    </div>
  );
}

export default Converter;