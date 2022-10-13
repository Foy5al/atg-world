import React from "react";
import { Container, Tab, Tabs } from "react-bootstrap";
import PostCardContainer from "../PostCardContainer/PostCardContainer";
import "./PostCategory.css";

const PostCategory = () => {
  return (
    <Container>
      <Tabs
        defaultActiveKey="allpost"
        id="uncontrolled-tab-example"
        className="mb-3 mt-3"
      >
        <Tab eventKey="allpost" title="All Posts (32)">
          <div>
            <PostCardContainer />
          </div>
        </Tab>
        <Tab eventKey="article" title="Article">
          <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam id
            ad atque voluptatum commodi nam magni accusantium at aliquam unde!
          </div>
        </Tab>
        <Tab eventKey="event" title="Event">
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, quo!
            Fugit nam sapiente nisi sequi, distinctio quod nulla ipsa, excepturi
            optio, libero pariatur obcaecati sunt.
          </div>
        </Tab>

        <Tab eventKey="education" title="Education">
          <div>Lorem</div>
        </Tab>
        <Tab eventKey="job" title="Job">
          <div>Lorem</div>
        </Tab>
      </Tabs>
    </Container>
  );
};

export default PostCategory;
