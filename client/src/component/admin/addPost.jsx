import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import * as AdminActions from "../../store/actions/adminAction";
import Paper from "@material-ui/core/Paper";
import { withFormik, Form } from "formik";
import { FormikTextField, FormikSelectField } from "formik-material-fields";
import Button from "@material-ui/core/Button";
import ImageIcon from "@material-ui/icons/Image";
import SaveIcon from "@material-ui/icons/Save";
import { withRouter } from "react-router-dom";
import * as Yup from "yup";

/* global $ */
const styles = (theme) => ({
  container: {
    margin: theme.spacing(3),
    display: "flex",
    flexDirection: "row wrap",
    width: "768px",
  },
  Save: {
    marginBottom: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
  },
  leftSide: {
    flex: 2,
    height: "100%",
    margin: theme.spacing(1),
    padding: theme.spacing(3),
  },
  rightSide: {
    flex: 1,
    height: "100%",
    margin: theme.spacing(1),
    padding: theme.spacing(3),
  },
});
class AddPost extends Component {
  componentDidUpdate(props, state) {
    if (
      this.props.match.params.view === "add" &&
      this.props.admin.posts.filter((p) => p.title === this.props.values.title)
        .length > 0
    ) {
      const post = this.props.admin.posts.filter(
        (p) => p.title === this.props.values.title
      )[0];
      this.props.history.push("/admin/posts/edit/" + post.dispatch);
    }
    if (this.props.admin.post.id  !== props.admin.post.id) {
      // when redux state changes post in admin reducer
      console.log('post',this.props.admin.post)
      this.props.setValues(props.admin.posts.map((p) => p.id === this.props.match.params.id?p:null));
    }
  }
  uploadImage = (e) => {
    const data = new FormData();
    data.append(
      "file",
      e.target.files[0],
      new Date().getTime().toString() + e.target.files[0].name
    );
    this.props.uploadImage(
      data,
      this.props.auth.token,
      this.props.admin.post.id,
      this.props.auth.user.uesrId
    );
  };
  componentDidMount(props, state) {
    if (this.props.match.params.view === "edit" && this.props.match.params.id) {
      this.props.getSinglePost(
        this.props.match.params.id,
        this.props.auth.token,

      );
    }
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Form className={classes.container}>
          <Paper className={classes.leftSide}>
            <FormikTextField
              name="title"
              label="Title"
              margin="normal"
              onChange={(e) =>
                this.props.setFieldValue(
                  "slug",
                  e.target.value.toLowerCase().replace(/ /g, "_")
                )
              }
              fullWidth
            />
            <FormikTextField name="slug" label="Slug" margin="normal" />
            <FormikTextField
              name="content"
              label="Content"
              margin="normal"
              fullWidth
            />
          </Paper>
          <Paper className={classes.rightSide}>
            <FormikSelectField
              name="status"
              label="Status"
              margin="normal"
              options={[
                { label: "Published", value: true },
                { label: "Unpublished", value: false },
              ]}
              fullWidth
            />
            <div className={classes.Save}>
              <Button
                variant="contained"
                color="secondary"
                onClick={(e) => {
                  this.props.handleSubmit();
                }}
              >
                <SaveIcon /> Save
              </Button>
            </div>
            {/* {this.props.admin.post.PostImage ?<img src={this.props.admin.post.PostImage[0].url} className='post-image'/>:null} */}
            <div>
              <Button
                variant="contained"
                color="secondary"
                onClick={(e) => {
                  $(".MyFile").trigger("click");
                }}
              >
                <ImageIcon /> Upload Post Image
              </Button>
              <input
                type="file"
                style={{ display: "none" }}
                className="MyFile"
              />
            </div>
          </Paper>
        </Form>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  auth: state.auth,
  admin: state.admin,
});
const mapDispatchToProps = (dispatch) => ({
  addPost: (post, token) => {
    dispatch(AdminActions.addPost(post, token));
  },
  updatePost: (post, token) => {
    dispatch(AdminActions.updatePost(post, token));
  },
  getSinglePost: (id, token) => {
    dispatch(AdminActions.getSinglePost(id, token));
  },
  uploadImage: (data, token, postId, userId) => {
    dispatch(AdminActions.uploadImage(data, token, postId, userId));
  },
});
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(
    withFormik({
      mapPropsToValues: (props ) => ({
        title: props.match.params.id ?props.admin.post.title:console.log('title',props.admin.posts),
        slug: props.match.params.id?props.admin.post.slug:'',
        created_at: props.match.params.id?props.admin.post.created_at:new Date().getTime(),
        status: props.match.params.id?props.admin.post.status:false,
        content: props.match.params.id?props.admin.post.content:''
      }),
      validationSchema: Yup.object().shape({
        title: Yup.string().required("Title is required"),
        slug: Yup.string().required(),
        content: Yup.string().required(),
      }),
      handleSubmit: (values, { setSubmitting, props }) => {
        if (props.match.params.view === "edit") {
          const post = {
            ...values,
            id: props.match.params.id,
          };
          props.updatePost(post, props.auth.token);
        } else {
          props.addPost(values, props.auth.token);
        }
      },
    })(withStyles(styles)(AddPost))
  )
);
