import React, { useEffect } from 'react';
import { Button, Container, Flex, Heading } from 'theme-ui';
import netlifyIdentity from 'netlify-identity-widget'

export default props => {
    useEffect( () => {
        netlifyIdentity.init({});
    });
    return(
    <Container>
        <Flex sx={{ flexDirection: "column", padding: 3}}>
            <Heading as="h1">AOA My World</Heading> 
            <Button sx={{marginTop: 2, color: 'black'}}
                onClick={ ()=> { netlifyIdentity.open()}}
            >
                Click to Login
            </Button>
        </Flex>
    </Container>    
    )};