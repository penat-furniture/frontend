import styled from "styled-components";

const InfoFrame = styled.div`
  width: 100%;
  height: 771.2px;
  position: absolute;
  margin: 0 !important;
  top: -0.3px;
  right: 0.5px;
  left: -0.5px;
  background-color: var(--background);
  border-top: 1px solid var(--main-black);
  box-sizing: border-box;
`;
const Div = styled.div`
  position: relative;
  z-index: 1;
`;
const TermsFrame = styled.div`
  width: 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-7xs) 0px 0px;
  box-sizing: border-box;
  width: ${(p) => p.propWidth};
`;
const ContentFrame = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--gap-xl);
`;
const ContentFrame1 = styled.div`
  width: 270px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 95px 0px;
  @media screen and (max-width: 450px) {
    gap: 95px 0px;
  }
`;
const Div1 = styled.div`
  position: relative;
  z-index: 1;
  text-decoration: ${(p) => p.divTextDecoration};
`;
const TermsFrame1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const FAQFrame = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 101px 0px;
  min-width: 189px;
  @media screen and (max-width: 450px) {
    gap: 101px 0px;
  }
`;
const PrivacyPolicyFrame = styled.div`
  width: 423px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0px 57px;
  max-width: 100%;
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
    gap: 0px 57px;
  }
`;
const PublicOfferPanel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-10xs) 0px var(--padding-11xs);
  padding: ${(p) => p.propPadding3};
`;
const OfferFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 95px 0px;
`;
const ContentFrame2 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  padding: 0px var(--padding-11xs) 0px 0px;
  box-sizing: border-box;
  max-width: 100%;
  gap: var(--gap-xl);
  @media screen and (max-width: 1200px) {
    flex-wrap: wrap;
  }
  padding: ${(p) => p.propPadding2};
`;
const ContentFrame3 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-12xs) 0px var(--padding-15xl);
  box-sizing: border-box;
  max-width: 100%;
  padding: ${(p) => p.propPadding1};
`;
const PenatIcon = styled.img`
  height: 367px;
  width: 1177.6px;
  position: relative;
  max-width: 100%;
  z-index: 1;
`;
const MCircleButtonFrame = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  max-width: 100%;
`;
const LogoFrame = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 63px 0px;
  max-width: 100%;
  @media screen and (max-width: 750px) {
    gap: 63px 0px;
  }
  @media screen and (max-width: 450px) {
    gap: 63px 0px;
  }
`;
const RestartButton = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-smi) 0px 0px;
  box-sizing: border-box;
  max-width: 100%;
`;
const AFooterRoot = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-30xl) var(--padding-76xl) var(--padding-45xl)
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
    padding-bottom: var(--padding-23xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 750px) {
    gap: 87px 0px;
    padding-left: var(--padding-12xl);
    padding-right: var(--padding-28xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    gap: 87px 0px;
    padding-top: var(--padding-2xl);
    padding-right: var(--padding-xl);
    padding-bottom: var(--padding-8xl);
    box-sizing: border-box;
  }
  padding: ${(p) => p.propPadding};
`;

const AFooter1 = ({
  propPadding,
  propPadding1,
  propPadding2,
  propWidth,
  propPadding3,
  divTextDecoration,
  onText1Click,
  onFAQTextClick,
  onText5Click,
  onText2Click,
  onText3Click,
  onText4Click,
}) => {
  return (
    <AFooterRoot propPadding={propPadding}>
      <InfoFrame />
      <ContentFrame3 propPadding1={propPadding1}>
        <ContentFrame2 propPadding2={propPadding2}>
          <ContentFrame1>
            <ContentFrame>
              <Div onClick={onText1Click}>О нас</Div>
              <TermsFrame propWidth={propWidth}>
                <Div onClick={onFAQTextClick}>FAQ</Div>
              </TermsFrame>
            </ContentFrame>
            <Div onClick={onText5Click}>Обработка персональных данных</Div>
          </ContentFrame1>
          <PrivacyPolicyFrame>
            <Div onClick={onText2Click}>Контакты</Div>
            <FAQFrame>
              <Div1
                divTextDecoration={divTextDecoration}
                onClick={onText3Click}
              >
                Гарантия и возврат
              </Div1>
              <TermsFrame1>
                <Div>Условия пользования</Div>
              </TermsFrame1>
            </FAQFrame>
          </PrivacyPolicyFrame>
          <OfferFrame>
            <Div onClick={onText4Click}>Реквизиты компании</Div>
            <PublicOfferPanel propPadding3={propPadding3}>
              <Div>Публичная оферта</Div>
            </PublicOfferPanel>
          </OfferFrame>
        </ContentFrame2>
      </ContentFrame3>
      <RestartButton>
        <LogoFrame>
          <MCircleButtonFrame>
            <PenatIcon loading="lazy" alt="" src="/penat.svg" />
          </MCircleButtonFrame>
          <Div>© «PENAT», 2023–2024</Div>
        </LogoFrame>
      </RestartButton>
    </AFooterRoot>
  );
};

export default AFooter1;
