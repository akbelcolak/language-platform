import React, { Component } from "react";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TableCell from "@material-ui/core/TableCell";
import { withStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
const styles = theme => ({
  table: {
    minWidth: 650
  }
});
class TableView extends Component {
  render() {
    const { rows, columns, classes } = this.props;
    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              {columns
                ? columns.map((col, i) => {
                    return <TableCell key={i}>{col}</TableCell>;
                  })
                : null}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, i) => (
              <TableRow key={i}>
               
                    {row.id ? 
                    <TableCell key={row.id}>
                    <Link
                      to={`/admin/posts/edit/${row.id}`}
                      component={RouterLink}
                    >
                    {row.id}
                    </Link>
                    </TableCell>
                   :null
                  }
                  <TableCell>{row.title}</TableCell>
           </TableRow>
           ))}
            {/* {
           rows?
           rows.map((row,i)=>{
              return(
                <TableRow key={row.name}>
                  {
                    columns.map((col, colIdex)=>{
                      return(
                        <TableCell>
                          {console.log('col',col,'row',row['id'])}
                          {
                            col.name === 'id'?
                            <Link to={`/admin/posts/edit/${row[col.name]}`} component={RouterLink}>{row['id']}</Link>
                            :row[col.name]
                          }
                        </TableCell>
                      )
                    })
                  }
                </TableRow>
              )
           }):null
         }    */}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

export default withStyles(styles)(TableView);
