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
        width:'100%'

    }
    return (
        <Box>
            <img src={BGPic} style={ bgStyle } />
            {/* <img src={TopRight} style={animationStyle} /> */}
        </Box>
    );
}


