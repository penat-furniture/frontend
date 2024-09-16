import { useCallback } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import CompanyDetailsFrame from "./CompanyDetailsFrame";

const CompanyInfoFrame = styled.div`
  width: calc(100% - 1px);
  height: 771.2px;
  position: absolute;
  margin: 0 !important;
  top: -0.3px;
  right: 1px;
  left: 0px;
  background-color: var(--background);
  border-top: 1px solid var(--main-black);
  box-sizing: border-box;
`;
const Div = styled.div`
  position: relative;
  cursor: pointer;
  z-index: 1;
  @media screen and (max-width: 450px) {
    font-size: 20px;
  }
`;
const AboutUs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-7xs) 0px 0px;
  @media screen and (max-width: 450px) {
    padding: 0px;
  }
`;
const SubFooter = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0px var(--padding-10xs) 0px 0px;
  box-sizing: border-box;
  max-width: 100%;
  gap: var(--gap-xl);
  @media screen and (max-width: 750px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 450px) {
    flex-direction: column;
    gap: 32px;
  }
`;
const MainContent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-12xs) var(--padding-5xs) var(--padding-16xl);
  box-sizing: border-box;
  max-width: 100%;
  @media screen and (max-width: 450px) {
    padding: 0px;
  }
`;
const Div1 = styled.div`
  position: relative;
  z-index: 1;
  @media screen and (max-width: 450px) {
    font-size: 20px;
  }
`;
const PrivacyPolicyFrame = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0px var(--padding-11xs) 0px 0px;
  box-sizing: border-box;
  max-width: 100%;
  gap: var(--gap-xl);
  @media screen and (max-width: 750px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 450px) {
    flex-direction: column;
    gap: 32px 0px;
  }
`;
const MimagesFrame = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-10xs) 0px var(--padding-16xl);
  box-sizing: border-box;
  max-width: 100%;
  @media screen and (max-width: 450px) {
    padding: 0px;
  }
`;
const AFooterRoot = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-30xl) var(--padding-76xl) var(--padding-44xl)
    var(--padding-43xl);
  box-sizing: border-box;
  position: relative;
  gap: 87px 0px;
  max-width: 100%;
  text-align: left;
  font-size: var(--footer-size);
  color: var(--main-black);
  font-family: var(--footer);
  @media screen and (max-width: 1050px) {
    padding-top: var(--padding-13xl);
    padding-bottom: var(--padding-22xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 750px) {
    gap: 87px 0px;
    padding-left: var(--padding-12xl);
    padding-right: var(--padding-28xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    gap: 32px 0px;
    padding-top: 35px;
    padding-right: var(--padding-xl);
    padding-bottom: var(--padding-8xl);
    padding-left: 20px;
    box-sizing: border-box;
  }
`;

const AFooter = () => {
  const navigate = useNavigate();

  const onText8Click = useCallback(() => {
    navigate("/our-aim/");
  }, [navigate]);

  const onFAQTextClick = useCallback(() => {
    navigate("/faq/");
  }, [navigate]);

  const onText9Click = useCallback(() => {
    navigate("/contact/");
  }, [navigate]);

  const onText10Click = useCallback(() => {
    navigate("/warranty/");
  }, [navigate]);

  const onText11Click = useCallback(() => {
    navigate("/company-details/");
  }, [navigate]);

  const onText12Click = useCallback(() => {
    navigate("/personal/");
  }, [navigate]);

  const onText14Click = useCallback(() => {
    navigate("/personal/");
  }, [navigate]);

  const onText16Click = useCallback(() => {
    navigate("/terms-of-service/");
  }, [navigate]);

  const onText17Click = useCallback(() => {
    navigate("/public-offer/");
  }, [navigate]);

  return (
    <AFooterRoot>
      <CompanyInfoFrame />
      <MainContent>
        <SubFooter>
          <Div onClick={onText8Click}>О нас</Div>
          <AboutUs>
            <Div onClick={onFAQTextClick}>FAQ</Div>
          </AboutUs>
          <Div onClick={onText9Click}>Контакты</Div>
          <Div onClick={onText10Click}>Гарантия и возврат</Div>
          <AboutUs>
            <Div onClick={onText11Click}>Реквизиты компании</Div>
          </AboutUs>
        </SubFooter>
      </MainContent>
      <MimagesFrame>
        <PrivacyPolicyFrame>
          <Div onClick={onText12Click}>Обработка персональных данных</Div>
          <Div1 onClick={onText16Click}>Условия пользования</Div1>
          <Div onClick={onText17Click}>Публичная оферта</Div>
        </PrivacyPolicyFrame>
      </MimagesFrame>
      <CompanyDetailsFrame />
    </AFooterRoot>
  );
};

export default AFooter;
