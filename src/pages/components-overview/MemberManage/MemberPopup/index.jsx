import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Box, Avatar } from '@mui/material';
import { Tabs } from '@mui/base/Tabs';
import { TabsList } from '@mui/base/TabsList';
import { TabPanel } from '@mui/base/TabPanel';
import { Tab, tabClasses } from '@mui/base/Tab';
import MemberTabOne from './MemberTabOne';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

const level = 2;
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
const cellStyle = {
  border: '1px solid #ddd',
  padding: '4px'
};
const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '98%',
  height: '98%',
  overflow: 'scroll',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 2
};

const MemberPopup = ({ handleClose }) => {
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

  return (
    <Box sx={modalStyle}>
      <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', fontSize: 'larger', mb: 2 }}>
        <AccountCircleOutlinedIcon sx={{ fontSize: 'x-large' }} />
        <span>User Name</span>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell rowSpan={2} style={{ ...cellStyle, width: '15%', backgroundColor: '#F5F5F5' }}>
                <div style={{ display: 'flex', gap: 10, width: 'fit-content', margin: 'auto' }}>
                  <Avatar sx={{ bgcolor: levelColor, height: 26, width: 26 }}>{level}</Avatar>
                  <span style={{ justifyContent: 'center' }}>Lv.{level}</span>
                </div>
              </TableCell>
              <TableCell align="center" style={{ ...cellStyle, width: '15%', backgroundColor: '#F5F5F5' }}>
                {i18n && i18n.t('member_popup.partner')}
              </TableCell>
              <TableCell style={{ ...cellStyle, width: '25%' }}>test55[부스당]</TableCell>
              <TableCell align="center" style={{ ...cellStyle, width: '15%', backgroundColor: '#F5F5F5' }}>
                {i18n && i18n.t('member_popup.nickname')}
              </TableCell>
              <TableCell style={{ ...cellStyle, width: '25%' }}>forgetabout4[갓마탕]</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center" style={{ ...cellStyle, width: '15%', backgroundColor: '#F5F5F5' }}>
                {i18n && i18n.t('member_popup.money')}
              </TableCell>
              <TableCell style={{ ...cellStyle, width: '25%' }}>0원</TableCell>
              <TableCell align="center" style={{ ...cellStyle, width: '15%', backgroundColor: '#F5F5F5' }}>
                {i18n && i18n.t('member_popup.points')}
              </TableCell>
              <TableCell style={{ ...cellStyle, width: '25%' }}>0P</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ width: '100%', typography: 'body2' }}>
        <Tabs defaultValue={0} variant="scrollable">
          <TabsList className="CustomTabsListIntroduction">
            <Box sx={{ display: 'flex', gap: 1, minWidth: '980px' }}>
              <Tab className="CustomTabIntroduction" value={0}>
                {i18n && i18n.t('member_popup.more_information')}
              </Tab>
              <Tab className="CustomTabIntroduction" value={1}>
                {i18n && i18n.t('member_popup.betting_limit_setting')}
              </Tab>
              <Tab className="CustomTabIntroduction" value={2}>
                {i18n && i18n.t('member_popup.rolling_setting')}
              </Tab>
              <Tab className="CustomTabIntroduction" value={3}>
                {i18n && i18n.t('member_popup.balance_setting')}
              </Tab>
              <Tab className="CustomTabIntroduction" value={4}>
                {i18n && i18n.t('member_popup.betting_details')}
              </Tab>
              <Tab className="CustomTabIntroduction" value={5}>
                {i18n && i18n.t('member_popup.charging_history')}
              </Tab>
              <Tab className="CustomTabIntroduction" value={6}>
                {i18n && i18n.t('member_popup.currency_exchange_details')}
              </Tab>
              <Tab className="CustomTabIntroduction" value={7}>
                {i18n && i18n.t('member_popup.money_details')}
              </Tab>
              <Tab className="CustomTabIntroduction" value={8}>
                {i18n && i18n.t('member_popup.point_details')}
              </Tab>
              <Tab className="CustomTabIntroduction" value={9}>
                {i18n && i18n.t('member_popup.connection_details')}
              </Tab>
              <Tab className="CustomTabIntroduction" value={10}>
                {i18n && i18n.t('member_popup.note')}
              </Tab>
            </Box>
          </TabsList>
          <Box>
            <TabPanel className="CustomTabPanelIntroduction" value={0}>
              <MemberTabOne handleClose={handleClose}></MemberTabOne>
            </TabPanel>
            <TabPanel className="CustomTabPanelIntroduction" value={1}>
              Content 2
            </TabPanel>
            <TabPanel className="CustomTabPanelIntroduction" value={2}>
              Content 3
            </TabPanel>
            <TabPanel className="CustomTabPanelIntroduction" value={3}>
              Content 4
            </TabPanel>
            <TabPanel className="CustomTabPanelIntroduction" value={4}>
              Content 5
            </TabPanel>
            <TabPanel className="CustomTabPanelIntroduction" value={5}>
              Content 6
            </TabPanel>
            <TabPanel className="CustomTabPanelIntroduction" value={6}>
              Content 7
            </TabPanel>
            <TabPanel className="CustomTabPanelIntroduction" value={7}>
              Content 8
            </TabPanel>
            <TabPanel className="CustomTabPanelIntroduction" value={8}>
              Content 9
            </TabPanel>
            <TabPanel className="CustomTabPanelIntroduction" value={9}>
              Content 10
            </TabPanel>
            <TabPanel className="CustomTabPanelIntroduction" value={10}>
              Content 11
            </TabPanel>
          </Box>
        </Tabs>
        <Styles />
      </Box>
    </Box>
  );
};

function Styles() {
  return (
    <style>
      {`
        .CustomTabsListIntroduction {
          display: flex;
          gap: 5px;
          padding-bottom: 0.5rem;
          padding-top: 1rem;
          overflow-x: auto;
        }

        .CustomTabIntroduction {
          background-color: white;
          border: 1px solid lightgray;
          padding: 6px;
          border-radius: 5px;
          cursor: pointer;
          min-width: 4rem;
        }

        .CustomTabIntroduction.${tabClasses.selected} {
          background-color: #444444;
          color: white;
          border: none;
        }
      `}
    </style>
  );
}

export default MemberPopup;
