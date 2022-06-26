import React from 'react';
import Header from '../../header';

import Container from 'react-bootstrap/Container';

/**
 * This is the layout of the dashboard.
 * This was created because I couldn't pass props or read them once PrivateRoute was created.
 * So, I made this Component to pass three components with values.
 */

function Dashboard() {
    return (
        <Container>
            <Header value="Dashboard" />
        </Container>
    );
}

export default Dashboard;