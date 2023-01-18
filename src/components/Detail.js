import React from 'react';
import { Typography, Stack, Button } from '@mui/material';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({ exerciseDetail }) => {
	const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

	const extraDetail = [
		{
			icon: BodyPartImage,
			name: bodyPart,
		},
		{
			icon: TargetImage,
			name: target,
		},
		{
			icon: EquipmentImage,
			name: equipment,
		},
	];

	const renderExtraDetail = extraDetail.map((item) => {
		return (
			<Stack key={item.name} direction="row" gap="24px" alignItems="center">
				<Button
					sx={{
						background: '#fff2db',
						borderRadius: '50%',
						width: '100px',
						height: '100px',
					}}
				>
					<img
						src={item.icon}
						alt={bodyPart}
						style={{ width: '50px', height: '50px' }}
					/>
				</Button>
				<Typography variant="h6" textTransform="capitalize">
					{item.name}
				</Typography>
			</Stack>
		);
	});

	return (
		<Stack
			gap="60px"
			sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}
		>
			<img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
			<Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
				<Typography variant="h4">{name}</Typography>
				<Typography variant="h6">
					Exercises keep you strong. {name} {` `}
					is one of the best exercise to target your {target}. It will help you
					improve your mood and gain energy.
				</Typography>
				{renderExtraDetail}
			</Stack>
		</Stack>
	);
};

export default Detail;
