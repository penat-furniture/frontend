import styled from "styled-components";

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
const LinkToCompanyFrame = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px var(--padding-xl) 0px var(--padding-4xl);
  text-align: center;
  font-size: var(--header-size);
  color: var(--main-black);
  font-family: var(--header);
`;
const P = styled.p`
  margin: 0;
  font-size: 22px;
  @media screen and (max-width: 450px) {
    font-size: 20px;
    line-height: 26px;
  }
`;
const Penatpartnersgmailcom = styled.div`
  width: 613.5px;
  position: relative;
  font-weight: 300;
  display: inline-block;
  max-width: 100%;
`;
const Div = styled.div`
  position: relative;
  font-weight: 500;
`;
const AInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background-color: var(--secondary-hover);
  align-self: stretch;
  height: 43px;
  border-radius: var(--br-3xs);
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-xs) var(--padding-7xl);
  box-sizing: border-box;
  font-family: var(--footer);
  font-weight: 300;
  font-size: var(--footer-size);
  color: var(--secondary-active-color);
  min-width: 250px;
`;
const MInputName = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 16px 0px;
`;
const AInput1 = styled.input`
  margin-bottom: -1px;
  width: 100%;
  border: none;
  outline: none;
  background-color: var(--secondary-hover);
  align-self: stretch;
  height: 43px;
  border-radius: var(--br-3xs);
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-xs) var(--padding-7xl);
  box-sizing: border-box;
  font-family: var(--footer);
  font-weight: 300;
  font-size: var(--footer-size);
  color: var(--secondary-active-color);
  min-width: 250px;
`;
const MInputName1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px;
  gap: 17px 0px;
`;
const AArrowIcon = styled.img`
  width: 30px;
  height: 16px;
  position: absolute;
  margin: 0 !important;
  right: 18.2px;
  bottom: 13.2px;
  object-fit: contain;
  z-index: 1;
`;
const MSelect = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  gap: 16px 0px;
`;
const FooterInstance = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-12xs) 0px 0px;
  box-sizing: border-box;
  gap: 40px 0px;
  min-width: 398px;
  max-width: 100%;
  @media screen and (max-width: 750px) {
    gap: 40px 0px;
    min-width: 100%;
  }
`;
const AInput2 = styled.textarea`
  border: none;
  background-color: var(--secondary-hover);
  height: 81px;
  width: auto;
  outline: none;
  align-self: stretch;
  border-radius: var(--br-3xs);
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xs);
  box-sizing: border-box;
  font-family: var(--footer);
  font-weight: 300;
  font-size: var(--footer-size);
  color: var(--secondary-active-color);
  @media screen and (max-width: 450px) {
    padding-left: 26px;
  }
`;
const Div1 = styled.div`
  height: 57px;
  flex: 1;
  position: relative;
  font-weight: 300;
  display: inline-block;
  max-width: 100%;
`;
const AInput3 = styled.div`
  align-self: stretch;
  height: 43px;
  border-radius: var(--br-3xs);
  background-color: var(--secondary-hover);
  overflow: hidden;
  flex-shrink: 0;
  display: none;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xs) var(--padding-10xl) var(--padding-xs)
    var(--padding-7xl);
  box-sizing: border-box;
  max-width: 100%;
  color: var(--secondary-active-color);
`;
const MInputName2 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-12xs) 0px 0px;
  box-sizing: border-box;
  gap: 16px 0px;
  min-width: 395px;
  max-width: 100%;
  @media screen and (max-width: 750px) {
    min-width: 100%;
  }
`;
const FooterInstanceParent = styled.div`
  align-self: stretch;
  // display: flex;
  display: none;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0px 23px;
  max-width: 100%;
  @media screen and (max-width: 450px) {
    gap: 40px 23px;
  }
`;
const CompanyDetailsFrame = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 59px 0px;
  max-width: 100%;
  @media screen and (max-width: 750px) {
    gap: 39px 0px;
  }
`;
const FAQInfoFrameRoot = styled.section`
  // width: 1287px;
  height: 300px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-5xl) var(--padding-24xl) var(--padding-xl);
  box-sizing: border-box;
  max-width: 100%;
  flex-shrink: 0;
  text-align: left;
  font-size: var(--footer-size);
  color: var(--color-black);
  font-family: var(--footer);
  @media screen and (max-width: 750px) {
    padding-bottom: var(--padding-9xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    padding-bottom: var(--padding-9xl);
    padding: 0px 20px var(--padding-24xl) 20px;
  }
`;

const FAQInfoFrame = () => {
  return (
    <FAQInfoFrameRoot>
      <CompanyDetailsFrame>
        <LinkToCompanyFrame>
          <H>Контакты</H>
        </LinkToCompanyFrame>
        <Penatpartnersgmailcom>
          <P>
            Связь с инвесторами, общественностью и СМИ, круглосуточная служба
            поддержки:
          </P>
          <P>penat.partners@gmail.com</P>
        </Penatpartnersgmailcom>
        <FooterInstanceParent>
          <FooterInstance>
            <MInputName>
              <Div>Имя</Div>
              <AInput placeholder="Александра" type="text" />
            </MInputName>
            <MInputName1>
              <Div>Фамилия</Div>
              <AInput1 placeholder="Александрова" type="text" />
            </MInputName1>
            <MInputName>
              <Div>Email</Div>
              <AInput placeholder="example@gmail.com" type="text" />
            </MInputName>
            <MSelect>
              <Div>Причина</Div>
              <AInput placeholder="Выберите причину " type="text" />
              <AArrowIcon loading="lazy" alt="" src="/a-arrow@2x.png" />
            </MSelect>
          </FooterInstance>
          <MInputName2>
            <Div>Сообщение</Div>
            <AInput2
              placeholder={`Напишите текст сообщения

`}
              rows={4}
              cols={30}
            />
            <AInput3>
              <Div1>
                <P>Напишите текст сообщения</P>
                <P>&nbsp;</P>
              </Div1>
            </AInput3>
          </MInputName2>
        </FooterInstanceParent>
      </CompanyDetailsFrame>
    </FAQInfoFrameRoot>
  );
};

export default FAQInfoFrame;
