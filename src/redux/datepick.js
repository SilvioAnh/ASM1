//https://mui.com/x/react-date-pickers/date-picker/
//https://reactjsexample.com/a-decent-and-pretty-date-picker-to-be-used-with-reactjs/
//https://github.com/buildo/rc-datepicker/blob/master/examples/examples.js
//https://codesandbox.io/s/13idt?file=/src/index.js:0-2484
//https://codesandbox.io/s/yf1rh?file=/src/App.js:0-858


import React from "react";
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from "react-datepicker"

class DatePick extends React.Component {
    constructor(props) {
        super(props);
        this.selected= this.selected.bind(this)
        this.state = {
            date: null
        };
    }
    selected = e =>{
        this.setState({ date: e})
    }

    render() {
        return(
                <DatePicker
                    className="form-control"
                    selected={this.state.date}
                    onChange={this.selected}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="dd/mm/yyyy"
                />
        )
    }
}
export default DatePick;