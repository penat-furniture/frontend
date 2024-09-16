import styled from "styled-components";

const PenatIcon = styled.img`
  height: 367px;
  width: 1177.6px;
  position: relative;
  max-width: 100%;
  z-index: 1;
  @media screen and (max-width: 450px) {
    height: 147px;
  }
`;
const ProcessingFrame = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding-left: 30px;
  max-width: 100%;
  @media screen and (max-width: 450px) {
    padding-left: 0px;
  }
`;
const Penat = styled.div`
  position: relative;
  z-index: 1;
`;
const FooterTextFrame = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 64px 0px;
  max-width: 100%;
  @media screen and (max-width: 750px) {
    gap: 64px 0px;
  }
  @media screen and (max-width: 450px) {
    gap: 40px 0px;
  }
`;
const CompanyDetailsFrameRoot = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px 0px;
  box-sizing: border-box;
  max-width: 100%;
  text-align: left;
  font-size: var(--footer-size);
  color: var(--main-black);
  font-family: var(--footer);
`;

const CompanyDetailsFrame = () => {
  return (
    <CompanyDetailsFrameRoot>
      <FooterTextFrame>
        <ProcessingFrame>
          <PenatIcon loading="lazy" alt="" src="/penat.svg" />
        </ProcessingFrame>
        <Penat>© «PENAT», 2023–2024</Penat>
      </FooterTextFrame>
    </CompanyDetailsFrameRoot>
  );
};

export default CompanyDetailsFrame;
