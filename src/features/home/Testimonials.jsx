import StackedTestimonials from "../../components/ui/StackedTestimonials"


function Testimonials() {
  return (
    <div>
        <div className="flex h-[13vh] shrink-0 items-center justify-center px-5 mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase">
            Our Testimonials
          </h2>
        </div>
        <StackedTestimonials />
       
    </div>
  )
}

export default Testimonials