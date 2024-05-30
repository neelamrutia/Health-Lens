import React, { useEffect, useRef, useState } from 'react';
import Linechart from './p1';
import Race2 from './p2';
// import MyResponsiveAreaBump from '../../Rank-2';

const StepCountsGraph = (props) => {
  const [dateUsed, setDateUsed] = useState(props.date_sent);

  useEffect(() => {
    // Update the dateUsed state when the date_sent prop changes
    setDateUsed(props.date_sent);
  }, [props.date_sent]); // Watch for changes in the date_sent prop

  return (
    <div className="line-graph-container">
      {/* <h3 className="header">Step Counts</h3> */}
      {dateUsed && (
        <>
          <Linechart date_used={dateUsed} />
          <Race2 date_used={dateUsed} />
        </>
      )}
    </div>
  );
};

export default StepCountsGraph;
