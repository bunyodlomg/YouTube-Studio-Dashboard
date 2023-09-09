import { Box, Button, Typography } from "@mui/material"
const AnalyticsTabHeader = ({ title, value, icon, subtitle, children, onClick }) => {
    return (
        <Button sx={styles.container} onClick={onClick}>
            <Typography sx={styles.tabTitle}>{title}</Typography>
            <Box sx={styles.tabValueRow}>
                <Typography sx={styles.tabValue}>{value}</Typography>
                {icon}
            </Box>
            <Typography sx={styles.tabSubTitle}>{subtitle}</Typography>
            {children}
        </Button>
    )
}
/**@type {import("mui/material").SxProps} */
const styles = {
    container: {
        width: '100%',
        display: 'flex',
        alignSelf: 'center',
        flexDirection: 'column',
        color: 'neutral.normal',
            textTransform: 'capitalize',
        py: 2,
        border: 1,
        borderColor: 'neutral.medium',
        flexGrow: 1,
    },
    tabTitle: {
        fontSize: '0.8rem',
        fontWeight: 500,
    },
    tabValueRow: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    tabValue: {
        fontSize: { xs: '1rem', md: '1.5rem' },
        color: 'neutral.main',
        mr: 1
    },
    tabSubTitle: {
        fontSize: '0.6rem',
        fontStyle: 'italic',
        textTransform: 'lowercase',
        display: { xs: 'none', md: 'inline' },
    },
};
export default AnalyticsTabHeader