import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
    return (
        <Box id="exercises"
            sx={{ mt: { lg: '110px' } }}
            my="50px"
            p="20px"
        >
            <Typography varient="h3" mb="46px">
                Showing Results
            </Typography>
            <Stack
                direction="row"
                flexWrap="wrap"
                justifyContent="center"
                sx={{ gap: { lg: '110px', xs: '50px' } }}
            >
                {exercises.map((exercise, index) => (
                    <ExerciseCard key={index} exercise={exercise} />
                ))}
            </Stack>
            <Stack mt="100px" alignItems="center">
                {Exercises.length > 9 && <Pagination color="standard" shape="rounded" />}
            </Stack>
        </Box>
    )
}

export default Exercises