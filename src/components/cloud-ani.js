import Box from '@mui/material/Box'
import BGPic from '../assets/clouds/bg.jpeg'
import TopRight from '../assets/clouds/topright.png'
import GMBox from '../common/gmBox';

export default function CloudAni() {
    const bgStyle = {
        width: '100%',
    }

    const animationStyle = {
        position: 'absolute',
        top: '0',
        width: '100%'

    }

    const gmBoxStyle = {
        position: 'absolute',
        top: '30vh',
        left:'25%',
        width: '50%',
        textAlign:'center',

    }
    return (
        <Box>
            <img src={BGPic} style={bgStyle} />
            <GMBox sx={gmBoxStyle}>💖💖💖<br/>Nina loves Garrett !!!<br/>Garrett is the best !!<br/>💖💖💖</GMBox>
        </Box>
    );
}


