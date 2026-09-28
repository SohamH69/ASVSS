import SectionContainer from "../../components/ui/SectionContainer";
import InfoCard from "../../components/ui/InfoCard";

function SRSponsor() {
  return (
    <div id="team-sponsor" className="px-6 py-12 scroll-mt-24">
      <SectionContainer
        title="Team Sponsor"
        description="Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and decades, but also the leap into electronic typesetting, remaining essentially unchanged. "
      >
        <InfoCard
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVToUWlDBe9H8YGmA2K1rlBri3c8eeuFehkJTOOIdgtG_BSIwWQmVmySBr&s=10"
          title="Sponsor banners for football"
          amountRaised="50,000"
          donors="2500"
        />
        <InfoCard
          image="https://vergemagazine.co.uk/wp-content/uploads/2025/09/FA-Grassroots-Campaign-Jordan-Nobbs-1031x580.jpg"
          title="Sponsor 1 day meal for tournament"
          amountRaised="50,000"
          donors="3465"
        />
        <InfoCard
          image="https://api.blackfootballerspartnership.com/wp-content/uploads/2022/01/TELEMMGLPICT000215842945_trans_NvBQzQNjv4BqGnvE-VNXSbhg1qqFSd7eP1f9X27c8zzuUcifAcx3Wsg.jpg"
          title="Support tournament prize money"
          amountRaised="50,000"
          donors="6545"
        />
      </SectionContainer>
    </div>
  );
}

export default SRSponsor;
