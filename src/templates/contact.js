import React from "react";
import { graphql } from "gatsby";

const Contact = props => {
  const post = props.data.markdownRemark;

  return (
    <>
      <section className="section pt-5 mt-4">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 p-0">
              <div className="card map border-0">
                <div className="card-body p-0">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.4550942780684!2d27.167234515336684!3d38.43095587964531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b96369ecba1ebf%3A0xd0f7b9616ce1f59d!2sMADSAN%20M%C3%BChendislik%20Hizmetleri%20Ltd.%20%C5%9Eti.!5e0!3m2!1str!2str!4v1637513686849!5m2!1str!2str"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}
        <div className="container mt-100 mt-60">
          <div className="row align-items-center">
            <div className="m-auto col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0 order-2 order-md-1">
              {/* <div className="title-heading ms-lg-4 text-center">
              <h4 className="mb-4">Contact Form</h4>
            </div> */}
              <div className="card custom-form rounded border-0 shadow p-4">
                <form
                  method="post"
                  name="myForm"
                  onsubmit="return validateForm()"
                >
                  <p id="error-msg" className="mb-0" />
                  <div id="simple-msg" />
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Your Name <span className="text-danger">*</span>
                        </label>
                        <div className="form-icon position-relative">
                          <i
                            data-feather="user"
                            className="fea icon-sm icons"
                          />
                          <input
                            name="name"
                            id="name"
                            type="text"
                            className="form-control ps-5"
                            placeholder="Name :"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Your Email <span className="text-danger">*</span>
                        </label>
                        <div className="form-icon position-relative">
                          <i
                            data-feather="mail"
                            className="fea icon-sm icons"
                          />
                          <input
                            name="email"
                            id="email"
                            type="email"
                            className="form-control ps-5"
                            placeholder="Email :"
                          />
                        </div>
                      </div>
                    </div>
                    {/*end col*/}
                    <div className="col-12">
                      <div className="mb-3">
                        <label className="form-label">Subject</label>
                        <div className="form-icon position-relative">
                          <i
                            data-feather="book"
                            className="fea icon-sm icons"
                          />
                          <input
                            name="subject"
                            id="subject"
                            className="form-control ps-5"
                            placeholder="subject :"
                          />
                        </div>
                      </div>
                    </div>
                    {/*end col*/}
                    <div className="col-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Comments <span className="text-danger">*</span>
                        </label>
                        <div className="form-icon position-relative">
                          <i
                            data-feather="message-circle"
                            className="fea icon-sm icons clearfix"
                          />
                          <textarea
                            name="comments"
                            id="comments"
                            rows={4}
                            className="form-control ps-5"
                            placeholder="Message :"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="d-grid">
                        <button
                          type="submit"
                          id="submit"
                          name="send"
                          className="btn btn-primary"
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                    {/*end col*/}
                  </div>
                  {/*end row*/}
                </form>
              </div>
              {/*end custom-form*/}
            </div>
            {/*end col*/}

            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}
      </section>
      {/*end section*/}
      {/* End contact */}
    </>
  );
};

export const query = graphql`
  query Contact($locale: String!, $title: String!) {
    markdownRemark(
      frontmatter: { title: { eq: $title } }
      fields: { locale: { eq: $locale } }
    ) {
      frontmatter {
        title
        description
      }
      html
    }
  }
`;

export default Contact;
