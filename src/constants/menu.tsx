import CalIcon from '@/icons/cal-icon';
import ChatIcon from '@/icons/chat-icon';
import DashboardIcon from '@/icons/dashboard-icon';
import EmailIcon from '@/icons/email-icon';
import HelpDeskIcon from '@/icons/help-desk-icon';
import IntegrationsIcon from '@/icons/integrations-icon';
import SettingsIcon from '@/icons/settings-icon';
import StarIcon from '@/icons/star-icon';
import TimerIcon from '@/icons/timer-icon';

type SIDE_BAR_MENU_PROPS = {
  label: string;
  icon: ((animate: boolean) => JSX.Element);
  path: string;
};

export const SIDE_BAR_MENU: SIDE_BAR_MENU_PROPS[] = [
  {
    label: 'Dashboard',
    icon: (animate) => <DashboardIcon animate={animate} />,
    path: 'dashboard',
  },
  {
    label: 'Conversations',
    icon: (animate) => <ChatIcon animate={animate} />,
    path: 'conversation',
  },
  {
    label: 'Integrations',
    icon: (animate) => <IntegrationsIcon animate={animate} />,
    path: 'integration',
  },
  {
    label: 'Settings',
    icon: (animate) => <SettingsIcon animate={animate} />,
    path: 'settings',
  },
  {
    label: 'Appointments',
    icon: (animate) => <CalIcon animate={animate} />,
    path: 'appointment',
  },
  {
    label: 'Email Marketing',
    icon: (animate) => <EmailIcon animate={animate} />,
    path: 'email-marketing',
  },
];

type TABS_MENU_PROPS = {
  label: string;
  icon?: JSX.Element | ((animate: boolean) => JSX.Element);
};

export const TABS_MENU: TABS_MENU_PROPS[] = [
  {
    label: 'unread',
    icon: (animate) => <EmailIcon animate={animate} />,
  },
  {
    label: 'all',
    icon: (animate) => <EmailIcon animate={animate} />,
  },
  {
    label: 'expired',
    icon: <TimerIcon />,
  },
  {
    label: 'starred',
    icon: <StarIcon />,
  },
];

export const HELP_DESK_TABS_MENU: TABS_MENU_PROPS[] = [
  {
    label: 'help desk',
  },
  {
    label: 'questions',
  },
];

export const APPOINTMENT_TABLE_HEADER = [
  'Name',
  'RequestedTime',
  'Added Time',
  'Domain',
];

export const EMAIL_MARKETING_HEADER = ['Id', 'Email', 'Answers', 'Domain'];

export const BOT_TABS_MENU: TABS_MENU_PROPS[] = [
  {
    label: 'Conversations',
    icon: (animate) => <ChatIcon animate={animate} />,
  },
  {
    label: 'helpdesk',
    icon: <HelpDeskIcon />,
  },
];
