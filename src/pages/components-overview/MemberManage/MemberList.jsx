import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import { useTheme } from '@mui/material/styles';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { FormControl, MenuItem, Select, Stack, FormLabel } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Button, ButtonGroup, Grid } from '@mui/material';

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

function createData(id) {
  return {
    id,
    partner: generateRandomName(4),
    nickname: generateRandomName(6),
    money: parseFloat((Math.random() * 10000).toFixed(0)),
    points: Math.floor(Math.random() * 100),
    chargeAmount: parseFloat((Math.random() * 100).toFixed(2)),
    exchangeAmount: parseFloat((Math.random() * 100).toFixed(2)),
    betAmount: parseFloat((Math.random() * 100).toFixed(2)),
    winningAmount: parseFloat((Math.random() * 1000).toFixed(2)),
    accessDate: generateRandomDateTime(),
    joinDate: generateRandomDateTime(),
    level: Math.floor(Math.random() * 10) + 1
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
    id: 'partner',
    numeric: false,
    isSortable: false,
    label: 'Partner'
  },
  {
    id: 'nickname',
    numeric: false,
    isSortable: false,
    label: 'ID[nickname]'
  },
  {
    id: 'money',
    numeric: true,
    isSortable: true,
    label: 'Money'
  },
  {
    id: 'points',
    numeric: true,
    isSortable: true,
    label: 'Points'
  },
  {
    id: 'chargeAmount',
    numeric: true,
    isSortable: true,
    label: 'Charge Amount'
  },
  {
    id: 'exchangeAmount',
    numeric: true,
    isSortable: true,
    label: 'Exchange Amount'
  },
  {
    id: 'betAmount',
    numeric: true,
    isSortable: true,
    label: 'Bet Amount'
  },
  {
    id: 'winningAmount',
    numeric: false,
    isSortable: true,
    label: 'Winning Amount'
  },
  {
    id: 'accessDate',
    numeric: false,
    isSortable: true,
    label: 'Access Date'
  },
  {
    id: 'joinDate',
    numeric: false,
    isSortable: true,
    label: 'Join Date'
  },
  {
    id: 'level',
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

function EnhancedTableToolbar(props) {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity)
        })
      }}
    >
      {numSelected > 0 ? (
        <Typography sx={{ flex: '1 1 100%' }} color="inherit" variant="subtitle1" component="div">
          {numSelected} selected
        </Typography>
      ) : (
        <Typography sx={{ flex: '1 1 100%' }} variant="h6" id="tableTitle" component="div">
          Nutrition
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired
};

const MemberList = () => {
  const theme = useTheme();
  const [order, setOrder] = React.useState('desc');
  const [orderBy, setOrderBy] = React.useState('joinDate');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

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
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
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

  const isSelected = (id) => selected.indexOf(id) !== -1;

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(() => {
    return stableSort(rows, getComparator(order, orderBy)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  }, [order, orderBy, page, rowsPerPage]);

  const mediumScreen = theme.breakpoints.down('lg');

  return (
    <>
      <Grid container rowGap="1rem" columnGap="1rem" sx={{ ml: 0, mt: 0, mb: 2, width: '100%', alignItems: 'center' }}>
        <Grid xs={12} sm={5} md={3} lg={3} xl={2}>
          <FormControl sx={{ minWidth: '100%' }}>
            <Select
              value=""
              displayEmpty
              sx={{
                '& .MuiSelect-select': {
                  p: '4px 14px 4px 12px'
                }
              }}
            >
              <MenuItem value="">None</MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid xs={12} sm={5} md={3} lg={3} xl={2}>
          <FormControl sx={{ minWidth: '100%' }}>
            <OutlinedInput
              placeholder="Search"
              sx={{
                '& .MuiInputBase-input': {
                  p: '4px 14px 4px 12px'
                }
              }}
            />
          </FormControl>
        </Grid>
        <Grid xs={12} sm={12} md lg={5} xl={4}>
          <Stack direction="row" alignItems="center">
            <label style={{ color: '#666666', fontWeight: '600', marginRight: '0.5rem' }}>Date</label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker']} sx={{ pt: '0', maxWidth: '150px' }}>
                <DemoItem>
                  <DatePicker
                    sx={{
                      '& .MuiInputBase-input': {
                        p: '4px 14px 4px 12px'
                      }
                    }}
                  />
                </DemoItem>
              </DemoContainer>
            </LocalizationProvider>
            <label style={{ margin: '0 0.5rem' }}>-</label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker']} sx={{ pt: '0', maxWidth: '150px' }}>
                <DemoItem>
                  <DatePicker
                    sx={{
                      '& .MuiInputBase-input': {
                        p: '4px 14px 4px 12px'
                      }
                    }}
                  />
                </DemoItem>
              </DemoContainer>
            </LocalizationProvider>
            <Button variant="contained" size="small" sx={{ ml: '0.5rem', backgroundColor: theme.palette.secondary[600] }}>
              search
            </Button>
          </Stack>
        </Grid>
        <Grid xs={12} sm={12} md lg xl>
          <Stack direction="row" sx={{ columnGap: '0.5rem', mr: 1 }}>
            <Button
              variant="outlined"
              size="small"
              sx={{
                color: theme.palette.secondary.main,
                borderColor: theme.palette.secondary[400],
                '&:hover': {
                  backgroundColor: 'none',
                  borderColor: theme.palette.secondary[400]
                }
              }}
            >
              Generel Membership
            </Button>
            <Button
              variant="outlined"
              size="small"
              sx={{
                color: theme.palette.secondary.main,
                borderColor: theme.palette.secondary[400],
                '&:hover': {
                  backgroundColor: 'none',
                  borderColor: theme.palette.secondary[400]
                }
              }}
            >
              Black
            </Button>
            <Button
              variant="outlined"
              size="small"
              sx={{
                color: theme.palette.secondary.main,
                borderColor: theme.palette.secondary[400],
                '&:hover': {
                  backgroundColor: 'none',
                  borderColor: theme.palette.secondary[400]
                }
              }}
            >
              Stop
            </Button>
            <Button
              variant="outlined"
              size="small"
              sx={{
                color: theme.palette.secondary.main,
                borderColor: theme.palette.secondary[400],
                '&:hover': {
                  backgroundColor: 'none',
                  borderColor: theme.palette.secondary[400]
                }
              }}
            >
              Withdrawl
            </Button>
            <Button
              variant="outlined"
              size="small"
              sx={{
                color: theme.palette.secondary.main,
                borderColor: theme.palette.secondary[400],
                '&:hover': {
                  backgroundColor: 'none',
                  borderColor: theme.palette.secondary[400]
                }
              }}
            >
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
                      onClick={(event) => handleClick(event, row.id)}
                      role="checkbox"
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
                        />
                      </TableCell>
                      <TableCell align="center" sx={{ color: '#666666' }}>
                        {row.partner}
                      </TableCell>
                      <TableCell align="center" sx={{ color: '#666666' }}>
                        {row.nickname}
                      </TableCell>
                      <TableCell align="center" sx={{ color: '#666666' }}>
                        {row.money} won
                      </TableCell>
                      <TableCell align="center" sx={{ color: '#666666' }}>
                        {row.points}
                      </TableCell>
                      <TableCell align="center" sx={{ color: '#666666' }}>
                        {row.chargeAmount} won
                      </TableCell>
                      <TableCell align="center" sx={{ color: '#666666' }}>
                        {row.exchangeAmount} won
                      </TableCell>
                      <TableCell align="center" sx={{ color: '#666666' }}>
                        {row.betAmount} won
                      </TableCell>
                      <TableCell align="center" sx={{ color: '#666666' }}>
                        {row.winningAmount} won
                      </TableCell>
                      <TableCell align="center" sx={{ color: '#666666' }}>
                        {row.accessDate}
                      </TableCell>
                      <TableCell align="center" sx={{ color: '#666666' }}>
                        {row.joinDate}
                      </TableCell>
                      <TableCell align="center" sx={{ color: '#666666' }}>
                        {row.level}
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
            rowsPerPageOptions={[5, 10, 25]}
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
