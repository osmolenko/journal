import React from 'react'
import {NavLink} from 'react-router-dom'
import {makeStyles, Typography} from '@material-ui/core/'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import Divider from '@material-ui/core/Divider'
import Head from './Head'

const useStyles = makeStyles({
    card: {
        height: 450,
        width: 160,
        marginBottom: 10,
        marginRight: 10,
        display: 'inline-block',
    },
    action: {
        height: 450,
        width: 160,
    },
    a: {
        textDecoration: 'none',
    },
    header: {
        marginBottom: 10,
    },
    photo: {
        borderRadius: 5,
        marginTop: -5,
    },
    name: {
        lineHeight: 1.3,
    },
})

function createData(photo,name,info,classroom,number,){
    return{photo,name,info,classroom,number,}
}

const listTeacher = [
    createData('./1.png', 'Рач Валентин Анатолійович', 'доктор технічних наук, професор','107','201'),
    createData('https://www.krok.edu.ua/images/persons/dobrishin-yurij-evgenovich_w500.jpg', 'Добришин Юрій Євгенович', 'кандидат технічних наук, доцент','102','268'),
]

const Teacher = () => {
    const classes = useStyles()
    return(
        <div>
            {Head('Оберіть викладача')}
            <Typography variant='h6' className={classes.header}>Навчально-науковий інститут інформаційних та комунікаційних технологій</Typography>
            {listTeacher.map(row=>(
            <NavLink to='/timetable/teacher/:id'  className={classes.a}>
                    <Card className={classes.card} display = {{ md: 'none', lg: 'block'}}>
                        <CardActionArea className={classes.card}>
                            <CardContent>
                                <CardMedia className={classes.photo}
                                src='https://yourmarkontheworld.com/wp-content/uploads/2019/08/960x0-5.jpg'
                                component='img'
                                title='Викладач'
                                />
                                <Typography variant='subtitle1' className={classes.name}><b>{row.name}</b></Typography>
                                <Typography variant='subtitle2'>{row.info}</Typography>
                                <Typography variant='subtitle2'><b>Аудиторія:</b> №{row.classroom}</Typography>
                                <Typography variant='subtitle2'><b>Телефон:</b> +380(44)455-57-12 вн.{row.number}</Typography>
                                <Typography variant='subtitle2'><b>Графік роботи:</b></Typography>
                                <Typography variant='subtitle2'><b>ПН&nbsp;-&nbsp;ПТ:</b> 8:10 - 21:30</Typography>
                                <Typography variant='subtitle2'><b>СБ&nbsp;-&nbsp;НД:</b> вихідний</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card> 
           </NavLink>
            ))}
            <Divider/>

            
        </div>
    )
}

export default Teacher