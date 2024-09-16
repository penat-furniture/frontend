import styled from "styled-components";

const Div = styled.div`
  width: 596.2px;
  position: relative;
  font-weight: 300;
  display: inline-block;
  flex-shrink: 0;
  max-width: 100%;
`;
const Parent1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0px 55px;
  max-width: 100%;
  @media screen and (max-width: 1200px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 750px) {
    gap: 0px 55px;
  }
`;
const FrameChild = styled.img`
  align-self: stretch;
  height: 0px;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: contain;
  z-index: 4;
`;
const FrameParentRoot = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-10xs);
  box-sizing: border-box;
  gap: 25px 0px;
  max-width: 100%;
  text-align: left;
  font-size: var(--footer-size);
  color: var(--color-black);
  font-family: var(--footer);
`;

const FrameComponent = ({ prop, prop1, vector437 }) => {
  return (
    <FrameParentRoot>
      <Parent1>
        <Div>{prop}</Div>
        <Div>{prop1}</Div>
      </Parent1>
      <FrameChild alt="" src={vector437} />
    </FrameParentRoot>
  );
};

export default FrameComponent;
