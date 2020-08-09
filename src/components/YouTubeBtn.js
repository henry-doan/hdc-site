import React from 'react';
import { videos} from './videosData';
import { HBtn, TopBtn, RtBtn, BottomBtn, LtBtn } from '../styledComponents/homeStyles';

const YouTubeBtn = () => (
  <>
    {
      videos.map( v => 
        <HBtn href={v.link} target='_blank' key={v.id}>
          <TopBtn></TopBtn>
          <RtBtn></RtBtn>
          <BottomBtn></BottomBtn>
          <LtBtn></LtBtn>
          { v.title }
        </HBtn>
      )

    }
  </>
)

export default YouTubeBtn;