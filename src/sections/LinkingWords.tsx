import { Input, LongInput, Question, SectionTitle, Select } from '../components/FormElements';

export function LinkingWords() {
  const lettersBox = ["although", "lastly", "after all", "not only....but also", "finally", "moreover", "yet", "of course", "recently", "and"];
  const connectorsBox = ["even though", "because of", "not only..........but also", "as", "although", "but", "unless", "so that", "recently", "in spite of"];
  
  return (
    <div>
      <SectionTitle>Fill in the gaps with the appropriate coordinators</SectionTitle>
      <Question>You can eat your cake with a spoon <Input answer="or" /> fork.</Question>
      <Question>My dog enjoys being bathed <Input answer="but" /> hates getting his nails trimmed.</Question>
      <Question>Bill refuses to eat peas, <Input answer="nor" /> will he touch carrots.</Question>
      <Question>Would you rather have cheese <Input answer="or" /> honey on your sandwish?</Question>
      <Question>His two favorite sports are football <Input answer="and" /> tennis.</Question>
      <Question>I wanted to go to the beach, <Input answer="but" /> Mary refused.</Question>
      <Question>I’m allergic to cats, <Input answer="yet" /> I have three of them.</Question>
      <Question>I’m a vegetarian, <Input answer="so" /> I don’t eat any meat.</Question>
      <Question>Hassane will be late to work, <Input answer={["for", "because"]} /> he has a dental appointment.</Question>
      <Question>Mussa doesn’t like to swim, <Input answer="nor" /> does he enjoy cycling.</Question>
      <Question>Daba wanted to eat another piece of cake, <Input answer="but" /> he was on a diet.</Question>
      <Question>I hate to waste a drop of gas, <Input answer={["for", "because", "since"]} /> it’s very expensive these days.</Question>

      <SectionTitle>Fill in the gaps with the appropriate Subordinators:</SectionTitle>
      <Question><Input /> the basement flooded, we spent all day cleaning up.</Question>
      <Question>I don’t want to go to the movies <Input /> I hate the smell of popcorn.</Question>
      <Question><Input /> the train arrives, we have to wait.</Question>
      <Question><Input /> the alarm goes off, I hit the snooze button.</Question>
      <Question><Input /> he reached the age of fifty, he gave up smoking.</Question>
      <Question>Sara begins to sneeze <Input /> she opens the window to get a breath of fresh air.</Question>
      <Question><Input /> the doorbell rang, my dog boby barked loudly;</Question>
      <Question>We visited the new Senegalese’s stadium <Input /> we were in Senegal.</Question>
      <Question>I’ll be home at nine <Input /> I can get a taxi.</Question>
      <Question>I got to the exam on time <Input /> there was a traffic jam.</Question>

      <SectionTitle>Complete the following letter with suitable linking words from the box:</SectionTitle>
      <div className="mb-5 p-5 bg-accent/10 border-2 border-accent/20 rounded-2xl text-sm font-bold text-accent">
        although | lastly | after all | not only....but also | finally | moreover | yet | of course | recently | and
      </div>
      <div className="bg-surface p-6 border-2 border-separator/50 rounded-2xl shadow-sm text-sm sm:text-base font-bold text-ink leading-relaxed flex flex-col gap-4">
        Dear Hassan,<br/><br/>
        I hope you are well. We’re very busy. Rama has finally manage to find a job. <Input /> it’s not a good job, <Input /> it’s a job. <Input />, we have decided to move to a new flat. You know how difficult it is to shift house, <Input /> we have no other alternative. <Input />, Rama got a promotion. <Input /> she has been posted to Sedhiou. <Input />, the new assignment will be quite challenging for her, but she has the ability to manage, as we all know. On the other hand, she is very committed, and <Input /> she has a good managerial skill. She is <Input /> an engineer <Input /> an MBA. <Input />, I’ll be looking foward to your reply.<br/><br/>
        Your sincerly
      </div>

      <SectionTitle>Complete the following sentences with the suitable connectors from the box:</SectionTitle>
      <div className="mb-5 p-5 bg-accent/10 border-2 border-accent/20 rounded-2xl text-sm font-bold text-accent">
        even though | because of | not only..........but also | as | although | but | unless | so that | recently | in spite of
      </div>
      <Question>He is <Input answer="not only" /> intelligent <Input answer="but also" /> handsome.</Question>
      <Question>I think I dropped the letter <Input answer="as" /> I was getting out of the car.</Question>
      <Question><Input answer={["although", "even though"]} /> we left late, we still got there in time.</Question>
      <Question>It was a fantastic evening <Input answer="in spite of" /> terrible food.</Question>
      <Question>I could not study attentively <Input answer="because of" /> noise outside.</Question>
      <Question>I took the course <Input answer={["even though", "although"]} /> it was very difficult.</Question>
      <Question>He earned a lot of money in life <Input answer="but" /> he was not happy in life.</Question>
      <Question>First, the police arrested the criminal. <Input answer="finally" />, they sent him to prison.</Question>
      <Question>He went to the office <Input answer="so that" /> he could meet the manager.</Question>
      <Question>You can’t get in the club <Input answer="unless" /> you’re the member.</Question>

      <SectionTitle>Combine the following pairs of sentences using the given connectors.</SectionTitle>
      <div className="mb-5 p-5 bg-accent/10 border-2 border-accent/20 rounded-2xl text-sm font-bold text-accent">
        So that | though | but | as/since | because | so | undoubtedly
      </div>
      <Question>
        Exemple: a) My sister went to England. She did speak English.<br/>
        My sister went to England though she did not speak English.
      </Question>
      <Question>
        He is a good player. He did not perform well that day.
        <LongInput />
      </Question>
      <Question>
        He is my brother. I don’t like himfor his habit of smoking.
        <LongInput />
      </Question>
      <Question>
        He is a great scientist. There is no doubt.
        <LongInput />
      </Question>
      <Question>
        I didn’t phone you. It was very late.
        <LongInput />
      </Question>
      <Question>
        I stayed at home. I was expecting a phone call.
        <LongInput />
      </Question>
      <Question>
        It’s a very large City. You have to use public transport a lot.
        <LongInput />
      </Question>
      <Question>
        I always write words down in my notebook. I don’t forget them.
        <LongInput />
      </Question>
      <Question>
        I want to improve my English. I will need it in my job very soon.
        <LongInput />
      </Question>
    </div>
  );
}
