import florideTeeth from "../../../assets/images/fluoride.png";
import cavityTeeth from "../../../assets/images/cavity.png";
import whiteningTeeth from "../../../assets/images/whitening.png";

function OurService() {
  const serviceData = [
    {
      id: 1,
      title: "Floride Treatement",
      description:
        "cow is a domestic animan, She gives us milk, cow has 4 legs, 2 horns, 1 tail",
      image: florideTeeth,
    },
    {
      id: 2,
      title: "Cavity Filling",
      description:
        "cow is a domestic animan, She gives us milk, cow has 4 legs, 2 horns, 1 tail",
      image: cavityTeeth,
    },
    {
      id: 3,
      title: "teeth Whitening",
      description:
        "cow is a domestic animan, She gives us milk, cow has 4 legs, 2 horns, 1 tail",
      image: whiteningTeeth,
    },
  ];

  return (
    <>
      <div className="text-center mt-12">
        <h4 className="text-accent text-xl font-bold">OUR SERVICES</h4>
        <h1 className="text-3xl font-semibold mt-3">Services We Provide</h1>
      </div>
      <div className="p-3 grid gap-6 mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {
        serviceData.map(service =>
        <ServiceDetail key={service.id} service={service}>

        </ServiceDetail>)
      }
      </div>
      
    </>
  );
}

function ServiceDetail({service}) {
    const {title,description,image} = service;
  return (
    <>
      <div className=" card w-96 bg-gray-100 shadow-xl hover:bg-gray-200">
        <figure className="px-10 pt-10">
          <img
            src={image}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          
        </div>
      </div>
    </>
  );
}

export default OurService;
