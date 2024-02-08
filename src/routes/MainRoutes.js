import { lazy } from 'react';
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

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
      path: '/member-list',
      element: <MemberList />
    },
    {
      path: '/accessor-list',
      element: <AccessorList />
    },
    {
      path: '/member-note',
      element: <MemberNote />
    },
    {
      path: '/mini-games',
      element: <MiniGames />
    },
    {
      path: '/sports',
      element: <Sports />
    },
    {
      path: '/casino',
      element: <Casino />
    },
    {
      path: '/slot',
      element: <Slot />
    },
    {
      path: '/mini-game',
      element: <MiniGame />
    },
    {
      path: '/deposit-list',
      element: <DepositList />
    },
    {
      path: '/withdrawal-list',
      element: <WithdrawalList />
    },
    {
      path: '/qa-list',
      element: <QAList />
    },
    {
      path: '/notice',
      element: <Notice />
    },
    {
      path: '/daily-statistics',
      element: <DailyStatistics />
    },
    {
      path: '/monthly-statistics',
      element: <MonthlyStatistics />
    },
    {
      path: '/partner-list',
      element: <PartnerList />
    },
    {
      path: '/partner-registration',
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
