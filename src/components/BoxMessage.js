import React, { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase-config";

function BoxMessage() {

  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "users");
  useEffect(() => {

    const getPosts = async () => {

      const data = await getDocs(postsCollectionRef);

      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, []);

  return (
    <> {postLists.map((user) => {
      return (
      <div className="friend">
            <div>

              <div>
                <p>{user.message}</p>
              </div>
              <small>{user.postText}</small>
            </div>
      </div>
      );
        })}
        {postLists.map((user) => {
      return (
      <div className="me">
            <div>
              <div>
                <p>{user.message}</p>
              </div>
              <small>{user.postText}</small>
            </div>
      </div>
      );
        })}

    </>
  );
}

export default BoxMessage;
