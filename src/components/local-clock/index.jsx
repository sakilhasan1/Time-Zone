import { useEffect } from "react";
import useClock from "../../hooks/useClock";
import ClockDisplay from "../shared/ClockDisplay";
import PropTypes from "prop-types";
import ClockActions from "../shared/ClockAction";
import useTimer from "../../hooks/useTimer";

const LocalClock = ({ clock, updateClock, createClock, deleteClock }) => {
  const { date, offset, timezone } = useClock(clock.timezone, clock.offset);
  const timer = useTimer(date);

  useEffect(() => {
    updateClock({
      date,
      timezone,
      offset,
    });
  }, [date]);

  return (
    <div>
      {timer && (
        <ClockDisplay
          date={timer}
          offset={offset}
          timezone={timezone}
          title={clock.title}
        />
      )}
      <ClockActions
        clock={clock}
        updateClock={updateClock}
        local={true}
        createClock={createClock}
        deleteClock={deleteClock}
      />
    </div>
  );
};

LocalClock.propTypes = {
  clock: PropTypes.object.isRequired,
  updateClock: PropTypes.func.isRequired,
  createClock: PropTypes.func.isRequired,
  deleteClock: PropTypes.func.isRequired,
};
export default LocalClock;
