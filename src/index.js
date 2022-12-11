import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
// material-ui
import {ThemeProvider, createTheme} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// icons
import BackgroundIcon from '@mui/icons-material/LocalActivity';




/**
 *  EXPECTED RESULT IS IN FOLDER ABOVE: ../expected_result.png
 *
 *  Requirements: Display 'tickets' below each other
 *  - show 'headline' and 'name' below each other in the center of the left side of the ticket
 *  - behind the text show grey <BackgroundIcon />
 *  - create 100px blue right side with the centered 'ticket.uuid'
 *  - clicking blue right side should remove the ticket
 */
function App() {
    // ! don't modify initial data
    const [tickets, setTickets] = useState([
        {
            uuid: 'awsd1',
            headline: 'Join us',
            name: 'Awesome Developers UG'
        },
        {
            uuid: 'mar3l',
            headline: 'Go to cinema',
            name: null
        }
    ]);



    return <Container maxWidth='sm'>
        {tickets.map((ticket, i) => (
            <Box key={i} sx={{my: 3, border: 3, borderColor: 'primary.main'}}>
                <Grid container direction="row" spacing={0} >
                    <Grid item xs padding={1}>
                        <BackgroundIcon color='disabled'/>
                        <Typography variant='h3' align='center' color='primary.main' textTransform={'uppercase'}>{ (ticket.headline)}</Typography>
                        <Typography variant='h5' align='center' color='primary.main' textTransform={'uppercase'}>{ ticket.name}</Typography>            
                    </Grid>
                    <Button 
                        variant="contained" 
                        disableElevation 
                        onClick={() => {setTickets(tickets.filter((item, i) => item.uuid !== ticket.uuid));}} 
                        sx={{borderRadius: 0, p:0}}
                    >
                        <Grid item width={100}>
                            <Typography textTransform={'lowercase'}>{ticket.uuid}</Typography>
                        </Grid>
                    </Button>
                </Grid>
                { /*<BackgroundIcon color='disabled' style={{left: 0, top: 0, width: 'auto', height: 'auto'}} />*/}


            </Box>
        ))}
    </Container>;
}

const root = ReactDOM.createRoot(document.getElementById('react-container'));
const theme = createTheme({});
root.render(<ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
</ThemeProvider>);
