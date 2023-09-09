import { Box } from "@mui/material"

const TabPanel = ({ children, value, index, mt = 4 }) => {
    return (
        <Box hidden={value !== index} id={`simple-tabpanel-${index}`}>
            {value === index && (
                <Box sx={{ mt }}>
                    {children}
                </Box>
            )}
        </Box>
    )
}

export default TabPanel