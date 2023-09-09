import { Circle } from "@mui/icons-material"
import { Box, Card, CardContent, Divider, Typography } from "@mui/material"
import { Bar } from "react-chartjs-2"
import { realtimeChartData, realtimeChartOptions } from "./ChartConfigs"
import ColorText from "../../components/ColorText"
const RealtimeCard = () => {
    return (
        <Card sx={styles.realtimeStatsCard}>
            <CardContent>
                <Box>
                    <Typography variant="cardTitle">Realtime</Typography>
                    <Box sx={styles.updateLiveRow}>
                        <Circle sx={styles.dotIcon} />
                        <Typography variant="h7">
                            <ColorText color='neutral.normal'>Updating Live</ColorText>
                        </Typography>
                    </Box>
                    <Divider sx={styles.dvider} />
                    <Typography sx={styles.valueText}>4,144</Typography>
                    <Typography variant="h7">
                        <ColorText color='neutral.normal'>Subscribers </ColorText>
                    </Typography>
                    <Typography sx={styles.valueText}>1,786</Typography>
                    <Typography variant="h7">
                        <ColorText color='neutral.normal'>Views last 48 hours</ColorText>
                    </Typography>
                    <Box sx={styles.realtimeChart}>
                        <Bar options={realtimeChartOptions} data={realtimeChartData} />
                    </Box>
                </Box>
            </CardContent>
        </Card>
    )
}
/**@type {import("mui/material").SxProps} */
const styles = {
    realtimeStatsCard: {
        mb: 2,
        width: { xs: '90%', sm: '80%', md: '90%', lg: '100%' },

    },
    updateLiveRow: {
        display: 'flex',
        alignItems: 'center',
    },
    dotIcon: {
        withd: 10,
        color: 'primary.normal',
        mr: 1
    },
    dvider: {
        my: 2,
    },
    valueText: {
        fontSize: '1.3rem',
        fontWeight: 400
    },
    realtimeChart: {
        height: 70,
        mt: 4
    },
}
export default RealtimeCard