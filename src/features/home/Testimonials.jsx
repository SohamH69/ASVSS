import StackedTestimonials from "../../components/ui/StackedTestimonials"


function Testimonials() {
  return (
    <div>
        <div className="flex h-[10vh] shrink-0 items-center justify-center px-5">
          <h2 className="text-2xl md:text-3xl font-bold uppercase">
            Our Testimonials
          </h2>
        </div>
        <StackedTestimonials />
       
    </div>
  )
}

export default Testimonials