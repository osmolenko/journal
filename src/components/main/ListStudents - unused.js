import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography'
import Head from './Head'

const useStyles = makeStyles({
    buttons: {
        marginBottom: 5,
        marginTop: 5,
    },
    photo: {
        height: 100,
        width: 'auto',
    },
})

function createData(number, name, longname){
    return{number, name, longname}
}

const listStudent = [
    createData(1, 'Біда Юлія Олегівна'),
    createData(2, 'Бойко Марина Євгеніївна'),
    createData(3, 'Борщик Ігор Валентинович'),
    createData(4, 'Голландс Яніс Сергійович'),
    createData(5, 'Гомон Ольга Володимирівна'),
    createData(6, 'Григоровський Дмитро Олексійович'),
    createData(7, 'Константинопольский Костянтин Костянтинович'),

]


const listDepartment = [
    createData(1,'КД','Кафедра дизайну'),
    createData(2,'КЕПІТ','Коледж економіки, права та інформаційних технологій'),
    createData(3,'ННІМ','Навчально-науковий інститут менеджменту безпеки'),
    createData(4,'ННІМППО','Навчально-науковий інститут магістерської підготовки та післядипломної освіти'),
    createData(5,'ННІПС','Навчально-науковий інститут психології'),
    createData(6,'УМС','Навчально-науковий інститут медицини'),
    createData(7,'ФЕП','Факультет економіки та підприємства'),
    createData(8,'ФМВ','Факультет міжнародних відносин'),
    createData(9,'ЮР','Юридичний факультет'),
]

const listCourses = [
    createData('','КН19'),
    createData('','КН18 Адмін'),
    createData('','КН18 Дизайн'),
    createData('','КН17-1 Адмін'),
    createData('','КН17-2 Дизайн'),
    createData('','КН17-3 Дизайн'),
    createData('','КН17-4 Дизайн'),
    createData('','КН16-1 Дизайн'),
    createData('','КН16-2 Адмін'),
    createData('','КН16-3 Дизайн'),
]

const Fucks = () => {
    const classes = useStyles();
    return(
        <div>
            <Typography variant='h6' component='h6'>Оберіть кафедру</Typography>
            <ButtonGroup fullWidth color='primary' className={classes.buttons}>
                    <Tooltip nowrap title='Навчально-науковий інститут інформаційних та комунікаційних технологій' placement= 'top' interactive><Button variant='contained'>ННІІКТ</Button></Tooltip>
                {listDepartment.map(row =>(
                    <Tooltip title={row.longname} placement='top'>
                        <Button>{row.name}</Button>
                    </Tooltip>
                ))}
            </ButtonGroup>
        </div>
    )
}

const Courses = () => {
    const classes = useStyles();
    return(
        <div>
            <Typography variant='h6' component='h6'>Оберіть групу</Typography>
            <ButtonGroup fullWidth color='primary' className={classes.buttons}>
            {listCourses.map(row => (
                <Button>{row.name}</Button>
            ))}
                <Button variant='contained'>Приклад</Button>
            </ButtonGroup> 
        </div>
    
    )
}

const TTable = () => {
    const classes = useStyles();
    return(
        <Paper>
        <Table aria-label='Student table'>
        <TableHead color='primary'>
            <TableRow>
                <TableCell>№</TableCell>
                <TableCell>П.І.Б.</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {listStudent.map(row => (
                <TableRow key={row.number}>
                    <TableCell component='th' scope='row'> {row.number}</TableCell>
                    <Tooltip placement='left-start' title={<img className={classes.photo} src='https://dcmep4q5dgnih.cloudfront.net/wp-content/uploads/2016/08/26203833/main-qimg-93aacc165aa46b012febc3f81f62f07e1.png'/>}><TableCell>{row.name}</TableCell></Tooltip>
                </TableRow>
            ))}
        </TableBody>
    </Table>
    </Paper>
    )
}



export default function ListStudents() {
    return(
        <div>
            {Head('Список студентів')}
            <Fucks/>
            
        </div>
    );
}