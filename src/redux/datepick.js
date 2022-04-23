
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import "./App.css";
import "react-datepicker/dist/react-datepicker.css";

function DatePick() {
        const [checkInDate, setCheckInDate] = useState(null);
        const [checkOutDate, setCheckOutDate] = useState(null);

        const handleCheckInDate = (date) => {
                setCheckInDate(date);
                setCheckOutDate(null);
        };

        const handleCheckOutDate = (date) => {
                setCheckOutDate(date);
        };

        return (
            <div className="App">
                    <div className="input-container">
                            <div>
                                    <label>Check-in</label>
omm                                    <DatePicker
                                        selected={checkInDate}
                                        minDate={new Date()}
                                        onChange={handleCheckInDate}
                                    />
                            </div>
                            <div>
                                    <label>Check-out</label>
                                    <DatePicker
                                        selected={checkOutDate}
                                        minDate={checkInDate}
                                        onChange={handleCheckOutDate}
                                    />
                            </div>
                    </div>
            </div>
        );
}

export default DatePick;