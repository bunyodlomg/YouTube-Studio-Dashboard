import { Box, CssBaseline, ThemeProvider, Typography } from '@mui/material'
import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import theme from './config/theme'
import AppHeader from './components/AppHeader';
import SideNav from './components/SidaNav'
import { ProSidebarProvider } from "react-pro-sidebar";
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routers/AppRoutes';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <ProSidebarProvider>
            <AppHeader />
            <Box sx={styles.container}>
              <BrowserRouter>
                <SideNav />
                <Box component={'main'} sx={styles.mainSection}>
                  <AppRoutes />
                </Box>
              </BrowserRouter>
            </Box>
          </ProSidebarProvider>
        </CssBaseline>
      </ThemeProvider>
    </>
  )
}

/** @type {import("@mui/material").SxProps} */
const styles = {
  container: {
    display: 'flex',
    bgcolor: 'neutral.light',
    height: 'calc(100% - 64px)',
  },
  mainSection: {
    p: 4,
    width: '100%',
    height: '100%',
    overflow: 'auto',
  }
}

export default App