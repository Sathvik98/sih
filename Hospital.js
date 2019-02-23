import React, {Component} from 'react';
import './hospital.css'; 

class Hospital extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    handleClick = () => {
        this.props.history.push("/"); 
    }
    render() {
        return (
            <div className="hospital">
                <button id="signout" type="button" value="Signout" onClick={this.handleClick}>Signout</button>
                <div id="details">
                    <h1>Hospitals </h1>
                    <form action="Hospital" method="POST">
                        <br /><input type="text" name="Aadhar" placeholder="Parent/Gaurdian Aadhar" size="25"></input><br/>
                        <input type="" name="ParentName" placeholder="Parent/Gaurdian Name"></input><br />
                        <input type="" name="Gender" placeholder="Gender"></input><br />
                        <input type="number" name="Number" placeholder="PhoneNumber"></input>          
                        <br /><input type="text" name="street" placeholder="Street"></input><br />
                        <br /><input type="text" name="Town" placeholder="Town/Village"></input><br />
                        <br /><input type="number" name="pincode" placeholder="pincode"></input><br />
                        <br></br><button type="reset" value="cancel">cancel  </button>&nbsp;&nbsp;
                        <button type="submit" value="Submit">Submit</button><br />
                    </form>
                </div>
            </div>
        );
    }
}

export default Hospital;