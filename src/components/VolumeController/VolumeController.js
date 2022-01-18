import { Box, Stack, Slider } from '@mui/material';
import { VolumeDown, VolumeUp } from '@mui/icons-material';
import { useState, useMemo, useEffect } from 'react';
import debounce from 'lodash.debounce';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';

const VolumeController = ({ spotifyApi }) => {
	const [volume, setVolume] = useState(90);

	const handleVolumeChange = async (e, v) => {
		setVolume(v);
		debauncedApiCall(v);
	};

	const debauncedApiCall = useMemo(
		(v) =>
			debounce(async (v) => {
				await spotifyApi.setVolume(v);
			}, 1000),
		[volume, setVolume]
	);

	useEffect(() => {
		return () => {
			debauncedApiCall.cancel();
		};
	}, []);

	return (
		<Box sx={{ width: 200 }}>
			<Stack spacing={2} direction="row" alignItems="center">
				{volume === 0 ? <VolumeOffIcon /> : <VolumeDown />}
				<Slider aria-label="Volume" value={volume} onChange={handleVolumeChange} />
				<VolumeUp />
			</Stack>
		</Box>
	);
};

export default VolumeController;
