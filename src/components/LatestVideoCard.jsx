import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";

const LatestVideoCard = (props) => {
    return (
        <Card {...props}>
            <CardContent>
                <Typography variant="cardTitle">Latest Video Performance</Typography>
                <Box sx={styles.LatestVideoContainer}>
                    <Box sx={styles.LatestVideoThumbnail} component={'img'} src="https://i.ytimg.com/vi/FT3ODSg1GFE/maxresdefault.jpg" />
                    <Typography sx={styles.LatestVideoTitle}>ReactJS Searchbar in 5 minutes</Typography>
                </Box>
                <Typography variant="h7" sx={styles.LatestVideoTimeLabel}>First 6 hours:</Typography>
                <Box sx={styles.LatestVideoStatsRow}>
                    <Typography variant="h7">Views</Typography>
                    <Typography variant="h7">32M</Typography>
                </Box>
                <Box sx={styles.LatestVideoStatsRow}>
                    <Typography variant="h7">Watch Time</Typography>
                    <Typography variant="h7">30</Typography>
                </Box>
                <Box sx={styles.LatestVideoStatsRow}>
                    <Typography variant="h7">Likes</Typography>
                    <Typography variant="h7">19M</Typography>
                </Box>
                <Typography sx={styles.cardAction} variant="link">GO TO VIDEO ANALYTICS</Typography>
                <Typography sx={styles.cardAction} variant="link">SEE COMMENTS(40M)</Typography>
            </CardContent>
        </Card>
    );
};


/** @type {import("mui/material").SxProps} */
const styles = {
    LatestVideoContainer: {
        width: '100%',
        position: 'relative',
    },
    LatestVideoThumbnail: {
        width: '100%',
        mt: 1,
        filter: 'brightness(20%)',
        display: 'block',
    },
    LatestVideoTitle: {
        position: 'absolute',
        bottom: 0,
        color: 'neutral.light',
        left: 0,
        right: 0,
        textAlign: 'center',
        fontSize: '1rem',
        fontWeight: 'bold',
        mb: 2
    },
    LatestVideoTimeLabel: {
        color: 'neutral.normal',
        mt: 2,
    },
    LatestVideoStatsRow: {
        display: 'flex',
        justifyContent: 'space-between',
        mt: 2,
    },
    cardAction: {
        mt: 2,
    },
}
export default LatestVideoCard;
