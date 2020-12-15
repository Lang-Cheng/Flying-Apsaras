import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    backdrop: {
        backgroundColor: theme.palette.action.active
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
    }
}));

export default useStyles;
