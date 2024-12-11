import styled from "styled-components";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/api";
import { split_by_chunks } from "../utils/helpers";

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
const Div = styled.div`
  position: relative;
  font-weight: 400;
  font-size: 18px;
  @media screen and (max-width: 450px) {
    color: #808080;
  }
`;
const PhotoDisplay = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-8xs) 0px 0px;
  font-size: var(--caption-size);
  font-family: var(--footer);
`;
const SortIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 20px 0px;
  max-width: 100%;
  @media screen and (max-width: 450px) {
    gap: 16px;
    width: 100%;
  }
`;
const UnionFrame = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  width: 90%;
  box-sizing: border-box;
 
  font-family: var(--header);
`;
const Div1 = styled.div`
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
const NestedMenus = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xs) 0px 0px;
`;
const Div2 = styled.div`
  position: relative;
  font-size: var(--footer-size);
  font-weight: 500;
  font-family: var(--footer);
  color: var(--main-black);
  text-align: left;
`;
const MSecondaryPhotoResearch = styled.button`
  cursor: pointer;
  border: 1px solid var(--main-black);
  padding: var(--padding-xs) var(--padding-smi) var(--padding-xs)
    var(--padding-base);
  background-color: var(--background);
  border-radius: var(--br-3xs);
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 0px 7px;
  white-space: nowrap;

  &:hover {
    background-color: var(--color-lightgray);
    border: 1px solid var(--color-dimgray-200);
    box-sizing: border-box;
  }
`;
const MenuItemIcon = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0px var(--padding-12xs) 0px 0px;
  box-sizing: border-box;
  max-width: 100%;
  gap: var(--gap-xl);
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;
const SortingMenu = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-11xs) 0px var(--padding-9xs);
  box-sizing: border-box;
  max-width: 100%;
  text-align: left;
  font-size: var(--footer-size);
`;
const Div3 = styled.div`
  position: relative;
  font-weight: 300;
  @media screen and (max-width: 450px) {
    width: 12%;
    text-align: left;
    height: 9px;
  }
`;
const Div4 = styled.div`
  position: relative;
  font-weight: 300;
  @media screen and (max-width: 450px) {
    width: 12%;
    height: 9px;
  }
`;
const Parent1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0px var(--padding-4xs) 0px var(--padding-6xs);
  gap: var(--gap-xl);
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
    padding-left: 0.3%;
    padding-right: 0px;
  }
`;
const AProgressBarChild = styled.img`
  margin-top: -1px;
  margin-bottom: -1px;
  align-self: stretch;
  height: 24px;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: contain;
`;
const AProgressBar = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 0px 0px;
  box-sizing: border-box;
  gap: 7px 0px;
  max-width: 100%;
`;
const ProgressBarInstance = styled.div`
  width: 620px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-8xs) 0px 0px;
  box-sizing: border-box;
  max-width: 100%;
  font-size: var(--caption-size);
  @media screen and (max-width: 750px) {
    max-width: calc(100% - 5px);
  }
`;
const AImageIcon = styled.img`
  
  
  width: 90%;
  overflow: hidden;
  
  object-fit: contain;
  background-color: #ffffff;
  
  cursor: pointer;
  @media screen and (max-width: 450px) {
    
  }
`;
const Photoarea = styled.div`
  width: 60%;
  display: flex;
  gap: 20px;
  @media screen and (max-width: 450px) {
    width: 90%;
  }
`;
const Shape = styled.img`
  width: 22%;
  cursor: pointer;
  @media screen and (max-width: 450px) {
    display: none;
  }
`;
const AImageParent = styled.div`
  align-self: stretch;
  display: grid;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0px 21px;
  grid-template-columns: repeat(4, minmax(223px, 1fr));
  @media screen and (max-width: 1050px) {
    justify-content: center;
    grid-template-columns: repeat(2, minmax(223px, 386px));
  }
  @media screen and (max-width: 450px) {
    // grid-template-columns: minmax(223px, 1fr);
    justify-content: center;
    grid-template-columns: repeat(2, minmax(23px, 450px));
    gap: 10px 10px;
  }
`;
const MImages = styled.div`
  width: 1251px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-12xs);
  box-sizing: border-box;
  gap: 19px 0px;
  max-width: 100%;
  @media screen and (max-width: 450px) {
    gap: 10px 0px;
  }
`;
const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-7xs) 0px 0px;
  box-sizing: border-box;
  max-width: 100%;
`;
const Button1 = styled.div`
  display: flex;
  background: #EDEAE5;
  border: solid 2px #29292B;
  color: #29292B;
  width: 200px;
  font-family: Inter;
  font-size: 22px;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 10px;
  margin-top: 15px;
  margin-bottom: 15px;
  cursor: pointer;
  justify-content: center;
  @media screen and (max-width: 450px) {
    font-size: 18px;
  }

}
`;
const UnionFrameParent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap: 40px 0px;
  max-width: 100%;
  @media screen and (max-width: 750px) {
    gap: 40px 0px;
  }
  @media screen and (max-width: 450px) {
    gap: 20px 0px;
  }
`;
const InstanceRoot = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  
  box-sizing: border-box;
  
  flex-shrink: 0;
  text-align: center;
  font-size: var(--header-size);
  color: var(--main-black);
  font-family: var(--footer);
`;
const Instance11 = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const split_by = 4;
  const image = new URLSearchParams(window.location.search).get("image");
  useEffect(() => {
    api
      .post("suggest/", {
        step: "6",
        image: image,
      })
      .then((response) => {
        if (response.data) {
          const data = response.data?.images || [];
          const images = split_by_chunks(data, split_by);
          setImages(images);
          console.log(images);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);
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

  const onText4Click = useCallback(
    (name) => {
      navigate(`/room/done/?image=${name}`);
      console.log("Выбор №4");
      console.log(name);
    },
    [navigate]
  );

  return (
    <InstanceRoot>
      <UnionFrameParent>
      <Shape loading="lazy" alt="" src="/shape1.png"></Shape>
        <UnionFrame>
          <SortIcon>
            <H>Какой нравится больше всего?</H>
            <Photoarea>
            <AImageIcon loading="lazy" alt="" src="/a-image-1@2x.png" onClick={onText4Click}></AImageIcon>
            <AImageIcon loading="lazy" alt="" src="/a-image-1@2x.png" onClick={onText4Click}></AImageIcon>
            </Photoarea>
            <Photoarea>
            <AImageIcon loading="lazy" alt="" src="/a-image-1@2x.png" onClick={onText4Click}></AImageIcon>
            <AImageIcon loading="lazy" alt="" src="/a-image-1@2x.png" onClick={onText4Click}></AImageIcon>
            </Photoarea>
            <Button1 onClick={onText4Click}>
            Никакой!
          </Button1>
          <AProgressBarChild loading="lazy" alt="" src="/progres10.png" />
          </SortIcon>
        </UnionFrame>
        <Shape loading="lazy" alt="" src="/shape2.png"></Shape>
        

        
      </UnionFrameParent>
    </InstanceRoot>
  );
};

export default Instance11;
