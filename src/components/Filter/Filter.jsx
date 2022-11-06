import React from 'react';
import styles from './Filter.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { setActiveFromFilter, setActiveToFilter } from '../../redux/reducers/MainSlice';

export const filterCategory = [
  {
    value: 'Все',
    currency: ['BTC', 'ETH', 'USDTTRC', 'ACRUB', 'SBERRUB', 'TCSBRUB', 'CASHUSD', 'CASHRUB']
  },
  {
    value: 'Криптовалюты',
    currency: ['BTC', 'ETH', 'USDTTRC']
  },
  {
    value: 'Банки',
    currency: ['ACRUB', 'SBERRUB', 'TCSBRUB']
  },
  {
    value: 'Наличные',
    currency: ['CASHUSD', 'CASHRUB']
  },
]

function Filter({path}) {
  const dispatch = useDispatch();
  const activeFromFilter = useSelector(state => state.main.activeFromFilter);
  const activeToFilter = useSelector(state => state.main.activeToFilter);

  const handleChangeActiveFromFilter = (e) => {
    dispatch(setActiveFromFilter(e.target.textContent))
    dispatch(setActiveToFilter('Все'))
  }

  const handleChangeActiveToFilter = (e) => {
    dispatch(setActiveToFilter(e.target.textContent))
  }
  return (
    <>
      {path === 'from' ? (
        <ul className={styles.filter}>
          {filterCategory.map(({id, value}) => {
            return <li key={value}
                       className={activeFromFilter === value ? `${styles.filterItem} ${styles.active}` : styles.filterItem}
                       onClick={handleChangeActiveFromFilter}>{value}</li>;
          })}
        </ul>
      ) : (
        <ul className={styles.filter}>
          {filterCategory.map(({id, value}) => {
            return <li key={value}
                       className={activeToFilter === value ? `${styles.filterItem} ${styles.active}` :  styles.filterItem}
                       onClick={handleChangeActiveToFilter}>{value}</li>;
          })}
        </ul>
      )}
    </>


  );
}

export default Filter;