import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HeaderNav = styled.nav`
    display: flex;
    margin-left: auto;
    flex-wrap: wrap;
    gap: 15px;
`

const StyledLink = styled(Link)`
    padding: 15px;
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;
    ${(props) =>
        props.$isFullLink &&
        `color: white; border-radius: 30px; background-color: hsl(248deg 100% 60%)`}
`

function Navbar() {
    return (
        <HeaderNav>
            <StyledLink to="/">Accueil</StyledLink>
            <StyledLink to="/travel-journal" $isFullLink>
                Travel Journal
            </StyledLink>
        </HeaderNav>
    )
}

export default Navbar
