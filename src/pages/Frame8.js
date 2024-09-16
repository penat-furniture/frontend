import styled from "styled-components";
import Navbar from "../components/Navbar";
import HeaderFrame from "../components/HeaderFrame";
import HeaderFrameMobile from "../components/HeaderFrameMobile";
import FrameComponent1 from "../components/FrameComponent1";
import DataSubjectConsents from "../components/DataSubjectConsents";
import AFooter from "../components/AFooter";
import TCap4 from "../components/TCap4";

const Child = styled.img`
  width: 33.3px;
  height: 16px;
  position: relative;
  border-radius: var(--br-12xs);
  object-fit: contain;
  display: none;
  z-index: 0;
`;
const ContentFrameIcon = styled.img`
  width: 1px;
  height: 3442.8px;
  position: absolute;
  margin: 0 !important;
  top: 2790.9px;
  left: 509px;
  z-index: 1;
  @media screen and (max-width: 450px) {
    display: none;
  }
`;
const ContentFrameIcon1 = styled.img`
  width: 1px;
  height: 3442.8px;
  position: absolute;
  margin: 0 !important;
  top: 2790.9px;
  right: 507px;
  z-index: 1;
  @media screen and (max-width: 450px) {
    display: none;
  }
`;
const ContentFrameIcon2 = styled.img`
  width: 1px;
  height: 1251.3px;
  position: absolute;
  margin: 0 !important;
  bottom: 5478px;
  left: calc(50% - 0px);
  z-index: 3;
  @media screen and (max-width: 450px) {
    display: none;
  }
`;
const H = styled.h1`
  margin: 0;
  position: relative;
  font-size: inherit;
  font-weight: 300;
  font-family: inherit;
  @media screen and (max-width: 1050px) {
    font-size: var(--font-size-10xl);
  }
  @media screen and (max-width: 450px) {
    font-size: 24px;
    line-height: 30px;
  }
`;
const Text1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-4xl) var(--padding-5xs) var(--padding-xl);
  box-sizing: border-box;
  max-width: 100%;
  text-align: center;
  color: var(--main-black);
  font-family: var(--header);
`;
const H1 = styled.h3`
  margin: 0;
  width: 613.5px;
  position: relative;
  font-size: inherit;
  font-weight: 500;
  font-family: inherit;
  display: inline-block;
  flex-shrink: 0;
  max-width: 100%;
  @media screen and (max-width: 450px) {
    font-size: 18px;
  }
`;
const PENAT = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-12xs) 0px var(--padding-8xs);
  box-sizing: border-box;
  max-width: 100%;
  font-size: var(--header-2-size);
  @media screen and (max-width: 750px) {
    max-width: calc(100% - 5px);
  }
  @media screen and (max-width: 450px) {
    max-width: 100%;
    width: 100%;
    padding: 0px 20px 0px 20px;
  }
`;
const Div = styled.div`
  height: 228px;
  width: 403px;
  position: relative;
  font-weight: 300;
  display: inline-block;
  flex-shrink: 0;
  min-width: 403px;
  max-width: 100%;
  @media screen and (max-width: 1050px) {
    flex: 1;
  }
  @media screen and (max-width: 450px) {
    min-width: 100%;
  }
`;
const Li = styled.li`
  margin-bottom: 12px;
`;
const Li1 = styled.li``;
const Ul = styled.ul`
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  padding-left: var(--padding-2xl);
`;
const Div1 = styled.div`
  width: 362.7px;
  position: relative;
  font-weight: 300;
  display: inline-block;
  flex-shrink: 0;
  min-width: 362.7px;
  max-width: 100%;
  @media screen and (max-width: 1050px) {
    flex: 1;
  }
  @media screen and (max-width: 450px) {
    min-width: 100%;
  }
`;
const PartiesBenefitting = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0px 44px;
  max-width: 100%;
  @media screen and (max-width: 1050px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 750px) {
    min-width: 100%;
  }
  @media screen and (max-width: 450px) {
    gap: 0px 44px;
  }
`;
const CookiesContainer = styled.div`
  height: 1323px;
  width: 378.9px;
  position: relative;
  font-weight: 300;
  display: inline-block;
  flex-shrink: 0;
  min-width: 378.9px;
  max-width: 100%;
  @media screen and (max-width: 1050px) {
    flex: 1;
  }
  @media screen and (max-width: 450px) {
    min-width: 100%;
  }
`;
const ConditionsForProcessing = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0px 59px;
  max-width: 100%;
  @media screen and (max-width: 1050px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 750px) {
    gap: 0px 59px;
  }
`;
const FrameWithPersonalData = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-11xs) var(--padding-7xl) 0px;
  box-sizing: border-box;
  max-width: 100%;
  font-size: var(--footer-size);
  @media screen and (max-width: 450px) {
    display: none;
  }
`;
const Text2 = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 32px 0px;
  max-width: 100%;
  text-align: left;
  font-size: var(--header-size);
  color: var(--color-black);
  font-family: var(--footer);
  @media screen and (max-width: 750px) {
    gap: 32px 0px;
  }
`;
const TextWrapper = styled.main`
  width: 1252px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-11xs);
  box-sizing: border-box;
  max-width: 100%;
  flex-shrink: 0;
  @media screen and (max-width: 450px) {
    padding: 0px;
  }
`;
const DivRoot = styled.div`
  width: 100%;
  position: relative;
  background-color: var(--background);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 80px 0px;
  letter-spacing: normal;
  @media screen and (max-width: 750px) {
    gap: 80px 0px;
  }
  @media screen and (max-width: 450px) {
    gap: 35px 0px;
  }
`;

const Frame8 = () => {
  return (
    <DivRoot>
      <Child alt="" src="/vector-425.svg" />

      <TCap4 />
      <TextWrapper>
        <Text2>
          <Text1>
            <H>Обработка персональных данных</H>
          </Text1>
          <PENAT>
            <H1>
              Политика ООО «Интернет Решения» в отношении обработки персональных
              данных. Редакция от 14 октября 2022 г.
            </H1>
          </PENAT>

          <HeaderFrameMobile />
        </Text2>
      </TextWrapper>
      <AFooter />
    </DivRoot>
  );
};

export default Frame8;
