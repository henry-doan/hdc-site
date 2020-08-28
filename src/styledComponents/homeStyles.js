import styled, { keyframes } from 'styled-components';
import { Label, Grid, Menu, Image, Icon } from 'semantic-ui-react';

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
  padding-right: 90px !important;

  @media (max-width: 1200px) {
    padding-right: 74px !important;
  }

  @media (max-width: 768px) {
    right: 45px !important;
  }
`

export const NavSec = styled(Menu)`
  justify-content: center;
`

export const AboutTxt = styled.p`
  color: white;
  font-size: 24px;
  margin-top: 20px;

  @media (max-width: 768px) {
    padding: 0 50px;
  }
`

export const PgTitle = styled.h1`
  color: white;
  font-size: 35px;
  text-align: center;
  margin-top: 30px !important;
  margin-bottom: 60px !important;
`

const flipper = keyframes`
  from {
    -webkit-transform: rotateY(0deg); 
    -moz-transform: rotateY(0deg); 
    transform: rotateY(0deg) !important;   
  }

  to {
    -webkit-transform: rotateY(360deg); 
    -moz-transform: rotateY(360deg); 
    transform: rotateY(360deg) !important;   
  }
`

export const NoMatchLogo = styled(Image)`
  position: relative !important;
  -moz-animation-name: ${flipper};
  -moz-animation-duration: 2s;
  -moz-animation-delay: 2s;
  -moz-animation-iteration-count: infinite;
  -webkit-animation-name: ${flipper};
  -webkit-animation-duration: 2s;
  -webkit-animation-delay: 2s;
  -webkit-animation-iteration-count: infinite;
  animation-name: ${flipper} !important;
  animation-duration: 2s !important;
  animation-delay: 2s !important;
  animation-iteration-count: infinite !important;
`

export const Ig = styled(Icon)`
  color: transparent;
  background: -webkit-radial-gradient(30% 107%, circle, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
  background: -o-radial-gradient(30% 107%, circle, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
  background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
  background: -webkit-radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
  background-clip: text;
  -webkit-background-clip: text; 
`

export const Yt = styled(Icon)`
  color: #FF0000;
`

export const SocialTitle = styled.h1`
  color: white;
  margin-bottom: 0;
`

export const SocialSubTitle = styled.p`
  color: white;
  margin-bottom: 30px;
`

export const MainBtn = styled.button`
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #DEFCFD;
  background: transparent;
  letter-spacing: 4px;
  text-decoration: none;
  font-size: 18px;
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