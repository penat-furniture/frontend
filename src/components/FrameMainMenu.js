import { useCallback } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import TCap4 from "../components/TCap4";

const ProfileIcon = styled.div`
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
const MMenuItems2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;
const FooterFrame = styled.div`
  width: 253px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0px var(--padding-12xs) 0px 0px;
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
  padding: 0px var(--padding-12xs) 0px 0px;
  gap: 0px 8px;
  z-index: 1;
`;
const LogoAndTextFrame = styled.div`
  width: 157px;
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
  gap: 0px 340px;
  max-width: 100%;
  @media screen and (max-width: 1200px) {
    gap: 0px 340px;
  }
  @media screen and (max-width: 750px) {
    gap: 0px 340px;
  }
  @media screen and (max-width: 450px) {
    gap: 0px 0px;
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
    font-size: var(--font-size-3xl);
  }
`;
const TextWarrantyMessage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-11xs) 0px 0px;
  box-sizing: border-box;
  max-width: 100%;
  @media screen and (max-width: 450px) {
    max-width: calc(100% - 2px);
  }
`;
const Div2 = styled.div`
  width: 613.5px;
  position: relative;
  font-size: var(--footer-size);
  font-weight: 300;
  font-family: var(--footer);
  color: var(--color-black);
  text-align: left;
  display: inline-block;
  @media screen and (max-width: 450px) {
    width: 90%;
    font-size: 18px;
    line-height: 22px;
  }
`;
const ReturnInfoFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 40px 0px;
  max-width: 100%;
  @media screen and (max-width: 750px) {
    gap: 40px 0px;
  }
  @media screen and (max-width: 450px) {
    gap: 35px 0px;
  }
  flex: ${(p) => p.h1Flex};
`;
const WarrantyTextFrame = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-12xs) 0px var(--padding-11xs);
  box-sizing: border-box;
  max-width: 100%;
  @media screen and (max-width: 750px) {
    max-width: calc(100% - 2px);
  }
  width: ${(p) => p.textWarrantyMessageWidth};
  @media screen and (max-width: 450px) {
    padding: 0px;
    max-width: 100%;
  }
`;
const FrameMainMenuRoot = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 86px 0px;
  max-width: 100%;
  flex-shrink: 0;
  text-align: center;
  font-size: var(--header-size);
  color: var(--main-black);
  font-family: var(--header);
  @media screen and (max-width: 750px) {
    gap: 86px 0px;
  }
  @media screen and (max-width: 450px) {
    gap: 35px 0px;
  }
`;

const FrameMainMenu = ({
  prop,
  prop1,
  textWarrantyMessageWidth,
  h1Flex,
  propWidth,
  propTextAlign,
  propAlignSelf,
}) => {
  const navigate = useNavigate();

  const onText9Click = useCallback(() => {
    navigate("/our-aim/");
  }, [navigate]);

  const onText10Click = useCallback(() => {
    navigate("/faq/");
  }, [navigate]);

  const onText11Click = useCallback(() => {
    navigate("/contact/");
  }, [navigate]);

  const onPenatTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onText12Click = useCallback(() => {
    navigate("/saved/");
  }, [navigate]);

  return (
    <FrameMainMenuRoot>
      <TCap4 />

      <WarrantyTextFrame textWarrantyMessageWidth={textWarrantyMessageWidth}>
        <ReturnInfoFrame h1Flex={h1Flex}>
          <TextWarrantyMessage>
            <H>{prop}</H>
          </TextWarrantyMessage>
          <Div2
          // propWidth={propWidth}
          // propTextAlign={propTextAlign}
          // propAlignSelf={propAlignSelf}
          >
            {prop1}
          </Div2>
        </ReturnInfoFrame>
      </WarrantyTextFrame>
    </FrameMainMenuRoot>
  );
};

export default FrameMainMenu;
