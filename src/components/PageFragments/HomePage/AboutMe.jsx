import React from 'react';
import { Row, Col } from 'antd';
import AboutTile from '../../AbouTile';
/* import { stripTags, domHtml } from '../../../utils/stripTags'; */
import SEO from '../../Seo';

const pageText = {
  paraOne: `Hello !! My name is Priyanka Mishra. I'm a full stack web developer who is
    passionate about various web technologies. I like to experiment with different web
    technologies. I have an experience of nearly 4 years working with  java, J2EE and frontend
    technologies and well versed in Agile methodologies and software development processes. 
    Building fancy UI's just like this one that your seeing 😅 and writing blogs about tech stacks
    is what Rolwin loves to do. Check my blog which I update every week for some Javascript and some 
    cool notes on web technologies.`,
  /* paraTwo: `Currently I work mostly with Javascript technologies like ReactJS and NodeJS. I also
  have hands on experience working with cloud infrastructures like <b>AWS/GCP</b>
   and have deployed applications
  keeping scalability in mind. Docker, Kubernetes, Jenkins, SonarQube are some of the cool
  tools I use for <b>CI/ CD</b>. I'm always a learner and a self taught programmer.`, */
};
const AboutMe = () => {
  const description = `${pageText.paraOne}`; /*  `${ pageText.paraOne } ${stripTags(pageText.paraTwo)}` */
  return (
    <>
      <div>
        <SEO
          title="About"
          description={description}
          path=""
          keywords={['Priyanks', 'Mishra', 'Thane', 'FullStack developer', 'Javascript', 'Java', 'TVC', 'Enovia']}
        />
        <h1 className="titleSeparate">About Me</h1>
        <p>
          {pageText.paraOne}
        </p>
        {/* <p dangerouslySetInnerHTML={domHtml(pageText.paraTwo)} /> */}
      </div>
      <Row gutter={[20, 20]}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="location.png"
            height={60}
            alt="location image"
            textH4="Born and bought up in"
            textH3="Pratapgarh, UP, India"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="graduation.png"
            alt="graduation image"
            textH4="Pursued B.Tech in"
            textH3="Information Technology"
            height={60}
            width={60}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="novel.png"
            alt="reading image"
            textH4="Love Novel Reading"
            textH3="Novel + Me = Happiness"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="passenger.png"
            alt="traveller image"
            textH4="Love Travelling"
            textH3="Love Mountains"
          />
        </Col>
        {/* <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="meeting.png"
            alt="meeting image"
            textH4="Socially Awkward"
            textH3="At times"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="motorcycle.png"
            alt="motorcycle image"
            textH4="Love Riding"
            textH3="Biker for life"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="web.png"
            alt="web image"
            textH4="Self Taught Programmer"
            textH3="Thanks to the Web Resources"
            height={60}
            width={60}
          />
  </Col> */}

      </Row>
    </>
  );
};
export default AboutMe;
