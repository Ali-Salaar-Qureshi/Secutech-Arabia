import TeamCard from "./TeamCard";

function OurTeam() {
  return (
    <section className="mt-20 px-25 mb-20 max-sm:px-5">
      <div className="flex flex-row gap-25 max-sm:flex-col">
        <div>
          <h3 className="heading-3 text-[#092C4C]">OUR TEAM</h3>
          <p className="w-[386px] max-sm:w-auto normal-text-regular text-[#5C5C5C] mt-4">The team SecuTech is a highly motivated, dedicated, 
            innovative and pro active professionals with a can 
            do approach to ultimate client's satisfaction with  
            a long lasting professional relationship. </p>
        </div>
        <div className="flex flex-row gap-5 max-sm:flex-col max-sm:items-center">
        <div className="w-[326px]">
        <TeamCard
          shortImg="/images/team-leaders-short.png"
          wideImg="/images/team-leaders-wide.png"
          title="Team Leaders"
          description=
          {`The Team-Admin SecuTech is commited to deliver an innovative, professional,
            high quality and efficient administration services with the leadership 
            qualities both to the employees and the honourable clients.`}
        />
        </div>
        <div className="flex flex-row gap-5">
        <TeamCard
          shortImg="/images/team-leaders-short.png"
          wideImg="/images/sales-tigers.png"
          title="Sale Tigers"
          description=
          {`The Team-Admin SecuTech is commited to deliver an innovative, professional,
            high quality and efficient administration services with the leadership 
            qualities both to the employees and the honourable clients.`}
        />
        <TeamCard
          shortImg="/images/team-leaders.png"
          wideImg="/images/experienced-technical-team.png"
          title="Technical Team"
          description=
          {`The Team-Admin SecuTech is commited to deliver an innovative, professional,
            high quality and efficient administration services with the leadership 
            qualities both to the employees and the honourable clients.`}
        />
        </div>
        </div>
      </div>
    </section>
  );
}

export default OurTeam;
