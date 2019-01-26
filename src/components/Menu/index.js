import React from 'react';
import { StyledLink, StyledMenu } from './styled';

export default ({ menuItems }) => (
  <StyledMenu>
    {menuItems.map(({ isActive, label, to }) => (
      <StyledLink key={to} isActive={isActive} to={to}>{label}</StyledLink>
    ))}
  </StyledMenu>
);
