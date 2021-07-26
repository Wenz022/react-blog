import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          alt=""
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Safak</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem,
          officiis nesciunt temporibus distinctio ipsam iste quod qui veritatis
          excepturi omnis cupiditate? Expedita, quibusdam debitis at facere
          beatae minus eum recusandae. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Voluptatem, officiis nesciunt temporibus distinctio
          ipsam iste quod qui veritatis excepturi omnis cupiditate? Expedita,
          quibusdam debitis at facere beatae minus eum recusandae. Lorem ipsum
          dolor sit amet consectetur, adipisicing elit. Voluptatem, officiis
          nesciunt temporibus distinctio ipsam iste quod qui veritatis excepturi
          omnis cupiditate? Expedita, quibusdam debitis at facere beatae minus
          eum recusandae. Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Voluptatem, officiis nesciunt temporibus distinctio ipsam iste
          quod qui veritatis excepturi omnis cupiditate? Expedita, quibusdam
          debitis at facere beatae minus eum recusandae. Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Voluptatem, officiis nesciunt
          temporibus distinctio ipsam iste quod qui veritatis excepturi omnis
          cupiditate? Expedita, quibusdam debitis at facere beatae minus eum
          recusandae. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Voluptatem, officiis nesciunt temporibus distinctio ipsam iste quod
          qui veritatis excepturi omnis cupiditate? Expedita, quibusdam debitis
          at facere beatae minus eum recusandae. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Voluptatem, officiis nesciunt
          temporibus distinctio ipsam iste quod qui veritatis excepturi omnis
          cupiditate? Expedita, quibusdam debitis at facere beatae minus eum
          recusandae. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Voluptatem, officiis nesciunt temporibus distinctio ipsam iste quod
          qui veritatis excepturi omnis cupiditate? Expedita, quibusdam debitis
          at facere beatae minus eum recusandae.
        </p>
      </div>
    </div>
  );
}
