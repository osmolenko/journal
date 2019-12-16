import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableBody from '@material-ui/core/TableBody'
import Tooltip from '@material-ui/core/Tooltip'
import Checkbox from '@material-ui/core/Checkbox'
import Fab from '@material-ui/core/Fab'
import SaveIcon from '@material-ui/icons/Save';
import {NavLink} from 'react-router-dom'
import Head from './Head'

const useStyles = makeStyles({
    photo: {
        height: 100,
        width: 'auto',
    },
    fab: {
        position: 'absolute',
        bottom: 50,
        right: 50,
    },
    a: {
        textDecoration: 'none',
        color: 'black',
    },
})

function createData(number, name, bool) {
    return{number,name,bool}
}

const listStudent = [
    createData(1, 'Біда Юлія Олегівна', true),
    createData(2, 'Бойко Марина Євгеніївна', false),
    createData(3, 'Борщик Ігор Валентинович', true),
    createData(4, 'Голландс Яніс Сергійович', true),
    createData(5, 'Гомон Ольга Володимирівна', true),
    createData(6, 'Григоровський Дмитро Олексійович', true),
    createData(7, 'Константинопольский Костянтин Костянтинович', false),
]

const Journal2 = () => {
    const classes = useStyles();
    return(
        <div>
        {Head('Технології створення програмного забезпечення', 'ПР18/1')}
            <Table aria-label='Student table'>
                <TableHead color='primary'>
                    <TableRow>
                        <TableCell><b>№</b></TableCell>
                        <TableCell><b>Призвіще, Ім&#39;я та По-Батькові</b></TableCell>
                        <TableCell align='right'><b>Наявність</b></TableCell>
                        <Tooltip title='Відмітка пропускної системи' placement='left'>
                            <TableCell align='right'><b>Пропускна</b></TableCell>
                        </Tooltip>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {listStudent.map(row => (
                        <TableRow key={row.number}>
                            <TableCell component='th' scope='row' size='small'> {row.number}</TableCell>
                                <Tooltip placement='right-start' title={<img className={classes.photo} src='https://dcmep4q5dgnih.cloudfront.net/wp-content/uploads/2016/08/26203833/main-qimg-93aacc165aa46b012febc3f81f62f07e1.png' alt='Фото студента'/>}>                           
                                    <TableCell size='small'>
                                        <NavLink to="/profile" className={classes.a}>{row.name}</NavLink>
                                    </TableCell>
                                </Tooltip>
                            <TableCell align='right' size='small'>
                                <Checkbox color='primary'/>
                            </TableCell>
                            <TableCell align='right' size='small'>
                                <Checkbox
                                checked={row.bool}
                                disabled
                                />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Tooltip placement='left-center' title='Зберегти'>
                <Fab className={classes.fab} color='secondary'>
                        <SaveIcon/>
                </Fab>
            </Tooltip>

        </div>
    )
}

export default Journal2