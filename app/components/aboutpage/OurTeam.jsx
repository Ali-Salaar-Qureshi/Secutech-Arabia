import TeamCard from "./TeamCard";

function OurTeam() {
  return (
    <section className="mt-20 px-25 mb-20 max-sm:px-5 max-sm:items-center ">
      <div className="flex flex-row gap-25 max-sm:flex-col">
        <div>
          <h3 className="heading-3 text-[#092C4C]">OUR TEAM</h3>
          <p className="w-[386px] max-sm:w-auto normal-text-regular text-[#5C5C5C] mt-4">
            The team SecuTech is a highly motivated, dedicated, innovative and
            pro active professionals with a can do approach to ultimate client's
            satisfaction with  a long lasting professional relationship. 
          </p>
        </div>
        <div className="flex flex-row gap-5 max-sm:flex-col max-sm:items-center">
          <div className="w-[326px]">
            <TeamCard
              Img="/images/team-leaders-wide.png"
              title="Team Leaders"
              description={`The Team-Admin SecuTech is commited to deliver an innovative, professional,
            high quality and efficient administration services with the leadership 
            qualities both to the employees and the honourable clients.`}
            />
          </div>
          <div className="flex flex-row gap-5">
            <TeamCard
              Img="/images/sales-tigers.webp"
              title="Sale Tigers"
              description={`Agile and client-focused experts who turn opportunities into growth.`}
            />
            <TeamCard
              Img="/images/technical-team.webp"
              title="Technical Team"
              description={`Certified professionals delivering reliable, scalable, and secure solutions.`}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center gap-35 mt-25 max-sm:flex-col max-sm:gap-10 max-sm:rounded-2xl max-sm:pt-4 max-sm:w-98% max-sm:items-center max-sm:justify-center max-sm:mx-10">
        <div className="flex flex-col ">
          <h3 className="heading-3 text-[#092C4C]">OUR PRESENCE</h3>
          <p className="normal-text-regular text-[#5C5C5C] w-130 mt-4 max-sm:w-80">
            SecuTech’s footprint extends across the Kingdom, enabling us to
            deliver reliable, localized technology solutions with speed and
            precision. Our strategic presence allows us to stay close to our
            clients, understand regional business dynamics, and provide
            on-ground support whenever needed. By combining global expertise
            with local understanding, we ensure scalable solutions that align
            with your business goals and Saudi Arabia’s digital future.
          </p>
        </div>
        <div>
          <img
            src="/images/presence-map.png"
            alt="Presence map"
            className="max-sm:w-[150%]"
          />
        </div>
      </div>
    </section>
  );
}

export default OurTeam;
