import React, {Component} from 'react';
import '../css/Anganwadi1st.css';
class Anganwadi1st extends Component {
    render() {
        return (
            <div>
                <h1>COURTYARD SHELTERS</h1>
                <button id="signout" type="button" value="Signout">Signout</button>
                <body>
                    <input type="text" name="Id" placeholder="Child Id"></input>
                    <button type="submit" value="Search">Search</button><br /><br />
                    <button type="submit" value="New Entry">New Entry</button><br />
                </body>
            </div> 
        );
    }
}

export default Anganwadi1st;