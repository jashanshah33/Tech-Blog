import { firestore } from "../firebase";
import { usePosts } from "../hooks";
import React from "react";
// import css from './button.module.css';
import styled, { css } from "styled-components";

const ButtonStyles = styled.button`
  height: 33px;
  background: ${(props) => (props.primary ? "#4caf50" : "blue")};
  border: 0;
  color: #fff;
  padding: 8px;
  font-size: 15px;
  border-radius: 3px;
  cursor: pointer;
  margin-right: 20px;

  ${(props) =>
    props.whoo &&
    css`
      border: 4px solid ${props.bgColor};
    `}
`;

function CreatePost() {
  const title = usePosts("");
  const subTitle = usePosts("");
  const content = usePosts("");

  function reset() {
    title.setValue("");
    subTitle.setValue("");
    content.setValue("");
  }

  const handleSubmition = (e) => {
    e.preventDefault();

    // console.log('Title', title);
    // console.log('SubTitle', subTitle);
    // console.log('Content', content);

    firestore.collection("posts").add({
      title: title.value,
      subTitle: subTitle.value,
      content: content.value,
      createdAt: new Date(),
    });

    alert("Post Added");
    reset();
  };

  return (
    <div className="create-post">
      <h1>Create Post</h1>
      <form onSubmit={handleSubmition}>
        <div className="form-field">
          <label>Title</label>
          <input {...title} />
        </div>

        <div className="form-field">
          <label>Sub-title</label>
          <input {...subTitle} />
        </div>

        <div className="form-field">
          <label>Content</label>
          <textarea {...content}></textarea>
        </div>

        <ButtonStyles>Create Post</ButtonStyles>
        {/* <ButtonStyles whoo primary bgColor="red">Create Post</ButtonStyles> */}
      </form>
    </div>
  );
}

export default CreatePost;
