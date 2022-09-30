import React from 'react';
import ChartBar from './ChartBar.js';
import './Chart.css';

function Chart({ dataPoints }) {
  const dataPointsValues = dataPoints.map(dataPoint => dataPoint.value);
  const totalMaximum = Math.max(...dataPointsValues)
	return (
		<div className='chart'>
			{dataPoints.map((dp) => (
				<ChartBar
					key={dp.label}
					value={dp.value}
					maxValue={totalMaximum}
					label={dp.label}
				/>
			))}
		</div>
	);
}

export default Chart;
