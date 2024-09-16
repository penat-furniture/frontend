import styled from "styled-components";
import React, { Component } from "react";
import Faq from "react-faq-component";

const H = styled.h1`
  margin: 0;
  width: 700px;
  position: relative;
  font-size: inherit;
  font-weight: 300;
  font-family: inherit;
  display: inline-block;
  max-width: 100%;
  box-sizing: border-box;
  padding-left: var(--padding-xl);
  padding-right: var(--padding-xl);
  @media screen and (max-width: 1050px) {
    font-size: var(--font-size-10xl);
  }
  @media screen and (max-width: 450px) {
    font-size: 24px;
    line-height: 30px;
  }
`;
const Div = styled.div`
  flex: 1;
  position: relative;
  font-weight: 500;
  display: inline-block;
  min-width: 210px;
  max-width: 100%;
  @media screen and (max-width: 450px) {
    max-width: 95%;
  }
`;
const AArrowIcon = styled.img`
  height: 16px;
  width: 30px;
  position: relative;
  object-fit: contain;
`;
const FAQSection = styled.div`
  flex: 1;
  background-color: var(--background);
  border-bottom: 1px solid var(--main-black);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-base);
  gap: 0px 5px;
  max-width: 100%;
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;
const MQuestion = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-12xs) 0px 0px var(--padding-12xs);
  box-sizing: border-box;
  max-width: 100%;
`;
const MQuestion2 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-12xs) 0px 0px var(--padding-12xs);
  box-sizing: border-box;
  max-width: 100%;
`;

const Div1 = styled.div`
  flex: 1;
  position: relative;
  font-weight: 500;
  display: inline-block;
  min-width: 249px;
  max-width: 100%;
`;
const Parent1 = styled.div`
  flex: 1;
  background-color: var(--background);
  border-bottom: 1px solid var(--main-black);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px 0px var(--padding-base);
  gap: 0px 5px;
  max-width: 100%;
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
    align-items: center;
  }
`;
const Div2 = styled.div`
  flex: 1;
  position: relative;
  font-weight: 500;
  display: inline-block;
  min-width: 96px;
  max-width: 100%;
`;
const Div3 = styled.div`
  flex: 1;
  position: relative;
  font-weight: 500;
  display: inline-block;
  min-width: 200px;
  max-width: 100%;
`;
const Div4 = styled.div`
  width: 411.6px;
  position: relative;
  font-weight: 500;
  display: inline-block;
  flex-shrink: 0;
  max-width: 100%;
  @media screen and (max-width: 450px) {
    width: 80%;
  }
`;
const FrameDiv = styled.div`
  background-color: var(--background);
  border-bottom: 1px solid var(--main-black);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0px 0px var(--padding-base);
  gap: 0px 5px;
  max-width: 100%;
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;
const MQuestion1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-12xs) 0px 0px var(--padding-12xs);
  box-sizing: border-box;
  max-width: 100%;
`;
const Div5 = styled.div`
  flex: 1;
  position: relative;
  font-weight: 500;
  display: inline-block;
  min-width: 192px;
  max-width: 100%;
`;
const P = styled.p`
  margin: 0;
`;
const Div6 = styled.div`
  flex: 1;
  position: relative;
  font-weight: 500;
  display: inline-block;
  min-width: 268px;
  max-width: 90%;
`;
const Parent2 = styled.div`
  flex: 1;
  background-color: var(--background);
  border-bottom: 1px solid var(--main-black);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0px 0px var(--padding-base);
  gap: 0px 5px;
  max-width: 100%;
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;
const OFaqSet = styled.div`
  width: 449px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 40px 0px;
  min-width: 449px;
  max-width: 100%;
  @media screen and (max-width: 1050px) {
    flex: 1;
  }
  @media screen and (max-width: 750px) {
    min-width: 100%;
  }
  @media screen and (max-width: 450px) {
    gap: 32px 0px;
  }
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
const QuestionFrame = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 0px 185px;
  max-width: 100%;
  text-align: left;
  font-size: var(--footer-size);
  font-family: var(--footer);
  @media screen and (max-width: 1200px) {
    gap: 0px 185px;
  }
  @media screen and (max-width: 1050px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 750px) {
    gap: 0px 185px;
  }
  @media screen and (max-width: 450px) {
    gap: 32px 185px;
    max-width: 100%;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
  }
`;
const FAQHeader = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 80px 0px;
  max-width: 100%;
  @media screen and (max-width: 750px) {
    gap: 80px 0px;
  }
  @media screen and (max-width: 450px) {
    gap: 50px 0px;
  }
`;
const FooterFrameRoot = styled.section`
  width: 1247px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-11xs) 0px 0px;
  box-sizing: border-box;
  max-width: 100%;
  flex-shrink: 0;
  text-align: center;
  font-size: var(--header-size);
  color: var(--main-black);
  font-family: var(--header);
`;
const Styles = {
  bgColor: "#EDEAE5",
  titleTextColor: "blue",
  rowTitleColor: "blue",
  rowContentColor: "#5A5A5A",
  arrowColor: "#29292B",
  titleTextSize: "30px",
  rowTitleTextSize: "18px",
  rowTitleColor: "#29292B",
  rowContentTextSize: "15px",
  rowContentPaddingBottom: "20px",
  rowContentPaddingTop: "10px",
};

const data = {
  rows: [
    {
      title: "Можно ли купить вещи на сайте?",
      content:
        "Нет, мы только рекомендуем ссылки на другие сайты. Пенат не производит мебель и не является площадкой для перепродажи. Пенат только рекомендует где можно купить порекомендованную мебель.",
    },
    {
      title: "Ссылки на вещи куда-то сохраняются?",
      content:
        "Нет, но мы работаем над этой функцией. Если ссылка пропала, попробуйте заново пройти все шаги рекомендации, выбирая наиболее похожие к пропавшему стулья. Вероятно, на итоговом шаге порекомендуется то же самое, что и в предыдущий раз.",
    },
    {
      title: "За что я плачу?",
      content: "Ни за что не плачьте. Всё будет хорошо.",
    },
    {
      title: "Так за что я должен заплатить?",
      content:
        "Для покупателей использование сервиса по рекомендации товаров бесплатно! Пользуйтесь на здоровье. Если не понравилось то, что порекомендовалось, запустите процесс ещё раз.",
    },
    {
      title: "Что делать, если ссылка не работает?",
      content:
        "Пожалуйста, напишите в поддержку. Мы постараемся наиболее быстро заменить ссылку на работающую. Попробуйте воспользоваться рекомендацией еще раз по круглой кнопке под товарами на последней странице.Пожалуйста, напишите в поддержку. Мы постараемся наиболее быстро заменить ссылку на работающую. Попробуйте воспользоваться рекомендацией еще раз по круглой кнопке под товарами на последней странице.",
    },
    {
      title: "Мне пришла не та мебель или она не подходит. Что делать?",
      content:
        "Всю ответственность за мебель несёт компания-продавец. Напишите напрямую ей, мы не можем вам помочь в возврате и не несём ответственность за рекомендуемые предметы мебели и интерьера.",
    },
  ],
};

const FooterFrame = () => {
  return (
    <FooterFrameRoot>
      <FAQHeader>
        <H>Ответы на часто задаваемые вопросы</H>

        <QuestionFrame>
          <OFaqSet>
            <div>
              <Faq data={data} styles={Styles} />
            </div>
          </OFaqSet>
          <AImageChairIcon loading="lazy" alt="" src="/a-image-chair@2x.png" />
        </QuestionFrame>
      </FAQHeader>
    </FooterFrameRoot>
  );
};

export default FooterFrame;
