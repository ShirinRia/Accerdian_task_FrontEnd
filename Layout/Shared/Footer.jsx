import Container from '@mui/material/Container';

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

const Footer = () => {



  return (
    <footer  style={{  position:"static", margin:'0', }}>
      <Container maxWidth="xl" sx={{bgcolor: grey[200], padding:'28px',textAlign:"center"}}>
      
         
            <p style={{margin:'0',fontSize:'18px', fontWeight:600}}>Copyright 2023 by Shirin Sultana. All Rights Reserved.</p>
         

         
        
      </Container>
    </footer>
  );
}
export default Footer;