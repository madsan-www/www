import * as React from "react";
import { Link } from "gatsby";
import { HandThumbsUp } from "react-bootstrap-icons";
import useTranslations from "../components/useTranslations";

const Thanks = () => {
  const Lang = useTranslations().translationsTerms[0];

  return (
    <section className="bg-home bg-light d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="text-center">
              <div
                className="icon d-flex align-items-center justify-content-center bg-soft-primary rounded-circle mx-auto"
                style={{ height: 90, width: 90 }}
              >
                <HandThumbsUp className="uil uil-thumbs-up align-middle h1 mb-0"/>
              </div>
              <h1 className="my-4 fw-bold">{Lang.thanks}</h1>
              <Link to="/" className="btn btn-soft-primary mt-3">
              {Lang.goToHome}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Thanks;
