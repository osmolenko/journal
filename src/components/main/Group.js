import React from 'react'
import {NavLink} from 'react-router-dom'
import { makeStyles} from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActionArea from '@material-ui/core/CardActionArea'
import Divider from '@material-ui/core/Divider'
import Head from './Head'

const useStyles = makeStyles({
    card: {
        width: 350,
        minHeight: 160,
        display: 'inline-block',
        margin: 5,
    },
    action: {
        width: 370,
        minHeight: 160,
    },
    info: {
        fontSize: '0.8rem',
    },
    maintext: {
        textAlign: 'center',    
    },
    chip: {
        marginTop: -10,
        marginRight: 70,
        marginLeft: 70,
        display: 'flex',
    },
    a: {
        textDecoration: 'none',
        color: 'black',
    },
    box: {
        width: '100%',
    },
})

function createData(short, long, group, director, classroom, phone){
    return{short, long, group, director, classroom, phone}
}

const listGroup = [
    createData('ННІІКТ', 'Інститут інформаційних та комунікаційних технологій', 'КН', 'Рач Валентин Анатолійович', 106, 201),
    createData('КД', 'Кафедра дизайну', 'ДИЗ', 'Лоліна Надія Анатоліївна', '234-4', 215),
    createData('ННІМ', 'Інститут менеджменту безпеки', 'МС', 'Сабліна Людмила Володимирівна', 'відсутній', 'відсутній'),
    createData('ННІМППО', 'Інститут післядипломної підготовки і освіти', 'МЕН', 'Россошанська Ольга Валентинівна', '234-2', '234/265'),
    createData('ННІПС', 'Навчально-науковий інститут психології', 'ПС', 'Сингаївська Ірина Валентинівна', 402, 219),
    createData('УМС', 'Навчально-науковий інститут медицини', 'МС', 'Рач Валентин Анатолійович', 106, 201),
    createData('ФЕП', 'Факультет економіки та підприємництва', 'ЕК | МА | ПТ | ТУР | ФІН', 'Кахута Надія Дмитрівна', '116-1', 116),
    createData('ФМВ', 'Факультет міжнародних відносин', 'КН', 'Рач Валентин Анатолійович', 106, 201),
    createData('ЮФ', 'Юридичний факультет', 'ПР', 'Француз Анатолій Йосипович', '412-1', 156),
]

const Group = () => {
    const classes = useStyles()
    return(
      <div>
        {Head('Оберіть факультет та кафедру')}
        {listGroup.map(row=>(

            <NavLink to='/timetable/group'>
                
                <Card className={classes.card}>
                    <CardActionArea className={classes.action}>
                        <CardContent className={classes.box}>
                                <div className={classes.maintext}>
                                    <Typography variant='h5' color='primary'>{row.short}</Typography>
                                    <Typography className={classes.info}>{row.long}</Typography>
                                </div>
                                <Divider/>
                                <Typography variant='subtitle2'>Директор:<b> {row.director}</b></Typography>
                                <Typography variant='subtitle2'>Кафедра:<b> ауд.{row.classroom}</b></Typography>
                                <Typography variant='subtitle2'>Номер телефону:<b> +38(044)455-57-12</b> вн.{row.phone}</Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                
            </NavLink>

        ))}
      </div>  
    )
}

export default Group