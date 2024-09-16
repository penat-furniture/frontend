import { useCallback } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Instance3 from "../components/Instance3";
import AFooter from "../components/AFooter";

const Child = styled.img`
  width: 33.3px;
  height: 16px;
  position: relative;
  border-radius: var(--br-12xs);
  object-fit: contain;
  display: none;
`;

const Submenu = styled.div`
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
const ProfilePicture = styled.div`
  width: 254px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
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
const Penat = styled.i`
  height: 24px;
  position: relative;
  display: inline-block;
  font-weight: 600;
`;
const MMenuItems3 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 0px 9px;
  z-index: 1;
  cursor: pointer;
`;
const SecondaryPhotoSearch = styled.div`
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
  padding: 0px var(--padding-12xs) 0px 0px;
  gap: 0px 8px;
  z-index: 1;
  opacity: 0.0001;
  @media screen and (max-width: 450px) {
    display: none;
  }
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
    padding-left: 20px;
    justify-content: space-between;
    flex-direction: row-reverse;
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
  padding: 0px 0px var(--padding-12xs);
  box-sizing: border-box;
  gap: 86px 0px;
  letter-spacing: normal;
  @media screen and (max-width: 750px) {
    gap: 86px 0px;
  }
  @media screen and (max-width: 450px) {
    gap: 35px 0px;
  }
`;

const Frame = () => {
  const navigate = useNavigate();

  const onTextClick = useCallback(() => {
    navigate("/our-aim/");
  }, [navigate]);

  const onText1Click = useCallback(() => {
    navigate("/faq/");
  }, [navigate]);

  const onText2Click = useCallback(() => {
    navigate("/contact/");
  }, [navigate]);

  const onText3Click = useCallback(() => {
    navigate("/saved/");
  }, [navigate]);

  const onText4Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <DivRoot>
      <Child alt="" src="/vector-425.svg" />
      <TCap>
        <OMenu>
          <Submenu />
          <ProfilePicture>
            <MMenuItems>
              <Div onClick={onTextClick}>О нас</Div>
            </MMenuItems>
            <MMenuItems1>
              <Div1 onClick={onText1Click}>FAQ</Div1>
            </MMenuItems1>
            <MMenuItems2>
              <Div1 onClick={onText2Click}>Контакты</Div1>
            </MMenuItems2>
          </ProfilePicture>
          <SecondaryPhotoSearch>
            <MMenuItems3 onClick={onText4Click}>
              <ALogoSignIcon loading="lazy" alt="" src="/a-logo-sign.svg" />
              <Penat>Penat</Penat>
            </MMenuItems3>
          </SecondaryPhotoSearch>
          <MMenuItems4>
            <AIconProfile loading="lazy" alt="" src="/a-icon-profile.svg" />
            <Div>Личный кабинет</Div>
          </MMenuItems4>
        </OMenu>
      </TCap>
      <Instance3 />
      <AFooter />
    </DivRoot>
  );
};

export default Frame;
