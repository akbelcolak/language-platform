import React, {Component} from 'react';
import User from "./User";


class Users extends Component {
    render() {
        const {users} = this.props;
        
        return (
            <div>
                {
                    users.map(user => {
                        return (
                            <User
                            key= {user.id}
                            company = {user.company}
                            details = {user.details}
                            location = {user.location}
                            sector = {user.sector}
                            language = {user.language}
                            extra = {user.extra}
                            
                            
                            />
                        )
                    })
                }
            </div>
        )
    }
}

export default Users;