import React from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

// eslint-disable-next-line no-undef
const Link = ({ isActive, ...props }) => (
  <RouterLink {...props} />
);

export const StyledLink = styled(Link)`
  display: inline-block;
  padding: 10px 5px;
  background-color: ${props => props.isActive ? '#ddd' : '#fff'};

  :hover {
    background-color: #ddd;
  }
`;

export const StyledMenu = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;
