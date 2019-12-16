import React from 'react'
import {makeStyles} from '@material-ui/core'
import {NavLink} from 'react-router-dom'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActionArea from '@material-ui/core/CardActionArea'
import Head from './Head'
import Typography from '@material-ui/core/Typography'

function createData(num){
    return{num}
}

const listClassroom1 = [
    createData(106),
    createData(110),
    createData(113),
    createData(123),
    createData(132),
    createData(133),
    createData(134),
    createData(135),
    createData(136),
]

const listClassroom2 = [
    createData(210),
    createData(213),
    createData(216),
    createData(217),
    createData(218),
    createData(219),
    createData(223),
    createData(230),
    createData(233),
    createData(234),
    createData(240),
    createData(241),
    createData('242-6'),
]

const useStyles = makeStyles({
    card: {
        minWidth: 100,
        display: 'inline-block',
        margin: 5,
        textAlign: 'center',
    },
    h1: {
        padding: -20,
        margin: -10,
    },
    h2: {
        marginTop: 10,
    },
    text: {
        marginTop: 10,
        marginLeft: 5,
    },
})

const Classroom = () => {
    const classes = useStyles()
    return(
        <div>
            {Head('Оберіть аудиторію')}   
            <Typography variant='h5' className={classes.text}>1 поверх</Typography>
            {listClassroom1.map(row =>(
            <NavLink to='/timetable/classroom/:id'>
                <Card className={classes.card}>
                    <CardActionArea className={classes.action}>
                    <CardContent>
                        <Typography className={classes.h1} variant='h6'>{row.num}</Typography>
                        <Typography className={classes.h2} variant='body2'>аудиторія</Typography>
                    </CardContent>
                    </CardActionArea>
                </Card>
            </NavLink>
            ))}
            <Typography variant='h5' className={classes.text}>2 поверх</Typography>
            {listClassroom2.map(row =>(
            <Card className={classes.card}>
                <CardActionArea className={classes.action}>
                <CardContent>
                    <Typography className={classes.h1} variant='h6'>{row.num}</Typography>
                    <Typography className={classes.h2} variant='body2'>аудиторія</Typography>
                </CardContent>
                </CardActionArea>
            </Card>
            ))}
            
        </div>
    )
}

export default Classroom