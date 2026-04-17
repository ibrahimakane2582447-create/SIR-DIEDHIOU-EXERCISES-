import { Input, LongInput, Question, SectionTitle, Select } from '../components/FormElements';

export function Tenses() {
  return (
    <div>
      <SectionTitle>A) Change the tenses of the following verbs</SectionTitle>
      <Question>
        They often read the Coran.
        <div className="flex flex-col ml-4 mt-2 gap-2">
          <label>When I saw them, <LongInput answer="they were reading the Coran" /></label>
          <label>For two hours, <LongInput answer={["they have been reading the Coran", "they had been reading the Coran"]} /></label>
          <label>While I was praying, <LongInput answer="they were reading the Coran" /></label>
          <label>Three hours ago <LongInput answer="they read the Coran" /></label>
        </div>
      </Question>
      <Question>
        They read the Coran.
        <div className="flex flex-col ml-4 mt-2 gap-2">
          <label>Look! <LongInput answer="they are reading the Coran" /></label>
          <label>Every Friday <LongInput answer="they read the Coran" /></label>
        </div>
      </Question>
      <Question>
        He wrote an interesting book.
        <div className="flex flex-col ml-4 mt-2 gap-2">
          <label>Since 2022 <LongInput answer={["he has written an interesting book", "he has been writing an interesting book"]} /></label>
          <label>Presently <LongInput answer="he is writing an interesting book" /></label>
          <label>Next year <LongInput answer="he will write an interesting book" /></label>
        </div>
      </Question>
      <Question>
        The teacher has been speaking for two hours.
        <div className="flex flex-col ml-4 mt-2 gap-2">
          <label>Yesterday <LongInput answer="the teacher spoke" /></label>
          <label>Already <LongInput answer="the teacher has already spoken" /></label>
          <label>Listen! <LongInput answer="the teacher is speaking" /></label>
        </div>
      </Question>
      <Question>
        President Wade will hold a speech tomorrow.
        <div className="flex flex-col ml-4 mt-2 gap-2">
          <label>Never <LongInput answer="President Wade will never hold a speech" /></label>
          <label>The coming week <LongInput answer="President Wade will hold a speech" /></label>
          <label>For 4hours <LongInput answer="President Wade will have been holding a speech" /></label>
        </div>
      </Question>
      <Question>
        They are doing their homework.
        <div className="flex flex-col ml-4 mt-2 gap-2">
          <label>Not yet <LongInput answer={["they have not done their homework yet", "they haven't done their homework yet"]} /></label>
          <label>When I called them <LongInput answer="they were doing their homework" /></label>
          <label>Just <LongInput answer="they have just done their homework" /></label>
        </div>
      </Question>
      <Question>
        He read magazines 3hours ago.
        <div className="flex flex-col ml-4 mt-2 gap-2">
          <label>Every morning <LongInput answer="he reads magazines" /></label>
          <label>Tomorrow <LongInput answer="he will read magazines" /></label>
          <label>When I came in <LongInput answer="he was reading magazines" /></label>
        </div>
      </Question>

      <SectionTitle>B) Choose the correct verb form from those in brackets:</SectionTitle>
      <Question>The earth <Select options={["move", "moves", "moved"]} answer="moves" /> round the Sun.</Question>
      <Question>I <Select options={["see", "have seen", "saw"]} answer="saw" /> President Wade yesterday.</Question>
      <Question>Our Primer Minister <Select options={["arrive", "arrived", "arrives"]} answer="arrived" /> in San Diego a week ago.</Question>
      <Question>My best friend and I <Select options={["knew", "known", "knows"]} answer="knew" /> each other for over fifteen years.</Question>
      <Question>He <Select options={["is driving", "was driving", "drove"]} answer="was driving" /> fast when the accident happened.</Question>
      <Question>He <Select options={["held", "hold", "will hold"]} answer="will hold" /> a speech before the Presidential Election.</Question>
      <Question>The teacher thanked me for what I <Select options={["have done", "had done", "have been done"]} answer="had done" />.</Question>
      <Question>The Sun <Select options={["rises", "rise", "will rise"]} answer="rises" /> in the East.</Question>
      <Question>Our team <Select options={["lost", "have lost", "has lost"]} answer="has lost" /> just against the weakest team.</Question>
      <Question>We <Select options={["used", "use", "uses"]} answer="used" /> to live in Dakar in 2000.</Question>
      <Question>When we lived in Thiés, he <Select options={["goes", "went", "was going"]} answer="went" /> to the cinema once a week.</Question>
      <Question>It started to rain while we <Select options={["are playing", "were playing", "had played"]} answer="were playing" /> basketball.</Question>
      <Question>The soup <Select options={["taste", "tasted", "is tasting"]} answer={["tastes", "tasted"]} /> good.</Question>
      <Question>Befor the police <Select options={["arrives", "arrived", "arrive"]} answer="arrived" /> the bugglar already <Select options={["has gone", "went", "had gone"]} answer="had gone" />.</Question>
      <Question>I <Select options={["had met", "met", "haven't met"]} answer="haven't met" /> the headmaster this week.</Question>

      <SectionTitle>C) Put the verbs in parentheses into the appropriate tenses</SectionTitle>
      <Question>What a game! I (to watch,never) <Input answer="have never watched" /> such a game.</Question>
      <Question>Things (to change) <Input answer={["are changing", "have changed", "changed"]} /> at the Company. When we (to start) <Input answer="started" /> working here three years ago, it (to have,only) sixteen employees. Since then, we (to expend) <Input answer="have expanded" /> to include more than fifty full-time workers.</Question>
      <Question>This paper (appear) <Input answer="appears" /> twice weekly.</Question>
      <Question>He (to work) <Input answer="has been working" /> here for the last five years.</Question>
      <Question>Don’t disturb me! I (to learn) <Input answer="am learning" /> my lessons.</Question>
      <Question>He (to fall) <Input answer="fell" /> asleep while he was reading.</Question>
      <Question>It’s high time we (to learn) <Input answer="learnt" /> from our mistakes.</Question>
      <Question>It’s the first time I (to meet) <Input answer="have met" /> him.</Question>
      <Question>It was the first time we (to hear) <Input answer="had heard" /> about his death.</Question>
      <Question>In the last hundred years, travelling (to become) <Input answer="has become" /> much easier and very confortable. In the 19th century, it (to take) <Input answer="took" /> two or three months to cross North America by covered wagon.</Question>
      <Question>Djuma, I can’t believe how much you (to change) <Input answer="have changed" /> since the last time I (to see) <Input answer="saw" /> you. You (to grow) <Input answer="have grown" /> at least a foot.</Question>
      <Question>The chief (to go) <Input answer="had gone" /> before the Police (to arrive) <Input answer="arrived" />.</Question>
      <Question>I (to tell) <Input answer="told" /> him to stay on the path while I was hiking but he (to wander off) <Input answer="wandered off" /> into the forest and (to be) <Input answer="was" /> bitten by a snake.</Question>
      <Question>I (to see) <Input answer="saw" /> him last five years before.</Question>
      <Question>She (to look) <Input answer="looks" /> worried about something.</Question>
      <Question>My father (to be) <Input answer="has been" /> a broad for many years. He (to come) <Input answer="will come" /> this year.</Question>

      <SectionTitle>D) Turn these sentences into negative and interrogative forms:</SectionTitle>
      <Question>Birds eats millets.<br/>Neg: <LongInput answer="Birds do not eat millets" /><br/>Int: <LongInput answer="Do birds eat millets?" /></Question>
      <Question>We swam in the river yesterday.<br/>Neg: <LongInput answer="We did not swim in the river yesterday" /><br/>Int: <LongInput answer="Did we swim in the river yesterday?" /></Question>
      <Question>The boys will ring the bell tomorrow.<br/>Neg: <LongInput answer="The boys will not ring the bell tomorrow" /><br/>Int: <LongInput answer="Will the boys ring the bell tomorrow?" /></Question>
      <Question>I have just understood the grammar lesson.<br/>Neg: <LongInput answer="I have not understood the grammar lesson yet" /><br/>Int: <LongInput answer="Have I just understood the grammar lesson?" /></Question>
      <Question>The two teams had fought fiercely.<br/>Neg: <LongInput answer="The two teams had not fought fiercely" /><br/>Int: <LongInput answer="Had the two teams fought fiercely?" /></Question>
      <Question>The dog chases the rabbit.<br/>Neg: <LongInput answer="The dog does not chase the rabbit" /><br/>Int: <LongInput answer="Does the dog chase the rabbit?" /></Question>
      <Question>He used to play football at school.<br/>Neg: <LongInput answer="He did not use to play football at school" /><br/>Int: <LongInput answer="Did he use to play football at school?" /><br/>Int-neg: <LongInput answer="Didn't he use to play football at school?" /></Question>
    </div>
  );
}
