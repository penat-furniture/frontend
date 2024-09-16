import { useCallback } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Frame = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  margin: 0 !important;
  top: 0px;
  right: 0.3px;
  bottom: 0px;
  left: -0.3px;
  background-color: var(--background);
  border-bottom: 1px solid var(--main-black);
  box-sizing: border-box;
`;
const I = styled.i`
  position: relative;
  font-weight: 600;
  white-space: nowrap;
`;
const MMenuItems = styled.div`
  width: 47px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;
const Div = styled.div`
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
  @media screen and (max-width: 450px) {
    display: none;
  }
`;
const MMenuItems2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  z-index: 1;
  @media screen and (max-width: 450px) {
    display: none;
  }
`;
const MenuInstance = styled.div`
  width: 253px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0px var(--padding-12xs) 0px 0px;
  box-sizing: border-box;
  gap: var(--gap-xl);
  @media screen and (max-width: 750px) {
  }
  @media screen and (max-width: 450px) {
    justify-content: end;
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
const FooterFrame = styled.div`
  width: 156px;
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
const Div1 = styled.div`
  position: relative;
  white-space: nowrap;
  cursor: pointer;
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
  @media screen and (max-width: 450px) {
    display: none;
  }
`;
const OMenu = styled.header`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  padding: var(--padding-mid) var(--padding-xl) var(--padding-lg)
    var(--padding-6xl);
  box-sizing: border-box;
  position: relative;
  gap: 0px 340px;
  max-width: 100%;
  text-align: left;
  font-size: var(--footer-size);
  color: var(--main-black);
  font-family: var(--header);
  @media screen and (max-width: 1200px) {
    gap: 0px 340px;
  }
  @media screen and (max-width: 750px) {
    gap: 0px 340px;
  }
  @media screen and (max-width: 450px) {
    gap: 0px 0px;
    padding-left: 20px;
    flex-direction: row-reverse;
  }
`;
const TCapRoot = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0px 0px 0px var(--padding-12xs);
  box-sizing: border-box;
  top: 0;
  z-index: 99;
  position: sticky;
  max-width: 100%;
  @media screen and (max-width: 450px) {
    padding: 0px;
  }
`;

const TCap2 = () => {
  const navigate = useNavigate();

  const onText11Click = useCallback(() => {
    navigate("/faq/");
  }, [navigate]);

  const onText14Click = useCallback(() => {
    navigate("/our-aim/");
  }, [navigate]);

  const onText12Click = useCallback(() => {
    navigate("/contact/");
  }, [navigate]);

  const onPenatTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onText13Click = useCallback(() => {
    navigate("/saved/");
  }, [navigate]);

  return (
    <TCapRoot>
      <OMenu>
        <Frame />
        <MenuInstance>
          <MMenuItems>
            <Div onClick={onText14Click}>О нас</Div>
          </MMenuItems>
          <MMenuItems1>
            <I onClick={onText11Click}>FAQ</I>
          </MMenuItems1>
          <MMenuItems2>
            <Div onClick={onText12Click}>Контакты</Div>
          </MMenuItems2>
        </MenuInstance>
        <FooterFrame>
          <MMenuItems3>
            <ALogoSignIcon loading="lazy" alt="" src="/a-logo-sign.svg" />
            <Div onClick={onPenatTextClick}>Penat</Div>
          </MMenuItems3>
        </FooterFrame>
        <MMenuItems4>
          <AIconProfile loading="lazy" alt="" src="/a-icon-profile.svg" />
          <Div1>Личный кабинет</Div1>
        </MMenuItems4>
      </OMenu>
    </TCapRoot>
  );
};

export default TCap2;
