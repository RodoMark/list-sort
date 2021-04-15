import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem';

const SpeedSelector = () => {
  const { stateSpeed } = useContext(GlobalContext);

    const [speed, setSpeed] = stateSpeed;

    useEffect(() => {
      console.log('update list')
    }, [list]);

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => setAnchorEl(null);

    const handleSpeed = (ms) => {
      setSpeed(ms);
      handleClose();
    };

  return (
    <>
      <Button id="speed-menu" variant="outlined" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
      Set Speed
      </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={() => handleSpeed(50)}>Fast</MenuItem>
          <MenuItem onClick={() => handleSpeed(150)}>Medium</MenuItem>
          <MenuItem onClick={() => handleSpeed(500)}>Slow</MenuItem>
          <MenuItem onClick={() => handleSpeed(1000)}>Step By Step</MenuItem>
        </Menu>

    </>
  )
}

export default Footer