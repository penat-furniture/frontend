import styled from "styled-components";
import FrameMainMenu from "../components/FrameMainMenu";
import AFooter from "../components/AFooter";

const Child = styled.img`
  width: 33.3px;
  height: 16px;
  position: relative;
  border-radius: var(--br-12xs);
  object-fit: contain;
  display: none;
`;
const DivRoot = styled.div`
  width: 100%;
  position: relative;
  background-color: var(--background);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 340px 0px;
  letter-spacing: normal;
  @media screen and (max-width: 750px) {
    gap: 640px 0px;
  }
  @media screen and (max-width: 450px) {
    gap: 440px 0px;
  }
`;

const Frame7 = () => {
  return (
    <DivRoot>
      <Child alt="" src="/vector-425.svg" />
      <FrameMainMenu
        prop="Реквизиты компании"
        prop1="Реквизиты компании предоставляются по запросу на почту penat.partners@gmail.com в течение семи рабочих дней с момента получения письма."
        textWarrantyMessageWidth="617px"
        h1Flex="1"
        propWidth="unset"
        propTextAlign="center"
        propAlignSelf="stretch"
      />
      <AFooter />
    </DivRoot>
  );
};

export default Frame7;
