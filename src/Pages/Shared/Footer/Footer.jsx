import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="px-12 py-12 grid grid-cols-1 md:grid-cols-3 mt-5">
        <div>
          <h2 className="font-bold">SERVICES</h2>

          <div className="py-4 text-lg">
            <Link to="/">Emergency Checkup</Link> <br />
            <Link to="/">Monthly Checkup</Link> <br />
            <Link to="/">Weekly Checkup</Link> <br />
            <Link to="/">Deep Checkup</Link>
          </div>
        </div>

        <div>
          <h2 className="font-bold">ORAL HEALTH</h2>

          <div className="py-4 text-lg">
            <Link to="/">Floride Treatement</Link> <br />
            <Link to="/">Cavity Filling</Link> <br />
            <Link to="/">Teath Whitening</Link>
          </div>
        </div>

        <div>
          <h2 className="font-bold">OUR ADDRESS</h2>
          <Link to ="/" className="py-4 text-lg">New York - 101010 Hudson</Link>
        </div>
      </div>

      <footer className="font-bold  text-center">
        Copyright 2023 ALL Rights Reserved
      </footer>
    </>
  );
};

export default Footer;
