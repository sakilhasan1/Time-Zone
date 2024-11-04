import { format } from "date-fns";
import PropTypes from "prop-types";

const ClockDisplay = ({ date, title, timezone, offset }) => {
  let offsetHr = offset / 60;

  return (
    <div>
      <h1>Title: {title}</h1>
      <h3>{format(date, "yyyy-MM-dd hh:mm:ss aaa")}</h3>
      <p>
        {timezone}
        {offsetHr > 0 ? `+${Math.abs(offsetHr)}` : `-${Math.abs(offsetHr)}`}
      </p>
    </div>
  );
};
ClockDisplay.propTypes = {
  date: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  timezone: PropTypes.string.isRequired,
  offset: PropTypes.number.isRequired,
};

export default ClockDisplay;
