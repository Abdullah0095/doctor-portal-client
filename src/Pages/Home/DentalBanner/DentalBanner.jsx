import dentalImage from '../../../assets/images/treatment.png';

function DentalBanner() {
  return (
    <>
      <div className=" hero min-h-screen bg-base-200 mb-52">
        <div className="hero-content px-10 flex-col lg:flex-row">
          <img
            src={dentalImage}
            className=" max-w-sm rounded-lg  justify-center"
          />
          <div className='w-1/2 px-10'>
            <h1 className="text-5xl font-bold ">Exceptional Dental <br /> Care, on Your Terms </h1>
            <p className="py-6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non suscipit nulla cum quos ipsum! Repellat consequatur voluptatum odio, facere dignissimos maxime eligendi provident voluptates dolorem culpa corporis molestias quod quaerat suscipit optio harum inventore temporibus fugiat est sed ipsa, molestiae voluptate ipsam? Asperiores vitae ducimus dolor dicta, quis harum rerum.
              </p>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default DentalBanner;
