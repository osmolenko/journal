import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography'
import indigo from '@material-ui/core/colors/indigo'

const useStyles = makeStyles(theme => ({
    appBar: {
        marginLeft: drawerWidth,
        [theme.breakpoints.up('sm')]: {
          width: `calc(100% - ${drawerWidth}px)`,
        },
      },
    chip: {
        paddingRight: 20,
        fontWeight: 'bold',
        color: indigo[50],
    },
}))
const drawerWidth = 240;



const Head = (name, info) => {
    const classes = useStyles();
    return(
        <div>
            <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <Typography variant='button' className={classes.chip}> {info} </Typography>

              <Typography variant="h6" noWrap>
                {name}
              </Typography>
              <div>

              </div>
            </Toolbar>
          </AppBar>
        </div>
    )
}

export default Head