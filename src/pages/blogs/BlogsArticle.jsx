import React from "react";
import { Link } from "react-router-dom";
import ImageFluid from "../../components/ImageFluid";

export default function BlogsArticle({ article }) {
  const {
    id,
    thumbnail,
    title,
    author,
    publicationDate,
    commentsCount,
    content,
  } = article;
  return (
    <article className="entry" data-aos="fade-up">
      <div className="entry-img">
        <ImageFluid imageName={thumbnail.split("/")[3].split(".")[0]} />
      </div>

      <h2 className="entry-title">
        <Link to={id}>{title}</Link>
      </h2>

      <div className="entry-meta">
        <ul>
          <li className="d-flex align-items-center">
            <i className="icofont-user"></i> <Link to={id}>{author}</Link>
          </li>
          <li className="d-flex align-items-center">
            <i className="icofont-wall-clock"></i>{" "}
            <Link to={id}>
              <time dateTime="2020-01-01">{publicationDate}</time>
            </Link>
          </li>
          <li className="d-flex align-items-center">
            <i className="icofont-comment"></i>{" "}
            <a href="blog-single.html">{commentsCount}</a>
          </li>
        </ul>
      </div>

      <div className="entry-content">
        <p>{content}</p>
        <div className="read-more">
          <Link to={`/blogs/${id}`}>Read More</Link>
        </div>
      </div>
    </article>
  );
}
