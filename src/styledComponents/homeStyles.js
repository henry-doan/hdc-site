import styled from 'styled-components';
import { Label, Grid, Menu } from 'semantic-ui-react';

export const TopBtn = styled.span`
  position: absolute;
  display: block;
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, white);
`

export const BottomBtn = styled.span`
  position: absolute;
  display: block;
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, white);
`

export const RtBtn = styled.span`
  position: absolute;
  display: block;
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, white);
`

export const LtBtn = styled.span`
  position: absolute;
  display: block;
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, white);
`

export const HBtn = styled.a`
  position: relative;
  display: inline-block;
  padding: 15px 30px;
  color: #DEFCFD;
  text-transform: uppercase;
  letter-spacing: 4px;
  text-decoration: none;
  font-size: 24px;
  overflow: hidden;
  transition: 0.2s;
  border: 1px solid white;

  &:hover {
    color: white;
    background: #2196f3;
    box-shadow: 0 0 10px #2196f3, 0 0 40px #2196f3, 0 0 80px #2196f3;
    transition-delay: 1s;
  }

  &:hover ${TopBtn} {
    left: 100%;
    transition: 1s;
  }

  &:hover ${BottomBtn} {
    right: 100%;
    transition: 1s;
    transition-delay: 0.5s;
  }

  &:hover ${RtBtn} {
    top: 100%;
    transition: 1s;
    transition-delay: 0.25s;
  }

  &:hover ${LtBtn} {
    bottom: 100%;
    transition: 1s;
    transition-delay: 0.75s;
  }
`

export const Latest = styled(Label)`
  bottom: 20px;
`

export const LatestCol = styled(Grid.Column)`
  padding-right: 100px !important;

  @media (max-width: 768px) {
    right: 45px !important;
  }
`

export const NavSec = styled(Menu)`
  justify-content: center;
`