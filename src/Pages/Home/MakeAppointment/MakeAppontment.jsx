import appointmentBG from "../../../assets/images/appointment.png";
import doctorImage from "../../../assets/images/doctor.png";

const MakeAppontment = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${appointmentBG})`,
        backgroundRepeat: "no-repeat",
      }}
      className="hero min-h-[300px]"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 hero-content flex-col lg:flex-row">
        <div><img className=" max-w-sm rounded-lg" src={doctorImage} /></div>
        <div>
          <h2 className="text-2xl font-bold text-teal-300">Appointment</h2>

          <h4 className="text-3xl font-bold text-white py-3">
            Make an appointment today
          </h4>

          <p className="py-6 text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis enim
            eum praesentium tempora commodi eius nemo ad recusandae nisi,
            eveniet dignissimos maiores officiis. Illum delectus accusantium,
            vero, quo quidem quod quis et provident nesciunt officia veritatis
            dolores iusto odit excepturi rerum maiores aspernatur? Commodi eum
            reiciendis neque molestias maxime magni.
          </p>
          <button className="btn btn-accent">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default MakeAppontment;
