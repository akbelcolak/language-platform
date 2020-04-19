import React, {Component} from 'react';
import Offerlist from "./Offerlist";


class Offers extends Component {
    render() {
        const {offers} = this.props;
        
        return (
            <div>
                {
                    offers.map(offerlist => {
                        return (
                            <Offerlist
                            key= {offerlist.id}
                            company = {offerlist.company}
                            offer = {offerlist.offer}
                            details = {offerlist.details}
                            location = {offerlist.location}
                            time = {offerlist.time}
                            capacity = {offerlist.capacity}
                            language = {offerlist.language}
                            sector = {offerlist.sector}
                            phone = {offerlist.phone}
                            extra = {offerlist.extra}
                            extra2 = {offerlist.extra2}
                            
                            />
                        )
                    })
                }
            </div>
        )
    }
}

export default Offers;