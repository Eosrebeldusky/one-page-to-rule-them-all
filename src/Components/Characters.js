//Esto todavia esta al pedo
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from "react";

function Characters(props){

    const [race, setRace] = useState('');
    const handleChange = (event) =>{
        setRace(event.target.value);
    };

    return(
        <div>
            <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Race</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={race}
            label="Race"
            onChange={handleChange}
          >
            <MenuItem value={10}>props.race</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        </Box>
      </div>
    )
}

export default Characters;