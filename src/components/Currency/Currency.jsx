import React, { useState } from 'react';
import styles from './Currency.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentFromCurrency, setCurrentToCurrency } from '../../redux/reducers/MainSlice';
import { filterCategory } from '../Filter/Filter';

function Currency({ path }) {
  const [fromValue, setFromValue] = useState(0);
  const [toValue, setToValue] = useState(0);

  const directions = useSelector(state => state.main.directions)
  const filterDirection = useSelector(state => state.main.filter);
  const currentFromCurrency = useSelector(state => state.main.currentFromCurrency);
  const currentToCurrency = useSelector(state => state.main.currentToCurrency);
  const activeToFilter = useSelector(state => state.main.activeToFilter);
  const activeFromFilter = useSelector(state => state.main.activeFromFilter);

  const dispatch = useDispatch();

   const handleFromChange = (e) => {
    setFromValue(e.target.value);
  };
  const handleToChange = (e) => {
    setToValue(e.target.value);
  };

  const onChangeCurrentCurrencyFrom = (e) => {
    dispatch(setCurrentFromCurrency(e.target.value));
  };
  const onChangeCurrentCurrencyTo = (e) => {
    dispatch(setCurrentToCurrency(e.target.value));
  };

  function currentFilter(path, data, filter){
    if(path === 'from'){
        const [currency] = filterCategory.filter(item => item.value === filter).map(item => item.currency)
        return data.filter(item => currency.includes(item.code))
    }else{
      const [{ to }] = data.filter(item => item.from.code === currentFromCurrency);
      const [currency] = filterCategory.filter(item => item.value === filter).map(item => item.currency)
      const result = to.filter(item => currency.includes(item.code))
      return result.length ? result : [{code: 'null', name: 'нет доступных вылют'}]
    }
  }

  return (
    <>
      {path === 'from' ? (
        <div className={styles.currency}>
          <input type='number' className={styles.currencyValue} value={fromValue} onChange={handleFromChange} />
          <select className={styles.currencySelect} name='currencyType' value={currentFromCurrency} onChange={onChangeCurrentCurrencyFrom}>
            {currentFilter(path, directions, activeFromFilter).map(({ code, name }) => {
              return <option key={code} value={code}>{name}</option>;
            })}
          </select>
        </div>
      ) : (
        <div className={styles.currency}>
          <input type='number' className={styles.currencyValue} value={toValue} onChange={handleToChange} />
          <select className={styles.currencySelect} name='currencyType' value={currentToCurrency} onChange={onChangeCurrentCurrencyTo}>
            {currentFilter(path, filterDirection, activeToFilter).map(({ code, name }) => <option key={code} value={code}>{name}</option>)
            }
          </select>
        </div>
      )}
    </>
  );
}

export default Currency;