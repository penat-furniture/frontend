import styled from "styled-components";
import CompanyDetailsFrame from "./CompanyDetailsFrame";

const RectangleShape = styled.div`
  width: 100%;
  height: 771.2px;
  position: absolute;
  margin: 0 !important;
  top: 0px;
  right: 0px;
  left: 0px;
  background-color: var(--background);
  border-top: 1px solid var(--main-black);
  box-sizing: border-box;
`;
const Div = styled.div`
  position: relative;
  z-index: 1;
`;
const FAQSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-8xs) 0px 0px;
`;
const TrademarkCompanyName = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  min-height: 25px;
  gap: var(--gap-xl);
  @media screen and (max-width: 750px) {
    flex-wrap: wrap;
  }
`;
const Accessibility = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--gap-xl);
  @media screen and (max-width: 750px) {
    flex-wrap: wrap;
  }
`;
const DataProcessingInformation = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 95px 0px;
  max-width: 100%;
  @media screen and (max-width: 750px) {
    gap: 95px 0px;
  }
  @media screen and (max-width: 450px) {
    gap: 95px 0px;
  }
`;
const PublicOffer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-15xl);
  box-sizing: border-box;
  max-width: 100%;
  flex-shrink: 0;
`;
const AFooterRoot = styled.footer`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-30xl) var(--padding-77xl) var(--padding-45xl)
    var(--padding-43xl);
  box-sizing: border-box;
  position: relative;
  gap: 88px 0px;
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
    gap: 88px 0px;
    padding-left: var(--padding-12xl);
    padding-right: var(--padding-29xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    gap: 88px 0px;
    padding-top: var(--padding-2xl);
    padding-right: var(--padding-xl);
    padding-bottom: var(--padding-8xl);
    box-sizing: border-box;
  }
`;

const AFooter2 = () => {
  return (
    <AFooterRoot>
      <RectangleShape />
      <PublicOffer>
        <DataProcessingInformation>
          <TrademarkCompanyName>
            <Div>О нас</Div>
            <FAQSection>
              <Div>FAQ</Div>
            </FAQSection>
            <Div>Контакты</Div>
            <Div>Гарантия и возврат</Div>
            <FAQSection>
              <Div>Реквизиты компании</Div>
            </FAQSection>
          </TrademarkCompanyName>
          <Accessibility>
            <Div>Обработка персональных данных</Div>
            <Div>Условия пользования</Div>
            <Div>Публичная оферта</Div>
          </Accessibility>
        </DataProcessingInformation>
      </PublicOffer>
      <CompanyDetailsFrame />
    </AFooterRoot>
  );
};

export default AFooter2;
