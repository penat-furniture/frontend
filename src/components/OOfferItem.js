import styled from "styled-components";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import MultiRangeSlider from "./MultiRangeSlider";

const Div = styled.div`
  position: relative;
  font-size: 25px;
  @media screen and (max-width: 450px) {
    font-size: 18px;
  }
  font-family: Georgia, serif;
`;
const AImageIcon = styled.img`
  align-self: stretch;
  flex: 1;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  border-top-right-radius: 60px;
  border-bottom-left-radius: 60px;
  max-height: 100%;
  object-fit: contain;
  background-color: #ffffff;
  cursor: pointer;
  @media screen and (max-width: 450px) {
    min-height: 240px;
    border-top-right-radius: 40px;
    border-bottom-left-radius: 40px;
  }
`;
const Div1 = styled.div`
  position: relative;
  font-size: var(--footer-size);
  font-weight: 500;
  font-family: var(--footer);
  color: var(--main-black);
  text-align: center;
`;
const ASecondarySave = styled.button`
  cursor: pointer;
  border: 1px solid var(--main-black);
  padding: var(--padding-xs);
  background-color: var(--background);
  align-self: stretch;
  border-radius: var(--br-3xs);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-family: Georgia, serif;
  // opacity: 0.0001;

  &:hover {
    background-color: var(--color-lightgray);
    border: 1px solid var(--color-dimgray-200);
    box-sizing: border-box;
  }
`;
const OOfferItemRoot = styled.div`
  align-self: stretch;
  width: 235px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0px var(--padding-12xs) 0px 0px;
  box-sizing: border-box;
  gap: 18px 0px;
  text-align: center;
  font-size: var(--footer-size);
  color: var(--main-black);
  font-family: var(--footer);
  @media screen and (max-width: 450px) {
    width: 48.5%;
  }
`;
const SelectMainArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
`;
const SelectArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
  @media screen and (max-width: 450px) {
    flex-direction: column;
  }
`;
const Select = styled.div`
  width: 95%;
  font-size: 14px;
  padding-top: 10px;
  padding-bottom: 10px;
  align-items: center;
  justify-content: flex-start;
  border: solid #5a6a59;
  color: #5a6a59;
  border-radius: 10px;
  cursor: pointer;
  :hover {
    background-color: #29292b;
    color: #ffffff;
  }
`;

const OOfferItem = ({ prop, propId, aImage, onMinMaxUpdate }) => {
  const navigate = useNavigate();

  const onTextClick = useCallback(() => {
    navigate("/our-aim/");
  }, [navigate]);

  const onText1Click = useCallback(() => {
    navigate("/faq/");
  }, [navigate]);

  const onText2Click = useCallback(() => {
    navigate("/contact/");
  }, [navigate]);

  const onText3Click = useCallback(() => {
    navigate("/saved/");
  }, [navigate]);

  const onText4Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onText5Click = useCallback(() => {
    window.open(aImage?.link, "_blank");
  }, [aImage]);
  return (
    <OOfferItemRoot>
      <Div>{prop}</Div>
      <AImageIcon
        loading="lazy"
        alt=""
        src={aImage?.image}
        onClick={onText5Click}
      />
      {aImage?.price && <Div>{aImage?.price} р</Div>}
      {!aImage?.price && <Div>Не найдено</Div>}
      <SelectMainArea>
        <SelectArea>
          <Select>до 20к</Select>
          <Select>от 20к до 50к</Select>
        </SelectArea>
        <SelectArea>
          <Select>от 50к до 100к</Select>
          <Select>>100к</Select>
        </SelectArea>
      </SelectMainArea>
    </OOfferItemRoot>
  );
};

export default OOfferItem;

// <MultiRangeSlider
//   min={aImage?.limits?.min || 0}
//   max={aImage?.limits?.max || 100000}
//   onChange={({ min, max }) => onMinMaxUpdate(min, max, propId)}
// />
// <ASecondarySave disabled={!aImage.link} onClick={onText5Click}>
//   <Div1>{aImage.link ? "Посмотреть" : "Не найдено"}</Div1>
// </ASecondarySave>
