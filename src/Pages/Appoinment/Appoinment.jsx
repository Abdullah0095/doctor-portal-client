
import { useState } from "react";
import AppoinmentMain from "./AppoinmentMain/AppoinmentMain";
import { AvailableAppoinment } from "./AvailableAppoinment/AvailableAppoinment";


const Appoinment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div>
            <AppoinmentMain selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
            <AvailableAppoinment selectedDate={selectedDate}  />
        </div>
    );
};

export default Appoinment;