import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
const Testimonial = () => {
  const testimonialData = [
    {
      comment:
        " it to anyone who wants to improve their productivity and efficiency in their work or personal life. Thank you, ChatGPT, for being an incredible resource!",
      area: "New South Wales",
      name: "Wilson henry",
      image: people1
    },
    {
      comment:
        " Its ability to generate creative and engaging text on a wide range of topics is truly impressive, and it has helped me overcome writer's block on many occasions.",
      area: "Southumpton",
      name: "Rebecca Ferguson",
      image: people2
    },
    {
      comment:
        "As a language learner, I have found ChatGPT to be an incrediblyges. ChatGPT has helped me improve my vocabulary and grammar skills, and it has also enabled me to communicate more effectively with people ",
      area: "New Jersey",
      name: "Scarlett Johanson",
      image: people3
    },
    
  ];
  return (
    <>
      <div className="my-16">
        <h2 className="text-teal-300 text-2xl font-bold">Testimonial</h2>
        <p className="text-3xl font-medium">What Our Patients Says</p>
      </div>

      <div className="ml-3 p-3 grid gap-6 mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {testimonialData.map(testimonial => 
          <TestimonialDetail key={testimonial.name} testimonial={testimonial}></TestimonialDetail>
          )
        }
        
      </div>
    </>
  );
};

function TestimonialDetail({ testimonial }){
  const { name, comment, area, image } = testimonial;
  return (
    <>
      <div className="card w-96 bg-neutral text-neutral-content">
        <div className="card-body items-center ">
          <p>{comment}</p>
          <div className="card-actions justify-end">
            <img src={image} alt="" />
            <p className='mt-5 px-5'> <span className='text-accent font-semibold'>{name}</span>  <br /> {area}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonial;
