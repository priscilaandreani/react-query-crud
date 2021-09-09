import React from 'react'

import { Flex, Box, Link as StyledLink, Image } from 'rebass/styled-components';
import { Link } from 'react-router-dom';
import { Container } from './Container';


export const NavBar = () => {
  return (
    <div>
      <Flex bg="black" color="white" justifyContent="center">
        <Container>
        <Flex px={2} width="100%" alignItems="center">
          <Image size={20} src="https://miro.medium.com/max/800/1*Yt_kxgaoVwFX_lO3lwZPlg.png"/>
          <Link component={StyledLink} variant="nav" to="/">
            React Query CRUD
          </Link>
          <Box mx="auto"/>
          <Link component={StyledLink} variant="nav" to="/create-book">
            + Add new book 
          </Link>
        </Flex>
        </Container>
      </Flex>
    </div>
  )
}


