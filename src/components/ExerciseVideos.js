import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

const ExerciseVideos = ({ exerciseVideos, name }) => {
    return (
        <Box sx={{ marginTop: { lg: '200px', xs: '20px' } }} p="20px">
            <Typography variant="h3" mb="33px">
                Watch <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>{name}</span>
            </Typography>
            <Stack justifyContent="flex-start" flexWrap="wrap" alignItems="center"
                sx={{
                    flexDirection: { lg: 'row' },
                    gap: { lg: '110px', xs: '0' }
                }}
            >
                {exerciseVideos?.slice(0, 3).map((video, index) => (
                    <a
                        key={index}
                        className="exercise-video"
                        href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                        target="blank"
                        rel="noreferrer">
                        <img src={item.video.thumbnails[0].url} alt={item.video.title} />
                        <Box>
                            <Typography variant="h5" color="#000">
                                {item.video.title}
                            </Typography>
                            <Typography variant="h5" color="#000">
                                {item.video.title}
                            </Typography>
                        </Box>
                    </a>
                ))}
            </Stack>
        </Box>
    )
}

export default ExerciseVideos