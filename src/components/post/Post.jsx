import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.unsplash.com/photo-1627156863760-f49b81d8ab77?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis natus
        itaque labore nobis nesciunt vero possimus, aliquam non nostrum fugit,
        sed soluta doloremque veniam aperiam tenetur aut deserunt iure maxime.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis natus
        itaque labore nobis nesciunt vero possimus, aliquam non nostrum fugit,
        sed soluta doloremque veniam aperiam tenetur aut deserunt iure maxime.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis natus
        itaque labore nobis nesciunt vero possimus, aliquam non nostrum fugit,
        sed soluta doloremque veniam aperiam tenetur aut deserunt iure maxime.
      </p>
    </div>
  );
}
