import React from 'react';
import { Box } from '@mui/material';

const HorizontalScrollbar = ({ data }) => {
	const renderedData = data.map((item) => {
		return (
			<Box key={item.id || item} m="0 40px">
				{item}
			</Box>
		);
	});

	console.log(renderedData);

	return <div>{renderedData}</div>;
};

export default HorizontalScrollbar;
