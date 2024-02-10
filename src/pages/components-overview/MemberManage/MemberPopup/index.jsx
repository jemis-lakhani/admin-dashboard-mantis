import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Box, Avatar } from '@mui/material';
import Tabs from '@mui/base/Tabs';
import TabsList from '@mui/base/TabsList';
import TabPanel from '@mui/base/TabPanel';
import Tab from '@mui/base/Tab';
import tabClasses from '@mui/base/Tab';
import MemberTabOne from './MemberTabOne';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import CancelIcon from '@mui/icons-material/Cancel';
import IconButton from '@mui/material/IconButton';

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
  padding: '8px'
};
const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '98%',
  height: '90%',
  overflow: 'scroll',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  mt: 4
};

const MemberPopup = ({ handleClose }) => {
  return (
    <Box sx={modalStyle}>
      <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', fontSize: 'larger', mb: 2 }}>
        <AccountCircleOutlinedIcon sx={{ fontSize: 'x-large' }} />
        <span>User Name</span>
        <IconButton aria-label="close" onClick={handleClose} sx={{ ml: 'auto' }}>
          <CancelIcon />
        </IconButton>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell rowspan={2} style={{ ...cellStyle, width: 100, backgroundColor: '#F5F5F5' }}>
                <div style={{ display: 'flex', gap: 10, width: 'fit-content', margin: 'auto' }}>
                  <Avatar sx={{ bgcolor: levelColor, height: 26, width: 26 }}>{level}</Avatar>
                  <span style={{ justifyContent: 'center' }}>Lv.{level}</span>
                </div>
              </TableCell>
              <TableCell align="center" style={{ ...cellStyle, backgroundColor: '#F5F5F5' }}>
                파트너
              </TableCell>
              <TableCell style={cellStyle}>test55[부스당] &gt; esse[라이트] &gt; avav1[에이브이]</TableCell>
              <TableCell align="center" style={{ ...cellStyle, backgroundColor: '#F5F5F5' }}>
                아이디/닉네임
              </TableCell>
              <TableCell style={cellStyle}>forgetabout4[갓마탕]</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center" style={{ ...cellStyle, backgroundColor: '#F5F5F5' }}>
                머 니
              </TableCell>
              <TableCell style={cellStyle}>0원</TableCell>
              <TableCell align="center" style={{ ...cellStyle, backgroundColor: '#F5F5F5' }}>
                포인트
              </TableCell>
              <TableCell style={cellStyle}>0P</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ width: '100%', typography: 'body2' }}>
        <Tabs defaultValue={0} variant="scrollable">
          <TabsList className="CustomTabsListIntroduction">
            <Tab className="CustomTabIntroduction" value={0}>
              Option 1
            </Tab>
            <Tab className="CustomTabIntroduction" value={1}>
              Option 2
            </Tab>
            <Tab className="CustomTabIntroduction" value={2}>
              Option 3
            </Tab>
            <Tab className="CustomTabIntroduction" value={3}>
              Option 4
            </Tab>
            <Tab className="CustomTabIntroduction" value={4}>
              Option 5
            </Tab>
            <Tab className="CustomTabIntroduction" value={5}>
              Option 6
            </Tab>
            <Tab className="CustomTabIntroduction" value={6}>
              Option 7
            </Tab>
            <Tab className="CustomTabIntroduction" value={7}>
              Option 8
            </Tab>
            <Tab className="CustomTabIntroduction" value={8}>
              Option 9
            </Tab>
            <Tab className="CustomTabIntroduction" value={9}>
              Option 10
            </Tab>
            <Tab className="CustomTabIntroduction" value={10}>
              Option 11
            </Tab>
          </TabsList>
          <Box>
            <TabPanel className="CustomTabPanelIntroduction" value={0}>
              <MemberTabOne></MemberTabOne>
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
          padding-bottom: 1rem;
          padding-top: 1rem;
        }

        .CustomTabIntroduction {
          background-color: white;
          border: 1px solid lightgray;
          padding: 7px 15px 7px 15px;
          border-radius: 5px;
          cursor: pointer;
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
