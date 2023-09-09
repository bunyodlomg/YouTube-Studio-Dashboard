import { Box, Divider, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import TabPanel from "../../components/TabPanel";
import OverviewCharts from "./OverviewChart";
import TopVideosList from "./TopVideosList";
import RealtimeCard from "./RealtimeCard";
import LatestVideoCard from "../../components/LatestVideoCard"
const Analytics = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box>
      <Typography sx={styles.pageTitle} variant="h5">Analytics</Typography>
      <Box sx={styles.tabHeader}>
        <Tabs value={value} onChange={handleChange}>
          {obj &&
            obj.map((v) => (
              <Tab label={v.label} id={`tab-${v.id}`} key={v.id} />
            ))
          }
        </Tabs>
        <TabPanel value={value} index={0} sx={{}}>
          <Box sx={styles.overviewContainer}>
            <Box sx={styles.statsContainer}>
              <Typography variant="h6" sx={{}}>
                Your channel got 23,084 views in the last 28 days
              </Typography>
              <OverviewCharts />
              <Divider sx={styles.divider} />
              <TopVideosList />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <RealtimeCard />
              <LatestVideoCard sx={{ width: { xs: '90%', sm: '80%', md: '90%' } }} />
            </Box>
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <TopVideosList />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Typography>Audience</Typography>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Typography>Revenue</Typography>
        </TabPanel>
      </Box>
    </Box>
  );
};

/** @type {import("@mui/material").SxProps} */

const styles = {
  pageTitle: {
    mb: 2
  },
  tabHeader: {
    borderBottom: 1,
    borderColor: 'divider'
  },
  overviewContainer: {
    display: 'grid',
    gridTemplateColumns: { md: '1fr', lg: '1fr 300px' },
    gap: 2,
    justifyContent: 'center',
  },
  statsContainer: {
    bgcolor: 'neutral.light',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
  divider: {
    my: 4
  }

}

const obj = [
  {
    id: 0,
    label: 'Overview'
  },
  {
    id: 1,
    label: 'Content'
  },
  {
    id: 2,
    label: 'Audience'
  },
  {
    id: 3,
    label: 'Revenue'
  },
]
export default Analytics;
