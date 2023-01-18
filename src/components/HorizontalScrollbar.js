import { Box } from '@mui/material';

import BodyPart from './BodyPart';

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart }) => {
	const renderedData = data.map((item) => {
		return (
			<Box key={item.id || item} m="0 40px">
				<BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
			</Box>
		);
	});

	return <div>{renderedData}</div>;
};

export default HorizontalScrollbar;
