import Box from '@mui/material/Box'

export default function GMBox(props) {
    const gmStyle = {
        background: 'rgba( 255, 255, 255, 0.4 )',
        boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
        backdropFilter: 'blur( 3px )',
        '-webkit-backdrop-filter': 'blur( 3px )',
        'borderRadius': '10px',
        border: '1px solid rgba( 255, 255, 255, 0.18 )',
        padding:'50px 30px'
    }

    return (<Box sx={{...props.sx,...gmStyle}}>{props.children}</Box>)
}