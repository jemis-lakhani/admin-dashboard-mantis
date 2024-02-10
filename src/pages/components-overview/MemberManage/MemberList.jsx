import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import { visuallyHidden } from '@mui/utils';
import { useTheme } from '@mui/material/styles';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { FormControl, MenuItem, Select, Stack, useMediaQuery } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Button, Grid } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import { useState } from 'react';
import Modal from '@mui/material/Modal';
import MemberPopup from './MemberPopup/index';

function generateRandomName(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let randomName = '';
  for (let i = 0; i < length; i++) {
    randomName += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return randomName;
}

function generateRandomDateTime() {
  const year = 2023;
  const month = Math.floor(Math.random() * 12) + 1;
  const day = Math.floor(Math.random() * 28) + 1;
  const hour = Math.floor(Math.random() * 24);
  const minute = Math.floor(Math.random() * 60);
  const second = Math.floor(Math.random() * 60);
  return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')} ${hour.toString().padStart(2, '0')}:${minute
    .toString()
    .padStart(2, '0')}:${second.toString().padStart(2, '0')}`;
}
const memberStatus = ['Membership not verified', 'Membership suspension', 'Withdrawal', 'Change phone number'];

function createData(id) {
  return {
    id,
    PartnerNickName: generateRandomName(4),
    MemberNickName: generateRandomName(6),
    RemainMoney: parseFloat((Math.random() * 10000).toFixed(0)),
    RemainPoint: Math.floor(Math.random() * 100),
    TotalChargeMoney: parseFloat((Math.random() * 100).toFixed(2)),
    TotalExchangeMoney: parseFloat((Math.random() * 100).toFixed(2)),
    TotalBetMoney: parseFloat((Math.random() * 100).toFixed(2)),
    TotalHitMoney: parseFloat((Math.random() * 1000).toFixed(2)),
    LastConnectDate: generateRandomDateTime(),
    CreateDate: generateRandomDateTime(),
    MemberLevel: Math.floor(Math.random() * 10) + 1,
    status: memberStatus[2]
  };
}

const rows = [];
for (let i = 1; i <= 100; i++) {
  const data = createData(i);
  rows.push(data);
}

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc' ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'PartnerNickName',
    numeric: false,
    isSortable: false,
    label: 'Partner'
  },
  {
    id: 'MemberNickName',
    numeric: false,
    isSortable: false,
    label: 'ID[NickName]'
  },
  {
    id: 'RemainMoney',
    numeric: true,
    isSortable: true,
    label: 'Money'
  },
  {
    id: 'RemainPoint',
    numeric: true,
    isSortable: true,
    label: 'Points'
  },
  {
    id: 'TotalChargeMoney',
    numeric: true,
    isSortable: true,
    label: 'Charge Amount'
  },
  {
    id: 'TotalExchangeMoney',
    numeric: true,
    isSortable: true,
    label: 'Exchange Amount'
  },
  {
    id: 'TotalBetMoney',
    numeric: true,
    isSortable: true,
    label: 'Bet Amount'
  },
  {
    id: 'TotalHitMoney',
    numeric: false,
    isSortable: true,
    label: 'Winning Amount'
  },
  {
    id: 'LastConnectDate',
    numeric: false,
    isSortable: true,
    label: 'Access Date'
  },
  {
    id: 'CreateDate',
    numeric: false,
    isSortable: true,
    label: 'Join Date'
  },
  {
    id: 'MemberLevel',
    numeric: false,
    isSortable: false,
    label: 'Level'
  },
  {
    id: 'note',
    numeric: false,
    isSortable: false,
    label: 'Note'
  },
  {
    id: 'function',
    numeric: false,
    isSortable: false,
    label: 'Function'
  }
];

function EnhancedTableHead(props) {
  const theme = useTheme();
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow sx={{ backgroundColor: theme.palette.secondary[200] }}>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts'
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{ color: '#666666', textAlign: 'center', pt: '0.5rem !important', pb: '0.5rem !important' }}
          >
            {headCell.isSortable ? (
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id && (
                  <Box component="span" sx={visuallyHidden}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </Box>
                )}
              </TableSortLabel>
            ) : (
              <Typography variant="body1" fontWeight={600}>
                {headCell.label}
              </Typography>
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired
};

const MemberList = () => {
  const theme = useTheme();
  const mediumScreen = useMediaQuery(theme.breakpoints.down('lg'));
  const [order, setOrder] = useState('desc');
  const [orderBy, setOrderBy] = useState('CreateDate');
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const [open, setMemberPopupOpen] = useState(false);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected?.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected?.slice(1));
    } else if (selectedIndex === selected?.length - 1) {
      newSelected = newSelected.concat(selected?.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected?.slice(0, selectedIndex), selected?.slice(selectedIndex + 1));
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (id) => selected?.indexOf(id) !== -1;

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(() => {
    return stableSort(rows, getComparator(order, orderBy)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  }, [order, orderBy, page, rowsPerPage]);

  // Common styles
  const secondaryMain = theme.palette.secondary.main;
  const secondary400 = theme.palette.secondary[400];
  const statusButtonStyle = {
    color: secondaryMain,
    borderColor: secondary400,
    '&:hover': {
      borderColor: secondary400
    }
  };
  const containedBtnStyle = {
    ml: '0.5rem',
    p: '2px 10px',
    fontSize: '0.75rem',
    minWidth: '50px',
    color: '#FFFFFF',
    backgroundColor: theme.palette.secondary[600],
    '&:hover': {
      backgroundColor: theme.palette.secondary[600]
    }
  };
  const inputOrSelectStyle = {
    p: '4px 14px 4px 12px'
  };

  const MemberStatusMenu = ({ value, onChange }) => {
    const [selectedStatus, setSelectedStatus] = useState(value);
    const updateStatus = (status) => {
      setSelectedStatus(status);
      onChange(status);
    };
    return (
      <Select
        value={selectedStatus}
        onChange={(e) => updateStatus(e.target.value)}
        displayEmpty
        sx={{
          width: '115px',
          minWidth: '115px',
          maxWidth: '115px',
          '& .MuiSelect-select': {
            p: '4px 14px 4px 12px'
          }
        }}
      >
        {memberStatus?.map((status) => (
          <MenuItem key={status} value={status}>
            {status}
          </MenuItem>
        ))}
      </Select>
    );
  };

  const handleStatusChange = (rowId, value) => {
    console.log({ rowId });
    console.log({ value });
  };

  return (
    <>
      <Modal
        open={open}
        onClose={() => setMemberPopupOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <MemberPopup handleClose={() => setMemberPopupOpen(false)}></MemberPopup>
      </Modal>
      <Grid container sx={{ ml: 0, mt: 0, mb: 2, width: '100%', alignItems: 'center' }}>
        <Grid item xs={12} md={6} lg={3} xl={3}>
          <Stack direction="row">
            <Grid item xs={6} sx={{ p: '0.5rem' }}>
              <FormControl sx={{ minWidth: '100%' }}>
                <Select
                  value="10"
                  displayEmpty
                  sx={{
                    '& .MuiSelect-select': inputOrSelectStyle
                  }}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6} sx={{ p: '0.5rem' }}>
              <FormControl sx={{ minWidth: '100%' }}>
                <OutlinedInput
                  placeholder="Search"
                  sx={{
                    '& .MuiInputBase-input': inputOrSelectStyle
                  }}
                />
              </FormControl>
            </Grid>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={12} md lg={4} xl={4} sx={{ p: '0.5rem' }}>
          <Stack direction="row" alignItems="center">
            <label style={{ color: '#666666', fontWeight: '600', marginRight: '0.5rem' }}>Date</label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker']} sx={{ pt: '0', maxWidth: '100%', overflow: 'hidden' }}>
                <DemoItem>
                  <DatePicker
                    sx={{
                      '& .MuiInputBase-input': inputOrSelectStyle
                    }}
                  />
                </DemoItem>
              </DemoContainer>
            </LocalizationProvider>
            <label style={{ margin: '0 0.5rem' }}>-</label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker']} sx={{ pt: '0', maxWidth: '100%', overflow: 'hidden' }}>
                <DemoItem>
                  <DatePicker
                    sx={{
                      '& .MuiInputBase-input': inputOrSelectStyle
                    }}
                  />
                </DemoItem>
              </DemoContainer>
            </LocalizationProvider>
            <Button variant="contained" size="small" sx={containedBtnStyle}>
              search
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={12} md lg={5} xl={5} sx={{ p: '0.5rem' }}>
          <Stack direction="row" sx={{ columnGap: '0.5rem', mr: 1, justifyContent: mediumScreen ? 'start' : 'end' }}>
            <Button variant="outlined" size="small" sx={statusButtonStyle}>
              Generel Membership
            </Button>
            <Button variant="outlined" size="small" sx={statusButtonStyle}>
              Black
            </Button>
            <Button variant="outlined" size="small" sx={statusButtonStyle}>
              Stop
            </Button>
            <Button variant="outlined" size="small" sx={statusButtonStyle}>
              Withdrawl
            </Button>
            <Button variant="outlined" size="small" sx={statusButtonStyle}>
              Email
            </Button>
          </Stack>
        </Grid>
      </Grid>

      <Box sx={{ width: '100%' }}>
        <Paper sx={{ width: '100%', mb: 2 }}>
          <TableContainer>
            <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle" size="small">
              <EnhancedTableHead
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
              />
              <TableBody>
                {visibleRows.map((row, index) => {
                  const isItemSelected = isSelected(row.id);
                  const labelId = `enhanced-table-checkbox-${index}`;
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      onClick={() => setMemberPopupOpen(true)}
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.id}
                      selected={isItemSelected}
                      sx={{ cursor: 'pointer' }}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            'aria-labelledby': labelId
                          }}
                          onClick={(event) => handleClick(event, row.id)}
                        />
                      </TableCell>
                      <TableCell align="center" sx={{ color: '#666666' }}>
                        {row.PartnerNickName}
                      </TableCell>
                      <TableCell align="center" sx={{ color: '#666666' }}>
                        {row.MemberNickName}
                      </TableCell>
                      <TableCell align="center" sx={{ color: '#666666' }}>
                        {row.RemainMoney} won
                      </TableCell>
                      <TableCell align="center" sx={{ color: '#666666' }}>
                        {row.RemainPoint}
                      </TableCell>
                      <TableCell align="center" sx={{ color: '#666666' }}>
                        {row.TotalChargeMoney} won
                      </TableCell>
                      <TableCell align="center" sx={{ color: '#666666' }}>
                        {row.TotalExchangeMoney} won
                      </TableCell>
                      <TableCell align="center" sx={{ color: '#666666' }}>
                        {row.TotalBetMoney} won
                      </TableCell>
                      <TableCell align="center" sx={{ color: '#666666' }}>
                        {row.TotalHitMoney} won
                      </TableCell>
                      <TableCell align="center" sx={{ color: '#666666' }}>
                        {row.LastConnectDate}
                      </TableCell>
                      <TableCell align="center" sx={{ color: '#666666' }}>
                        {row.CreateDate}
                      </TableCell>
                      <TableCell align="center" sx={{ color: '#666666' }}>
                        {row.MemberLevel}
                      </TableCell>
                      <TableCell align="center">
                        <MailIcon />
                      </TableCell>
                      <TableCell align="center">
                        <Stack direction="row">
                          <MemberStatusMenu
                            value={row.status || ''}
                            onChange={(selectedValue) => handleStatusChange(row.id, selectedValue)}
                          />
                          <Button variant="contained" size="small" sx={containedBtnStyle}>
                            OK
                          </Button>
                        </Stack>
                      </TableCell>
                    </TableRow>
                  );
                })}
                {emptyRows > 0 && (
                  <TableRow
                    style={{
                      height: 33 * emptyRows
                    }}
                  >
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 20, 25, 50]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            sx={{ display: 'flex' }}
          />
        </Paper>
      </Box>
    </>
  );
};
export default MemberList;
