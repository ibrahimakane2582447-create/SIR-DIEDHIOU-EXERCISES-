import { Input, LongInput, Question, SectionTitle, Select } from '../components/FormElements';

export function IfClauses() {
  return (
    <div>
      <SectionTitle>a) Complete the sentenses with: a) b) c)</SectionTitle>
      <Question num="1">If wind blowsout, leaves <Select options={["a) will fall", "b) falls", "c) fall"]} answer="c) fall" /> down.</Question>
      <Question num="2">I wouldn’t be late if I <Select options={["a) go", "b) went", "c) had gone"]} answer="b) went" /> to bed earlier.</Question>
      <Question num="3">I <Select options={["a) won't", "b) wouldn't", "c) don't"]} answer="b) wouldn't" /> buy that coast if I were you.</Question>
      <Question num="4">I would have phoned you if I <Select options={["a) have", "b) have had", "c) had had"]} answer="c) had had" /> your number.</Question>
      <Question num="5">If you don’t revise your lessons, the teacher <Select options={["a) would punish", "b) punished", "c) will punish"]} answer="c) will punish" /> you.</Question>
      <Question num="6">He wouldn’t be late if he <Select options={["a) wakes up", "b) woke up", "c) has woken up"]} answer="b) woke up" /> earlier.</Question>
      <Question num="7">If I learnt my grammar, I <Select options={["a) will have", "b) would have", "c) would have had"]} answer="b) would have" /> a good mark.</Question>

      <SectionTitle>b) Put the verbs into the correct form</SectionTitle>
      <Question>Exemple: they would be rather offended if I didn’t go to see him. (not/go)</Question>
      <Question>If you exercised well, you (to have) <Input answer="would have" /> the best mark.</Question>
      <Question>If I was offered the job, I think I (to take) <Input answer={["would take", "should take"]} /> it.</Question>
      <Question>What will happen if you (to press) <Input answer="press" /> that red button?</Question>
      <Question>If I had a gun, I (not/to use) <Input answer={["would not use", "wouldn't use"]} /> it.</Question>
      <Question>I’m sure Amy Collé (to understand) <Input answer="would understand" /> if you explained the situation to her.</Question>
      <Question>If our team had played well, they (to loose) <Input answer={["would not have lost", "wouldn't have lost"]} /> the game.</Question>
      <Question>I would have given the best answer if you (to reformulate) <Input answer="had reformulated" /> the question.</Question>

      <SectionTitle>c) Reformulate these sentences using if or unless</SectionTitle>
      <Question>
        Awa is sick. She doesn’t come today.
        <LongInput placeholder="If she..." answer={["If she wasn't sick, she would come today.", "If she were not sick, she would come today.", "If she wasn't sick, she would come."]} />
        <LongInput placeholder="Unless she..." answer={["Unless she is sick, she will come today.", "Unless she is sick, she comes."]} />
      </Question>
      <Question>
        They lost the game because they didn’t play well.
        <LongInput placeholder="If they..." answer={["If they had played well, they wouldn't have lost the game.", "If they had played well, they would not have lost."]} />
        <LongInput placeholder="Unless they..." answer={["Unless they had played well, they would have lost the game.", "Unless they had played well, they would have lost."]} />
      </Question>
      <Question>
        He gives up school because of his illness.
        <LongInput placeholder="If he..." answer={["If he wasn't ill, he wouldn't give up school.", "If he weren't ill, he wouldn't give up school.", "If he wasn't sick, he wouldn't give up school."]} />
        <LongInput placeholder="Unless he..." answer={["Unless he improves, he will give up school.", "Unless he is cured, he will give up school."]} />
      </Question>
      <Question>
        He gave up school because he was sick.
        <LongInput placeholder="If he..." answer={["If he hadn't been sick, he wouldn't have given up school.", "If he had not been sick, he would not have given up school."]} />
        <LongInput placeholder="Unless he..." answer={["Unless he had been sick, he wouldn't have given up school.", "Unless he had been ill, he wouldn't have given up school."]} />
      </Question>
      <Question>
        We can’t go out. It’s raining.
        <LongInput placeholder="If it..." answer={["If it wasn't raining, we could go out.", "If it weren't raining, we could go out.", "If it stopped raining, we could go out."]} />
        <LongInput placeholder="Unless it..." answer={["Unless it stops raining, we can't go out.", "Unless it is raining, we can go out."]} />
      </Question>
      <Question>
        Learn your lesons otherwise the teacher punishes you.
        <LongInput placeholder="If you..." answer={["If you don't learn your lessons, the teacher will punish you.", "If you learn your lessons, the teacher won't punish you."]} />
        <LongInput placeholder="Unless you..." answer={["Unless you learn your lessons, the teacher will punish you.", "Unless you study, the teacher will punish you."]} />
      </Question>
      <Question>
        I didn’t know the answer. Therefore, I couldn’t tell you anything.
        <LongInput placeholder="If I..." answer={["If I had known the answer, I could have told you something.", "If I had known the answer, I would have told you."]} />
        <LongInput placeholder="Unless I..." answer={["Unless I had known the answer, I couldn't have told you anything.", "Unless I knew the answer, I couldn't tell you anything."]} />
      </Question>

      <SectionTitle>d) Complete with the correct tense. Then say what type of conditional is each sentence( 0,1st ,2nd ,3rd ).</SectionTitle>
      <Question>I wouldn’t watch so much TV if I (to be) <Input answer="were" /> you. Type: <Input answer="2" /></Question>
      <Question>When you cut your finger, blood (to gush) <Input answer="gushes" /> out. Type: <Input answer={["0", "zero"]} /></Question>
      <Question>If my dad repairs the boat, we (to go) <Input answer="will go" /> fishing. Type: <Input answer="1" /></Question>
      <Question>If it rains, the grass (to get) <Input answer={["gets", "will get"]} /> wet. Type: <Input answer={["0", "zero", "1", "1st"]} /></Question>
      <Question>We would have cleaner air to breathe if we (to stop) <Input answer="stopped" /> using chemicals. Type: <Input answer="2" /></Question>
      <Question>If I hadn’t taken that bus, I (not/meet) <Input answer={["would not have met", "wouldn't have met"]} /> my firnds. Type: <Input answer="3" /></Question>
      <Question>The time changes if you (to cross) <Input answer="cross" /> an international date line. Type: <Input answer={["0", "zero"]} /></Question>
      <Question>If you don’t come on time, the boss (to be) <Input answer="will be" /> angry. Type: <Input answer="1" /></Question>
      <Question>If I (to have) <Input answer="had" /> more time, I would have a good mark. Type: <Input answer="2" /></Question>
      <Question>Unless we (to study) <Input answer="study" /> harder, we won’t get good marks. Type: <Input answer="1" /></Question>
      <Question>If I (to go) <Input answer="had gone" /> to the airport, I would have seen them. Type: <Input answer="3" /></Question>
      <Question>If you don’t learn your lessons, you (to fail) <Input answer="will fail" /> in your exam. Type: <Input answer="1" /></Question>
      <Question>It wouldn’t have been so cold unless you (to close) <Input answer="had closed" /> the windows. Type: <Input answer="3" /></Question>
      <Question>Unless the sun shines, we (to walk) <Input answer={["will walk", "won't walk"]} /> to the town. Type: <Input answer="1" /></Question>
      <Question>Unless you (to win) <Input answer="won" /> the competion, you would’t be excited. Type: <Input answer="2" /></Question>
      <Question>Unless I do this test, I (to improve) <Input answer={["won't improve", "will not improve"]} /> my english. Type: <Input answer="1" /></Question>
    </div>
  );
}
