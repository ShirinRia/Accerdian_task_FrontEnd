import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Extracard = ({ service }) => {

  // eslint-disable-next-line no-unused-vars
  const theme = useTheme();
  return (
    <Card data-aos={`${service.direc}`} data-aos-duration="2000" data-aos-easing="ease-in-sine" data-aos-delay="100" sx={{ display: 'flex', mx: 12 }}>

      <CardContent sx={{ flex: '1  auto' }}>
        <Typography component="div" variant="h5">
          {service.name}
        </Typography>
        <Typography component="div" variant="body2">
          {service.briefdescription}
        </Typography>

      </CardContent>


      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={service.image}
        alt="Live from space album cover"
      />
    </Card>
  );
};
Extracard.propTypes = {
  service: PropTypes.object,
};
export default Extracard;