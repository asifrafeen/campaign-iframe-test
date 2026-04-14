export interface MenuItem {
  id: string;
  name: string;
  path: string;
  isIntegrated?: boolean;
  icon?:
    | 'LayoutDashboard'
    | 'Users'
    | 'FileUser'
    | 'ChevronRight'
    | 'User'
    | 'Server'
    | 'Store'
    | 'CircleHelp'
    | 'Inbox'
    | 'FileClock'
    | 'Presentation'
    | 'History'
    | 'Calendar'
    | 'SearchX'
    | 'TriangleAlert'
    | 'ChartNoAxesCombined'
    | 'Folder'
    | 'ReceiptText'
    | 'MessageSquareText';
    | 'ExternalLink';
  children?: MenuItem[];
  externalAction?: string;

  roles?: string | string[];
  permissions?: string | string[];
  requireAllRoles?: boolean;
  requireAllPermissions?: boolean;
  requireBoth?: boolean;
}

export interface SidebarMenuItemProps {
  item: MenuItem;
  showText: boolean;
  isActive: boolean;
  onClick?: () => void;
  onExternalAction?: (key: string) => void;
}
