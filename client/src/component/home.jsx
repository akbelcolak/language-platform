import React, { Component } from "react";
import { connect } from "react-redux";
import * as AdminActions from "../store/actions/adminAction";
class Home extends Component {
  async componentDidMount() {
    if (this.props.auth.token)
      await this.props.getSingleUser(
        this.props.auth.user.userId,
        this.props.auth.token
      );
  }
  render() {
    return (
      <div>
        <h1
          style={{
            color: "red",
            position: "absolute",
            top: "150px",
            left: "300px",
            margin: "auto",
          }}
        >
         <span style={{
            color: "red",
            position: "absolute",
            left: "200px",
            marginTop: "-50px",
          }}>Welcome Home</span> 
         This Page are going to be ready Soon ...!
        </h1>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    admin: state.admin,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getSingleUser: (id, token) => {
      dispatch(AdminActions.getSingleUser(id, token));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);

