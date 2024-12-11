import styled from "styled-components";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/api";
import { split_by_chunks } from "../utils/helpers";
import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';



const H = styled.h1`
  margin: 0;
  position: relative;
  font-size: inherit;
  font-weight: 300;
  font-family: inherit;
  text-align: center;
  @media screen and (max-width: 1050px) {
    font-size: var(--font-size-10xl);
  }
  @media screen and (max-width: 450px) {
    font-size: 24px;
    line-height: 30px;
  }
`;
const Div = styled.div`
  text-align: center;
  font-weight: 400;
  font-size: 32px;
  font-weight: 300;
  font-family: Literata;
  @media screen and (max-width: 450px) {
    color: #29292b;
    font-size: 24px;
  }
`;
const Div5 = styled.div`
  text-align: center;
  font-weight: 400;
  font-size: 32px;
  font-weight: 300;
  font-family: Literata;
  @media screen and (max-width: 450px) {
    color: #29292b;
    font-size: 18px;
    background: white;
    width: 100%;
    
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
  gap: 24px 0px;
  max-width: 100%;
  @media screen and (max-width: 450px) {
    gap: 28px;
  }
`;
const UnionFrame = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-4xl) var(--padding-8xs) var(--padding-xl);
  box-sizing: border-box;
  max-width: 100%;
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
  position: relative;

  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: contain;
  border-radius: 20px;
  
  
  @media screen and (max-width: 450px) {
    width: 100%;
    border-radius: 10px;
  }
  
`;
const Mainselectframe = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
  @media screen and (max-width: 450px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const Mainselect = styled.div`
  display: flex;
  width: 100%;
  border: solid 1px black;
  gap: 25px;
  border-radius: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  justify-content: center;
  object-fit: fill;
  background-color: #EDEAE5;
  cursor: pointer;
  flex-direction: column;
  @media screen and (max-width: 450px) {
    width: 85%;
    padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 15px;
  padding-right: 15px;
  gap: 20px;
  border-radius: 15px;
  }
    
}
`;
const Modal = styled.div`
  display: flex;
  
  gap: 30px;
  
  padding-top: 15px;
  padding-bottom: 50px;
  padding-left: 20px;
  padding-right: 20px;
  justify-content: right;
  
  
  cursor: pointer;
  flex-direction: column;
  @media screen and (max-width: 450px) {
    width: 100%;
    padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  gap: 30px;
  align-items: center;
  background-color: white;
  }

}
`;
const Close = styled.div`
  display: flex;
  justify-content: flex-end;
  
  

  @media screen and (max-width: 450px) {
    display: none;
  }

}
`;
const Button1 = styled.div`
  display: flex;
  background: #29292B;
  width: 200px;
  color: white;
  font-family: Inter;
  font-size: 22px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 22px;
  padding-right: 15px;
  border-radius: 10px;
  cursor: pointer;
  @media screen and (max-width: 450px) {
    font-size: 18px;
  }

}
`;
const Buttonarea = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  @media screen and (max-width: 450px) {
    
  }

}
`;
const Popupcontent = styled.div`
  display: flex;
  width: 100%;
  border: solid 1px black;
  gap: 25px;
  border-radius: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  justify-content: center;
  object-fit: fill;
  background-color: #EDEAE5;
  cursor: pointer;
  flex-direction: column;
  @media screen and (max-width: 450px) {
    width: 100%;
    min-height: 270px;
    border-top-right-radius: 40px;
    border-bottom-left-radius: 40px;
  }
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
const UnionFrameParent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 60px 0px;
  max-width: 100%;
  @media screen and (max-width: 750px) {
    gap: 40px 0px;
  }
  @media screen and (max-width: 450px) {
    gap: 20px 0px;
  }
`;
const InstanceRoot = styled.section`
  width: 1255px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  
  box-sizing: border-box;
  max-width: 96%;
  flex-shrink: 0;
  text-align: center;
  font-size: var(--header-size);
  color: var(--main-black);
  font-family: var(--footer);
`;


// console.log(s);

const Instance = () => {
  
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const split_by = 4;
  useEffect(() => {
    api
      .post("suggest/", {})
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
      navigate(`/step/2/?image=${name}`);
      console.log("Выбор №1");
      console.log(name);
      // console.log(event.target.src);
    },
    [navigate]
  )
  ;

  return (
    <InstanceRoot>
      <UnionFrameParent>
        <UnionFrame>
          <SortIcon>
            <H>
            Представьте, что вы пришли к дизайнеру, который может воплотить в жизнь любую вашу идею. С какой комнаты начнём?
            </H>
            <PhotoDisplay>
              <Div>
                
              </Div>
            </PhotoDisplay>
          </SortIcon>
        </UnionFrame>
        
        <Mainselectframe>
         
         <Popup
    trigger={<Mainselect>
      <Div>Кухня</Div>
      <AImageIcon loading="lazy" alt="" src="/kitchen.png"></AImageIcon>
      
     </Mainselect>}
    modal
    nested
  >
    {close => (
      <Modal>
        <Close onClick={close}>
          &times;
        </Close>
        <Div5> Пройдите “стильный” квиз, чтобы мы сделали рекомендацию именно для вас </Div5>
        
        
        <Buttonarea>
          
          <Button1 onClick={onText4Click}>
             Отлично, начнём!
          </Button1>
        </Buttonarea>
      </Modal>
    )}
  </Popup>

  <Popup
    trigger={<Mainselect>
      <Div>Гостиная</Div>
      <AImageIcon loading="lazy" alt="" src="/livingroom.png"></AImageIcon>
     </Mainselect>}
    modal
    nested
  >
    {close => (
      <Modal>
        <Close onClick={close}>
          &times;
        </Close>
        <Div5> Пройдите “стильный” квиз, чтобы мы сделали рекомендацию именно для вас </Div5>
        
        
        <Buttonarea>
        <Button1 onClick={onText4Click}>
             Отлично, начнём!
          </Button1>
        </Buttonarea>

      </Modal>
    )}
  </Popup>

  <Popup
    trigger={<Mainselect>
      <Div>Спальня</Div>
      <AImageIcon loading="lazy" alt="" src="/bedroom.png"></AImageIcon>
     </Mainselect>}
    modal
    nested
  >
    {close => (
      <Modal>
        <Close onClick={close}>
          &times;
        </Close>
        <Div5> Пройдите “стильный” квиз, чтобы мы сделали рекомендацию именно для вас </Div5>
        
        
        <Buttonarea>
          
        <Button1 onClick={onText4Click}>
             Отлично, начнём!
          </Button1>
          </Buttonarea>
      </Modal>
    )}
  </Popup>
  
         
         
        </Mainselectframe>
        

        
        
        

      </UnionFrameParent>
    </InstanceRoot>
  );
};

export default Instance;
