import React from 'react';
import { videos } from './videosData';
import { HBtn, TopBtn, RtBtn, BottomBtn, LtBtn, Latest, LatestCol } from '../styledComponents/homeStyles';
import { Grid, Container } from 'semantic-ui-react';
import { Fade } from 'react-reveal';

const YouTubeBtn = () => (
  <Container>
    <Grid columns={2} stackable textAlign='center'>
      {
        videos.slice(0).reverse().map( v => {
          if (v.id === videos.length) {
            return (
              <LatestCol key={v.id}>
                <Latest color='blue' tag pointing='right'>
                  Latest
                </Latest>
                <HBtn href={v.link} target='_blank'>
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
              <Grid.Column key={v.id}>
                <Fade bottom>
                  <HBtn href={v.link} target='_blank'>
                    <TopBtn></TopBtn>
                    <RtBtn></RtBtn>
                    <BottomBtn></BottomBtn>
                    <LtBtn></LtBtn>
                    { v.title }
                  </HBtn>
                </Fade>
              </Grid.Column>
            )
          }
        })
      }
    </Grid>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </Container>
)

export default YouTubeBtn;