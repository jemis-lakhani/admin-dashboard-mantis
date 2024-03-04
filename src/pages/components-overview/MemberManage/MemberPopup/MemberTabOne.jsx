import { useEffect, useState } from 'react';
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
  const [i18n, setI18n] = useState(null);
  useEffect(() => {
    const interval = setInterval(() => {
      if (window.i18nInstance && typeof window.i18nInstance.t === 'function') {
        setI18n(window.i18nInstance);
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

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
      <Typography variant="h5" sx={{ my: 1 }}>
        {i18n && i18n.t('member_popup.subscription_information')}
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell style={{ ...cellStyle, width: '15%', backgroundColor: '#F5F5F5' }}>
                {i18n && i18n.t('member_popup.grade_status')}
              </TableCell>
              <TableCell colSpan={3} style={{ ...cellStyle, width: '85%' }}>
                <div style={{ display: 'flex', gap: 3 }}>
                  <SelectComponent></SelectComponent>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ ...cellStyle, width: '15%', backgroundColor: '#F5F5F5' }}>
                {i18n && i18n.t('member_popup.nickname')}
              </TableCell>
              <TableCell style={{ ...cellStyle, width: '35%' }}>cell 2 2</TableCell>
              <TableCell style={{ ...cellStyle, width: '15%', backgroundColor: '#F5F5F5' }}>
                {i18n && i18n.t('member_popup.contact')}
              </TableCell>
              <TableCell colSpan={1} style={{ ...cellStyle, width: '35%' }}>
                <div style={{ display: 'flex', gap: 3, maxWidth: 'fit-content' }}>
                  <SelectComponent></SelectComponent>
                  <SelectComponent></SelectComponent>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ ...cellStyle, width: '15%', backgroundColor: '#F5F5F5' }}>
                {i18n && i18n.t('member_popup.recommender')}
              </TableCell>
              <TableCell style={{ ...cellStyle, width: '35%' }}>
                <div style={{ display: 'flex', gap: 3, maxWidth: 'fit-content' }}>
                  <SelectComponent></SelectComponent>
                  <InputComponent></InputComponent>
                  <InputComponent></InputComponent>
                </div>
              </TableCell>
              <TableCell style={{ ...cellStyle, width: '15%', backgroundColor: '#F5F5F5' }}>
                {i18n && i18n.t('member_popup.password')}
              </TableCell>
              <TableCell style={{ ...cellStyle, width: '35%' }}>
                <InputComponent></InputComponent>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      {/* table 2 */}
      <Typography variant="h5" sx={{ my: 1 }}>
        {i18n && i18n.t('member_popup.usage_information')}
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell style={{ ...cellStyle, width: '15%', backgroundColor: '#F5F5F5' }}>
                {i18n && i18n.t('member_popup.money_held')}
              </TableCell>
              <TableCell align="right" style={{ ...cellStyle, width: '35%' }}>
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
              <TableCell style={{ ...cellStyle, width: '15%', backgroundColor: '#F5F5F5' }}>
                {i18n && i18n.t('member_popup.points_held')}
              </TableCell>
              <TableCell align="right" style={{ ...cellStyle, width: '35%' }}>
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
              <TableCell style={{ ...cellStyle, width: '15%', backgroundColor: '#F5F5F5' }}>
                {i18n && i18n.t('member_popup.charge_amount')}
              </TableCell>
              <TableCell align="right" style={{ ...cellStyle, width: '35%' }}>
                cell 2 2
              </TableCell>
              <TableCell style={{ ...cellStyle, width: '15%', backgroundColor: '#F5F5F5' }}>
                {i18n && i18n.t('member_popup.exchange_amount')}
              </TableCell>
              <TableCell align="right" style={{ ...cellStyle, width: '35%' }}>
                cell 2 4
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ ...cellStyle, width: '15%', backgroundColor: '#F5F5F5' }}>
                {i18n && i18n.t('member_popup.revenue')}
              </TableCell>
              <TableCell align="right" style={{ ...cellStyle, width: '35%' }}>
                cell 3 2
              </TableCell>
              <TableCell style={{ ...cellStyle, width: '15%', backgroundColor: '#F5F5F5' }}>
                {i18n && i18n.t('member_popup.winning_amount')}
              </TableCell>
              <TableCell align="right" style={{ ...cellStyle, width: '35%' }}>
                cell 3 4
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      {/* table 3 */}
      <Typography variant="h5" sx={{ my: 1 }}>
        {i18n && i18n.t('member_popup.account_information')}
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell style={{ ...cellStyle, width: '15%', backgroundColor: '#F5F5F5' }}>
                {i18n && i18n.t('member_popup.account_information')}
              </TableCell>
              <TableCell colSpan={3} style={{ ...cellStyle, width: '90%' }}>
                <div style={{ display: 'flex', gap: 3, maxWidth: 'fit-content' }}>
                  <SelectComponent></SelectComponent>
                  <InputComponent></InputComponent>
                  <InputComponent></InputComponent>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ ...cellStyle, width: '15%', backgroundColor: '#F5F5F5' }}>
                {i18n && i18n.t('member_popup.currency_exchange_password')}
              </TableCell>
              <TableCell style={{ ...cellStyle, width: '35%' }}>
                <InputComponent></InputComponent>
              </TableCell>
              <TableCell style={{ ...cellStyle, width: '15%', backgroundColor: '#F5F5F5' }}>
                {i18n && i18n.t('member_popup.linked_account')}
              </TableCell>
              <TableCell style={{ ...cellStyle, width: '35%' }}>
                <SelectComponent></SelectComponent>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      {/* table 4 */}
      <Typography variant="h5" sx={{ my: 1 }}>
        {i18n && i18n.t('member_popup.connection_information')}
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell style={{ ...cellStyle, width: '15%', backgroundColor: '#F5F5F5' }}>
                {i18n && i18n.t('member_popup.number_of_connections')}
              </TableCell>
              <TableCell style={{ ...cellStyle, width: '35%' }}>cell 1 2</TableCell>
              <TableCell style={{ ...cellStyle, width: '15%', backgroundColor: '#F5F5F5' }}>
                {i18n && i18n.t('member_popup.withdrawal_date')}
              </TableCell>
              <TableCell style={{ ...cellStyle, width: '35%' }}>cell 1 4</TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ ...cellStyle, width: '15%', backgroundColor: '#F5F5F5' }}>
                {i18n && i18n.t('member_popup.join_date')}
              </TableCell>
              <TableCell style={{ ...cellStyle, width: '35%' }}>cell 2 2</TableCell>
              <TableCell style={{ ...cellStyle, width: '15%', backgroundColor: '#F5F5F5' }}>
                {i18n && i18n.t('member_popup.last_access_date')}
              </TableCell>
              <TableCell style={{ ...cellStyle, width: '35%' }}>cell 2 4</TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ ...cellStyle, width: '15%', backgroundColor: '#F5F5F5' }}>
                {i18n && i18n.t('member_popup.sign_up_ip')}
              </TableCell>
              <TableCell style={{ ...cellStyle, width: '35%' }}>cell 3 2</TableCell>
              <TableCell style={{ ...cellStyle, width: '15%', backgroundColor: '#F5F5F5' }}>
                {i18n && i18n.t('member_popup.last_connected_ip')}
              </TableCell>
              <TableCell style={{ ...cellStyle, width: '35%' }}>cell 3 4</TableCell>
            </TableRow>
            <TableRow sx={{ height: '60px' }}>
              <TableCell style={{ ...cellStyle, width: '15%', backgroundColor: '#F5F5F5' }}>
                {i18n && i18n.t('member_popup.memo')}
              </TableCell>
              <TableCell colSpan={3} style={{ ...cellStyle, width: '90%', height: '40px' }}>
                <InputComponent sx={{ width: '100%' }} rows={2}></InputComponent>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Stack spacing={1} direction="row-reverse" sx={{ pt: 2 }}>
        <Button disableElevation size="small" color="secondary" variant="contained">
          {i18n && i18n.t('common.close')}
        </Button>
        <Button disableElevation size="small" color="primary" variant="contained" sx={{ color: 'white' }}>
          {i18n && i18n.t('common.save')}
        </Button>
      </Stack>
    </Box>
  );
};

export default MemberTabOne;
