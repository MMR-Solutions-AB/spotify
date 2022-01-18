import { Box, Stack, Slider } from '@mui/material';
import { VolumeDown, VolumeUp } from '@mui/icons-material';
import { useState, useMemo, useEffect } from 'react';
import debounce from 'lodash.debounce';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';

const VolumeController = ({ spotifyApi }) => {
	const defaultVolume = 50;
	const [volume, setVolume] = useState(defaultVolume);

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
		spotifyApi.setVolume(defaultVolume);
		return () => {
			debauncedApiCall.cancel();
		};
	}, []);

	return (
		<Box sx={{ width: 200 }}>
			<Stack spacing={2} direction="row" alignItems="center">
				{volume === 0 ? <VolumeOffIcon /> : <VolumeDown />}
				<Slider min={0} max={100} step={1} aria-label="Volume" value={volume} onChange={handleVolumeChange} />
				<VolumeUp />
			</Stack>
		</Box>
	);
};

export default VolumeController;
