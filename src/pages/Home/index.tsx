import IntroContent from "../../content/IntroContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ProductContent2 from "../../content/ProductContent copy.json";
import ProductContent3 from "../../content/ProductContent copy 2.json";
import ProductContent4 from "../../content/ProductContent copy 3.json";
import ProductContent5 from "../../content/ProductContent copy 4.json";
import Container from "../../common/Container";
import ScrollToTop from "../../common/ScrollToTop";
import ContentBlock from "../../components/ContentBlock";
import Header from "../../components/Header";

const Home = () => {
  return (
    <div>
      <Header/>
    <Container>
      <ScrollToTop />
      <ContentBlock
        type="intro"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="developer.svg"
        id="intro"
      />
      <ContentBlock
        type="left"
        title={AboutContent.title}
        content={AboutContent.text}
        button={AboutContent.button}
        icon="graphs.svg"
        id="about"
      />
      <ContentBlock
        type="right"
        title={MissionContent.title}
        content={MissionContent.text}
        button={MissionContent.button}
        icon="product-launch.svg"
        id="mission"
      />
      <ContentBlock
        type="left"
        title={ProductContent.title}
        content={ProductContent.text}
        button={ProductContent.button}
        icon="waving.svg"
        id="product"
      />
      <ContentBlock
        type="right"
        title={ProductContent2.title}
        content={ProductContent2.text}
        button={ProductContent2.button}
        icon="waving.svg"
        id="product"
      />
      <ContentBlock
        type="left"
        title={ProductContent3.title}
        content={ProductContent3.text}
        button={ProductContent3.button}
        icon="waving.svg"
        id="product"
      />
      <ContentBlock
        type="right"
        title={ProductContent4.title}
        content={ProductContent4.text}
        button={ProductContent4.button}
        icon="waving.svg"
        id="product"
      />
      <ContentBlock
        type="left"
        title={ProductContent5.title}
        content={ProductContent5.text}
        button={ProductContent5.button}
        icon="waving.svg"
        id="product"
      />
      
    </Container>
    </div>
  );
};

export default Home;
