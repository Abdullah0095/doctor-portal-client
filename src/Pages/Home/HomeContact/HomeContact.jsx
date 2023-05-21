import contactImage from "../../../assets/images/appointment.png";

const HomeContact = () => {
  return (
    <>
      <section
        className="my-12"
        style={{
          backgroundImage: `url(${contactImage})`,
          backgroundRepeat: "no-repeat",
          height: "600px",
        }}
      >
        <div>
          <div className="text-center pt-20 pb-12">
            <p className="text-cyan-400 text-lg font-bold">Contact Us</p>
            <h1 className="text-white text-4xl py-2 mb-5">Stay Connected With Us</h1>
            <input className="h-9 w-96 rounded-lg text-center outline-none" placeholder="Email Address" type="email" /><br /> <br />
            <input className="h-9 w-96 rounded-lg text-center outline-none" placeholder="Subject" type="text" /> <br /> <br />
            <textarea className="rounded-lg p-3 outline-none" placeholder="Your message" name="" id="" cols="48" rows="5"></textarea>
          </div>
          <div className="text-center"><button className="btn btn-accent text-white w-32">submit</button></div>
        </div>

      </section>
    </>
  );
};

export default HomeContact;
