import { RiBox3Fill } from 'react-icons/ri';
import TitleHead from '../TitleHead';

const PackagingSection = () => {
  return (
    <div className="packaginsec py-5 overflow-hidden">
      <div className="container py-5">
        <div className="row ">
          <div className="col-12 col-lg-6" data-aos="fade-right" data-aos-duration="1500" data-aos-once="true">
            <div className="h-100">
              <img src={require('../assets/images/AboutPackegingsec.jpeg')} alt="" className='img-fluid object-fit-cover w-100 h-100' />
            </div>
          </div>
          <div className="col-12 col-lg-6 packaginsec" data-aos="fade-left" data-aos-duration="1500" data-aos-once="true">
            <div className="h-100 p-3">
              <TitleHead ftitle={"Innovative"} stitle={"Packaging Solutions"} />

              <p className="text-secondary fw-medium pera">
                We offer creative packaging designs for all industries, tailored to enhance your product's value and safety. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam debitis laboriosam reiciendis voluptas maiores excepturi enim perferendis non doloribus optio!
              </p>
              <ul className="features-list">
                <div className='d-flex py-1 align-items-center pera'><div className='fs-5 fw-bold text-success pe-2'><RiBox3Fill /></div>Eco-friendly and sustainable materials</div>
                <div className='d-flex py-1 align-items-center pera'><div className='fs-5 fw-bold text-success pe-2'><RiBox3Fill /></div>Custom designs for various industries</div>
                <div className='d-flex py-1 align-items-center pera'><div className='fs-5 fw-bold text-success pe-2'><RiBox3Fill /></div>Durable and cost-effective solutions</div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackagingSection;
