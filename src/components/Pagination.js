import React from "react";
import propTypes from "prop-types";
import LocalizedLink from "./LocalizedLink";
import useTranslations from "./useTranslations";

const Pagination = ({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPage,
  nextPage
}) => {
  return (
    <div className="m-auto  text-center w-100">
      <nav
        className="list-unstyled"
        role="navigation"
        aria-label="Pagination Navigation"
      >
        <ul className=" list-unstyled">
          {!isFirst && <LocalizedLink to={prevPage}>←</LocalizedLink>}
          <li className="m-1">
            {currentPage} / {numPages}
          </li>

          <li>{!isLast && <LocalizedLink to={nextPage}> →</LocalizedLink>}</li>
        </ul>
      </nav>
    </div>
  );
};

Pagination.propTypes = {
  isFirst: propTypes.bool.isRequired,
  isLast: propTypes.bool.isRequired,
  currentPage: propTypes.number.isRequired,
  numPages: propTypes.number.isRequired,
  prevPage: propTypes.string,
  nextPage: propTypes.string
};

export default Pagination;
