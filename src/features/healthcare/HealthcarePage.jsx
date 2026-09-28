import Banner from '../home/Banner'
import HealthcareSectionCards from '../healthcare/HealthcareSectionCards'
import ParallaxSection from '../../components/ui/ParallaxSection'
import HelpAPerson from '../healthcare/HelpAPerson'
import HealthcareSponsor from '../healthcare/HealthcareSponsor'
import HealthcareEventSponsor from '../healthcare/HealthcareEventSponsor'

function HealthcarePage() {
  return (
    <div>
        <Banner />
        <HealthcareSectionCards />
        <ParallaxSection
                heading="AVSSV Football"
                paragraph="Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and decades, but also the leap into electronic typesetting, remaining essentially unchanged. "
                image="https://vergemagazine.co.uk/wp-content/uploads/2025/09/FA-Grassroots-Campaign-Coaching-mum-1-1031x580.jpg"
              />
        <HelpAPerson />
        <ParallaxSection image="https://vergemagazine.co.uk/wp-content/uploads/2025/09/FA-Grassroots-Campaign-Coaching-mum-1-1031x580.jpg"/>
        <HealthcareSponsor />
        <ParallaxSection image="https://vergemagazine.co.uk/wp-content/uploads/2025/09/FA-Grassroots-Campaign-Coaching-mum-1-1031x580.jpg"/>
        <HealthcareEventSponsor />
    </div>
  )
}

export default HealthcarePage