// project import
import pages from './pages';
import dashboard from './dashboard';
import utilities from './utilities';
import support from './support';
import { FontSizeOutlined } from '@ant-design/icons';

// ==============================|| MENU ITEMS ||============================== //

const memberManage = {
  id: 'member-manage',
  title: 'Member Manage',
  type: 'group',
  icon: FontSizeOutlined,
  children: [
    {
      id: 'member-list',
      title: 'Member List',
      type: 'item',
      // url: '/member-list'
      url: '/typography'
    },
    {
      id: 'accessor-list',
      title: 'Accessors List',
      type: 'item',
      // url: '/accessor-list'
      url: '/color'
    },
    {
      id: 'member-note',
      title: "Member's Note",
      type: 'item',
      url: '/member-note'
    }
  ]
};
const gameManage = {
  id: 'game-manage',
  title: 'Game Manage',
  type: 'group',
  icon: FontSizeOutlined,
  children: [
    {
      id: 'mini-games',
      title: 'Mini Games',
      type: 'item',
      url: '/mini-games'
    }
  ]
};
const bettingManage = {
  id: 'betting-manage',
  title: 'Betting Manage',
  type: 'group',
  icon: FontSizeOutlined,
  children: [
    {
      id: 'sports',
      title: 'Sports',
      type: 'item',
      url: '/sports'
    },
    {
      id: 'casino',
      title: 'Casino',
      type: 'item',
      url: '/casino'
    },
    {
      id: 'slot',
      title: 'Slot',
      type: 'item',
      url: '/slot'
    },
    {
      id: 'mini-game',
      title: 'Mini Game',
      type: 'item',
      url: '/mini-game'
    }
  ]
};
const inOutManage = {
  id: 'in-out-manage',
  title: 'In Out Manage',
  type: 'group',
  icon: FontSizeOutlined,
  children: [
    {
      id: 'deposit-list',
      title: 'Deposite List',
      type: 'item',
      url: '/deposit-list'
    },
    {
      id: 'withdrawal-list',
      title: 'Withdrawal List',
      type: 'item',
      url: '/withdrawal-list'
    }
  ]
};
const bulletinManage = {
  id: 'bulletin-boards-manage',
  title: 'Bulletin Boards Manage',
  type: 'group',
  icon: FontSizeOutlined,
  children: [
    {
      id: 'qa-list',
      title: 'QA List',
      type: 'item',
      url: '/qa-list'
    },
    {
      id: 'notice',
      title: 'Notice',
      type: 'item',
      url: '/notice'
    }
  ]
};
const statistics = {
  id: 'statistics',
  title: 'Statistics',
  type: 'group',
  icon: FontSizeOutlined,
  children: [
    {
      id: 'daily-statistics',
      title: 'Daily Statistics',
      type: 'item',
      url: '/daily-statistics'
    },
    {
      id: 'monthly-statistics',
      title: 'Monthly Statistics',
      type: 'item',
      url: '/monthly-statistics'
    }
  ]
};
const partnerManage = {
  id: 'partner-management',
  title: 'Partner Management',
  type: 'group',
  icon: FontSizeOutlined,
  children: [
    {
      id: 'partner-list',
      title: 'Partner List',
      type: 'item',
      url: '/partner-list'
    },
    {
      id: 'partner-registration',
      title: 'Partner Registration',
      type: 'item',
      url: '/partner-registration'
    }
  ]
};
const preferences = {
  id: 'preferences',
  title: 'Preferences',
  type: 'single-item',
  icon: FontSizeOutlined,
  url: '/icons/ant'
};
const administrator = {
  id: 'administrator',
  title: 'Administrator',
  type: 'single-item',
  icon: FontSizeOutlined,
  url: '/shadow'
};

const menuItems = {
  // items: [dashboard, pages, utilities, support]
  items: [memberManage, gameManage, bettingManage, inOutManage, bulletinManage, statistics, partnerManage, preferences, administrator]
};

export default menuItems;
