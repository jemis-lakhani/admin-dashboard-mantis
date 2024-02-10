import { lazy } from 'react';
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';
import { Navigate } from 'react-router-dom';

const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

const MemberList = Loadable(lazy(() => import('pages/components-overview/MemberManage/MemberList')));
const AccessorList = Loadable(lazy(() => import('pages/components-overview/MemberManage/AccessorList')));
const MemberNote = Loadable(lazy(() => import('pages/components-overview/MemberManage/MemberNote')));
const MiniGames = Loadable(lazy(() => import('pages/components-overview/GameManage/MiniGames')));
const Sports = Loadable(lazy(() => import('pages/components-overview/BettingManage/Sports')));
const Casino = Loadable(lazy(() => import('pages/components-overview/BettingManage/Casino')));
const Slot = Loadable(lazy(() => import('pages/components-overview/BettingManage/Slot')));
const MiniGame = Loadable(lazy(() => import('pages/components-overview/BettingManage/MiniGame')));
const DepositList = Loadable(lazy(() => import('pages/components-overview/InOutManage/DepositList')));
const WithdrawalList = Loadable(lazy(() => import('pages/components-overview/InOutManage/WithdrawalList')));
const QAList = Loadable(lazy(() => import('pages/components-overview/BulletinManage/QAList')));
const Notice = Loadable(lazy(() => import('pages/components-overview/BulletinManage/Notice')));
const DailyStatistics = Loadable(lazy(() => import('pages/components-overview/Statistics/DailyStatistics')));
const MonthlyStatistics = Loadable(lazy(() => import('pages/components-overview/Statistics/MonthlyStatistics')));
const PartnerList = Loadable(lazy(() => import('pages/components-overview/PartnerManage/PartnerList')));
const PartnerRegistration = Loadable(lazy(() => import('pages/components-overview/PartnerManage/PartnerRegistration')));
const Preferences = Loadable(lazy(() => import('pages/components-overview/Preferences')));
const Administrator = Loadable(lazy(() => import('pages/components-overview/Administrator')));

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: '/memberManage',
      element: <Navigate to="/memberManage/memberList" />
    },
    {
      path: '/memberManage/memberList',
      element: <MemberList />
    },
    {
      path: '/memberManage/accessorList',
      element: <AccessorList />
    },
    {
      path: '/memberManage/memberNote',
      element: <MemberNote />
    },
    {
      path: '/gameManage',
      element: <Navigate to="/gameManage/miniGames" />
    },
    {
      path: '/gameManage/miniGames',
      element: <MiniGames />
    },
    {
      path: '/bettingManage',
      element: <Navigate to="/bettingManage/sports" />
    },
    {
      path: '/bettingManage/sports',
      element: <Sports />
    },
    {
      path: '/bettingManage/casino',
      element: <Casino />
    },
    {
      path: '/bettingManage/slot',
      element: <Slot />
    },
    {
      path: '/bettingManage/miniGame',
      element: <MiniGame />
    },
    {
      path: '/inOutManage',
      element: <Navigate to="/inOutManage/depositList" />
    },
    {
      path: '/inOutManage/depositList',
      element: <DepositList />
    },
    {
      path: '/inOutManage/withdrawalList',
      element: <WithdrawalList />
    },
    {
      path: '/bulletinBoardsManage',
      element: <Navigate to="/bulletinBoardsManage/qaList" />
    },
    {
      path: '/bulletinBoardsManage/qaList',
      element: <QAList />
    },
    {
      path: '/bulletinBoardsManage/notice',
      element: <Notice />
    },
    {
      path: '/statistics',
      element: <Navigate to="/statistics/dailyStatistics" />
    },
    {
      path: '/statistics/dailyStatistics',
      element: <DailyStatistics />
    },
    {
      path: '/statistics/monthlyStatistics',
      element: <MonthlyStatistics />
    },
    {
      path: '/partnerManagement',
      element: <Navigate to="/partnerManagement/partnerList" />
    },
    {
      path: '/partnerManagement/partnerList',
      element: <PartnerList />
    },
    {
      path: '/partnerManagement/partnerRegistration',
      element: <PartnerRegistration />
    },
    {
      path: '/preferences',
      element: <Preferences />
    },
    {
      path: '/administrator',
      element: <Administrator />
    }
  ]
};

export default MainRoutes;
