import SubHead from "../Atoms/subhead";
import Paragraph from "../Atoms/paragraph";

export default function TestimonialItem() {
  return (
    <div className="flex flex-col gap-[50px] items-center md:flex-row md:items-end lg:gap-44 lg:items-center">
      <img
        src="/testimonial.png"
        alt="testimonial"
        className="w-[300px] md:w-8/12 lg:md-2/5"
      />
      <div className="flex flex-col sm:w-10/12">
        <SubHead style="mb-[18px] w-9/12 md:w-full">
          What Our Customers Say
        </SubHead>
        <Paragraph style="mb-9">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
          assumenda quia nobis accusantium aspernatur. Quidem, animi ut.
          Inventore ut odit neque, tempore unde tenetur dignissimos et at?
          Assumenda, quisquam hic.
        </Paragraph>
        <div className="flex flex-col font-body">
          <h5 className="text-primary-100 mb-2.5 font-medium">John Carter</h5>
          <p className="text-black-300">Fashion Shoes Co.</p>
        </div>
      </div>
    </div>
  );
}
