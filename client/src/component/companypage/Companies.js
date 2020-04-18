import React, { Component } from "react";
import Companylist from "./Companylist";

class Companies extends Component {
  render() {
    const { companies } = this.props;

    return (
      <div>
        {companies.map((companylist) => {
          return (
            <Companylist
              key={companylist.id}
              company={companylist.company}
              details={companylist.details}
              location={companylist.location}
              sector={companylist.sector}
              language={companylist.language}
              extra={companylist.extra}
            />
          );
        })}
      </div>
    );
  }
}

export default Companies;
