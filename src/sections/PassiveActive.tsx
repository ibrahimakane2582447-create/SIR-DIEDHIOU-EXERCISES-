import { Input, LongInput, Question, SectionTitle, Select } from '../components/FormElements';

export function PassiveActive() {
  return (
    <div>
      <SectionTitle>Choose the correct answer active or passive</SectionTitle>
      <Question>Football <Select options={["Was discovered", "discovered", "had been discovered"]} answer="Was discovered" /> in England.</Question>
      <Question>A reward <Select options={["Will give", "will be given", "is going"]} answer="will be given" /> to the best of you.</Question>
      <Question>He <Select options={["Shoked", "was shoked", "is shoked"]} answer="was shoked" /> by his wife’s failure.</Question>
      <Question>The exam <Select options={["Is held", "is being held", "will be held"]} answer="will be held" /> next Friday.</Question>
      <Question>He <Select options={["Have bought", "has bought", "has been bought"]} answer="has bought" /> a new car.</Question>
      <Question>They <Select options={["Was caught", "were caught", "caught"]} answer="were caught" /> by tthe police.</Question>
      <Question>The gift <Select options={["Will be given", "will be giving", "will give"]} answer="Will be given" /> to my son.</Question>
      <Question>They <Select options={["Were killed", "kill", "killed"]} answer="killed" /> a lion yesterday.</Question>
      <Question>A good decision <Select options={["Is taken", "has been taken", "will take"]} answer="has been taken" /> by our lleaders.</Question>
      <Question>They <Select options={["Have signed", "has signed", "have been signed"]} answer="Have signed" /> just new agreements.</Question>

      <SectionTitle>Change the following sentences either into active or passive voice</SectionTitle>
      <Question>
        Most Senegalese women watched « famille senegalaise ».
        <LongInput placeholder="Famille senegalese..." />
      </Question>
      <Question>
        He fixes my watch.
        <LongInput placeholder="My watch..." />
      </Question>
      <Question>
        They keep me waiting.
        <LongInput placeholder="I..." />
      </Question>
      <Question>
        The lion was killed.
        <LongInput placeholder="They..." />
      </Question>
      <Question>
        Someone cleans the room every Monday.
        <LongInput placeholder="The room..." />
      </Question>
      <Question>
        At the end of the yea, the best among you will be rewarded.
        <LongInput placeholder="They..." />
      </Question>
      <Question>
        Christophe Colombe discovered America in 1492.
        <LongInput placeholder="America..." />
      </Question>
      <Question>
        This exercise book is written by Mr Diedhiou.
        <LongInput placeholder="Mr Diedhiou..." />
      </Question>
      <Question>
        The meeting has been just postponed.
        <LongInput placeholder="They..." />
      </Question>
      <Question>
        Careless driving had caused many death.
        <LongInput placeholder="Many death..." />
      </Question>

      <SectionTitle>Complete the sentences with a passive construction</SectionTitle>
      <Question>Many buildings (to distroy) <Input answer="were distroyed" /> during the world war II. (Simple past)</Question>
      <Question>The player who (to injure) <Input answer="was injured" /> is back in the team. (Simple past)</Question>
      <Question>The old hospital (to demolish) <Input answer="is being demolished" />. (present continuous)</Question>
      <Question>One thousand houses (to build) <Input answer="have been built" /> in Diamniadio. (Present perfect)</Question>
      <Question>Because of the rainy season, meetings must (to postpon) <Input answer="be postponed" />. (infinitive)</Question>
      <Question>It (to think) <Input answer="had been thought" /> the prisoner would be released. (Past perfect)</Question>
      <Question>A cease fire (to expect) <Input answer="is expected" /> (declare) <Input answer="to be declared" /> later this week. (Prst simple & infintive)</Question>
      <Question>A famous political leader <Input answer="had been sent" /> to jail. (Past perfect)</Question>
      <Question>A meeting (to hold) <Input answer="is being held" /> at the moment. (Present continuous)</Question>
      <Question>He is not accustomed to (to treat) <Input answer="being treated" /> in that way. (Gerund)</Question>
    </div>
  );
}
