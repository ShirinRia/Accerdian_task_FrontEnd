
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Container from '@mui/material/Container';

import { useNavigate } from 'react-router-dom';
import logo from '../../../assets/logo.png'

import './Navbar.css'
import useAuth from '../../../Hooks/useAuth';
import { Button } from '@mui/material';


const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const Navbar = () => {
const navigate=useNavigate()
const {user,setuser}=useAuth()
const logout=()=>{
setuser(false);
navigate('/login');
}
  return (
    <AppBar position="static" sx={{ bgcolor: grey[100], paddingBottom: 2 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ display:  'flex' , alignItems: 'center', justifyContent:'space-between' }}>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
            <img src={logo} alt="logo" height={'80'} />
          </Box>
         
          <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
            <img src={logo} alt="logo" height={'80'} />
          </Box>

         
          <Box sx={{ flexGrow: 0, fontWeight: 600, fontSize: 20 }}>
            {user ?
              <Button sx={{fontWeight:600, fontSize:18}} onClick={logout} > Log out </Button>
              :
              <Button sx={{fontWeight:600, fontSize:18}} href={'/login'} > Log in </Button>

            }
           
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;