import { useEffect, useState } from "react";
import { firestore } from "../firebase";
import { useParams } from "react-router-dom";
import Radium from "radium";

function PostDetail() {
  const [post, setPost] = useState({});
  const { postId } = useParams();

  useEffect(() => {
    firestore
      .collection("posts")
      .doc(postId)
      .get()
      .then((snapShot) => {
        //  console.log(snapShot.data());
        setPost(snapShot.data());
      });
  }, []);

  return (
    <div style={styles.PostDetail}>
      <h1>{post.title}</h1>
      <p style={styles.postContent}>{post.content}</p>
    </div>
  );
}

const styles = {
  PostDetail: {
    textAlign: "center",
  },
  postContent: {
    display: "inline",
    //  ':hover':{
    //   color: 'red'
    //   }
  },
};

export default Radium(PostDetail);
