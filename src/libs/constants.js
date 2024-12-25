import { Home, Box, ShoppingCart, Users, BarChart2, HelpCircle, FileText, Megaphone, Pentagon, User2, Bell, BadgePlus, LogOut, Pencil, Moon, Gift, Globe, DollarSign, Settings, Truck, CreditCard, Wallet, Store, Star, Tool, List, Smartphone } from 'lucide-react';

export const sidebarItems = [
    { id: 1, title: 'home', path: '/home', icon: <Home /> },
    { id: 2, title: 'products', path: '/products', icon: <Box /> },
    { id: 3, title: 'orders', path: '/orders', icon: <ShoppingCart /> },
    { id: 4, title: 'customers', path: '/customers', icon: <Users /> },
    { id: 5, title: 'reports', path: '/reports', icon: <BarChart2 /> },
    { id: 6, title: 'questions_reviews', path: '/questions-reviews', icon: <HelpCircle /> },
    { id: 7, title: 'pages', path: '/marketing-tools', icon: <FileText /> },
    { id: 8, title: 'marketing_tools', path: '/marketing-tools', icon: <Megaphone /> },
    //submenus
    { id: 9, title: 'sales_channels', type: 'submenu',
        submenu: [ 
            { id: 10, title: 'services', path: '/services', icon: <Pentagon /> },
    ]},
];

export const menuOptions = [
    { id: 1, title: 'profile', path: '/profile', icon: (props) => <User2 {...props}/> },
    { id: 2, title: 'notifications_menu', path: '/settings', icon: (props) => <Bell {...props}/> },
    { id: 3, title: 'platform_updates', path: '/settings', icon: (props) => <BadgePlus {...props}/> },
    { id: 4, title: 'logout', path: '/logout', icon: (props) => <LogOut {...props}/>, className: ' text-red-500' },
];

export const mobileMenuOptions = [
    { id: 1, title: 'profile', path: '/profile', icon: (props) => <User2 {...props}/> },
    { id: 2, title: 'notifications_menu', path: '/settings', icon: (props) => <Bell {...props}/> },
    { id: 3, title: 'platform_updates', path: '/settings', icon: (props) => <BadgePlus {...props}/> },
    { id: 4, title: 'suggestions', path: '/#', icon: (props) => <Pencil {...props}/> },
    { id: 5, title: 'loyalty_points', path: '/#', icon: (props) => <Gift {...props}/> },
    { id: 6, title: 'night_mode', path: '/#', icon: (props) => <Moon {...props}/> },
    { id: 7, title: 'logout', path: '/logout', icon: (props) => <LogOut {...props}/> },
];

export const settingsOptions = [
    {
        id: 1,
        title: 'main_settings',
        settings: [
            { id: 1, title: 'basic_settings', subtitle: 'basic_settings', path: '/basic-settings', icon: (props) => <Settings {...props} /> },
            { id: 2, title: 'shipping_options', subtitle: 'shipping_options', path: '/shipping-options', icon: (props) => <Truck {...props} /> },
            { id: 3, title: 'payment_methods', subtitle: 'payment_methods', path: '/payment-methods', icon: (props) => <CreditCard {...props} /> },
            { id: 4, title: 'wallet_bills', subtitle: 'wallet_bills', path: '/wallet-bills', icon: (props) => <Wallet {...props} /> },
            { id: 5, title: 'store_options', subtitle: 'store_options', path: '/store-options', icon: (props) => <Store {...props} /> },
            { id: 6, title: 'languages', subtitle: 'languages', path: '/languages', icon: (props) => <Globe {...props} /> },
            { id: 7, title: 'currencies', subtitle: 'currencies', path: '/currencies', icon: (props) => <DollarSign {...props} /> },
            { id: 8, title: 'review_settings', subtitle: 'review_settings', path: '/review-settings', icon: (props) => <Star {...props} /> },
            { id: 9, title: 'order_options', subtitle: 'order_options', path: '/order-options', icon: (props) => <ShoppingCart {...props} /> },
            { id: 10, title: 'domain_settings', subtitle: 'domain_settings', path: '/domain-settings', icon: (props) => <Globe {...props} /> },
            { id: 11, title: 'maintenance_mode', subtitle: 'maintenance_mode', path: '/maintenance-mode', icon: (props) => <Settings {...props} /> },
            { id: 12, title: 'shipping_restrictions', subtitle: 'shipping_restrictions', path: '/shipping-restrictions', icon: (props) => <Truck {...props} /> },
            { id: 13, title: 'payment_restrictions', subtitle: 'payment_restrictions', path: '/payment-restrictions', icon: (props) => <CreditCard {...props} /> },
            { id: 14, title: 'notifications', subtitle: 'notifications', path: '/notifications', icon: (props) => <Bell {...props} /> },
            { id: 15, title: 'store_bill_settings', subtitle: 'store_bill_settings', path: '/store-bill-settings', icon: (props) => <FileText {...props} /> },
            { id: 16, title: 'custom_fields', subtitle: 'custom_fields', path: '/custom-fields', icon: (props) => <List {...props} /> },
            { id: 17, title: 'local_app', subtitle: 'local_app', path: '/local-app', icon: (props) => <Smartphone {...props} /> },
        ],
    },
];