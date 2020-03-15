import styled from 'styled-components';


export const VideoOutput = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  width: auto;
  height: auto;
`;


export const PointsOutput = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
`;