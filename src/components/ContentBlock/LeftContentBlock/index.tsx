import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Button } from "../../../common/Button";
import { SvgIcon } from "../../../common/SvgIcon";
import { ContentBlockProps } from "../types";
import { Fade } from "react-awesome-reveal";
import {
  LeftContentSection,
  Content,
  MinTitle,
  ContentWrapper,
  ButtonWrapper,
} from "./styles";
import { addSyntheticLeadingComment } from "typescript";
import axios from "axios";
import { useAuth } from "../../../contexts/AuthContext";

const chat = new Map();
chat.set("Fashion",44013);
chat.set("Beauty",44101);
chat.set("Home And Furniture",44102);
chat.set("Luggage",44103);
chat.set("Electronics",44104);
chat.set("Fitness and Sports",44105);
chat.set("Kids",44106);

const LeftContentBlock = ({
  icon,
  title,
  content,
  button,
  t,
  id,
}: ContentBlockProps) => {
  const { currentUser } = useAuth();
  const user = currentUser;
  const addChat = (title: string) => {
    let formdata = new FormData();
    const username=user.email;
            formdata.append("username", username);
            const chatid=chat.get(title);
            console.log(chatid);
            axios
              .post(
                `https://api.chatengine.io/chats/${chatid}/people/`,
                formdata,
                {
                  headers: {
                    "project-id": "ac552d08-a18d-406c-8c25-0fe80ab4d1dc",
                    "user-name": "tanvi.m488@gmail.com",
                    "user-secret": "12345678",
                  },
                }
              )
              .catch((e) => console.log("e", e.response));
    };
  return (
    <LeftContentSection>
      <Fade direction="left">
        <Row justify="space-between" align="middle" id={id}>
          <Col lg={11} md={11} sm={12} xs={24}>
            <SvgIcon src={icon} width="100%" height="100%" />
          </Col>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <MinTitle>{t(title)}</MinTitle>
              <Content>{t(content)}</Content>
              <ButtonWrapper>
                {typeof button === "object" &&
                  button.map((item: any, id: number) => {
                    return (
                      <Button
                        key={id}
                        color={item.color}
                        fixedWidth={true}
                        onClick={()=>addChat(title)}
                      >
                        {t(item.title)}
                      </Button>
                    );
                  })}
              </ButtonWrapper>
            </ContentWrapper>
          </Col>
        </Row>
      </Fade>
    </LeftContentSection>
  );
};

export default withTranslation()(LeftContentBlock);
