import { useCallback } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Text1 = styled.div`
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
const Vector = styled.div`
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
const Vector1 = styled.div`
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
const TCap = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-width: 100%;
`;
const NavbarRoot = styled.header`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-12xs) var(--padding-7xs) 0px;
  box-sizing: border-box;
  max-width: 100%;
  text-align: left;
  font-size: var(--footer-size);
  color: var(--main-black);
  font-family: var(--header);
`;

const Navbar = () => {
  const navigate = useNavigate();

  const onText58Click = useCallback(() => {
    navigate("/our-aim/");
  }, [navigate]);

  const onText59Click = useCallback(() => {
    navigate("/faq/");
  }, [navigate]);

  const onText60Click = useCallback(() => {
    navigate("/contact/");
  }, [navigate]);

  const onPenatTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onText61Click = useCallback(() => {
    navigate("/saved/");
  }, [navigate]);

  return (
    <NavbarRoot>
      <TCap>
        <OMenu>
          <Text1 />
          <Vector>
            <MMenuItems>
              <Div onClick={onText58Click}>О нас</Div>
            </MMenuItems>
            <MMenuItems1>
              <Div1 onClick={onText59Click}>FAQ</Div1>
            </MMenuItems1>
            <MMenuItems2>
              <Div1 onClick={onText60Click}>Контакты</Div1>
            </MMenuItems2>
          </Vector>
          <Vector1>
            <MMenuItems3>
              <ALogoSignIcon loading="lazy" alt="" src="/a-logo-sign.svg" />
              <Div1 onClick={onPenatTextClick}>Penat</Div1>
            </MMenuItems3>
          </Vector1>
          <MMenuItems4>
            <AIconProfile loading="lazy" alt="" src="/a-icon-profile.svg" />
            <Div>Личный кабинет</Div>
          </MMenuItems4>
        </OMenu>
      </TCap>
    </NavbarRoot>
  );
};

export default Navbar;
