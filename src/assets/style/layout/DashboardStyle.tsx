import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    toolbar: {
        justifyContent: 'space-between',
        background:
            'linear-gradient(90deg, rgba(9,102,121,1) 0%, rgba(81,103,179,1) 0%, rgba(225,250,255,1) 15%)',
        [theme.breakpoints.down('sm')]: {
            background:
                'linear-gradient(90deg, rgba(217,249,255,1) 0%, rgba(87,85,217,1) 50%, rgba(217,249,255,1) 100%)'
        }
    },
    icon: {
        width: theme.spacing(10),
        height: theme.spacing(6),
        lineHeight: 'initial'
    },
    logo: {
        width: '100%',
        height: '100%'
    },
    tabs: {
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    contact: {
        [theme.breakpoints.down('sm')]: {
            fontSize: 0,
            minWidth: 'auto',
            padding: theme.spacing(1, 0.5, 1, 2)
        }
    },
    sidebarTrigger: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }
    },
    list: {
        overflow: 'hidden',
        width: '170px'
    },
    active: {
        '&:before': {
            content: '" "',
            display: 'block',
            width: 3,
            height: '100%',
            position: 'absolute',
            left: 0,
            top: 0,
            backgroundColor: theme.palette.action.active,
            borderTopRightRadius: 3,
            borderBottomRightRadius: 3
        },
        backgroundColor: `${theme.palette.action.selected}`
    },
    footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            paddingTop: theme.spacing(5),
            paddingBottom: theme.spacing(5)
        }
    }
}));

export default useStyles;
