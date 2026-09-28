import Banner from '../home/Banner'
import SRSectionCards from './SRSectionCards'
import ParallaxSection from '../../components/ui/ParallaxSection'
import SupportAPerson from './SupportAPerson'
import SRSponsor from './SRSponsor'
import SREventSponsor from './SREventSponsor'

function SelfReliancePage() {
  return (
    <div>
        <Banner />
        <SRSectionCards />
        <ParallaxSection
                        heading="AVSSV Football"
                        paragraph="Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and decades, but also the leap into electronic typesetting, remaining essentially unchanged. "
                        image="https://vergemagazine.co.uk/wp-content/uploads/2025/09/FA-Grassroots-Campaign-Coaching-mum-1-1031x580.jpg"
                      />
        <SupportAPerson />
        <ParallaxSection image="https://vergemagazine.co.uk/wp-content/uploads/2025/09/FA-Grassroots-Campaign-Coaching-mum-1-1031x580.jpg"/>
        <SRSponsor />
        <ParallaxSection image="https://vergemagazine.co.uk/wp-content/uploads/2025/09/FA-Grassroots-Campaign-Coaching-mum-1-1031x580.jpg"/>
        <SREventSponsor />
    </div>
  )
}

export default SelfReliancePage