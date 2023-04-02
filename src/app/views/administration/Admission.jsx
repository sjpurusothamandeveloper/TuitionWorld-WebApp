import { Box, Button, styled } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const FlexBox = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
}));

const JustifyBox = styled(FlexBox)(() => ({
  maxWidth: 320,
  flexDirection: 'column',
  justifyContent: 'center',
}));

const IMG = styled('img')(() => ({
  width: '100%',
  marginBottom: '32px',
}));

const NotFoundRoot = styled(FlexBox)(() => ({
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh !important',
}));

const Admission = () => {
  const navigate = useNavigate();

  return (
    <NotFoundRoot>
      <JustifyBox>
        <IMG src="/assets/images/illustrations/404.svg" alt="" />
<Link to="/administration/admission/enquiry">
        <Button
          color="primary"
          variant="contained"
          sx={{ textTransform: 'capitalize' }}
        
        >
          Admission
        </Button></Link>
        <Link to="/administration/admission/details"> <Button color="primary"
          variant="contained"
          sx={{ textTransform: 'capitalize' }}>Admission Tables</Button></Link>
      </JustifyBox>
    </NotFoundRoot>
  );
};

export default Admission;
