//https://mui.com/x/react-date-pickers/date-picker/
//https://reactjsexample.com/a-decent-and-pretty-date-picker-to-be-used-with-reactjs/
//https://github.com/buildo/rc-datepicker/blob/master/examples/examples.js
//https://codesandbox.io/s/13idt?file=/src/index.js:0-2484
//https://codesandbox.io/s/yf1rh?file=/src/App.js:0-858


// import React from "react";
// import 'react-datepicker/dist/react-datepicker.css';
// import DatePicker from "react-datepicker"
//
// class DatePick extends React.Component {
//     constructor(props) {
//         super(props);
//         this.selected= this.selected.bind(this)
//         this.state = {
//             date: null
//         };
//     }
//     selected = e =>{
//         this.setState({ date: e})
//     }
//
//     render() {
//         return(
//                 <DatePicker
//                     className="form-control"
//                     selected={this.state.date}
//                     onChange={this.selected}
//                     dateFormat="dd/MM/yyyy"
//                     placeholderText="dd/mm/yyyy"
//                 />
//         )
//     }
// }
// export default DatePick;

import React from "react";
import { Field, reduxForm } from "redux-form";

const DatePick = (props) => {
    const { handleSubmit, pristine, reset, submitting } = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Tên </label>
                <div>
                    <Field
                        name='name'
                        component="input"
                        type="text"
                        placeholder="Tên"
                    />
                </div>
            </div>
            <div>
                <label>Ngày sinh</label>
                <div>
                    <Field
                        name="doB"
                        component="input"
                        type="date"
                        placeholder="dd/mm/yyyy"
                    />
                </div>
            </div>
            <div>
                <label>Ngày vào công ty</label>
                <div>
                    <Field
                        name="startDate"
                        component="input"
                        type="date"
                        placeholder="dd/mm/yyyy"
                    />
                </div>
            </div>
            <div>
                <label>Phòng ban</label>
                <div>
                    <Field name="department" component="select">
                        <option>Hãy chọn bộ phân</option>
                        <option>Sale</option>
                        <option>HR</option>
                        <option>Marketing</option>
                        <option>IT</option>
                        <option>Finance</option>
                    </Field>
                </div>
            </div>
            <div>
                <label>Hệ số lương</label>
                <div>
                    <Field
                        name="salaryScale"
                        component="input"
                        type="text"
                    />
                </div>
            </div>
            <div>
                <label>Số ngày nghỉ còn lại</label>
                <div>
                    <Field
                        name="annualLeave"
                        component="input"
                        type="text"
                    />
                </div>
            </div>
            <div>
                <label>Sô ngày đã làm thêm</label>
                <div>
                    <Field
                        name="overTime"
                        component="input"
                        type="text"
                    />
                </div>
            </div>
            <div>
                <button type="submit" disabled={pristine || submitting}>
                    Thêm
                </button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>
                    Clear Values
                </button>
            </div>
        </form>
    );
};

export default reduxForm({form: "simple"})(DatePick);