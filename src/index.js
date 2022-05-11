import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
// material-ui
import {ThemeProvider, createTheme} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
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
    const [tickets] = useState([
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
        <Box sx={{my: 2, p: 2}}>
            <Typography variant='h3'>{'title'}</Typography>
            <BackgroundIcon />
        </Box>
    </Container>;
}

const root = ReactDOM.createRoot(document.getElementById('react-container'));
const theme = createTheme({});
root.render(<ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
</ThemeProvider>);
