import styled from "styled-components";

const H = styled.h1`
  margin: 0;
  position: relative;
  font-size: inherit;
  font-weight: 300;
  font-family: inherit;
  @media screen and (max-width: 1000px) {
    font-size: var(--font-size-10xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-3xl);
  }
`;
const FrameMySavedItems = styled.div`
  width: 745px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px var(--padding-xl);
  box-sizing: border-box;
  max-width: 100%;
`;
const Div = styled.div`
  position: relative;
  font-weight: 500;
`;
const AIconSort = styled.img`
  height: 20px;
  width: 20px;
  position: relative;
  object-fit: cover;
  min-height: 20px;
`;
const OSort = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 0px 12px;
`;
const Div1 = styled.div`
  position: relative;
  font-size: var(--footer-size);
  font-weight: 500;
  font-family: var(--footer);
  color: var(--background);
  text-align: left;
`;
const ATag = styled.button`
  cursor: pointer;
  border: none;
  padding: var(--padding-9xs);
  background-color: var(--secondary-active-color);
  width: 61px;
  border-radius: var(--br-3xs);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  &:hover {
    background-color: var(--color-dimgray-100);
  }
`;
const ATag1 = styled.div`
  width: 89px;
  border-radius: var(--br-3xs);
  background-color: var(--background);
  border: 1px solid var(--main-black);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-9xs);
`;
const ATag2 = styled.div`
  width: 84px;
  border-radius: var(--br-3xs);
  background-color: var(--background);
  border: 1px solid var(--main-black);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-9xs);
`;
const ATag3 = styled.div`
  width: 99px;
  border-radius: var(--br-3xs);
  background-color: var(--background);
  border: 1px solid var(--main-black);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-9xs);
`;
const ATag4 = styled.div`
  width: 96px;
  border-radius: var(--br-3xs);
  background-color: var(--background);
  border: 1px solid var(--main-black);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-9xs);
`;
const ATag5 = styled.div`
  width: 106px;
  border-radius: var(--br-3xs);
  background-color: var(--background);
  border: 1px solid var(--main-black);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-9xs);
`;
const MTags = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-9xs) var(--padding-8xs) var(--padding-9xs) 0px;
  box-sizing: border-box;
  gap: 0px 40px;
  max-width: 100%;
  @media screen and (max-width: 1000px) {
    flex-wrap: wrap;
    gap: 0px 40px;
  }
`;
const AtagGroup = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 100%;
  gap: var(--gap-xl);
  @media screen and (max-width: 1000px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;
const AImageIcon = styled.img`
  position: relative;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
  min-height: 330px;
  @media screen and (max-width: 450px) {
    width: 100%;
  }
`;
const TSavedSet = styled.div`
  width: 743px;
  display: grid;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-11xs) 0px 0px;
  box-sizing: border-box;
  gap: 0px 19px;
  max-width: 100%;
  grid-template-columns: repeat(3, minmax(176px, 1fr));
  @media screen and (max-width: 750px) {
    grid-template-columns: repeat(2, minmax(176px, 305px));
    justify-content: center;
  }
  @media screen and (max-width: 450px) {
    grid-template-columns: minmax(176px, 1fr);
  }
`;
const OSortInstance = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-12xs) 0px 0px;
  box-sizing: border-box;
  gap: 80px 0px;
  max-width: 100%;
  text-align: left;
  font-size: var(--footer-size);
  font-family: var(--footer);
  @media screen and (max-width: 1000px) {
    gap: 80px 0px;
  }
  @media screen and (max-width: 750px) {
    gap: 80px 0px;
  }
`;
const TagsFrame = styled.div`
  width: 993px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 65px 0px;
  max-width: 100%;
  @media screen and (max-width: 1000px) {
    gap: 65px 0px;
  }
  @media screen and (max-width: 750px) {
    gap: 65px 0px;
  }
`;
const SortingFrameRoot = styled.section`
  width: 1190px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px var(--padding-xl) var(--padding-84xl);
  box-sizing: border-box;
  max-width: 100%;
  text-align: center;
  font-size: var(--header-size);
  color: var(--main-black);
  font-family: var(--header);
  @media screen and (max-width: 750px) {
    padding-bottom: var(--padding-48xl);
    box-sizing: border-box;
  }
`;

const SortingFrame = () => {
  return (
    <SortingFrameRoot>
      <TagsFrame>
        <FrameMySavedItems>
          <H>Мои сохранённые товары</H>
        </FrameMySavedItems>
        <OSortInstance>
          <AtagGroup>
            <OSort>
              <Div>Сортировать</Div>
              <AIconSort loading="lazy" alt="" src="/a-icon-sort1@2x.png" />
            </OSort>
            <MTags>
              <ATag>
                <Div1>Все</Div1>
              </ATag>
              <ATag1>
                <Div>Стулья</Div>
              </ATag1>
              <ATag2>
                <Div>Столы</Div>
              </ATag2>
              <ATag3>
                <Div>Кровати</Div>
              </ATag3>
              <ATag4>
                <Div>Диваны</Div>
              </ATag4>
              <ATag5>
                <Div>Растения</Div>
              </ATag5>
            </MTags>
          </AtagGroup>
          <TSavedSet>
            <AImageIcon loading="lazy" alt="" src="/a-image2@2x.png" />
            <AImageIcon loading="lazy" alt="" src="/a-image-17@2x.png" />
            <AImageIcon loading="lazy" alt="" src="/a-image-22@2x.png" />
          </TSavedSet>
        </OSortInstance>
      </TagsFrame>
    </SortingFrameRoot>
  );
};

export default SortingFrame;
