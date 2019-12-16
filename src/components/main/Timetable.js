import React from 'react'
import { makeStyles} from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Chip from '@material-ui/core/Chip'
import Divider from '@material-ui/core/Divider'
import Head from './Head'


const useStyles = makeStyles({
    paper: {
        marginTop: 20,
    },
    chip: {
        float: 'right',
    },
    card: {
        width: 330,
        minHeight: 200,
        display: 'inline-block',
        textAlign: 'center',
        margin: 5,
    },
    block: {
        display: 'flex',
    },
    photo: {
        height: 100,
        width: 'auto',
    },
    name: {
        marginTop: 5,
    }
})

function createData(timestart, timeend, name, type, teacher, classnum){
    return{timestart, timeend, name, type, teacher, classnum}
}

const list21 = [
    createData('14:30', '15:50', 'Системний аналіз', 'Практичні/Семінарські', 'Рач В.А.', '106'),
    createData('16:00', '17:20', 'Управління IT-проектами', 'Практичні/Семінарські', 'Борулько Н.О.', '106'),
]

const list22 = [
    createData('13:05', '14:25', 'Управління IT-проектами', 'Лекції', 'Рач В.А.', '231'),
    createData('14:30', '15:50', 'Системний аналіз', 'Лекції', 'Рач В.А.', '231'),
    createData('16:00', '17:20', 'Обладнання комп‘ютерних мереж', 'Лекції', 'Добришин Ю.Є', '231'),
]

const list23 = [
    createData('16:00', '17:20', 'Бази даних', 'Лекції', 'Кадомський К.К.', '231'),
    createData('17:30', '18:50', 'Бази даних', 'Лекції', 'Кадомський К.К.', '231'),
]

const list24 = [
    createData('14:30', '15:50', 'Технології Java', 'Лабораторні', 'Ігнатова Л.Б.', '231'),
    createData('16:00', '17:20', 'Технології Java', 'Лабораторні', 'Кадомський К.К.', '231'),
    createData('17:30', '18:50', 'Технології Java', 'Лабораторні', 'Кадомський К.К.', '231'),
    createData('18:55', '20:05', 'Бази даних', 'Лабораторні', 'Добришин Ю.Є.', '023'),

]

const Timetable = () => {

    const classes = useStyles();

    return(
        <div className={classes.root}>
            {Head('Розклад за групами')}
            <Typography variant='h5'>
            <Chip label='КН17-3' color='secondary' variant='outline' className={classes.chip}/>
            </Typography>

                <div className={classes.paper}>
                    <Typography variant='h6'><b>Понеділок</b>, 21 жовтня</Typography>

                        {list21.map(row=>(
                        <Card className={classes.card}>
                            <CardContent>
                            <Chip color='primary' label={<Typography variant='body1' color='white'>{row.timestart} — {row.timeend}</Typography>}/>
                                    <Typography variant='h6' color='primary' className={classes.name}>{row.name}</Typography>
                                    <Divider/>
                                    <Typography variant='subtitle2'><small><i>{row.type}</i></small></Typography>
                                    <Typography variant='subtitle2'>{row.teacher }</Typography>
                                    <Typography variant='subtitle2'><b>ауд.{row.classnum}</b></Typography>
                            </CardContent>
                        </Card>
                        ))}

                </div>

                <div className={classes.paper}>
                    <Typography variant='h6'><b>Вівторок</b>, 22 жовтня</Typography>

                        {list22.map(row=>(
                        <Card className={classes.card}>
                            <CardContent>
                            <Chip color='primary' label={<Typography variant='body1' color='white'>{row.timestart} — {row.timeend}</Typography>}/>
                                <Typography variant='h6' color='primary' className={classes.name}>{row.name}</Typography>
                                <Divider/>
                                <Typography variant='subtitle2'><small><i>{row.type}</i></small></Typography>
                                <Typography variant='subtitle2'>{row.teacher }</Typography>
                                <Typography variant='subtitle2'><b>ауд.{row.classnum}</b></Typography>
                            </CardContent>
                        </Card>
                        ))}
                
                </div>

                <div className={classes.paper}>
                    <Typography variant='h6'><b>Середа</b>, 23 жовтня</Typography>

                        {list23.map(row=>(
                        <Card className={classes.card}>
                            <CardContent>
                            <Chip color='primary' label={<Typography variant='body1' color='white'>{row.timestart} — {row.timeend}</Typography>}/>
                                <Typography variant='h6' color='primary' className={classes.name}>{row.name}</Typography>
                                <Divider/>
                                <Typography variant='subtitle2'><small><i>{row.type}</i></small></Typography>
                                <Typography variant='subtitle2'>{row.teacher }</Typography>
                                <Typography variant='subtitle2'><b>ауд.{row.classnum}</b></Typography>
                            </CardContent>
                        </Card>
                        ))}

                </div>
                
                <div className={classes.paper}>
                    <Typography variant='h6'><b>Четвер</b>, 24 жовтня</Typography>

                        {list24.map(row=>(
                        <Card className={classes.card}>
                            <CardContent>
                            <Chip color='primary' label={<Typography variant='body1' color='white'>{row.timestart} — {row.timeend}</Typography>}/>
                                <Typography variant='h6' color='primary' className={classes.name}>{row.name}</Typography>
                                <Divider/>
                                <Typography variant='subtitle2'><small><i>{row.type}</i></small></Typography>
                                <Typography variant='subtitle2'>{row.teacher }</Typography>
                                <Typography variant='subtitle2'><b>ауд.{row.classnum}</b></Typography>
                            </CardContent>
                        </Card>
                        ))}

                </div>
        </div>
    )
}

export default Timetable