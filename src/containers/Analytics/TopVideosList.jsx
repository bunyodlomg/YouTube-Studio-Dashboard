import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'

const TopVideosList = () => {
    return (
        <Box sx={StyleSheet.container}>
            <Typography variant='h6'>Your top content in this period</Typography>
            <TableContainer sx={styles.tableContainer} component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Content</TableCell>
                            <TableCell align='right'>Average view duration</TableCell>
                            <TableCell align='right'>Views</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (<TableRow key={row.name}>
                            <TableCell component={'th'} sx={styles.contentCell}>
                                <Box sx={styles.videoThumbnail} component={'img'} src={row.thumbnail} />
                            </TableCell>
                            <TableCell align='right'>{row.averageViewDuration} </TableCell>
                            <TableCell align='right'>{row.views} </TableCell>
                        </TableRow>))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}

const rows = [
    { thumbnail: 'https://i.ytimg.com/vi/FT3ODSg1GFE/maxresdefault.jpg', name: 'How to become a software developer', averageViewDuration: '2:25 (41.0%)', views: 3211 },
    { thumbnail: 'https://i.ytimg.com/vi/TX9qSaGXFyg/hqdefault.jpg', name: 'React Native Crash Course in 4 hours', averageViewDuration: '9:45 (30.5%)', views: 3102 },
    { thumbnail: 'https://i.ytimg.com/vi/FT3ODSg1GFE/maxresdefault.jpg', name: 'ReactJs SearchBar in 5 minutes', averageViewDuration: '3:10 (25.5%)', views: 1900 },
    { thumbnail: 'https://i.ytimg.com/vi/TX9qSaGXFyg/hqdefault.jpg', name: 'JavaScript Crash Course including real world projects', averageViewDuration: '8:10 (15.5%)', views: 1201 },
    { thumbnail: 'https://i.ytimg.com/vi/TX9qSaGXFyg/hqdefault.jpg', name: 'How to build an admin panel using React and TypeScript', averageViewDuration: '2:10 (34.1%)', views: 1195 },
    { thumbnail: 'https://i.ytimg.com/vi/FT3ODSg1GFE/maxresdefault.jpg', name: 'TypeScript Crash Course for beginners', averageViewDuration: '5:20 (14.1%)', views: 1037 },
]


/** @type {import("@mui/material").SxProps} */

const styles = {
    container: {
        mt: 4,
        width: '100%',
        alignItems: 'center',
    },
    tableContainer: {
        mt: 8
    },
    contentCell: {
        display: 'flex',
        alignItems: 'center',
    },
    videoThumbnail: {
        width: '100%',
        maxWidth: 100,
        mr: 1
    },
}

export default TopVideosList