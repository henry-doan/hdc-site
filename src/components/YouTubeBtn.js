import React from 'react';
import { videos } from './videosData';
import { HBtn, TopBtn, RtBtn, BottomBtn, LtBtn, Latest, LatestCol } from '../styledComponents/homeStyles';
import { Grid, Container, Header, Label } from 'semantic-ui-react';

const YouTubeBtn = () => (
  <Container>
    <Header>Videos</Header>
    <Grid columns={2} stackable textAlign='center'>
      {
        videos.reverse().map( v => {
          if (v.id === videos.length) {
            return (
              <LatestCol>
                <Latest color='blue' tag pointing='right'>
                  Latest
                </Latest>
                <HBtn href={v.link} target='_blank' key={v.id}>
                  <TopBtn></TopBtn>
                  <RtBtn></RtBtn>
                  <BottomBtn></BottomBtn>
                  <LtBtn></LtBtn>
                  { v.title }
                </HBtn>
              </LatestCol>
            )
          } else {
            return (
              <Grid.Column>
                <HBtn href={v.link} target='_blank' key={v.id}>
                  <TopBtn></TopBtn>
                  <RtBtn></RtBtn>
                  <BottomBtn></BottomBtn>
                  <LtBtn></LtBtn>
                  { v.title }
                </HBtn>
              </Grid.Column>
            )
          }
        })
      }
    </Grid>
  </Container>
)

export default YouTubeBtn;