import React from 'react';
import './ChartBar.css';

function ChartBar({ label, value, max, maxValue }) {
	let barFillHeight = '0%';

	if (maxValue > 0) {
		barFillHeight = Math.round((value / maxValue) * 100) + '%';
	}
	return (
		<div className='chart-bar'>
			<div className='chart-bar__inner'>
				{/* 'style' wants a js object */}
				<div
					className='chart-bar__fill'
					style={{ height: barFillHeight }}></div>
			</div>
			<div className='chart-bar__label'>{label}</div>
		</div>
	);
}

export default ChartBar;
