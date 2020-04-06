import React, { Component } from "react";
import { Link as RouterLink } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import FaceIcon from "@material-ui/icons/Face";
import DashboardIcon from "@material-ui/icons/Dashboard";
import FileCopyIcon from "@material-ui/icons/FileCopy";

function ListitemLink(props) {
  return <ListItem button component={RouterLink} {...props} />;
}

class Sidebar extends Component {
  render() {
    return (
      <List>
        <ListitemLink to="/admin">
          <DashboardIcon />
          <ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemIcon>
        </ListitemLink>
        <ListitemLink to="/admin/posts">
          <FileCopyIcon />
          <ListItemIcon>
            <ListItemText primary="Posts" />
          </ListItemIcon>
        </ListitemLink>
        <ListitemLink to="/admin/users">
          <FaceIcon />
          <ListItemIcon>
            <ListItemText primary="Users" />
          </ListItemIcon>
        </ListitemLink>
      </List>
    );
  }
}

export default Sidebar;
