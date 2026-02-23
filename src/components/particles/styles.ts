import styled from "styled-components";

export const ParticleContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  overflow: hidden;
  pointer-events: none; /* Let clicks pass through if needed, but we handle mousemove manually */


  @media screen and (min-width: 768px) {
    width: 100%;
    left: 200px;
  }

  canvas {
    display: block;
    width: 100% !important;
    height: 100% !important;
  }
`;
