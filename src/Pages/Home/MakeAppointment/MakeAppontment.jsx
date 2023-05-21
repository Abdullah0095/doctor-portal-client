import appointmentBG from "../../../assets/images/appointment.png";
import doctorImage from "../../../assets/images/doctor.png";

const MakeAppontment = () => {
  return (
    <section className="mt-32">
      <div
        style={{
          backgroundImage: `url(${appointmentBG})`,
          backgroundRepeat: "no-repeat",
        }}
        className="hero"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 hero-content flex-col lg:flex-row">
          <div>
            <img
              className="-mt-64  hidden lg:block lg:w-2/3 rounded-lg"
              src={doctorImage}
              alt="doctor image"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-teal-300">Appointment</h2>

            <h4 className="text-4xl font-bold text-white py-3">
              Make an appointment today
            </h4>

            <p className="py-6 text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
              enim eum praesentium tempora commodi eius nemo ad recusandae nisi,
              eveniet dignissimos maiores officiis. Illum delectus accusantium,
              vero, quo quidem quod quis et provident nesciunt officia veritatis
              dolores iusto odit excepturi rerum maiores aspernatur? Commodi eum
              reiciendis neque molestias maxime magni.
            </p>
            <button className="btn btn-accent">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppontment;
