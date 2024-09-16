import styled from "styled-components";
import OOfferItem from "./OOfferItem";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/api";
import { split_by_chunks } from "../utils/helpers";
import MultiRangeSlider from "./MultiRangeSlider";

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
        font-size: var(--font-size-3xl);
        font-size: 24px;
        line-height: 30px;
    }
]
`;
const TextYourRoom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0px var(--padding-8xs) 0px 0px;
  gap: 16px;
  box-sizing: border-box;
  max-width: 100%;
  @media screen and (max-width: 450px) {
    max-width: calc(100% - 5px);
  }
`;
const Div = styled.div`
  position: relative;
  @media screen and (max-width: 450px) {
    font-size: 18px;
  }
`;
const DivText = styled.div`
  position: relative;
  width: 100%;
  font-weight: 300;
  font-size: 28px;
  font-family: inherit;
  @media screen and (max-width: 450px) {
    font-size: 24px;
    width: 80%;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-12xs) 0px var(--padding-11xs);
  @media screen and (max-width: 450px) {
    max-width: calc(100% - 2px);
  }
`;
const AImageIcon = styled.img`
  align-self: stretch;
  flex: 1;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  min-height: 240px;
  object-fit: cover;
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
  width: 100%;
  border: 1px solid var(--main-black);
  padding: var(--padding-xs) var(--padding-54xl) var(--padding-xs)
    var(--padding-55xl);
  background-color: var(--background);
  border-radius: var(--br-3xs);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  // opacity: 0.0001;

  &:hover {
    background-color: var(--color-lightgray);
    border: 1px solid var(--color-dimgray-200);
    box-sizing: border-box;
  }

  @media screen and (max-width: 450px) {
    width: 100%;
  }
`;
const OOfferItem1 = styled.div`
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
  @media screen and (max-width: 450px) {
    width: 48.5%;
  }
`;
const TOfferSet = styled.div`
  width: 1253px;
  flex: 1;
  overflow-x: auto;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-7xs) 0px 0px;
  box-sizing: border-box;
  gap: 0px 18px;
  max-width: 100%;
  font-size: var(--footer-size);
  font-family: var(--footer);
  @media screen and (max-width: 450px) {
    flex-direction: ;
    flex-wrap: wrap;
    align-items: center;
    justify-content: left;
    gap: 32px 10px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;
const CircleButtonInstance = styled.div`
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
    gap: 60px 0px;
  }
`;
const MCircleButtonIcon = styled.img`
  width: 61.4px;
  height: 61.4px;
  position: relative;
  object-fit: contain;
`;
const Div2 = styled.div`
  margin-top: -1px;
  margin-bottom: -1px;
  position: relative;
  font-weight: 500;
`;
const ORestart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 0px 0px;
  gap: 17px 0px;
`;
const RestartButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-smi);
  font-size: var(--footer-size);
  font-family: var(--footer);
  cursor: pointer;
  @media screen and (max-width: 450px) {
    max-width: calc(100% - 13px);
    padding: 0px;
  }
`;
const RestartButton1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 35px 0px;
  max-width: 100%;
  @media screen and (max-width: 750px) {
    gap: 35px 0px;
  }
  @media screen and (max-width: 450px) {
    gap: 50px 0px;
  }
`;
const MainFooterFrameRoot = styled.section`
  height: 823px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-10xs);
  box-sizing: border-box;
  max-width: 100%;
  text-align: center;
  font-size: var(--header-size);
  color: var(--main-black);
  font-family: var(--header);
  @media screen and (max-width: 450px) {
    height: 1720px;
    padding: 0px;
  }
`;

const MainFooterFrame = () => {
  const [images, setImages] = useState({});
  const [loading, setLoading] = useState(true);
  const [limits, setLimits] = useState({});
  const [limitsDump, setLimitsDump] = useState("");
  const image = new URLSearchParams(window.location.search).get("image");
  useEffect(() => {
    api.get("limits/").then((response) => {
      if (response.data) {
        const data = response.data || {};
        setLimits(data);
      }
    });
  }, []);
  useEffect(() => {
    console.log({ limits });
    if (
      !limits?.chair ||
      !limits?.table ||
      !limits?.bed ||
      !limits?.couch ||
      !limits?.plant
    ) {
      return;
    }
    if (limitsDump === JSON.stringify(limits)) {
      return;
    }
    api
      .post("suggest/", {
        step: "4",
        image,
        limits,
      })
      .then((response) => {
        if (response.data) {
          const data = response.data?.images || {};
          setImages(data);
          console.log(data);
          setLoading(false);
          setLimitsDump(JSON.stringify(limits));
        }
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [limits]);
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

  const onText5Click = useCallback((link) => {
    window.location.href = link;
  }, []);

  const onMinMaxUpdate = useCallback((min, max, id = null) => {
    // images[id].price = "Loading...";
    console.log(`onMinMaxUpdate: ${min}, ${max}, ${id}`);
    setLimits((prev) => {
      return {
        ...prev,
        [id]: { min, max },
      };
    });
  }, []);

  return (
    <MainFooterFrameRoot>
      <RestartButton1>
        <CircleButtonInstance>
          <TextYourRoom>
            <H>Ваша комната собрана!</H>
            <DivText>Суммарная стоимость комнаты: n рублей</DivText>
          </TextYourRoom>
          {loading && (
            <div>
              Почти всё готово (ждём ответа домового). <br />
              Закройте глаза на несколько секунд
            </div>
          )}
          {!loading && Object.keys(images).length === 0 && <div>No images</div>}
          {!loading && Object.keys(images).length > 0 && (
            <TOfferSet>
              <OOfferItem
                prop="Стул"
                propId="chair"
                aImage={images?.chair}
                onMinMaxUpdate={onMinMaxUpdate}
              />
              <OOfferItem
                prop="Стол"
                propId="table"
                aImage={images?.table}
                onMinMaxUpdate={onMinMaxUpdate}
              />
              <OOfferItem
                prop="Кровать"
                propId="bed"
                aImage={images?.bed}
                onMinMaxUpdate={onMinMaxUpdate}
              />
              <OOfferItem
                prop="Диван"
                propId="couch"
                aImage={images?.couch}
                onMinMaxUpdate={onMinMaxUpdate}
              />
              <OOfferItem
                prop="Растение"
                propId="plant"
                aImage={images?.plant}
                onMinMaxUpdate={onMinMaxUpdate}
              />
            </TOfferSet>
          )}
        </CircleButtonInstance>
        <RestartButton onClick={onText4Click}>
          <ORestart>
            <MCircleButtonIcon
              loading="lazy"
              alt=""
              src="/m-circle-button@2x.png"
            />
            <Div2>Давайте попробуем ещё раз!</Div2>
          </ORestart>
        </RestartButton>
      </RestartButton1>
    </MainFooterFrameRoot>
  );
};

export default MainFooterFrame;
