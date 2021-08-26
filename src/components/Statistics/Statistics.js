import PropTypes from 'prop-types';
import './Statistics.css'

function Statistics({ title, stats }) {
  return (
    <section className="Statistics">
      {title && <h2 className="Statistics__title">{title}</h2>}

      <ul className="Statistics__stat-list">
        {stats.map(({ id, label, percentage }) => (
          <li className="Statistics__stat-item" key={id}>
            <span className="Statistics__stat-item-label">{label}</span>
            <span className="Statistics__stat-item-percentage">{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export { Statistics };
