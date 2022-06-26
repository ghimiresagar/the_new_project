import React from 'react';

import Button from 'react-bootstrap/button';

function BackButton() {

    const goBack = (e) => {
        e.preventDefault();
        window.history.back();
    }

    return (
        <>
            <Button 
                variant="primary"
                onClick={goBack}>
                {"< Back"}
            </Button>
            <br/> <br/>
        </>
    );
}

export default BackButton;