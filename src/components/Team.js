import * as React from "react";
import TeamData from "../../data/team.json";
import { useLocale } from "../hooks/locale";

function Team() {
  const { locale } = useLocale();
  const isDefaultLang = locale === "tr" ? true : false;

  const data = isDefaultLang ? TeamData.tr : TeamData.en;

  return (
    <>
      <section className="section bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="section-title mb-4 pb-2">
                <h4 className="title mb-4">{data.title}</h4>
                <p className="text-muted para-desc mx-auto mb-0">
                  {data.desc}
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {TeamData.members.map((member, index) => {
              return (
                <div key={`${index}`} className="col-lg-3 col-md-6 mt-4 pt-2">
                  <div className="card team text-center bg-transparent border-0">
                    <div className="card-body p-0">
                      <div className="position-relative">
                        <img
                          src={member.image}
                          className="img-fluid avatar avatar-ex-large rounded-circle"
                          alt={member.name}
                        />
                        <ul className="list-unstyled social-icon team-icon mb-0 mt-4">
                          <li className="list-inline-item">
                            {member.linkedin ? (
                              <a href={member.linkedin} className="rounded">
                                <i
                                  data-feather="linkedin"
                                  className="fea icon-sm fea-social"
                                />
                              </a>
                            ) : null}
                          </li>
                        </ul>
                      </div>
                      <div className="content pt-3 pb-3">
                        <h5 className="mb-0">
                          <span className="text-dark">{member.name}</span>
                        </h5>
                        <small className="designation text-muted">
                          {isDefaultLang ? member.title : member.titleEN}
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Team;
