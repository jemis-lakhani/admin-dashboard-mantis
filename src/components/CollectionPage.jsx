import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { useTheme } from '@mui/material/styles';
import { Stack, Grid, Box, Avatar } from '@mui/material';
import SelectComponent from 'components/common/SelectComponent';
import InputComponent from 'components/common/InputComponent';
import { Tabs, TabsList, TabPanel, Tab, tabClasses } from '@mui/base';

import ChipComponent from './common/ChipComponent';
import RadioGroup from './common/RadioGroup';
import CheckBoxGroup from './common/CheckBoxGroup';
import MemberListFilter from './common/MemberListFilter';
import DemoTable from './common/DemoTable';
import { useMediaQuery } from '../../node_modules/@mui/material/index';
import TextEditor from './common/TextEditor';

const items = [
  { value: 1, label: 'One' },
  { value: 2, label: 'Two' },
  { value: 3, label: 'Three' },
  { value: 4, label: 'Four' },
  { value: 5, label: 'Five' }
];

const radioItems = [{ value: 1 }, { value: 2 }];

const CollectionPage = () => {
  const theme = useTheme();
  const mediumScreen = useMediaQuery(theme.breakpoints.down('md'));
  const secondary400 = theme.palette.secondary[400];

  return (
    <>
      <Tabs
        defaultValue={0}
        variant="scrollable"
        style={{ display: 'flex', flexDirection: mediumScreen ? 'column' : 'row', gap: 12, mt: '5rem' }}
      >
        <TabsList
          style={{ display: 'flex', flexDirection: mediumScreen ? 'row' : 'column', gap: '5px', width: mediumScreen ? '100%' : '12%' }}
        >
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
        </TabsList>
        <Box sx={{ width: '100%', mt: '-0.6rem' }}>
          <TabPanel className="CustomTabPanelIntroduction" value={0}>
            <MemberListFilter />
            <DemoTable />
          </TabPanel>
          <TabPanel className="CustomTabPanelIntroduction" value={1}>
            <MemberListFilter />
            <DemoTable />
          </TabPanel>
          <TabPanel className="CustomTabPanelIntroduction" value={2}>
            <MemberListFilter />
            <DemoTable />
          </TabPanel>
          <TabPanel className="CustomTabPanelIntroduction" value={3}>
            <MemberListFilter />
            <DemoTable />
          </TabPanel>
        </Box>
        <Styles />
      </Tabs>

      <Stack direction="row" alignItems="center" flexWrap="wrap" gap={2} sx={{ mt: '3rem' }}>
        <label style={{ fontWeight: 'bold' }}>Chip</label>
        <Stack direction="row" alignItems="center" flexWrap="wrap" gap={2}>
          <ChipComponent variant="primary" value="primary" />
          <ChipComponent variant="info" value="info" />
          <ChipComponent variant="success" value="success" />
          <ChipComponent variant="warning" value="warning" />
          <ChipComponent variant="error" value="error" />
          <ChipComponent variant="secondary" value="secondary" />
        </Stack>
      </Stack>
      <Stack direction="row" alignItems="center" flexWrap="wrap" gap={2} sx={{ my: '1rem' }}>
        <label style={{ fontWeight: 'bold' }}>Chip With Icon</label>
        <Stack direction="row" alignItems="center" flexWrap="wrap" gap={2}>
          <ChipComponent variant="primary" value="primary" icon="send" />
          <ChipComponent variant="info" value="info" icon="send" />
          <ChipComponent variant="success" value="success" icon="send" />
          <ChipComponent variant="warning" value="warning" icon="send" />
          <ChipComponent variant="error" value="error" icon="send" />
          <ChipComponent variant="secondary" value="secondary" icon="send" />
        </Stack>
      </Stack>

      <Stack direction="row" alignItems="center" spacing={2} sx={{ mt: '3rem' }}>
        <Grid container sx={{ ml: 0, mt: 0, width: '70%', alignItems: 'center' }}>
          <Grid item xs={12} md={4}>
            <Stack direction="row">
              <Grid item xs={6} sx={{ p: '0.5rem' }}>
                <SelectComponent items={items} />
              </Grid>
              <Grid item xs={6} sx={{ p: '0.5rem' }}>
                <SelectComponent items={items} />
              </Grid>
            </Stack>
          </Grid>
          <Grid item xs={12} md={4} sx={{ p: '0.5rem' }}>
            <SelectComponent items={items} />
          </Grid>
          <Grid item xs={12} md={4} sx={{ p: '0.5rem' }}>
            <SelectComponent items={items} />
          </Grid>
        </Grid>
      </Stack>

      <Stack direction="column" sx={{ mt: '3rem' }}>
        <Stack direction="row">
          <Table>
            <TableBody>
              <TableRow>
                <TableCell sx={{ width: '150px', backgroundColor: secondary400, p: 1, border: '1px solid #d4d2d2' }}>Input</TableCell>
                <TableCell sx={{ p: 1, border: '1px solid #d4d2d2' }}>
                  <Grid container sx={{ ml: 0, mt: 0, width: '100%', alignItems: 'center', gap: 2 }}>
                    <Grid item xs={12} sm={3} xl={2}>
                      <SelectComponent items={items} />
                    </Grid>
                    <Grid item xs={12} sm={3} xl={2}>
                      <InputComponent value="123-456-789" />
                    </Grid>
                    <Grid item xs={12} sm={3} xl={2}>
                      <InputComponent value="123456" isPassword />
                    </Grid>
                  </Grid>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Stack>
        <Stack direction="row">
          <Table>
            <TableBody>
              <TableRow>
                <TableCell sx={{ width: '150px', backgroundColor: secondary400, p: 1, border: '1px solid #d4d2d2' }}>Check/Radio</TableCell>
                <TableCell sx={{ p: 1, border: '1px solid #d4d2d2' }}>
                  <Grid container sx={{ ml: 2, mt: 0, width: '100%', alignItems: 'center', gap: 2 }}>
                    <CheckBoxGroup items={radioItems} />
                    <RadioGroup items={radioItems} value="1" />
                  </Grid>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Stack>
      </Stack>

      <Box sx={{ height: '350px', p: '1rem', mt: '5rem', border: '1px solid #d4d2d2' }}>
        <TextEditor />
      </Box>
    </>
  );
};

function Styles() {
  return (
    <style>
      {`
        .CustomTabPanelIntroduction{
          display: flex;
          flex-direction: column;
        }

        .CustomTabIntroduction {
          background-color: white;
          border: 1px solid lightgray;
          padding: 6px;
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

export default CollectionPage;
