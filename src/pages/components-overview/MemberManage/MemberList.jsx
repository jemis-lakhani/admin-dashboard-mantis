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
import { MenuItem, Select, Stack, useMediaQuery } from '@mui/material';
import { Button } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import { useState } from 'react';
import MemberListFilter from 'components/common/MemberListFilter';
import i18n from 'i18n/i18n';
import { useTranslation } from 'react-i18next';

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
const memberStatus = ['membership_not_verified', 'membership_suspension', 'withdrawal', 'change_phone_number'];

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
    label: 'partner'
  },
  {
    id: 'MemberNickName',
    numeric: false,
    isSortable: false,
    label: 'nickname'
  },
  {
    id: 'RemainMoney',
    numeric: true,
    isSortable: true,
    label: 'money'
  },
  {
    id: 'RemainPoint',
    numeric: true,
    isSortable: true,
    label: 'points'
  },
  {
    id: 'TotalChargeMoney',
    numeric: true,
    isSortable: true,
    label: 'charge_amount'
  },
  {
    id: 'TotalExchangeMoney',
    numeric: true,
    isSortable: true,
    label: 'exchange_amount'
  },
  {
    id: 'TotalBetMoney',
    numeric: true,
    isSortable: true,
    label: 'bet_amount'
  },
  {
    id: 'TotalHitMoney',
    numeric: false,
    isSortable: true,
    label: 'winning_amount'
  },
  {
    id: 'LastConnectDate',
    numeric: false,
    isSortable: true,
    label: 'access_date'
  },
  {
    id: 'CreateDate',
    numeric: false,
    isSortable: true,
    label: 'join_date'
  },
  {
    id: 'MemberLevel',
    numeric: false,
    isSortable: false,
    label: 'level'
  },
  {
    id: 'note',
    numeric: false,
    isSortable: false,
    label: 'note'
  },
  {
    id: 'function',
    numeric: false,
    isSortable: false,
    label: 'function'
  }
];

function EnhancedTableHead(props) {
  const { t } = useTranslation();
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
                {t(`member_list.${headCell.label}`)}
                {orderBy === headCell.id && (
                  <Box component="span" sx={visuallyHidden}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </Box>
                )}
              </TableSortLabel>
            ) : (
              <Typography variant="body1" fontWeight={600}>
                {t(`member_list.${headCell.label}`)}
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
  const { t } = useTranslation();
  const theme = useTheme();
  const mediumScreen = useMediaQuery(theme.breakpoints.down('lg'));
  const [order, setOrder] = useState('desc');
  const [orderBy, setOrderBy] = useState('CreateDate');
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);

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
  const textGray = '#666666';
  const secondary600 = theme.palette.secondary[600];
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
            {t(`select_item.${status}`)}
          </MenuItem>
        ))}
      </Select>
    );
  };

  const openWindowPopup = () => {
    const url = '/memberManage/memberDetails';
    const windowName = '_blank';
    const windowFeatures = 'width=1200,height=1200';

    const onLoadCallback = () => {
      console.log({ i18n });
      const i18nInstance = i18n;
      newWindow.i18nInstance = i18nInstance;
    };

    // Open the popup window
    const newWindow = window.open(url, windowName, windowFeatures);
    newWindow.onload = onLoadCallback;
  };

  return (
    <>
      {/* Filter */}
      <MemberListFilter />

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
                      <TableCell onClick={() => openWindowPopup()} align="center" sx={tableCellStyle}>
                        {row.PartnerNickName}
                      </TableCell>
                      <TableCell onClick={() => openWindowPopup()} align="center" sx={tableCellStyle}>
                        {row.MemberNickName}
                      </TableCell>
                      <TableCell onClick={() => openWindowPopup()} align="center" sx={tableCellStyle}>
                        {row.RemainMoney} won
                      </TableCell>
                      <TableCell onClick={() => openWindowPopup()} align="center" sx={tableCellStyle}>
                        {row.RemainPoint}
                      </TableCell>
                      <TableCell onClick={() => openWindowPopup()} align="center" sx={tableCellStyle}>
                        {row.TotalChargeMoney} won
                      </TableCell>
                      <TableCell onClick={() => openWindowPopup()} align="center" sx={tableCellStyle}>
                        {row.TotalExchangeMoney} won
                      </TableCell>
                      <TableCell onClick={() => openWindowPopup()} align="center" sx={tableCellStyle}>
                        {row.TotalBetMoney} won
                      </TableCell>
                      <TableCell onClick={() => openWindowPopup()} align="center" sx={tableCellStyle}>
                        {row.TotalHitMoney} won
                      </TableCell>
                      <TableCell onClick={() => openWindowPopup()} align="center" sx={tableCellStyle}>
                        {row.LastConnectDate}
                      </TableCell>
                      <TableCell onClick={() => openWindowPopup()} align="center" sx={tableCellStyle}>
                        {row.CreateDate}
                      </TableCell>
                      <TableCell onClick={() => openWindowPopup()} align="center" sx={tableCellStyle}>
                        {row.MemberLevel}
                      </TableCell>
                      <TableCell align="center" sx={tableCellStyle}>
                        <MailIcon />
                      </TableCell>
                      <TableCell align="center" sx={tableCellStyle}>
                        <Stack direction="row">
                          <MemberStatusMenu
                            value={row.status || ''}
                            onChange={(selectedValue) => handleStatusChange(row.id, selectedValue)}
                          />
                          <Button variant="contained" size="small" sx={containedBtnStyle}>
                            {t('common.ok')}
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
            labelRowsPerPage={t('common.rows_per_page')}
            sx={{ display: 'flex' }}
          />
        </Paper>
      </Box>
    </>
  );
};
export default MemberList;
