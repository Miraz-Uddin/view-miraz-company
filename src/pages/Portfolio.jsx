import React from "react";

export default function Portfolio() {
  return (
    <main id="main">
      {/* <!-- ======= Breadcrumbs ======= --> */}
      <section id="breadcrumbs" className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2>Portolio</h2>
            <ol>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>Portolio</li>
            </ol>
          </div>
        </div>
      </section>
      {/* <!-- End Breadcrumbs --> */}

      {/* <!-- ======= Portfolio Section ======= --> */}
      <section id="portfolio" className="portfolio">
        <div className="container">
          <div className="row" data-aos="fade-up">
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="portfolio-flters">
                <li data-filter="*" className="filter-active">
                  All
                </li>
                <li data-filter=".filter-app">App</li>
                <li data-filter=".filter-card">Card</li>
                <li data-filter=".filter-web">Web</li>
              </ul>
            </div>
          </div>

          <div className="row portfolio-container" data-aos="fade-up">
            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <img
                src={`${
                  import.meta.env.VITE_PUBLIC_URL
                }/assets/img/portfolio/portfolio-1.jpg`}
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>App 1</h4>
                <p>App</p>
                <a
                  href="./assets/img/portfolio/portfolio-1.jpg"
                  data-gall="portfolioGallery"
                  className="venobox preview-link"
                  title="App 1"
                >
                  <i className="bx bx-plus"></i>
                </a>
                <a
                  href="portfolio-details.html"
                  className="details-link"
                  title="More Details"
                >
                  <i className="bx bx-link"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <img
                src={`${
                  import.meta.env.VITE_PUBLIC_URL
                }/assets/img/portfolio/portfolio-2.jpg`}
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
                <a
                  href="./assets/img/portfolio/portfolio-2.jpg"
                  data-gall="portfolioGallery"
                  className="venobox preview-link"
                  title="Web 3"
                >
                  <i className="bx bx-plus"></i>
                </a>
                <a
                  href="portfolio-details.html"
                  className="details-link"
                  title="More Details"
                >
                  <i className="bx bx-link"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <img
                src={`${
                  import.meta.env.VITE_PUBLIC_URL
                }/assets/img/portfolio/portfolio-3.jpg`}
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>App 2</h4>
                <p>App</p>
                <a
                  href="./assets/img/portfolio/portfolio-3.jpg"
                  data-gall="portfolioGallery"
                  className="venobox preview-link"
                  title="App 2"
                >
                  <i className="bx bx-plus"></i>
                </a>
                <a
                  href="portfolio-details.html"
                  className="details-link"
                  title="More Details"
                >
                  <i className="bx bx-link"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <img
                src={`${
                  import.meta.env.VITE_PUBLIC_URL
                }/assets/img/portfolio/portfolio-4.jpg`}
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Card 2</h4>
                <p>Card</p>
                <a
                  href="./assets/img/portfolio/portfolio-4.jpg"
                  data-gall="portfolioGallery"
                  className="venobox preview-link"
                  title="Card 2"
                >
                  <i className="bx bx-plus"></i>
                </a>
                <a
                  href="portfolio-details.html"
                  className="details-link"
                  title="More Details"
                >
                  <i className="bx bx-link"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <img
                src={`${
                  import.meta.env.VITE_PUBLIC_URL
                }/assets/img/portfolio/portfolio-5.jpg`}
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Web 2</h4>
                <p>Web</p>
                <a
                  href="./assets/img/portfolio/portfolio-5.jpg"
                  data-gall="portfolioGallery"
                  className="venobox preview-link"
                  title="Web 2"
                >
                  <i className="bx bx-plus"></i>
                </a>
                <a
                  href="portfolio-details.html"
                  className="details-link"
                  title="More Details"
                >
                  <i className="bx bx-link"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <img
                src={`${
                  import.meta.env.VITE_PUBLIC_URL
                }/assets/img/portfolio/portfolio-6.jpg`}
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>App 3</h4>
                <p>App</p>
                <a
                  href="./assets/img/portfolio/portfolio-6.jpg"
                  data-gall="portfolioGallery"
                  className="venobox preview-link"
                  title="App 3"
                >
                  <i className="bx bx-plus"></i>
                </a>
                <a
                  href="portfolio-details.html"
                  className="details-link"
                  title="More Details"
                >
                  <i className="bx bx-link"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <img
                src={`${
                  import.meta.env.VITE_PUBLIC_URL
                }/assets/img/portfolio/portfolio-7.jpg`}
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Card 1</h4>
                <p>Card</p>
                <a
                  href="./assets/img/portfolio/portfolio-7.jpg"
                  data-gall="portfolioGallery"
                  className="venobox preview-link"
                  title="Card 1"
                >
                  <i className="bx bx-plus"></i>
                </a>
                <a
                  href="portfolio-details.html"
                  className="details-link"
                  title="More Details"
                >
                  <i className="bx bx-link"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <img
                src={`${
                  import.meta.env.VITE_PUBLIC_URL
                }/assets/img/portfolio/portfolio-8.jpg`}
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Card 3</h4>
                <p>Card</p>
                <a
                  href="./assets/img/portfolio/portfolio-8.jpg"
                  data-gall="portfolioGallery"
                  className="venobox preview-link"
                  title="Card 3"
                >
                  <i className="bx bx-plus"></i>
                </a>
                <a
                  href="portfolio-details.html"
                  className="details-link"
                  title="More Details"
                >
                  <i className="bx bx-link"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <img
                src={`${
                  import.meta.env.VITE_PUBLIC_URL
                }/assets/img/portfolio/portfolio-9.jpg`}
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
                <a
                  href="./assets/img/portfolio/portfolio-9.jpg"
                  data-gall="portfolioGallery"
                  className="venobox preview-link"
                  title="Web 3"
                >
                  <i className="bx bx-plus"></i>
                </a>
                <a
                  href="portfolio-details.html"
                  className="details-link"
                  title="More Details"
                >
                  <i className="bx bx-link"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Portfolio Section --> */}
    </main>
  );
}
