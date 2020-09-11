import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
    margin: 20px 50px 0 50px;
`;

const Header = (): JSX.Element => (
    <StyledContainer>
        <img src={require("../tray.png")} alt="Tray logo" height="50px" />
    </StyledContainer>
);

export default Header;