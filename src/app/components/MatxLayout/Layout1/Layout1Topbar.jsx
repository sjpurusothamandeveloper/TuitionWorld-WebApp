import { Avatar, Hidden, Icon, IconButton, MenuItem, useMediaQuery } from '@mui/material';
import { Box, styled, useTheme } from '@mui/system';
import { MatxMenu, MatxSearchBox } from 'app/components';
import { themeShadows } from 'app/components/MatxTheme/themeColors';
import { NotificationProvider } from 'app/contexts/NotificationContext';
// import useAuth from 'app/hooks/useAuth';
import useSettings from 'app/hooks/useSettings';
import { topBarHeight } from 'app/utils/constant';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Span } from '../../../components/Typography';
import NotificationBar from '../../NotificationBar/NotificationBar';
// import ShoppingCart from '../../ShoppingCart';
import { NavLink, useNavigate } from 'react-router-dom';
import jwt from "jwt-simple";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { deepOrange, deepPurple, blueGrey, lime } from '@mui/material/colors';
import jwt_decode from "jwt-decode";

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.primary,
}));

const TopbarRoot = styled('div')(({ theme }) => ({
  top: 0,
  zIndex: 96,
  transition: 'all 0.3s ease',
  boxShadow: themeShadows[8],
  height: topBarHeight,
}));

const TopbarContainer = styled(Box)(({ theme }) => ({
  padding: '8px',
  paddingLeft: 18,
  paddingRight: 20,
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  background: theme.palette.primary.main,
  [theme.breakpoints.down('sm')]: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  [theme.breakpoints.down('xs')]: {
    paddingLeft: 14,
    paddingRight: 16,
  },
}));

const UserMenu = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  borderRadius: 24,
  padding: 4,
  '& span': { margin: '0 8px' },
}));

const StyledItem = styled(MenuItem)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  minWidth: 185,
  '& a': {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
  },
  '& span': { marginRight: '10px', color: theme.palette.text.primary },
}));

const IconBox = styled('div')(({ theme }) => ({
  display: 'inherit',
  [theme.breakpoints.down('md')]: { display: 'none !important' },
}));

const Layout1Topbar = () => {
  const theme = useTheme();
  const { settings, updateSettings } = useSettings();
  const [loggedInUserName, setloggedInUserName] = useState("")
  // const { logout, user } = useAuth();
  const isMdScreen = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  const updateSidebarMode = (sidebarSettings) => {
    updateSettings({
      layout1Settings: { leftSidebar: { ...sidebarSettings } },
    });
  };

  const handleSidebarToggle = () => {
    let { layout1Settings } = settings;
    let mode;
    if (isMdScreen) {
      mode = layout1Settings.leftSidebar.mode === 'close' ? 'mobile' : 'close';
    } else {
      mode = layout1Settings.leftSidebar.mode === 'full' ? 'close' : 'full';
    }
    updateSidebarMode({ mode });
  };

  useEffect(() => {
    decryptuserData()
  }, [])

  const decryptuserData = () => {
    let sessionEncToken = sessionStorage.getItem("twSampleData")
    let sessionGoogleEncTojen = sessionStorage.getItem("googleUserObj")
    if (sessionGoogleEncTojen === null) {
      var secret = 'TU!tI0nW0R1d';
      // decode
      var decoded = jwt.decode(sessionEncToken, secret);
      console.log(decoded, "decoded");
      setloggedInUserName(decoded?.userData?.userName)
    }
    else {
      // decode
      var encodedGoogleObj = sessionStorage.getItem("googleUserObj")
      var decodeGoogleuserObj = jwt_decode(encodedGoogleObj)
      console.log(decodeGoogleuserObj, "google")
      setloggedInUserName(decodeGoogleuserObj?.name)
    }

  }

  const logout = () => {
    sessionStorage.clear()
    navigate('/session/signin')
  }

  return (
    <TopbarRoot>
      <TopbarContainer>
        <Box display="flex">
          <StyledIconButton onClick={handleSidebarToggle}>
            <Icon>menu</Icon>
          </StyledIconButton>

          <IconBox>
            <StyledIconButton>
              <Icon>mail_outline</Icon>
            </StyledIconButton>

            <StyledIconButton>
              <Icon>web_asset</Icon>
            </StyledIconButton>

            <StyledIconButton>
              <Icon>star_outline</Icon>
            </StyledIconButton>
          </IconBox>
        </Box>

        <Box display="flex" alignItems="center">
          <MatxSearchBox />

          <NotificationProvider>
            <NotificationBar />
          </NotificationProvider>

          {/* <ShoppingCart /> */}

          <MatxMenu
            menuButton={
              <UserMenu>
                <Hidden xsDown>
                  <Span>
                    Hi <strong>{loggedInUserName}</strong>
                  </Span>
                </Hidden>
                <Avatar sx={{ bgcolor: deepPurple[400] }} src={<AccountCircleIcon />}></Avatar>
              </UserMenu>
            }
          >
            <StyledItem>
              <Link to="/">
                <Icon> home </Icon>
                <Span> Home </Span>
              </Link>
            </StyledItem>

            <StyledItem>
              <Link to="/page-layouts/user-profile">
                <Icon> person </Icon>
                <Span> Profile </Span>
              </Link>
            </StyledItem>

            <StyledItem>
              <Icon> settings </Icon>
              <Span> Settings </Span>
            </StyledItem>

            <StyledItem onClick={logout}>
              <Icon> power_settings_new </Icon>
              <Span> Logout </Span>
            </StyledItem>
          </MatxMenu>
          {/* <UserMenu>
            <Hidden xsDown>
              <Span>
                Hi <strong>{user.name}</strong>
              </Span>
            </Hidden>
            <Avatar src={user.avatar} sx={{ cursor: 'pointer' }} />
          </UserMenu> */}
        </Box>
      </TopbarContainer>
    </TopbarRoot>
  );
};

export default React.memo(Layout1Topbar);
