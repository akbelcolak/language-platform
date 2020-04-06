import React, { Component } from "react";
import Sidebar from '../common/sidebar';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import classnames from 'classnames';
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Divider from '@material-ui/core/Divider';
// import "./assests/css/admin.css";

const drawerWidth = 240;
const styles = theme => ({
  root:{
    display:'flex'
  },
  toolbar: {
    paddingRigh: 24
  },
  appBar:{
    zIndex:theme.zIndex.drawer +1 ,
    transition:theme.transitions.create(['width', 'margin'],{
      easing:theme.transitions.easing.sharp,
      duration:theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition:theme.transitions.create(['width', 'margin'],{
      easing:theme.transitions.easing.sharp,
      duration:theme.transitions.duration.enteringScreen
    })
  },
  appBarSpace:theme.mixins.toolbar,
  drawerPaper: {
    position: "relative",
    whiteSpace: "noWrap",
    width: drawerWidth,
    transition:theme.transitions.create('width',{
      easing:theme.transitions.easing.sharp,
    duration:theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose:{
    overflowX:'hidden',
    width:theme.spacing(0),
    transition:theme.transitions.create('width',{
      easing:theme.transitions.easing.sharp,
    duration:theme.transitions.duration.leavingScreen
    })},
  toolbarIcon:{
    display:'flex',
    alignItems:'center',
    justifyContent:'flex-end',
    padding:'8px 8px',
    ...theme.mixins.toolbar,
    backgroundColor:'lightBlue',

  },
  content:{
    flexGrow:1,
    padding:theme.spacing(3),
    height:'650px',
    backgroundColor:'lightGray',
    overflow:'auto'
  }
});
class AdminWrapper extends Component {
  state ={ open: true };

  handleDrawerOpen=(e)=>{
    this.setState({open:true})
  }
  handleDrawerClose=(e)=>{
    this.setState({open:false})
  }
  render() {
    const { classes } = this.props;
    return (
      <div id="admin-page" className={classes.root}>
        <AppBar className={classnames(classes.appBar, this.state.open && classes.appBarShift)}>
          <Toolbar className={classes.Toolbar}>
            <IconButton onClick={this.handleDrawerOpen}>
              <MenuIcon />
            </IconButton>
            <Typography component="h1" variant="h6" color="inherit" noWrap>
              Control Panel
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          classes={{
            paper: classnames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose)
          }}
          variant="permanent"
          open={true}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider/>
         <Sidebar/>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpace}/>
        {this.props.children}
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(AdminWrapper);
