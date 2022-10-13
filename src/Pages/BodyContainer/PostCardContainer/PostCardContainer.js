import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import {
  ArrowRight,
  CaretDownFill,
  GeoAlt,
  PeopleFill,
} from "react-bootstrap-icons";
import sarthak from "../../../assets/Rectangle3.png";
import post1 from "../../../assets/Rectangle5.png";
import PostCard from "../PostCard/PostCard";

const data = [
  {
    id: 1,
    title: "What if famous brands had regular fonts? Meet RegulaBrands!",
    description:
      "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
    author: {
      name: "Sarthak Kamra",
      img: sarthak,
    },
    views: 1.4,
    img: post1,
    category: "Article",
  },
  {
    id: 2,
    title: "What if famous brands had regular fonts? Meet RegulaBrands!",
    description:
      "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
    author: {
      name: "Sarthak Kamra",
      img: sarthak,
    },
    views: 1.4,
    img: post1,
    category: "Article",
  },
  {
    id: 3,
    title: "What if famous brands had regular fonts? Meet RegulaBrands!",
    description:
      "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
    author: {
      name: "Sarthak Kamra",
      img: sarthak,
    },
    views: 1.4,
    img: post1,
    category: "Article",
  },
  {
    id: 4,
    title: "What if famous brands had regular fonts? Meet RegulaBrands!",
    description:
      "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
    author: {
      name: "Sarthak Kamra",
      img: sarthak,
    },
    views: 1.4,
    img: post1,
    category: "Article",
  },
];

const PostCardContainer = () => {
  return (
    <div>
      <Row className="mx-auto">
        <Col sm={7}>
          {data.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </Col>
        <Col sm={4} className="text-end">
          <div style={{ marginTop: -60, marginBottom: 50, marginLeft: "auto" }}>
            <Button variant="light">
              Write a Post <CaretDownFill />
            </Button>
            <Button variant="primary">
              +<PeopleFill /> Join Group
            </Button>
          </div>
          <div>
            <GeoAlt />
            <input type="text" defaultValue={"Noida, India"} />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default PostCardContainer;
