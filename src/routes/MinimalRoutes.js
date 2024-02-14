import { lazy } from 'react';
import Loadable from 'components/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

const MemberPopup = Loadable(lazy(() => import('pages/components-overview/MemberManage/MemberPopup')));

const MinimalRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      path: '/memberManage/memberDetails',
      element: <MemberPopup />
    }
  ]
};

export default MinimalRoutes;
