/*Q1. JS Variable needs to be created here. Below variable is just an example. Try to add more attributes.*/
const initialTravellers = [
  {
    id: 1, name: 'Jack', IdentifyID: "E0001", phone: 88885555, email: "e0001com",  nationality: 'Indian', seatNumber: 'B1',
    bookingTime: new Date(),
  },
  {
    id: 2, name: 'Rose', IdentifyID: "E0002", phone: 88884444,  email: "e0002com", nationality: 'Singaporean', seatNumber: 'B2',
    bookingTime: new Date(),
  },
  {
    id:3, name: 'Bob', IdentifyID: "E0003", phone: 88883333,  email: "e0003com",  nationality: 'Thai', seatNumber:'B3',
    bookingTime: new Date(),
  },
];


function TravellerRow(props) {
  {/*Q3. Placeholder to initialize local variable based on traveller prop.*/}
  const traveller = props.traveller;
  return (
    <tr>
      {/*Q3. Placeholder for rendering one row of a table with required traveller attribute values.*/}
      {/* below placeholders are not affecting the html output, can move them?. Below function displays is the key to render the table  */}
      <td>{traveller.id}</td>
      <td>{traveller.name}</td>
      <td>{traveller.IdentifyID}</td>
      <td>{traveller.phone}</td>
      <td>{traveller.email}</td>
      <td>{traveller.nationality}</td>
      <td>{traveller.seatNumber}</td>
      <td>{traveller.bookingTime.toLocaleString()}</td>
    </tr>
  );
}

function Display(props) {

  /*Q3. Write code to render rows of table, reach corresponding to one traveller. Make use of the TravellerRow function that draws one row.*/

  return (
    <table className="bordered-table">
      <thead>
        <tr>
      {/*Q3. Below table is just an example. Add more columns based on the traveller attributes you choose.*/}
          <th>ID</th>
          <th>Name</th>
          <th>IdentifyID</th>
          <th>Phone</th>
          <th>email</th>
          <th>nationality</th>
          <th>Seat Number</th>
          <th>Booking Time</th>
        </tr>
      </thead>
      <tbody>
        {/*Q3. write code to call the JS variable defined at the top of this function to render table rows.*/}
        {props.travellers.map(traveller => (
          //<TravellerRow key={traveller.id} traveller={traveller} />
          <tr key={traveller.id}>
            <td>{traveller.id}</td>
            <td>{traveller.name}</td>
            <td>{traveller.IdentifyID}</td>
            <td>{traveller.phone}</td>
            <td>{traveller.email}</td>
            <td>{traveller.nationality}</td>
            <td>{traveller.seatNumber}</td>
            <td>{traveller.bookingTime.toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

class Add extends React.Component {
  constructor() {
    super();
    this.state = {
      // name: '',
      // IdentifyID: '',
      // phone: '',
      // email: '',
      // nationality: '',
      // seatNumber: '',
      // bookingTime: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    /*Q4. Fetch the passenger details from the add form and call bookTraveller()*/
    const form = document.forms.addTraveller;
    const newTraveller = {
      id: Math.floor(Math.random() * 100),
      // name: e.target.travellername.value, IdentifyID: e.target.travellerIdentifyID.value, phone: e.target.travellerphone.value, email: e.target.travelleremail.value
      //name: form.name.value, IdentifyID: form.IdentifyID.value, phone: form.phone.value, email: form.email.value, bookingTime: new Date(),
      name: this.state.name,
      IdentifyID: this.state.IdentifyID,
      phone: this.state.phone,
      email: this.state.email,
      nationality: this.state.nationality,
      seatNumber: this.state.seatNumber,
      bookingTime: new Date(),
      //bookingTime: this.state.bookingTime,
    };

    this.props.bookTraveller(newTraveller);
    //form.name.value = ''; form.IdentifyID.value = ''; form.phone.value = ''; form.email.value = '';
    // for this state, this.props, parameters/properties need to be here, waiting for others to recall 
    this.setState({
      name: '',
      IdentifyID: '',
      phone: '',
      email: '',
      nationality: '',
      seatNumber: '',
      bookingTime: ''});
  }

  render() {
    return (
      <form name="addTraveller" onSubmit={this.handleSubmit}>
        {/*Q4. Placeholder to enter passenger details. Below code is just an example.*/}
        {/* <input type="text" name="travellername" placeholder="Name" /> */}
        <input id="travellername" name="travellername" type="text" placeholder="Name" value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })} />
        {/* <input type = "text" name = "travellername" placeholder="Name" onChange={(e) => this.setState({name: e.target.value})}/> */}
        {/* <input type="text" placeholder="IdentifyID" onChange={(e) => this.setState({ IdentifyID: e.target.value })} /> */}
        <input type="text" placeholder="IdentifyID"
          value={this.state.IdentifyID}
          onChange={(e) => this.setState({ IdentifyID: e.target.value })} />
        <input type="text" placeholder="Phone"
          value={this.state.phone}
          onChange={(e) => this.setState({ phone: e.target.value })} />
        <input type="text" placeholder="Email"
          value={this.state.email}
          onChange={(e) => this.setState({ email: e.target.value })} />
        <input type="text" placeholder="Nationality"
          value={this.state.nationality}
          onChange={(e) => this.setState({ nationality: e.target.value })} />
        <input type="text" placeholder="Seat Number"
          value={this.state.seatNumber}
          onChange={(e) => this.setState({ seatNumber: e.target.value })} />
        <input type="text" placeholder="Booking Time"
          value={this.state.bookingTime}
          onChange={(e) => this.setState({ bookingTime: e.target.value })} />
        <button type="submit">Add</button>
      </form>
    );
  }
}


class Delete extends React.Component {
  constructor() {
    super();
    //this.state no need to be here, because the state is not used in this component
    // this.state = {
    //   name: '',
    //   IdentifyID: '',
    //   phone: '',
    //   email: '',
    //   nationality: '',
    //   seatNumber: '',
    //   bookingTime: ''
    // };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    /*Q5. Fetch the passenger details from the deletion form and call deleteTraveller()*/
    const form = document.forms.deleteTraveller;
    console.log(form.travellername.value);
    // code to deleteTraveller
    //call the function detele(passenger) 
    //deleteTraveller(form.travellername.value); this is the child class, need to call deleteTraveller from the parent class (in the class TicketToRide) down to the child class
    this.props.delfunction(form.travellername.value);} // this.props.delfunction is the function deleteTraveller in the parent class, inside is the data you pass 

  

  render() {
    return (
      <form name="deleteTraveller" onSubmit={this.handleSubmit}>
        {/*Q5. Placeholder form to enter information on which passenger's ticket needs to be deleted. Below code is just an example.*/}
        {/* <input id="travellername" name="travellername" type="text" placeholder="Name" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} /> */}
        <input type="text" name="travellername" placeholder="Name" />
        <button type="submit">Delete</button>
      </form>
    );
  }
}

class Homepage extends React.Component {
  constructor() {
    super();
    }
  render(){
    const totalSeats = 10;
    const bookedSeats = this.props.travellers.length;
    const freeSeats = totalSeats - bookedSeats;
    
    // construct seat map: booked seats with grey color, free seats with green color
    const seatmap = [];
    for (let i = 0; i < totalSeats; i++) {
      if (i < bookedSeats){
        seatmap.push(<div key={i} style={{backgroundColor: 'grey', width: '50px', height: '50px', display: 'line-block'}}></div>);
      } else {
          seatmap.push(<div key={i} style={{backgroundColor: 'green', width: '50px', height: '50px', display: 'line-block'}}></div>);
      }
  }
    
    return (
      
        //{/*Q2. Placeholder for Homepage code that shows free seats visually.*/}
      <div>
          <h2>Seats Availability</h2>
          <div>{seatmap}</div>
          <p>{'Total Seats: ${totalSeats}, Free Seats: ${freeSeats}'}</p>
      </div>
    );
  }
}


class TicketToRide extends React.Component {
  constructor() {
    super();
    this.state = { travellers: [], selector: 1};
    this.bookTraveller = this.bookTraveller.bind(this);
    this.deleteTraveller = this.deleteTraveller.bind(this);
  }

  setSelector(value)
  {
      /*Q2. Function to set the value of component selector variable based on user's button click.*/
    this.setState({selector: value});
  }

  // the data load the first time 
  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate(){
    console.log("componentDidUpdate()",this.state.travellers)
  }

  loadData() {
    setTimeout(() => {
      this.setState({ travellers: initialTravellers });
    }, 500);
  }

  bookTraveller(passenger) {
        /*Q4. Write code to add a passenger to the traveller state variable.*/
        this.setState((prevState) => {
          const newId = prevState.travellers.length + 1;
          const newPassenger = { ...passenger, id: newId }; // 新乘客的id为当前乘客列表长度 + 1
          const updatedTravellers = [...prevState.travellers, newPassenger];
          return { travellers: updatedTravellers };

        });
  }

  deleteTraveller(passenger) {
      /*Q5. Write code to delete a passenger from the traveller state variable.*/
    console.log("deleteTraveller:", passenger);
    // actual deletion
    var newlist = []
    this.state.travellers.forEach(element => {
      if (element.name != passenger) {newlist.push(element)}
    });
    console.log(newlist);
    this.setState({travellers:newlist})
    console.log(this.state.travellers);
  }



  // render the component based on the selector value set by the user 
  render() {
    return (
      <div>
        <h1>Ticket To Ride</h1>
          <div>
      {/*Q2. Code for Navigation bar. Use basic buttons to create a nav bar. Use states to manage selection.*/}
          <button onClick = {() => this.setSelector(1)}>Homepage</button>
          <button onClick = {() => this.setSelector(2)}>Display traveller</button>
          <button onClick = {() => this.setSelector(3)}>Add traveller</button>
          <button onClick = {() => this.setSelector(4)}>Delete traveller</button>
          </div>

          <div>
        {/*Only one of the below four divisions is rendered based on the button clicked by the user.*/}
        {/*Q2 and Q6. Code to call Instance that draws Homepage. Homepage shows Visual Representation of free seats.*/}
        {this.state.selector === 1 && <Homepage travellers={this.state.travellers}/>}

        {/*Q3. Code to call component that Displays Travellers.*/}
        {this.state.selector === 2 && <Display travellers={this.state.travellers}/>} 
        {/*Q4. Code to call the component that adds a traveller.*/}
        {this.state.selector === 3 && <Add bookTraveller={this.bookTraveller}/>}
        {/*Q5. Code to call the component that deletes a traveller based on a given attribute.*/}
        {this.state.selector === 4 && <Delete delfunction={this.deleteTraveller}/>}
        {/* <Delete delfunction={this.deleteTraveller}/> */}
          </div>
      </div>
    );
  }
}

const element = <TicketToRide />;

ReactDOM.render(element, document.getElementById('contents'));
