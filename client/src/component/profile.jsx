import React, { Component } from "react";
// import { connect } from "react-redux";
// import * as AdminActions from "../store/actions/adminAction";
// import { Link } from "react-router-dom";
// import './assests/profile.css'
class Profile extends Component {
  // async componentDidMount() {
  //   if (this.props.auth.token)
  //     await this.props.getSingleUser(
  //       this.props.auth.user.userId,
  //       this.props.auth.token
  //     );
  // }
  render() {
    // const users = this.props.admin.user;
    // console.log("user/profile", users);
    return (
      <div>
        <h1
          style={{
            color: "red",
            position: "absolute",
            top: "150px",
            left:'400px'
          }}
        >
         
          Your Profile Will be here !<br/><hr/>
          Loading...
        </h1>
      </div>
    );
  }
}
export default Profile;

// const mapStateToProps = (state) => {
//   return {
//     auth: state.auth,
//     admin: state.admin,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     getSingleUser: (id, token) => {
//       dispatch(AdminActions.getSingleUser(id, token));
//     },
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(Profile);
