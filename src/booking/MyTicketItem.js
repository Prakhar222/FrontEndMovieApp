import React, { Component } from 'react'

export default class MyTicketItem extends Component {
    render() {
        
        
      
        return (
            <div>

            <br/><br/>
                <div class="card" style={{width: "18rem;",}}>
                    <div class="card-body">
                        
                    <br/>
                    
                    <center><h3 class="card-title"><b>Theatre: </b>{this.props.seatBooking.screening.auditorium.theatre.name}&nbsp;&nbsp;<b>Movie : </b>{this.props.seatBooking.screening.movie.title}</h3></center><br/>
                    <center><h5 class="card-title"><b>Seat Number: {this.props.seatBooking.seat.seatNumber}</b></h5></center>
                    <center><h5 class="card-title"><b>Price: {this.props.seatBooking.screening.price}</b></h5></center>

                    <center><h5 class="card-title">Enjoy Your Show</h5></center>
                        
                        <br/><center><a href="/dashboard" class="btn btn-primary">Back To Home</a></center>
                    </div>
                </div>
            </div>
        )
    }
}
