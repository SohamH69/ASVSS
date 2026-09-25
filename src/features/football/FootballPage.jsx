import ParallaxSection from "../../components/ui/ParallaxSection";
import Banner from "../home/Banner";
import AdoptAPlayer from "./AdoptAPlayer";
import EventSponsor from "./EventSponsor";
import FootballSectionCards from "./FootballSectionCards";
import TeamSponsor from "./TeamSponsor";

function FootballPage() {
  return (
    <div>
      <Banner />
      <FootballSectionCards />
      <ParallaxSection
        heading="AVSSV Football"
        paragraph="Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and decades, but also the leap into electronic typesetting, remaining essentially unchanged. "
        image="https://vergemagazine.co.uk/wp-content/uploads/2025/09/FA-Grassroots-Campaign-Coaching-mum-1-1031x580.jpg"
      />
      <AdoptAPlayer />
      <ParallaxSection image="https://vergemagazine.co.uk/wp-content/uploads/2025/09/FA-Grassroots-Campaign-Coaching-mum-1-1031x580.jpg"/>
      <TeamSponsor />
      <ParallaxSection image="https://vergemagazine.co.uk/wp-content/uploads/2025/09/FA-Grassroots-Campaign-Coaching-mum-1-1031x580.jpg"/>
      <EventSponsor />
    </div>
  );
}

export default FootballPage;
