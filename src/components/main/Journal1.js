import React from 'react';
import { makeStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Chip from '@material-ui/core/Chip'
import IconButton from '@material-ui/core/IconButton'
import Loop from '@material-ui/icons/Loop'
import Tooltip from '@material-ui/core/Tooltip'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import {NavLink} from 'react-router-dom'
import Head from './Head'

const useStyles = makeStyles({
    root: `
    display: flex;
    `,
    card: {
        display: 'flex',
        marginTop: 10,
    },
    text: {
        marginRight: 20,
    },
    action: {
        minWidth: 500,
    },
    stats: {
        float: 'right',
        textAlign: 'center',
        marginTop: -40,
        justifyContent: 'center',  
        display: 'flex', 
    },
    icon: {
        float: 'right',
        marginTop: -30,
    },
    change: {
        width: 200,
        display: 'block',
        margin: 5,
    },
    changetypo:{
        margin: 5,
    },
    a: {
        textDecoration: 'none',
    },
});

function createDataCourse(name, timestart, timeend, group, coursecount, studcount){
    return{name, timestart, timeend, group, coursecount, studcount}
}

const listCourse = [
    createDataCourse('Бази даних', '11:40', '13:05', 'КН17', 13, 94),
    createDataCourse('Технології створення програмного забезпечення', '13:25', '14:30', 'ПР18-2', 7, 17),
    createDataCourse('Бази даних', '11:40', '13:05', 'КН17', 13, 94),
    createDataCourse('Технології створення програмного забезпечення', '13:25', '14:30', 'ПР18-2', 7, 17),

]

function createDataDepartment(name){
    return{name}
}

const listDepartment = [
    createDataDepartment('КД'),
    createDataDepartment('КЕПІТ'),
    createDataDepartment('ННІМ'),
    createDataDepartment('ННІМППО'),
    createDataDepartment('ННІПС'),
    createDataDepartment('УМС'),
    createDataDepartment('ФЕП'),
    createDataDepartment('ФМВ'),
    createDataDepartment('ЮР'),
]

const listGroup = [
    createDataDepartment('КН19'),
    createDataDepartment('КН18 Адмін'),
    createDataDepartment('КН18 Дизайн'),
    createDataDepartment('КН17-1 Адмін'),
    createDataDepartment('КН17-2 Дизайн'),
    createDataDepartment('КН17-3 Дизайн'),
    createDataDepartment('КН17-4 Дизайн'),
    createDataDepartment('КН16-1 Дизайн'),
    createDataDepartment('КН16-2 Адмін'),
    createDataDepartment('КН16-3 Дизайн'),
]

const Journal1 = () => {
    
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return(        
        <div className={classes.root}>
            {Head('Електроний журнал')}
            <Typography variant='h5'>
                Четвер, 24 жовтня
            </Typography>
            <Tooltip placement='left' title='Провести заміну'>
                <IconButton onClick={handleClick} color='secondary' size='small' className={classes.icon}>
                    <Loop/>
                </IconButton>
            </Tooltip>

        <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        >
            <Typography variant='body1' className={classes.changetypo}>Кафедра</Typography>
            <Select className={classes.change} value='Оберіть кафедру'>
                {listDepartment.map(row=>(
                    <MenuItem>{row.name}</MenuItem>
                ))}
            </Select>

            <Divider/>
            
            <Typography variant='body1' className={classes.changetypo}>Група</Typography>
            <Select className={classes.change}>
                {listGroup.map(row=>(
                    <MenuItem>{row.name}</MenuItem>
                ))}
            </Select>
            
            <Divider/>

            <Button className={classes.change} color='secondary'>
                Провести заміну
            </Button>
        </Menu>

            {listCourse.map(row =>(
            <NavLink to='/journal/course' className={classes.a}>
                <Card className={classes.card}>
                    <CardActionArea className={classes.action}>
                        <CardContent>
                            <Chip label={row.group} size='small' color='primary'/>                   
                            <Typography variant='h6' component='h2' className={classes.text}>{row.name}</Typography>
                            <Typography variant='button'>{row.timestart} – {row.timeend}</Typography>
                            <div className={classes.stats}>
                                <div >
                                    <Typography color='primary' variant='h5'>{row.studcount}</Typography>
                                    <Typography variant='body2'>студент(-а)</Typography>
                                </div>
                            </div>
                        </CardContent>

                    </CardActionArea>
                </Card>
            </NavLink>
            ))}
    </div>

    )
}


export default Journal1;