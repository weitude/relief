import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { useRelief } from '../containers/hooks/useRelief';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
};

const tags = ['academic', 'romantic', 'friendship', 'emo', 'life', 'family'];

function getStyles(name, chosenTag, theme) {
  return {
    fontWeight:
      chosenTag.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}



export default function MultipleSelect() {
    const { chosenTag, setchosenTag } = useRelief();
    const theme = useTheme();
  
    const handleChange = (event) => {
      const {
        target: { value },
      } = event;
      setchosenTag(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
    };
  
    return (
        <FormControl sx={{width: '100%'}}>
          <InputLabel id="multiple-chip-label">Tags</InputLabel>
          <Select
            labelId="multiple-chip-label"
            id="multiple-chip"
            multiple
            value={chosenTag}
            onChange={handleChange}
            input={<OutlinedInput id="select-multiple-chip" label="Tags" />}
            renderValue={(selected) => (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {tags.map((name) => (
              <MenuItem
                key={name}
                value={name}
                style={getStyles(name, chosenTag, theme)}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
    );
  }