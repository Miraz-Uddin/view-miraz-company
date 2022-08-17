import React from "react";
import BlogsArticle from "./BlogsArticle";

export default function Blogs({ articles }) {
  return (
    <main id="main">
      {/* <!-- ======= Breadcrumbs ======= --> */}
      <section id="breadcrumbs" className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2>Blog</h2>
            <ol>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>Blog</li>
            </ol>
          </div>
        </div>
      </section>
      {/* <!-- End Breadcrumbs --> */}

      {/* <!-- ======= Blog Section ======= --> */}
      <section id="blog" className="blog">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 entries">
              {articles &&
                articles.map((article) => (
                  <BlogsArticle key={article.id} article={article} />
                ))}

              <div className="blog-pagination">
                <ul className="justify-content-center">
                  <li className="disabled">
                    <i className="icofont-rounded-left"></i>
                  </li>
                  <li>
                    <a href="#">1</a>
                  </li>
                  <li className="active">
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icofont-rounded-right"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- End blog entries list --> */}

            <div className="col-lg-4">
              <div className="sidebar" data-aos="fade-left">
                <h3 className="sidebar-title">Search</h3>
                <div className="sidebar-item search-form">
                  <form action="">
                    <input type="text" />
                    <button type="submit">
                      <i className="icofont-search"></i>
                    </button>
                  </form>
                </div>
                {/* <!-- End sidebar search formn--> */}

                <h3 className="sidebar-title">Categories</h3>
                <div className="sidebar-item categories">
                  <ul>
                    <li>
                      <a href="#">
                        General <span>(25)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Lifestyle <span>(12)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Travel <span>(5)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Design <span>(22)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Creative <span>(8)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Educaion <span>(14)</span>
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <!-- End sidebar categories--> */}

                <h3 className="sidebar-title">Recent Posts</h3>
                <div className="sidebar-item recent-posts">
                  <div className="post-item clearfix">
                    <img
                      src={`${
                        import.meta.env.VITE_PUBLIC_URL
                      }/assets/img/blog-recent-posts-1.jpg`}
                      alt=""
                    />
                    <h4>
                      <a href="blog-single.html">
                        Nihil blanditiis at in nihil autem
                      </a>
                    </h4>
                    <time dateTime="2020-01-01">Jan 1, 2020</time>
                  </div>

                  <div className="post-item clearfix">
                    <img
                      src={`${
                        import.meta.env.VITE_PUBLIC_URL
                      }/assets/img/blog-recent-posts-2.jpg`}
                      alt=""
                    />
                    <h4>
                      <a href="blog-single.html">Quidem autem et impedit</a>
                    </h4>
                    <time dateTime="2020-01-01">Jan 1, 2020</time>
                  </div>

                  <div className="post-item clearfix">
                    <img
                      src={`${
                        import.meta.env.VITE_PUBLIC_URL
                      }/assets/img/blog-recent-posts-3.jpg`}
                      alt=""
                    />
                    <h4>
                      <a href="blog-single.html">
                        Id quia et et ut maxime similique occaecati ut
                      </a>
                    </h4>
                    <time dateTime="2020-01-01">Jan 1, 2020</time>
                  </div>

                  <div className="post-item clearfix">
                    <img
                      src={`${
                        import.meta.env.VITE_PUBLIC_URL
                      }/assets/img/blog-recent-posts-4.jpg`}
                      alt=""
                    />
                    <h4>
                      <a href="blog-single.html">
                        Laborum corporis quo dara net para
                      </a>
                    </h4>
                    <time dateTime="2020-01-01">Jan 1, 2020</time>
                  </div>

                  <div className="post-item clearfix">
                    <img
                      src={`${
                        import.meta.env.VITE_PUBLIC_URL
                      }/assets/img/blog-recent-posts-5.jpg`}
                      alt=""
                    />
                    <h4>
                      <a href="blog-single.html">
                        Et dolores corrupti quae illo quod dolor
                      </a>
                    </h4>
                    <time dateTime="2020-01-01">Jan 1, 2020</time>
                  </div>
                </div>
                {/* <!-- End sidebar recent posts--> */}

                <h3 className="sidebar-title">Tags</h3>
                <div className="sidebar-item tags">
                  <ul>
                    <li>
                      <a href="#">App</a>
                    </li>
                    <li>
                      <a href="#">IT</a>
                    </li>
                    <li>
                      <a href="#">Business</a>
                    </li>
                    <li>
                      <a href="#">Business</a>
                    </li>
                    <li>
                      <a href="#">Mac</a>
                    </li>
                    <li>
                      <a href="#">Design</a>
                    </li>
                    <li>
                      <a href="#">Office</a>
                    </li>
                    <li>
                      <a href="#">Creative</a>
                    </li>
                    <li>
                      <a href="#">Studio</a>
                    </li>
                    <li>
                      <a href="#">Smart</a>
                    </li>
                    <li>
                      <a href="#">Tips</a>
                    </li>
                    <li>
                      <a href="#">Marketing</a>
                    </li>
                  </ul>
                </div>
                {/* <!-- End sidebar tags--> */}
              </div>
              {/* <!-- End sidebar --> */}
            </div>
            {/* <!-- End blog sidebar --> */}
          </div>
        </div>
      </section>
      {/* <!-- End Blog Section --> */}
    </main>
  );
}
