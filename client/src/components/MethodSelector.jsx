import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem';

const Footer = () => {
  const { stateMethod } = useContext(GlobalContext);

    const [method, setMethod] = stateMethod;

    useEffect(() => {
      console.log('update list')
    }, [list]);

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => setAnchorEl(null);

    const handleMethod = (algo) => {
      setMethod(algo);
      handleClose();
    };

  return (
    <>

      <Button id="algo-menu" variant="outlined" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
      Choose Sorting Algorithm
      </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={() => handleMethod('BUBBLE')}>Bubble Sort</MenuItem>
          <MenuItem onClick={() => handleMethod('MERGE')}>Merge Sort</MenuItem>
          <MenuItem onClick={() => handleMethod('QUICK')}>Quick Sort</MenuItem>
        </Menu>
    </>
  )
}

export default Footer