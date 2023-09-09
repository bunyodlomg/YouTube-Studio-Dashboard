import { Box, Tab, Tabs, Typography } from '@mui/material'
import { useState } from 'react';
import TabPanel from '../components/TabPanel';
import { AttachEmailOutlined, VisibilityOutlined } from '@mui/icons-material';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  {
    field: "thumbnail",
    headerName: "Video",
    minWidth: 500,
    flex: 4,
    renderCell: (params) => <Box sx={styles.videoColumn}>
      <Box
        component={'img'}
        sx={styles.videoSumbnail}
        src={params.row.thumbnail}>
      </Box>
      <Box sx={styles.videoDetails}>
        <Typography sx={styles.videoTitle}>Must Know JavaScript Interview Questions | Part 1</Typography>
        <Typography sx={styles.videoDescription}>In this video you will learn how to solve JavaScript Interview questions.</Typography>
      </Box>
    </Box>
  },
  {
    field: 'visibility',
    headerName: 'Visibility',
    minWidth: 170,
    flex: 2,
    renderCell: (params) => <Box sx={styles.iconColumn} >
      <VisibilityOutlined />
      <Typography sx={styles.iconColumnText}>{params.row.visibility}</Typography>
    </Box>,
  },
  {
    field: "monetization",
    headerName: "Monetization",
    minWidth: 170,
    flex: 2,
    renderCell: (params) => <Box sx={styles.iconColumn}>
      <AttachEmailOutlined />
      <Typography sx={styles.iconColumnText}>{params.row.monetization}</Typography>
    </Box>
  },
  {
    field: "views",
    headerName: "Views",
    minWidth: 170,
    flex: 1,
  },
  {
    field: "comments",
    headerName: "Comments",
    minWidth: 170,
    flex: 1,
  }
]

const obj = [
  {
    id: 0,
    content: [
      { id: 1, thumbnail: 'https://i.ytimg.com/vi/TX9qSaGXFyg/hqdefault.jpg', visibility: 'Public', monetization: 'On', views: 100, comments: 12 },
      { id: 2, thumbnail: 'https://i.ytimg.com/vi/FT3ODSg1GFE/maxresdefault.jpg', visibility: 'Public', monetization: 'On', views: 100, comments: 12 },
    ],
    label: "videos"
  },
  {
    id: 1,
    content: [
      { id: 1, thumbnail: 'https://i.ytimg.com/vi/FT3ODSg1GFE/maxresdefault.jpg', visibility: 'Public', monetization: 'On', views: 100, comments: 12 },
      { id: 2, thumbnail: 'https://i.ytimg.com/vi/FT3ODSg1GFE/maxresdefault.jpg', visibility: 'Public', monetization: 'On', views: 100, comments: 12 },
      { id: 3, thumbnail: 'https://i.ytimg.com/vi/TX9qSaGXFyg/hqdefault.jpg', visibility: 'Public', monetization: 'On', views: 100, comments: 12 },

    ],
    label: "posts"
  },
  {
    id: 2,
    content: [
      { id: 1, thumbnail: 'https://i.ytimg.com/vi/GYkq9Rgoj8E/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBLvoNRiD4ISJjBD-FkCv9J9VGriQ', visibility: 'Public', monetization: 'On', views: 100, comments: 12 },
    ],
    label: "playlists"
  },
  {
    id: 3,
    content: [],
    label: "lives"
  },
]
const Content = () => {
  const [value, setValue] = useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <Box>
      <Typography sx={styles.pageTitle} variant='h5'>Content</Typography>
      <Box sx={{ BorderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange}>
          {obj && obj.map((v) => (
            <Tab label={v.label} id={`tab-${v.id}`} key={v.id} />
          ))}
        </Tabs>
        {obj && obj.map((v) => (
          <TabPanel value={value} index={v.id} key={v.id}>
            <DataGrid
              rows={[...v.content]}
              columns={columns}
              pageSize={25}
              pageSizeOptions={[25]}
              checkboxSelection
              autoHeight
              rowHeight={70}
            />
          </TabPanel>
        ))}
      </Box>
    </Box>
  )
}
/** @type {import("mui/material").SxProps} */
const styles = {
  videoColumn: {
    display: 'flex', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoSumbnail: {
    width: 120,
  },
  thumbnail: {
    fontSize: '0.8rem',
  },
  videoDetails: {
    ml: 2
  },
  videoTitle: {
    width: 490,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    '&:hover': {
      textDecaration: 'underline',
      cursor: 'pointer'
    }
  },
  videoDescription: {
    fontSize: '0.7rem',
    color: 'neutral.normal',
    width: 490,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
  iconColumn: {
    display: 'flex',
    alignItems: 'center'
  },
  iconColumnText: {
    fontSize: '0.9rem',
    ml: 1
  },
  pageTitle: {
    mb: 2
  },
}
export default Content