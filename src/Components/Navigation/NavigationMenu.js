import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import ListAltIcon from '@mui/icons-material/ListAlt';
import GroupIcon from '@mui/icons-material/Group';
import VerifiedIcon from '@mui/icons-material/Verified';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PendingIcon from '@mui/icons-material/Pending';

export const navigation=[
    {
        title:'Home',
        icon:<HomeIcon/>,
        path:'/home'
    },
    {
        title:'Explore',
        icon:<ExploreIcon/>,
        path:'/explore'
    },
    {
        title:'Notifications',
        icon:<NotificationsIcon/>,
        path:'/notifications'
    },
    {
        title:'Messages',
        icon:<ChatIcon/>,
        path:'/messages'
    },
    {
        title:'Lists',
        icon:<ListAltIcon/>,
        path:'/lists'
    },
    {
        title:'Communities',
        icon:<GroupIcon/>,
        path:'/communities'
    },
    {
        title:'Verified',
        icon:<VerifiedIcon/>,
        path:'/verified'
    },
    {
        title:'Profile',
        icon:<AccountCircleIcon/>,
        path:'/profile'
    },
    {
        title:'More',
        icon:<PendingIcon/>,
        path:'/more'
    }
]