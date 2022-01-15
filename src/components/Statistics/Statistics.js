import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <div className={s.stats}>
      <p className={s.statName}>
        Good: <span className={s.statValue}>{good}</span>
      </p>
      <p className={s.statName}>
        Neutral: <span className={s.statValue}>{neutral}</span>
      </p>
      <p className={s.statName}>
        Bad: <span className={s.statValue}>{bad}</span>
      </p>
      <p className={s.statName}>
        Total: <span className={s.statValue}>{total}</span>
      </p>
      <p className={s.statName}>
        Positive feedback:{' '}
        <span className={s.statValue}>{positivePercentage}%</span>
      </p>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
