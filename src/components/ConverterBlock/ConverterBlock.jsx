import React from 'react';
import styles from './ConverterBlock.module.scss';
import Filter from '../Filter/Filter';
import Currency from '../Currency/Currency';

function ConverterBlock({ path }) {
  return (
    <div className={styles.converterBlock}>
      {path === 'from' ? (
        <>
          <h2 className={styles.title}>{'Отдаете'}</h2>
          <Filter path={'from'} />
          <Currency path={'from'}/>
        </>
      ) : (
        <>
          <h2 className={styles.title}>{'Получаете'}</h2>
          <Filter path={'to'}/>
          <Currency path={'to'}/>
        </>
      )}
    </div>
  );
}

export default ConverterBlock;