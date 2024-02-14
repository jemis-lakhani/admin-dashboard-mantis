import React from 'react';
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
import { Stack } from '@mui/material';
import { Button } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import { Avatar, MenuItem, Select } from '@mui/material';
import { useState } from 'react';

import ReactCountryFlag from 'react-country-flag';
import ToggleMenu from './ToggleMenu';
import ToggleSwitch from './ToggleSwitch';

const getBgColor = (level) => {
  let levelColor;
  switch (level) {
    case 1:
      levelColor = '#F6BB42';
      break;
    case 2:
      levelColor = '#8DC152';
      break;
    case 3:
      levelColor = '#48CFAE';
      break;
    case 4:
      levelColor = '#4FC1EA';
      break;
    case 5:
      levelColor = '#4B89DD';
      break;
    case 6:
      levelColor = '#EC87C0';
      break;
    case 7:
      levelColor = '#FC6E51';
      break;
    case 8:
      levelColor = '#DA4453';
      break;
    case 9:
      levelColor = '#967ADC';
      break;
    case 10:
      levelColor = '#424A53';
      break;
    default:
      levelColor = '#424A53';
      break;
  }
  return levelColor;
};

const memberStatus = ['Membership not verified', 'Membership suspension', 'Withdrawal', 'Change phone number'];

const getLevel = () => {
  const level = Math.floor(Math.random() * 10);
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Avatar sx={{ bgcolor: getBgColor(level), height: 18, width: 18, fontSize: '0.75rem' }}>{level}</Avatar>
    </div>
  );
};

const rows = [
  {
    id: 0,
    Level: getLevel(),
    Name: 'John',
    country: 'KR',
    active: true,
    Valid: true,
    status: memberStatus[2]
  },
  {
    id: 1,
    Level: getLevel(),
    Name: 'John',
    country: 'US',
    active: false,
    Valid: true,
    status: memberStatus[2]
  },
  {
    id: 2,
    Level: getLevel(),
    Name: 'John',
    country: 'CN',
    active: true,
    Valid: true,
    status: memberStatus[2]
  }
];

const headCells = [
  {
    id: 'Level',
    numeric: false,
    isSortable: false,
    label: 'Level'
  },
  {
    id: 'Name',
    numeric: false,
    isSortable: false,
    label: 'Name'
  },
  {
    id: 'active',
    numeric: true,
    isSortable: false,
    label: 'active'
  },
  {
    id: 'Valid',
    numeric: true,
    isSortable: false,
    label: 'Valid'
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
            sx={{ color: '#666666', textAlign: 'center', p: '3px' }}
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

const DemoTable = () => {
  const theme = useTheme();
  const textGray = '#666666';
  const secondary600 = theme.palette.secondary[600];
  const [order, setOrder] = useState('desc');
  const [orderBy, setOrderBy] = useState('CreateDate');
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const containedBtnStyle = {
    ml: '0.5rem',
    p: '2px 10px',
    fontSize: '0.75rem',
    minWidth: '50px',
    color: '#FFFFFF',
    backgroundColor: secondary600,
    '&:hover': {
      backgroundColor: secondary600
    }
  };
  const tableCellStyle = {
    color: textGray,
    p: '3px 6px'
  };

  const handleStatusChange = (rowId, value) => {
    console.log({ rowId });
    console.log({ value });
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

  const toggleItems = [
    {
      value: 200,
      label: 200
    },
    {
      value: 400,
      label: 400
    }
  ];
  return (
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
              {rows.map((row, index) => {
                const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;
                return (
                  <TableRow
                    hover
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
                        onClick={(event) => handleClick(event, row.id)}
                      />
                    </TableCell>
                    <TableCell align="center" sx={tableCellStyle}>
                      {row.Level}
                    </TableCell>
                    <TableCell align="center" sx={tableCellStyle}>
                      <ReactCountryFlag
                        countryCode={row.country}
                        style={{ height: '1.5em', width: '1.5em', marginRight: 6, boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)' }}
                        svg
                      />
                      {row.Name}
                    </TableCell>
                    <TableCell align="center" sx={tableCellStyle}>
                      <ToggleSwitch active={row.active} />
                    </TableCell>
                    <TableCell align="center" sx={tableCellStyle}>
                      <ToggleMenu value="200" items={toggleItems} />
                    </TableCell>
                    <TableCell align="center" sx={tableCellStyle}>
                      <MailIcon />
                    </TableCell>
                    <TableCell align="center" sx={{ ...tableCellStyle, width: '20%' }}>
                      <Stack direction="row" justifyContent="center">
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
  );
};

export default DemoTable;
