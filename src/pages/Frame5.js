import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import FAQInfoFrame from "../components/FAQInfoFrame";
import AFooter from "../components/AFooter";
import TCap3 from "../components/TCap3";

const Child = styled.img`
  width: 33.3px;
  height: 16px;
  position: relative;
  border-radius: var(--br-12xs);
  object-fit: contain;
  display: none;
`;
const RectangleShape = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  margin: 0 !important;
  top: 0px;
  bottom: 0px;
  left: -1px;
  background-color: var(--background);
  border-bottom: 1px solid var(--main-black);
  box-sizing: border-box;
`;
const Div = styled.div`
  position: relative;
  white-space: nowrap;
  cursor: pointer;
`;
const MMenuItems = styled.div`
  width: 47px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;
const Div1 = styled.div`
  position: relative;
  cursor: pointer;
`;
const MMenuItems1 = styled.div`
  width: 43px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;
const I = styled.i`
  position: relative;
  font-weight: 600;
`;
const MMenuItems2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;
const FRAMEInfo = styled.div`
  width: 258px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0px var(--padding-10xs) 0px 0px;
  box-sizing: border-box;
  gap: var(--gap-xl);
  @media screen and (max-width: 750px) {
    display: none;
  }
`;
const ALogoSignIcon = styled.img`
  height: 25.9px;
  width: 17.2px;
  position: relative;
  min-height: 26px;
`;
const MMenuItems3 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 0px 8px;
  z-index: 1;
`;
const MMenuItemsWrapper = styled.div`
  width: 161px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const AIconProfile = styled.img`
  height: 20px;
  width: 20px;
  position: relative;
`;
const MMenuItems4 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px var(--padding-10xs) 0px 0px;
  gap: 0px 7px;
  z-index: 1;
  opacity: 0.0001;
`;
const OMenu = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  padding: var(--padding-mid) var(--padding-xl) var(--padding-lg)
    var(--padding-5xl);
  box-sizing: border-box;
  position: relative;
  gap: 0px 335px;
  max-width: 100%;
  @media screen and (max-width: 1200px) {
    gap: 0px 335px;
  }
  @media screen and (max-width: 750px) {
    gap: 0px 335px;
  }
  @media screen and (max-width: 450px) {
    gap: 0px 335px;
  }
`;
const TCap = styled.header`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  text-align: left;
  font-size: var(--footer-size);
  color: var(--main-black);
  font-family: var(--header);
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
  gap: 86px 0px;
  letter-spacing: normal;
  @media screen and (max-width: 750px) {
    gap: 86px 0px;
  }
  @media screen and (max-width: 450px) {
    gap: 35px 0px;
  }
`;

const Frame5 = () => {
  const navigate = useNavigate();

  const onText1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onFAQTextClick = useCallback(() => {
    navigate("/faq/");
  }, [navigate]);

  const onText5Click = useCallback(() => {
    navigate("/personal/");
  }, [navigate]);

  const onText3Click = useCallback(() => {
    navigate("/warranty/");
  }, [navigate]);

  const onText4Click = useCallback(() => {
    navigate("/company-details/");
  }, [navigate]);

  const onText15Click = useCallback(() => {
    navigate("/our-aim/");
  }, [navigate]);

  const onText16Click = useCallback(() => {
    navigate("/faq/");
  }, [navigate]);

  const onPenatTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onText18Click = useCallback(() => {
    navigate("/saved/");
  }, [navigate]);

  return (
    <DivRoot>
      <Child alt="" src="/vector-425.svg" />
      <TCap3 />

      <FAQInfoFrame />
      <AFooter />
    </DivRoot>
  );
};

export default Frame5;
