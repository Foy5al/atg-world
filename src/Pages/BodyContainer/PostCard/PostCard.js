import React from "react";
import { Card, Stack } from "react-bootstrap";
import eye from "../../../assets/icon/eye.svg";
import share from "../../../assets/icon/share.svg";

const PostCard = ({ post }) => {
  console.log(post.description);
  return (
    <>
      <Card className="mb-3">
        <Card.Img variant="top" src={post.img} />
        <Card.Body>
          <p style={{ fontSize: "18px", fontWeight: 500 }}>{post.category}</p>
          <Card.Title>{post.title} Card Title </Card.Title>
          <Card.Text>{post.description}</Card.Text>

          <Stack direction="horizontal" gap={3}>
            <div>
              <img
                src={post.author.img}
                className="rounded-circle"
                style={{ width: "48px" }}
                alt="Avatar"
              />
              <span
                className="ms-2"
                style={{ fontSize: "18px", fontWeight: 600 }}
              >
                {post.author.name}
              </span>
            </div>

            <div className="ms-auto">
              <img className="me-1" src={eye} alt="view_iocn" />
              {post.views}k views
            </div>
            <div style={{ cursor: "pointer" }} className="bg-light px-3 py-2">
              <img style={{ width: 14 }} src={share} alt="share_icon" />
            </div>
          </Stack>
        </Card.Body>
      </Card>
    </>
  );
};

export default PostCard;
