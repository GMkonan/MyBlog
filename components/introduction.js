import React from 'react';
import styled from 'styled-components';

const Presentation = styled.div`
    margin: 0 auto;
    width: 800px;
    padding-top: 30px;
    padding-bottom: 30px;
`;

const Text = styled.p`
    font-size: 1.5rem;
`;

const Introduction = () => {

    return(
        <Presentation>
        <h1>Hi There.</h1>
        <Text>My name is Guilherme and you are in my Blog. I'm a self-learning software developer 
            that is passionate about
            the tech world in general.
            Here I will be addressing myself with my nickname,
            Konan, and I will be talking about all sorts of tech I'm interested in covering!
            From basic to advanced :) .
        </Text>
        </Presentation>
    )
}

export default Introduction;