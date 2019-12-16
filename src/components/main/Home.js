import React from 'react'
import {makeStyles} from '@material-ui/core/'
import Head from './Head'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Link from '@material-ui/core/Link'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CallMadeIcon from '@material-ui/icons/CallMade';


const useStyles = makeStyles({
    t1: {
        marginLeft: 35,
        marginTop: -33,
        marginBottom: -10,
    },
    t2: {
        position: 'absolute',
        bottom: 10,
        right: 10,
    },
    arrow: {
        transform: 'rotate(-55deg)',
    },
    text2: {
        marginLeft: 40,
        marginTop: -30,
    },

})

const Home = () => {
    const classes = useStyles()
    return(
        <div className={classes.bg}>
            {Head('Головна')}
            <Box>
                <Card>
                    <CardContent>
                        <Typography variant='h6'><b>Куди я потрапив?</b></Typography>
                        <Typography variant='subtitle1'>
                            Привіт, студенте! Цей сайт - твій новий особистий кабінет. Через сервіс ти зможеш переглянути:
                        </Typography>
                        <ul>
                            <li><Typography variant='subtitle1'>Свій розклад у зручному, зрозумілому форматі. </Typography></li>
                            <li><Typography variant='subtitle1'>Список своїх одногрупників разом з їхніми фото.</Typography></li>
                            <li><Typography variant='subtitle1'>Власну статистику відвідуваності пар.</Typography></li>
                        </ul>
                        <Box display={{xs: 'none', sm: 'inline',}}>
                        <ArrowBackIcon/>
                        <Typography variant='subtitle1' className={classes.t1}>
                            Для переходу до функцій сервісу KROKJournal скористайтесь кнопками у лівій стороні сторінки.
                        </Typography>
                        </Box>
                        <Box display={{xs: 'inline', sm: 'none',}}>
                        <CallMadeIcon className={classes.arrow}/>
                            <Typography variant='subtitle1' className={classes.text2}>Для переходу до функцій сервісу KROKJournal скористайтесь меню у верхній частині сторінки</Typography>
                        </Box>
        
                    </CardContent>
                </Card>
                
            </Box>
            <Card className={classes.t2}>
                    <CardContent>
                        <Typography variant='subtitle2'>
                            У разі виниклення проблем звертайтесь у <Link href='https://t.me/spalyly' target='_blank'>Telegram</Link>.
                        </Typography>
                    </CardContent>
                </Card>
        </div>
    )
}

export default Home