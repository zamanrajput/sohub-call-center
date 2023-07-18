import  { useState } from 'react';              
import { Typography, IconButton, Collapse } from '@mui/material';
import { ExpandLess, ExpandMore as ExpandMoreIcon } from '@mui/icons-material';

const ExpandableComponent = ({ title, Child }) => {
    const [expanded, setExpanded] = useState(false);

    const handleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <div style={{display:'flex',flexDirection:'column'}}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Typography sx={{display:'flex',flex:1.9,fontSize:16}} variant="h6">{title}</Typography>
                <IconButton sx={{display:'flex',flex:0.1}} onClick={handleExpand} size="small">
                    {expanded?<ExpandLess />:<ExpandMoreIcon />}
                </IconButton>
            </div>
            <Collapse in={expanded} >
                {Child}
            </Collapse>
        </div>
    );
};

export default ExpandableComponent;
