import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function StatisticsList({ label, percentage }) {
  return (
    <>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </>
  );
}

StatisticsList.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatisticsList;
