const Footer = () => {
  return (
    <div className="px-12 grid grid-cols-1 md:grid-cols-3 mt-5">
      <div className="">
        <h2 className="font-bold">SERVICES</h2>

        <div className="py-4">
          <p>Emergency Checkup</p>
          <p>Monthly Checkup</p>
          <p>Weekly Checkup</p>
          <p>Deep Checkup</p>
        </div>
      </div>

      <div>
        <h2 className="font-bold">ORAL HEALTH</h2>

        <div className="py-4">
          <p>Floride Treatement</p>
          <p>Cavity Filling</p>
          <p>Teath Whitening</p>
        </div>
      </div>

      <div>
        <h2 className="font-bold">OUR ADDRESS</h2>
        <p className="py-4">New York - 101010 Hudson</p>
      </div>

      <footer className="font-bold  text-center">Copyright 2023 ALL Rights Reserved</footer>
    </div>
  );
};

export default Footer;
