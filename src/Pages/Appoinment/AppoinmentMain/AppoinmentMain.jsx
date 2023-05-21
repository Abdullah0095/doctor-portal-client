import { DayPicker } from 'react-day-picker';
import appoinmentChairImage from '../../../assets/images/chair.png';



const AppoinmentMain = ({selectedDate,setSelectedDate}) => {
    
    
  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={appoinmentChairImage}
          className="max-w-lg px-6 rounded-lg "
        />
        <div className='mr-6 p-6'>
          <DayPicker 
          mode="single"
          selected={selectedDate}
          onSelect={setSelectedDate}
          />
          {/* <p className='text-center, text-xl py-3 text-teal-900 font-bold'>Your selected date is : {format(selectedDate, 'PP')}</p> */}
        </div>
      </div>
    </div>
  );
};

export default AppoinmentMain;
