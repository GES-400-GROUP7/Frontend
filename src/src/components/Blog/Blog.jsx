import "./Blog.scss";

function Blog(props) {
  console.log(props);
  return (
    <div className="Blog">
      <div>
        <img className="image1" src={`/images/${props.item.coverImg}`} alt="" />
        <b>{props.item.title}</b>
        <div className="flex-1">
          <div>
            <img
              className="image2"
              src={`/images/${props.item.authImg}`}
              alt=""
            />
          </div>
          <div>
            <h3>{props.item.author}</h3>
            <div className="flex-2">
              <p>{props.item.date}</p>
              <p>{props.item.char}</p>
              <p>{props.item.time}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
