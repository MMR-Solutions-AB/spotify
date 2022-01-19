import { Box, Stack, Slider } from '@mui/material';
import { VolumeDown, VolumeUp, VolumeOff } from '@mui/icons-material';
import { useState, useMemo, useEffect } from 'react';
import debounce from 'lodash.debounce';
import throttle from 'lodash.throttle';

const VolumeController = ({ spotifyApi }) => {
	const defaultVolume = 40;
	const [volume, setVolume] = useState(defaultVolume);

	const handleVolumeChange = (e, v) => {
		debouncedApiCall(v);
	};

	const debouncedApiCall = useMemo(
		(v) =>
			debounce(async (v) => {
				console.log(v);
				spotifyApi.setVolume(v);
			}, 1000),
		[volume, setVolume]
	);

	useEffect(() => {
		spotifyApi.setVolume(defaultVolume);
		return () => {
			debouncedApiCall.cancel();
		};
	}, []);

	return (
		<Box sx={{ width: 200 }}>
			<Stack spacing={2} direction="row" alignItems="center">
				{volume === 0 ? <VolumeOff /> : <VolumeDown />}
				<Slider
					min={0}
					max={100}
					step={1}
					aria-label="Volume"
					value={volume}
					onChange={(e, v) => setVolume(v)}
					onChangeCommitted={handleVolumeChange}
				/>
				<VolumeUp />
			</Stack>
		</Box>
	);
};

export default VolumeController;
