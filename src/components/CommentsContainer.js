import React, { useEffect, useState } from "react";
import { COMMENTS } from "../utils/constants";

const CommentsContainer = ({ id }) => {
  const [commentData, setCommentData] = useState([]);
  useEffect(() => {
    getcomments();
  }, []);
  const a = [1, 2, 4, 5, 6, 7];
  const getcomments = async () => {
    // let commentsList = await fetch(COMMENTS + id);
    // let commentsListJson = commentsList.json();
    // setCommentData(commentsListJson);
    // console.log(commentsListJson);
  };
  return (
    <div className="commentsContainer">
      {a.map((i) => (
        <div className="comments">
          <div className="flex row">
            <div>icon</div>
            <div className="flex column">
              <span>name</span>
              <span>duration</span>
            </div>
            <div>comment text</div>
          </div>
          {/* <div>
            <span>up</span>
            <span>down</span>
            <span>Reply</span>
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default CommentsContainer;
