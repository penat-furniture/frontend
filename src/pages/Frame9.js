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
  gap: 140px 0px;
  letter-spacing: normal;
  @media screen and (max-width: 750px) {
    gap: 640px 0px;
  }
  @media screen and (max-width: 450px) {
    gap: 50px 0px;
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
        prop="Политика контента, размещенного на сайте Пенат. Пенат:"
        prop1="Вправе в любое время осуществлять модерацию Пользовательского Контента и может без предупреждения блокировать, удалять неприемлемый и запрещённый Пользовательский Контент по мере его обнаружения на Ресурсах Пенат. Самостоятельно определяет и обеспечивает необходимые меры защиты, чтобы монетизация соответствующих Ресурсов не поощряла нежелательное или недопустимое поведение Пользователей. Пенат оставляет за собой право на удаление любых комментариев и иного Контента, который может прямо или косвенно нарушать указанные в Политике запреты либо могут быть расценены Пенат как аморальные, неприемлемые или нарушающие применимое законодательство. В случае нарушения Пользователем условий настоящей Политики оставляет за собой право без предупреждения применять к такому Пользователю любые ограничения (в том числе блокировку учетной записи и запрет доступа), который распространил запрещенный, аморальный, неприемлемый или нарушающий применимое законодательство Пользовательский Контент, а также ограничить доступ Пользователя к определенным функциям соответствующего Ресурса. Оставляет за собой право при обнаружении признаков административного правонарушения или признаков состава преступления в распространённом Пользовательском Контенте передать данные, в том числе копию распространенного Пользовательского Контента, в правоохранительные органы. Может изменить Политику в любой момент в одностороннем порядке по своему усмотрению без специального уведомления. Изменения вступают в силу с момента размещения обновленной редакции на сайте в разделе Правила использования сайта и приложений."
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
