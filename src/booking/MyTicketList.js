import React, { Component } from 'react';
import { getSeatsBookingByUserId } from '../actions/SeatBookingAction.js';
import { connect } from 'react-redux';
import MyTicketItem from './MyTicketItem.js';

class MyTicketList extends Component {
    componentDidMount(){
      const userId=JSON.parse(localStorage.getItem('user'));
       this.props.getSeatsBookingByUserId(userId)
    }

    render() {
        const {seatBookings}=this.props.seatBookings
        const userId=JSON.parse(localStorage.getItem('user'));;
        if(userId==null|| userId==0)
        {
            this.props.history.push("/sign-up");
        }
        
        if(seatBookings.length==0)
        {
            return(
                <div>

                <br/><br/>
                    <div class="card" style={{width: "18rem;",}}>
                        <div class="card-body">
                            
                        <br/>
                        <center><h3 class="card-title">You haven't booked any ticket yet</h3></center><br/>
                        <center><h5 class="card-title">Hurry up.....</h5></center>
                            
                            <br/><center><a href="/dashboard" class="btn btn-primary">Book Now</a></center>
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div>
                  {seatBookings.map(seatBooking=>(
                <MyTicketItem key={seatBooking.id} seatBooking={seatBooking} />
             ) ) }
            </div>
        );
    }
}

// export default MyTicketList;

const mapStateToProps=state=>({
    seatBookings:state.seatBookings
   })
  export default connect(mapStateToProps,{getSeatsBookingByUserId}) (MyTicketList);