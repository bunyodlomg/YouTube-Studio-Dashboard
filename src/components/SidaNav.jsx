import { AnalyticsOutlined, DashboardOutlined, SourceOutlined, StyleOutlined } from '@mui/icons-material'
import { Avatar, Box, Typography, useTheme } from '@mui/material'
import { Menu, MenuItem, Sidebar, useProSidebar } from 'react-pro-sidebar'
import { Link, useLocation } from 'react-router-dom'

const SideNav = () => {
  const theme = useTheme()
  const { collapsed } = useProSidebar()
  const location = useLocation()
  return (
    <Sidebar style={{
      height: '100%',
      top: 'auto',
    }}
      breakPoint='md'
      backgroundColor={theme.palette.neutral.light}>
      <Box sx={styles.avatarContainer}>
        <Avatar sx={styles.avatar} alt='Channel name' src='https://yt3.googleusercontent.com/W5eTz0TA-pNz19j5NqEjQxbtNmFY1opQDztBDve221N01mp6mV4YeWvLfFRspyGWo9yAm75QfQ=s176-c-k-c0x00ffffff-no-rj' />
        {!collapsed ? <Typography variant='body2' sx={styles.yourChannel}>Your channel</Typography> : null}
        {!collapsed ? <Typography variant='overline'>Bunyod</Typography> : null}
      </Box>
      <Menu
        menuItemStyles={{
          button: ({ active }) => {
            return {
              backgroundColor: active ? theme.palette.neutral.medium : undefined
            }
          }
        }}>
        <MenuItem active={location.pathname === '/'} component={<Link to="/" />} icon={<DashboardOutlined />}>
          <Typography variant='body2'>Dashboard</Typography>
        </MenuItem>
        <MenuItem active={location.pathname === '/content'} component={<Link to="/content" />} icon={<SourceOutlined />}>
          <Typography variant='body2'>Content</Typography>
        </MenuItem>
        <MenuItem active={location.pathname === '/analytics'} component={<Link to="/analytics" />} icon={<AnalyticsOutlined />}>
          <Typography variant='body2'>Analytics</Typography>
        </MenuItem>
        <MenuItem active={location.pathname === '/customization'} component={<Link to="/customization" />} icon={<StyleOutlined />}>
          <Typography variant='body2'>Custumization</Typography>
        </MenuItem>
      </Menu>
    </Sidebar>
  )
}

/** @type {import("@mui/material").SxProps} */
const styles = {
  avatarContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    my: 5
  },
  avatar: {
    width: '40%',
    height: 'auto',
  },
  yourChannel: {
    mt: 1
  }
}

export default SideNav