import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TCap1 from "../components/TCap1";
import AFooter from "../components/AFooter";

const Child = styled.img`
  width: 33.3px;
  height: 16px;
  position: relative;
  border-radius: var(--br-12xs);
  object-fit: contain;
  display: none;
`;
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
const MenuInstancesG = styled.div`
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
  font-size: 20px;
  line-height: 24px;
  @media screen and (max-width: 450px) {
    font-size: 18px;
    line-height: 22px;
  }
`;
const Div = styled.div`
  height: 439.9px;
  width: 613.5px;
  position: relative;
  font-weight: 300;
  display: inline-block;
  flex-shrink: 0;
  max-width: 100%;
  @media screen and (max-width: 450px) {
    height: 139.9px;
  }
`;
const Text1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-12xs) 0px var(--padding-9xs);
  box-sizing: border-box;
  max-width: 100%;
  @media screen and (max-width: 450px) {
    padding: 0px;
    height: 700px;
  }
`;
const Div1 = styled.div`
  position: relative;
  font-weight: 300;
`;
const MenuInstancesGParent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 40px 0px;
  max-width: 100%;
  @media screen and (max-width: 750px) {
    gap: 20px 0px;
  }
`;
const FooterFrame = styled.div`
  width: 662px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-4xl) 15px var(--padding-xl);
  box-sizing: border-box;
  max-width: 100%;
  flex-shrink: 0;
  @media screen and (max-width: 750px) {
    padding-bottom: 94px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    padding-bottom: 24px;
    box-sizing: border-box;
  }
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
  padding: 0px var(--padding-12xs) 0px 0px;
  box-sizing: border-box;
  gap: 86px 0px;
  letter-spacing: normal;
  text-align: left;
  font-size: var(--footer-size);
  color: var(--color-black);
  font-family: var(--footer);
  @media screen and (max-width: 750px) {
    gap: 86px 0px;
  }
  @media screen and (max-width: 450px) {
    gap: 35px 0px;
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
  }
`;
const MMenuItems = styled.div`
  width: 47px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;
const AImageChairIcon = styled.img`
  height: 576.6px;
  flex: 1;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  object-fit: cover;
  min-width: 397px;
  @media screen and (max-width: 450px) {
    min-width: 100%;
    height: 330px;
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
      <TCap1 />
      <FooterFrame>
        <MenuInstancesGParent>
          <MenuInstancesG>
            <H>Наша цель</H>
          </MenuInstancesG>
          <Text1>
            <Div>
              <P>
                Мы соединяем дизайнеров и ценителей мебели, чтобы сделать
                квартиры красивее и уютнее. Мы любим красоту и домашний уют и с
                радостью поможем вам подобрать уникальный интерьер за несколько
                секунд.
              </P>
              <P></P>
              <P>
                Мы рекомендуем вещи основываясь не на том, что покупают другие,
                а на том, что порекомендовал бы профессиональный дизайнер,
                который видел почти все квартиры на планете. За секунды мы
                сможем сформировать ваш уникальный профиль по тому, как вы
                несколько раз выбираете кресла или стулья. Мы рекомендуем
                предметы мебели, которые вы сможете сразу купить у наших
                партнеров. Давайте вместе создавать мир вашего дома.
              </P>
              <P></P>
              <P>
                Пенат за вас просмотрит десятки мебельных сайтов и дополнительно
                обратится к собственной партнерской базе мебели и предметов для
                дома. Модель обучена на тысячах фотографий самых красивых (по
                нашему мнению) квартир от Парижа до Токио, от Стокгольма до
                Гонконга.
              </P>
            </Div>
          </Text1>
          <Div1>
            <P>Живите красиво,</P>
            <P>Пенат</P>
          </Div1>
          <AImageChairIcon loading="lazy" alt="" src="/Example.png" />
        </MenuInstancesGParent>
      </FooterFrame>
      <AFooter />
    </DivRoot>
  );
};

export default Frame3;
