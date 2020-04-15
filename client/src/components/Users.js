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
                            offer = {user.offer}
                            details = {user.details}
                            location = {user.location}
                            time = {user.time}
                            capacity = {user.capacity}
                            language = {user.language}
                            sector = {user.sector}
                            phone = {user.phone}
                            extra = {user.extra}
                            extra2 = {user.extra2}
                            
                            />
                        )
                    })
                }
            </div>
        )
    }
}

export default Users;