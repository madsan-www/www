import React from "react";
import { graphql, navigate } from "gatsby";
import SEO from "../components/SEO";

function encode(data) {
  const formData = new FormData();

  for (const key of Object.keys(data)) {
    formData.append(key, data[key]);
  }
  return formData;
}

const Contact = props => {
  const page = props.data.markdownRemark;
  const formLayer = page.frontmatter.form[0];

  const [state, setState] = React.useState({});

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state
      })
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  return (
    <>
      <SEO
        title={page.frontmatter.title}
      />
      <section className="section pt-5 mt-4">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 p-0">
              <div className="card map border-0">
                <div className="card-body p-0">
                  <iframe
                    src={page.frontmatter.mapURL}
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
              <div className="title-heading ms-lg-4 text-center">
                <h4 className="mb-4">{formLayer.title}</h4>
                <p class="text-muted">{formLayer.description}</p>
              </div>
              <div className="card custom-form rounded border-0 shadow p-4">
                <form
                  name="contact"
                  method="post"
                  action="/thanks/"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <p id="error-msg" className="mb-0" />
                  <div id="simple-msg" />
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">
                          {formLayer.name}{" "}
                          <span className="text-danger">*</span>
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
                            className="form-control"
                            placeholder={formLayer.name}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">
                          {formLayer.email}{" "}
                          <span className="text-danger">*</span>
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
                            className="form-control"
                            onChange={handleChange}
                            placeholder={formLayer.email}
                          />
                        </div>
                      </div>
                    </div>
                    {/*end col*/}
                    <div className="col-12">
                      <div className="mb-3">
                        <label className="form-label">
                          {formLayer.subject}
                        </label>
                        <div className="form-icon position-relative">
                          <i
                            data-feather="book"
                            className="fea icon-sm icons"
                          />
                          <input
                            name="subject"
                            id="subject"
                            className="form-control"
                            onChange={handleChange}
                            placeholder={formLayer.subject}
                          />
                        </div>
                      </div>
                    </div>
                    {/*end col*/}
                    <div className="col-12">
                      <div className="mb-3">
                        <label className="form-label">
                          {formLayer.message}{" "}
                          <span className="text-danger">*</span>
                        </label>
                        <div className="form-icon position-relative">
                          <i
                            data-feather="message-circle"
                            className="fea icon-sm icons clearfix"
                          />
                          <textarea
                            name="message"
                            id="message"
                            rows={4}
                            className="form-control"
                            onChange={handleChange}
                            placeholder={formLayer.message}
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
        mapURL
        form {
          title
          description
          name
          email
          subject
          message
          sendMessage
        }
      }
      html
    }
  }
`;

export default Contact;
