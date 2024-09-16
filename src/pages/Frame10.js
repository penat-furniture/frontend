import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TCap1 from "../components/TCap1";
import AFooter from "../components/AFooter";
import FrameMainMenu from "../components/FrameMainMenu";

const Child = styled.img`
  width: 33.3px;
  height: 16px;
  position: relative;
  border-radius: var(--br-12xs);
  object-fit: contain;
  display: none;
`;
const DivRoot = styled.div`
  width: 100%;
  position: relative;
  background-color: var(--background);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 340px 0px;
  letter-spacing: normal;
  @media screen and (max-width: 750px) {
    gap: 640px 0px;
  }
  @media screen and (max-width: 450px) {
    gap: 350px 0px;
  }
`;

const Frame3 = () => {
  const navigate = useNavigate();

  const onFAQTextClick = useCallback(() => {
    navigate("/faq/");
  }, [navigate]);

  const onText5Click = useCallback(() => {
    navigate("/personal/");
  }, [navigate]);

  const onText2Click = useCallback(() => {
    navigate("/contact/");
  }, [navigate]);

  const onText3Click = useCallback(() => {
    navigate("/warranty/");
  }, [navigate]);

  const onText4Click = useCallback(() => {
    navigate("/company-details/");
  }, [navigate]);

  return (
    <DivRoot>
      <Child alt="" src="/vector-425.svg" />
      <FrameMainMenu
        prop="Договор для рекламы товаров на платформе Пенат"
        prop1="Пенат обязуется добавлять в базу данных о показываемых объектах предметы мебели и домашнего декора Продавцов."
        textWarrantyMessageWidth="617px"
        h1Flex="1"
        propWidth="unset"
        propTextAlign="center"
        propAlignSelf="stretch"
      />
      <AFooter />
    </DivRoot>
  );
};

export default Frame3;
