import React from 'react';
import { makeStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Chip from '@material-ui/core/Chip'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Divider from '@material-ui/core/Divider'
import Head from './Head'

const useStyles = makeStyles(theme => ({
    root: {
        minHeight: 200,
    },
    photo: {
        width: '10em',
        height: '2%',
        margin: 5,
        float: 'left',
    },
    info: {
        display: 'block',
    },
    chip: {
        float: 'right',
        margin: 5,
    },
    a: {
        textDecoration: 'none',
        color: 'black',
    },
    container: {
        justifyContent: 'space-around', 
        display: 'flex',       
    },
    pie: {
        justifyContent: 'center',
        marginLeft: 70,
    },
    comp: {
        minWidth: 340,
        textAlign: 'center',
        margin: 5,
        display: 'block',
    },
    card: {
        margin: 10,
    },
    courses: {
        padding: 50,
        margin: 10,
    },
    subtitle: {
        float: 'right',
        display: 'flex',
        marginTop: -25,
    },
    small: {
        fontSize: '0.6rem',
        display: 'block',
        marginTop: -5,
    },
    num: {
        fontSize: '1.5rem',
    },
  }));
  

  function createData(date,bool,type,classs){
      return{date, bool, type, classs}
  }

  const listDB = [
    createData('21.01.2019', 'primary','Лабораторні', '216'),
    createData('22.01.2019', 'secondary','Лекції', '216'),
    createData('25.01.2019', 'primary','Лабораторні', '216'),
    createData('27.01.2019', 'primary','Лекції', '216'),
    createData('30.01.2019', 'secondary','Лабораторні', '023'),
]

const Profile = () => {
    const classes = useStyles();

    return(
        <div>
            {Head('Особова картка')}
            <Paper className={classes.root}>
                <img className={classes.photo} src='https://farm1.static.flickr.com/43/114938059_22c27d924a_b.jpg' alt='Фото'/>
                <div className={classes.info}>
                    <Chip className={classes.chip} color='primary' label='Студент'/>
                    <Typography variant='h6'><b>Осмоленко Сергій Євгенійович</b></Typography>
                    <Typography variant='subtitle2'>Навчально-науковий інститут інформаційних та комунікаційних технологій </Typography>
                    <Typography variant='body2'><b>Група:</b> КН17/3</Typography>
                    <Typography variant='body2'><b>Номер договору:</b> 29369-д</Typography>
                    <Typography variant='body2'><b>Пошта Office365:</b> <a className={classes.a} href="mailto:osmolenkosy@krok.edu.ua">OsmolenkoSY@krok.edu.ua</a></Typography>
                    <Typography variant='body2'><b>Код перепустки:</b> 2874173046</Typography>
                    <Typography variant='body2'><b>Дата народження:</b> 31.01.2000</Typography>
                    <Typography variant='body2'><b>Офіційний номер телефону:</b> +380661500240</Typography>
                </div>
                </Paper>

                <Grid container className={classes.container}>
                    <Card className={classes.card}>
                    <div className={classes.comp}>
                        <Typography variant='button'><b>Присутній впродовж місяця</b></Typography>
                        <Typography variant='button'><small className={classes.small}>згідно відміток викладачів</small></Typography>
                        <Divider/>
                        <Typography variant='h4' color='primary'>18<small className={classes.num}>/21</small></Typography>
                        <Typography variant='subtitle2'>пар</Typography>
                    </div>
                    </Card>

                    <Card className={classes.card}>
                    <div className={classes.comp}>
                        <Typography variant='button'><b>Присутній впродовж тиждня</b></Typography>
                        <Typography variant='button'><small className={classes.small}>згідно відміток викладачів</small></Typography>
                        <Divider/>
                        <Typography variant='h4' color='primary'>6<small>/8</small></Typography>
                        <Typography variant='subtitle2'>пар</Typography>
                    </div>
                    </Card>

                    <Card className={classes.card}>
                    <div className={classes.comp}>
                        <Typography variant='button'><b>загальна оцінка</b></Typography>
                        <Typography variant='button'><small className={classes.small}>за попередній семестр</small></Typography>
                        <Divider/>
                        <Typography variant='h4' color='primary'>74<small>/100</small></Typography>
                        <Typography variant='subtitle2'>балів</Typography>
                    </div>
                    </Card>     
                </Grid>

            <Paper>
                <div className={classes.courses}>
                    <Typography variant='h5'><b>Бази даних</b></Typography>
                    <Typography variant='subtitle2' className={classes.subtitle}>Відвідав: <Typography variant='subtitle2' color='primary'>&nbsp;<b>87%</b>&nbsp;</Typography> занять</Typography>
                    <Divider/>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Дата</TableCell>
                                <TableCell>Тип</TableCell>
                                <TableCell align='right'>Аудиторія</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {listDB.map(row => (
                            <TableRow>
                                <TableCell><Typography variant='subtitle2' color={row.bool}>{row.date}</Typography></TableCell>
                                <TableCell>{row.type}</TableCell>
                                <TableCell align='right'>{row.classs}</TableCell>
                            </TableRow>
                            ))}
                        </TableBody>
                    </Table>                                
                </div>
            </Paper>

            <Paper>
                <div className={classes.courses}>
                    <Typography variant='h5'><b>Технології створення програмних додатків</b></Typography>
                    <Typography variant='subtitle2' className={classes.subtitle}>Відвідав: <Typography variant='subtitle2' color='primary'>&nbsp;<b>87%</b>&nbsp;</Typography> занять</Typography>
                    <Divider/>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Дата</TableCell>
                                <TableCell>Тип</TableCell>
                                <TableCell align='right'>Аудиторія</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {listDB.map(row => (
                            <TableRow>
                                <TableCell><Typography variant='subtitle2' color={row.bool}>{row.date}</Typography></TableCell>
                                <TableCell>{row.type}</TableCell>
                                <TableCell align='right'>{row.classs}</TableCell>
                            </TableRow>
                            ))}
                        </TableBody>
                    </Table>                                
                </div>
            </Paper>
                
</div> )
}

export default Profile