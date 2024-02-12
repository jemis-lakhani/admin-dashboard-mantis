import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import SelectComponent from '../../../../components/SelectComponent';
import InputComponent from 'components/InputComponent';
import SwapVerticalCircleIcon from '@mui/icons-material/SwapVerticalCircle';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Popover from '@mui/material/Popover';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';

const cellStyle = {
  border: '1px solid #ddd',
  padding: '6px'
};

const MemberTabOne = ({ handleClose }) => {
  //popover 1
  const [anchor1, setAnchor1] = useState(null);
  const handleClick1 = (event) => {
    setAnchor1(event.currentTarget);
  };
  const handleClose1 = () => {
    setAnchor1(null);
  };
  const open1 = Boolean(anchor1);
  const id1 = open1 ? 'popover1' : undefined;

  //popover 2
  const [anchor2, setAnchor2] = useState(null);
  const handleClick2 = (event) => {
    setAnchor2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchor2(null);
  };
  const open2 = Boolean(anchor2);
  const id2 = open2 ? 'popover2' : undefined;

  return (
    <Box sx={{ p: 1 }}>
      {/* table 1 */}
      <Typography variant="h5" sx={{ m: 1 }}>
        Information
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell style={{ ...cellStyle, width: '10%', backgroundColor: '#F5F5F5' }}>cell 1 1</TableCell>
              <TableCell colSpan={3} style={{ ...cellStyle, width: '90%' }}>
                <div style={{ display: 'flex', gap: 3 }}>
                  <SelectComponent></SelectComponent>
                  <SelectComponent></SelectComponent>
                  <SelectComponent></SelectComponent>
                  <SelectComponent></SelectComponent>
                  <SelectComponent></SelectComponent>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ ...cellStyle, width: '10%', backgroundColor: '#F5F5F5' }}>cell 2 1</TableCell>
              <TableCell style={{ ...cellStyle, width: '40%' }}>cell 2 2</TableCell>
              <TableCell style={{ ...cellStyle, width: '10%', backgroundColor: '#F5F5F5' }}>cell 2 3</TableCell>
              <TableCell colSpan={1} style={{ ...cellStyle, width: '40%' }}>
                <div style={{ display: 'flex', gap: 3, maxWidth: 'fit-content' }}>
                  <SelectComponent></SelectComponent>
                  <SelectComponent></SelectComponent>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ ...cellStyle, width: '10%', backgroundColor: '#F5F5F5' }}>cell 3 1</TableCell>
              <TableCell style={{ ...cellStyle, width: '40%' }}>
                <div style={{ display: 'flex', gap: 3, maxWidth: 'fit-content' }}>
                  <SelectComponent></SelectComponent>
                  <InputComponent></InputComponent>
                  <InputComponent></InputComponent>
                </div>
              </TableCell>
              <TableCell style={{ ...cellStyle, width: '10%', backgroundColor: '#F5F5F5' }}>cell 3 3</TableCell>
              <TableCell style={{ ...cellStyle, width: '40%' }}>
                <InputComponent></InputComponent>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      {/* table 2 */}
      <Typography variant="h5" sx={{ m: 1 }}>
        title 2
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell style={{ ...cellStyle, width: '10%', backgroundColor: '#F5F5F5' }}>cell 1 1</TableCell>
              <TableCell align="right" style={{ ...cellStyle, width: '40%' }}>
                <div style={{ display: 'inline-flex', gap: 6 }}>
                  <span>cell 1 2</span>
                  <IconButton aria-label="points" onClick={handleClick1} sx={{ height: '24px', width: '24px' }}>
                    <SwapVerticalCircleIcon sx={{ fontSize: '1.5em' }} />
                  </IconButton>
                  <Popover
                    id={id1}
                    open={open1}
                    anchorEl={anchor1}
                    onClose={handleClose1}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left'
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right'
                    }}
                  >
                    <Box sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                      <Typography variant="h5">Title</Typography>
                      <FormControl>
                        <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                          <FormControlLabel value="radio1" control={<Radio checked />} label="radio1" />
                          <FormControlLabel value="radio2" control={<Radio />} label="radio2" />
                        </RadioGroup>
                        <InputComponent sx={{ width: '250px' }}></InputComponent>
                        <Stack spacing={1} direction="row-reverse" sx={{ pt: 2 }}>
                          <Button disableElevation size="small" color="secondary" variant="contained">
                            Close
                          </Button>
                          <Button disableElevation size="small" color="primary" variant="contained" sx={{ color: 'white' }}>
                            Save
                          </Button>
                        </Stack>
                      </FormControl>
                    </Box>
                  </Popover>
                </div>
              </TableCell>
              <TableCell style={{ ...cellStyle, width: '10%', backgroundColor: '#F5F5F5' }}>cell 1 3</TableCell>
              <TableCell align="right" style={{ ...cellStyle, width: '40%' }}>
                <div style={{ display: 'inline-flex', gap: 6 }}>
                  <span>cell 1 2</span>
                  <IconButton aria-label="points" onClick={handleClick2} sx={{ height: '24px', width: '24px' }}>
                    <SwapVerticalCircleIcon sx={{ fontSize: '1.5em' }} />
                  </IconButton>
                  <Popover
                    id={id2}
                    open={open2}
                    anchorEl={anchor2}
                    onClose={handleClose2}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left'
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right'
                    }}
                  >
                    <Box sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                      <Typography variant="h5">Title</Typography>
                      <FormControl>
                        <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                          <FormControlLabel value="radio1" control={<Radio checked />} label="radio1" />
                          <FormControlLabel value="radio2" control={<Radio />} label="radio2" />
                        </RadioGroup>
                        <InputComponent sx={{ width: '250px' }}></InputComponent>
                        <Stack spacing={1} direction="row-reverse" sx={{ pt: 2 }}>
                          <Button disableElevation size="small" color="secondary" variant="contained">
                            Close
                          </Button>
                          <Button disableElevation size="small" color="primary" variant="contained" sx={{ color: 'white' }}>
                            Save
                          </Button>
                        </Stack>
                      </FormControl>
                    </Box>
                  </Popover>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ ...cellStyle, width: '10%', backgroundColor: '#F5F5F5' }}>cell 2 1</TableCell>
              <TableCell align="right" style={{ ...cellStyle, width: '40%' }}>
                cell 2 2
              </TableCell>
              <TableCell style={{ ...cellStyle, width: '10%', backgroundColor: '#F5F5F5' }}>cell 2 3</TableCell>
              <TableCell align="right" style={{ ...cellStyle, width: '40%' }}>
                cell 2 4
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ ...cellStyle, width: '10%', backgroundColor: '#F5F5F5' }}>cell 3 1</TableCell>
              <TableCell align="right" style={{ ...cellStyle, width: '40%' }}>
                cell 3 2
              </TableCell>
              <TableCell style={{ ...cellStyle, width: '10%', backgroundColor: '#F5F5F5' }}>cell 3 3</TableCell>
              <TableCell align="right" style={{ ...cellStyle, width: '40%' }}>
                cell 3 4
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      {/* table 3 */}
      <Typography variant="h5" sx={{ m: 1 }}>
        title 3
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell style={{ ...cellStyle, width: '10%', backgroundColor: '#F5F5F5' }}>cell 1 1</TableCell>
              <TableCell colSpan={3} style={{ ...cellStyle, width: '90%' }}>
                <div style={{ display: 'flex', gap: 3, maxWidth: 'fit-content' }}>
                  <SelectComponent></SelectComponent>
                  <InputComponent></InputComponent>
                  <InputComponent></InputComponent>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ ...cellStyle, width: '10%', backgroundColor: '#F5F5F5' }}>cell 2 1</TableCell>
              <TableCell style={{ ...cellStyle, width: '40%' }}>
                <InputComponent></InputComponent>
              </TableCell>
              <TableCell style={{ ...cellStyle, width: '10%', backgroundColor: '#F5F5F5' }}>cell 2 3</TableCell>
              <TableCell style={{ ...cellStyle, width: '40%' }}>
                <SelectComponent></SelectComponent>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      {/* table 4 */}
      <Typography variant="h5" sx={{ m: 1 }}>
        title 4
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell style={{ ...cellStyle, width: '10%', backgroundColor: '#F5F5F5' }}>cell 1 1</TableCell>
              <TableCell style={{ ...cellStyle, width: '40%' }}>cell 1 2</TableCell>
              <TableCell style={{ ...cellStyle, width: '10%', backgroundColor: '#F5F5F5' }}>cell 1 3</TableCell>
              <TableCell style={{ ...cellStyle, width: '40%' }}>cell 1 4</TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ ...cellStyle, width: '10%', backgroundColor: '#F5F5F5' }}>cell 2 1</TableCell>
              <TableCell style={{ ...cellStyle, width: '40%' }}>cell 2 2</TableCell>
              <TableCell style={{ ...cellStyle, width: '10%', backgroundColor: '#F5F5F5' }}>cell 2 3</TableCell>
              <TableCell style={{ ...cellStyle, width: '40%' }}>cell 2 4</TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ ...cellStyle, width: '10%', backgroundColor: '#F5F5F5' }}>cell 3 1</TableCell>
              <TableCell style={{ ...cellStyle, width: '40%' }}>cell 3 2</TableCell>
              <TableCell style={{ ...cellStyle, width: '10%', backgroundColor: '#F5F5F5' }}>cell 3 3</TableCell>
              <TableCell style={{ ...cellStyle, width: '40%' }}>cell 3 4</TableCell>
            </TableRow>
            <TableRow sx={{ height: '60px' }}>
              <TableCell style={{ ...cellStyle, width: '10%', backgroundColor: '#F5F5F5' }}>cell 4 1</TableCell>
              <TableCell colSpan={3} style={{ ...cellStyle, width: '90%', height: '40px' }}>
                <InputComponent sx={{ width: '100%' }} rows={2}></InputComponent>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Stack spacing={1} direction="row-reverse" sx={{ pt: 2 }}>
        <Button disableElevation size="small" color="secondary" variant="contained" onClick={handleClose}>
          Close
        </Button>
        <Button disableElevation size="small" color="primary" variant="contained" sx={{ color: 'white' }}>
          Save
        </Button>
      </Stack>
    </Box>
  );
};

export default MemberTabOne;
