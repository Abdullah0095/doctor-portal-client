import appointmentBG from '../../../assets/images/appointment.png';
import doctorImage from '../../../assets/images/doctor.png';

const MakeAppontment = () => {
    return (
        <div style={{
            backgroundImage: `url(${appointmentBG})`,
            backgroundRepeat: "no-repeat",
            // backgroundSize: "600px",
          }} className=''>
            
          <div className='grid grid-cols-2'>
            <img className='mt-[-200px]' src={doctorImage} alt="" />
          </div>

        </div>
    );
};

export default MakeAppontment;