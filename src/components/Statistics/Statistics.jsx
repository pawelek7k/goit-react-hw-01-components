import PropTypes from "prop-types";
import StatisticsContainer from "./StatisticsStyles";

export const Statistics = ({ data }) => {
  return (
    <>
      <StatisticsContainer>
        <section className="statistics">
          <h2 className="title">Upload stats</h2>

          <ul className="stat-list">
            {data.map(({ id, label, percentage }) => (
              <li key={id} className="item">
                <span className="label">{label}</span>
                <span className="percentage">{percentage}%</span>
              </li>
            ))}
          </ul>
        </section>
      </StatisticsContainer>
    </>
  );
};

Statistics.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
