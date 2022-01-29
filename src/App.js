import Box from '@mui/material/Box'
import BGPic from './assets/bg.jpeg'
import GMBox from './common/gmBox';

function App() {
  const bgStyle = {
    height: '100vh',
    backgroundImage: 'url(' + BGPic + ')',
    width:'100%',
    backgroundSize:'100% auto',
    overflow:'hidden'
  }
  return (
    <Box sx={bgStyle}>
      <GMBox>Welcome to my website!</GMBox>
    </Box>
  );
}

export default App;
