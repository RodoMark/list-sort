import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem';

const Footer = () => {
  const { 
    stateList, 
    stateSpeed, 
    stateMethod,

    generateList,

    bubbleSort,
    mergeSort,
    quickSort, } = useContext(GlobalContext);

    const [list, setList] = stateList;
    const [speed, setSpeed] = stateSpeed;
    const [method, setMethod] = stateMethod;

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

    const handleMethod = (algo) => {
      setMethod(algo);
      handleClose();
    };

  return (
    <footer>
      <Button variant="outlined" onClick={()=> generateList()}>Generate List</Button>

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

     

      <Button variant="outlined" onClick={() => bubbleSort(list, speed)}>SORT</Button>
    </footer>
  )
}

export default Footer