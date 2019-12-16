import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccessTime from '@material-ui/icons/AccessTime';
import TableChart from '@material-ui/icons/TableChart';
import PlaylistAddCheck from '@material-ui/icons/PlaylistAddCheck';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu';
import {Route, NavLink} from 'react-router-dom'
import Logo from './1.png';
import Journal1 from './Journal1'
import Timetable from './Timetable'
import Profile from './Profile'
import Journal2 from './Journal2'
import Group from './Group'
import Classroom from './Classroom'
import Teacher from './Teacher'
import Home from './Home'

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(2),
    marginLeft: -30,
  },
  logo: {
    width: 180,
    height: 45,
    marginLeft: 25,
    marginTop: 6,
  },
  menuButton: {
    height: 40,
    width: 40,
    top: 9,
    zIndex: 1199,
    color: 'white',
  },
list: {
  paddingTop: -10,
  paddingBottom: -10,
},
a: {
  textDecoration: 'none',
  color: 'black',
},
btn: {
  position: 'fixed',
},
}));

function DDrawer(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <NavLink to='/' className={classes.a}>
        <img src={Logo} alt='logo' className={classes.logo}></img>
      </NavLink>
      <List>
          <ListItem>
            <ListItemIcon>
                <AccessTime/>
            </ListItemIcon>
            <ListItemText>
                Розклад
            </ListItemText>
          </ListItem>

      <List>

      <NavLink to='/timetable/group' className={classes.a}>
        <ListItem button classname={classes.list}>
          <ListItemIcon></ListItemIcon>
          <ListItemText><Typography variant='button'><small><b>За факультетом та групою</b></small></Typography></ListItemText>
        </ListItem>
      </NavLink>

      <NavLink to='/timetable/teacher' className={classes.a}>
        <ListItem button classname={classes.list}>
          <ListItemIcon></ListItemIcon>
          <ListItemText><Typography variant='button'><small><b>За викладачем</b></small></Typography></ListItemText>
        </ListItem>
      </NavLink>


        <NavLink to='/timetable/classroom' className={classes.a}>
          <ListItem button classname={classes.list}>
            <ListItemIcon></ListItemIcon>
            <ListItemText><Typography variant='button'><small><b>За аудиторією</b></small></Typography></ListItemText>
          </ListItem>
        </NavLink>

        </List>

        <Divider/>
        <NavLink to='/students' className={classes.a}>
          <ListItem button>
            <ListItemIcon>
                <TableChart/>
            </ListItemIcon>
            <ListItemText>
                Список студентів
            </ListItemText>
          </ListItem>
        </NavLink>

        <NavLink to='/journal' className={classes.a}>
        <ListItem button>
          <ListItemIcon>
              <PlaylistAddCheck/>
          </ListItemIcon>
          <ListItemText>
              Журнал
          </ListItemText>
        </ListItem>
        </NavLink>
        </List>

    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />     
      <IconButton
                      color="inherit"
                      aria-label="open drawer"
                      onClick={handleDrawerToggle}
                      className={classes.menuButton}
                    >
                      <MenuIcon className={classes.btn}/>
            </IconButton>
      <nav className={classes.drawer}>
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
            <Route exact path="/" component={Home}/>
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/journal" component={Journal1} />
            <Route exact path='/journal/course' component={Journal2} />
            <Route exact path="/timetable" component={Timetable} />
            <Route exact path="/timetable/group" component={Group} />
            <Route exact path='/timetable/classroom' component={Classroom} />
            <Route exact path="/timetable/teacher" component={Teacher} />
            <Route exact path="/students" component={Group} />
      </main>
    </div>
  );
}

export default DDrawer;