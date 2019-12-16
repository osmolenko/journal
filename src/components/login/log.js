import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Logo from './1.png'
import './login.css'

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(0.5,0,0.5),
  },
  submit: {
    margin: theme.spacing(0.5,0,0.5),
    fontWeight: '500',
  },
  margin:{
    marginTop: theme.spacing(10)
  },
}));


export default function Log() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
      <img src={Logo} alt='logo' className="logo"></img>
        <div className={classes.margin}></div>
        <Typography component="h2" variant="h4" align="center" paragraph>
          Авторизація
        </Typography>
        <Typography component="h2" variant="body2" align="center">
          Для продовження необхідно пройти етап авторизації
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="dense"
            required
            fullWidth
            id="email"
            label="Логін"
            name="login"
            autoComplete="login"
            color="primary"
          />
          <TextField
            variant="outlined"
            margin="dense"
            required
            fullWidth
            name="password"
            label="Пароль"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Запам&#39;ятати мене"
          />
          <Button
            type="submit"
            fullWidth
            variant="outlined"
            color="default"
            className={classes.submit}
          >
            Увійти
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="outlined"
            color="primary"
            className={classes.submit}
          >
            Увійти за допомогою Office 365
          </Button>
          
        </form>
      </div>
    </Container>
  );
}