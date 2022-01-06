import { useState } from 'react';
import { Box, Grid, Typography, Avatar, Stack, Slider, IconButton } from '@mui/material';
import { VolumeDown, VolumeUp } from '@mui/icons-material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';

const Player = ({ image, title, artist }) => {
	const [volume, setVolume] = useState(30);
	const [playing, setPlaying] = useState(false);

	const handleVolumeChange = (event, newValue) => {
		setVolume(newValue);
	};

	const sliderStyle = {
		color: '#fff',
		height: 4,
		width: { xs: 100, md: 250 },
		'& .MuiSlider-thumb': {
			width: 8,
			height: 8,
			transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
			'&:before': {
				boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)'
			},
			'&:hover, &.Mui-focusVisible': {
				boxShadow: `0px 0px 0px 8px 'rgb(0 0 0 / 16%)`
			},
			'&.Mui-active': {
				width: 20,
				height: 20
			}
		},
		'& .MuiSlider-rail': {
			opacity: 0.28
		}
	};

	return (
		<Box
			p={1}
			sx={{
				bgcolor: 'background.paper',
				height: 90,
				width: '100%',
				position: 'fixed',
				bottom: { xs: 56, md: 0 },
				left: 0,
				right: 0,
				boxSizing: 'border-box'
			}}
		>
			<Grid container spacing={2}>
				<Grid item xs={4} md={3}>
					<Stack direction="row" spacing={4}>
						<Avatar
							alt={title}
							src={image}
							variant="square"
							sx={{ width: 56, height: 56, display: { xs: 'none', md: 'block' } }}
						/>
						<Box>
							<Typography variant="subtitle1" sx={{ color: 'text.primary' }}>
								{title}
							</Typography>
							<Typography variant="caption" sx={{ color: 'text.secondary' }}>
								{artist}
							</Typography>
						</Box>
					</Stack>
				</Grid>
				<Grid item xs={8} md={6}>
					<Stack spacing={0} direction="column" alignItems="center">
						<Stack spacing={2} direction="row" alignItems="center">
							<IconButton
								size="small"
								sx={{ color: 'white' }}
								onClick={() => {
									console.log('Skip prev');
								}}
							>
								<SkipPreviousIcon />
							</IconButton>
							<IconButton size="small" sx={{ color: 'white' }} onClick={() => setPlaying((v) => !v)}>
								{playing ? <PauseIcon fontSize="large" /> : <PlayArrowIcon fontSize="large" />}
							</IconButton>
							<IconButton
								size="small"
								sx={{ color: 'white' }}
								onClick={() => {
									console.log('Skip next');
								}}
							>
								<SkipNextIcon />
							</IconButton>
						</Stack>
						<Stack spacing={2} direction="row" alignItems="center">
							<Typography variant="body1" sx={{ color: 'text.secondary' }}>
								2:51
							</Typography>
							<Slider
								sx={sliderStyle}
								size="medium"
								defaultValue={95}
								aria-label="Default"
								valueLabelDisplay="auto"
								onChange={() => {
									console.log('Move through the song');
								}}
							/>
							<Typography variant="body1" sx={{ color: 'text.secondary' }}>
								3:00
							</Typography>
						</Stack>
					</Stack>
				</Grid>
				<Grid
					item
					xs={0}
					md={3}
					sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'end', alignItems: 'center' }}
				>
					<Box sx={{ width: 200 }}>
						<Stack spacing={2} direction="row" alignItems="center">
							<VolumeDown />
							<Slider aria-label="Volume" value={volume} onChange={handleVolumeChange} />
							<VolumeUp />
						</Stack>
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Player;
