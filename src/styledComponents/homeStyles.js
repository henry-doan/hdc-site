import styled from 'styled-components';

export const TopBtn = styled.span`
  position: absolute;
  display: block;
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #2196f3);
`

export const BottomBtn = styled.span`
  position: absolute;
  display: block;
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #2196f3);
`

export const RtBtn = styled.span`
  position: absolute;
  display: block;
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #2196f3);
`

export const LtBtn = styled.span`
  position: absolute;
  display: block;
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #2196f3);
`

export const HBtn = styled.a`
  position: relative;
  display: inline-block;
  padding: 15px 30px;
  color: #2196f3;
  text-transform: uppercase;
  letter-spacing: 4px;
  text-decoration: none;
  font-size: 24px;
  overflow: hidden;
  transition: 0.2s;

  &:hover {
    color: #255784;
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