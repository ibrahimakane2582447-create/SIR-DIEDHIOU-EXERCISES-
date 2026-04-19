import { Input, LongInput, Question, SectionTitle, Select } from '../components/FormElements';

export function Modals() {
  const modals = ["can", "able to", "may", "might", "should", "must", "ought", "would", "used to"];
  
  return (
    <div>
      <SectionTitle>Complete the sentences by using: can/able to /may/might/should/must/ought/would/used to</SectionTitle>
      <Question>She <Select options={modals} answer={["can", "able to"]} /> speak Spanish. (Possiblity or ability)</Question>
      <Question><Select options={modals} answer="can" /> you tell me when the exam starts? (Possibility or ability)</Question>
      <Question>He hasn't been <Select options={modals} answer="able to" /> sleep very well recently. (Possibility or ability)</Question>
      <Question><Select options={modals} answer="may" /> I go to the stadium? (Permission)</Question>
      <Question><Select options={modals} answer="may" /> he sit with her? (Permission)</Question>
      <Question><Select options={modals} answer="may" /> I talk to the teacher? (Permission)</Question>
      <Question>I don’t know but Sokhna <Select options={modals} answer="might" /> know. (past possibility)</Question>
      <Question>You were <Select options={modals} answer="able to" /> run fast when you’re 18 years old. (past ability)</Question>
      <Question>We <Select options={modals} answer="must" /> respect our parents. (duty or obligation)</Question>
      <Question>You <Select options={["must not", "mustn't", "should not", "shouldn't"]} answer="must not" /> disobey your teacher. (Prohibition)</Question>
      <Question>We <Select options={modals} answer="ought" /> to review our way of living. (Necessity)</Question>
      <Question>He <Select options={modals} answer={["should", "ought"]} /> see a doctor. (Moral obligation or advice)</Question>
      <Question>It <Select options={modals} answer="might" /> rain. (Past possibility)</Question>
      <Question>You don't need to / <Select options={["needn't", "don't have to", "must not"]} answer="needn't" /> come with him tomorrow. (absence of necessity)</Question>
      <Question>In my childhood, I <Select options={modals} answer="used to" /> go to the beach on Sundays. (Past habit)</Question>

      <SectionTitle>After matching the following sentences with the right notion, use the appropriate modal verb to rewrite notions:</SectionTitle>
      <Question>
        1- It’s compulsory for candidates to work hard. <Input answer="obligation" />
        <LongInput placeholder="Candidates..." answer="Candidates must work hard." />
      </Question>
      <Question>
        2- He advises me to stop smoking. <Input answer="advice" />
        <LongInput placeholder="You..." answer={["You should stop smoking.", "You ought to stop smoking."]} />
      </Question>
      <Question>
        3- I’m wondering whether he’ll do it. <Input answer={["doubt", "possibility"]} />
        <LongInput placeholder="He..." answer={["He might do it.", "He may do it."]} />
      </Question>
      <Question>
        4- It’s wise for a leader to take into account their employees’ concerns. <Input answer={["advice", "moral advice"]} />
        <LongInput placeholder="A leader..." answer={["A leader should take into account their employees' concerns.", "A leader ought to take into account their employees' concerns."]} />
      </Question>
      <Question>
        5- You’re not allowed to smoke here. <Input answer="prohibition" />
        <LongInput placeholder="You..." answer={["You must not smoke here.", "You mustn't smoke here.", "You can't smoke here."]} />
      </Question>
      <Question>
        6- He is old enough to do this work. <Input answer="ability" />
        <LongInput placeholder="He..." answer={["He can do this work.", "He is able to do this work."]} />
      </Question>
      <Question>
        7- My son is able to speak English. <Input answer="ability" />
        <LongInput placeholder="My son..." answer={["My son can speak English.", "My son is able to speak English."]} />
      </Question>
      <Question>
        8- You don’t have to tell him the truth. <Input answer={["absence of necessity", "no necessity"]} />
        <LongInput placeholder="You..." answer={["You needn't tell him the truth.", "You don't have to tell him the truth."]} />
      </Question>
      <Question>
        9- It’s impossible that they reach Spain through the ocean. <Input answer="impossibility" />
        <LongInput placeholder="They..." answer={["They cannot reach Spain through the ocean.", "They can't reach Spain through the ocean."]} />
      </Question>
      <Question>
        10- She is bound to obey her husband. <Input answer="obligation" />
        <LongInput placeholder="She..." answer="She must obey her husband." />
      </Question>
      <Question>
        11- I am going to help you next Sunday. <Input answer={["willingness", "future"]} />
        <LongInput placeholder="I..." answer={["I will help you next Sunday.", "I'll help you next Sunday."]} />
      </Question>
      <Question>
        12- Am I allowed to go out ? <Input answer="permission" />
        <LongInput placeholder="... I go out?" answer={["May I go out?", "Can I go out?"]} />
      </Question>
      <Question>
        13- It’s a necessity to call for help. <Input answer="necessity" />
        <LongInput placeholder="We..." answer={["We must call for help.", "We need to call for help.", "We have to call for help."]} />
      </Question>
      <Question>
        14- It’s not a necessity to have a girlfriend. <Input answer={["absence of necessity", "no obligation"]} />
        <LongInput placeholder="You..." answer={["You needn't have a girlfriend.", "You don't need to have a girlfriend.", "You don't have to have a girlfriend."]} />
      </Question>
      <Question>
        15- You have to better your speaking. <Input answer={["obligation", "necessity"]} />
        <LongInput placeholder="You..." answer={["You must better your speaking.", "You have to better your speaking.", "You should better your speaking."]} />
      </Question>

      <SectionTitle>Complete these statements with their notions</SectionTitle>
      <div className="mb-5 p-5 bg-accent/10 border-2 border-accent/20 rounded-2xl text-sm font-bold text-accent">
        a) ability, b) prohibition, c) obligation, d) permission, e) Moral advice, f) necessity, g) boldness
      </div>
      <Question>Journalists must give good informations to the population. <Select options={["a", "b", "c", "d", "e", "f", "g"]} answer={["c", "f"]} /></Question>
      <Question>Wealthy persons should help street children. <Select options={["a", "b", "c", "d", "e", "f", "g"]} answer="e" /></Question>
      <Question>Students are not allowed to miss classes. <Select options={["a", "b", "c", "d", "e", "f", "g"]} answer="b" /></Question>
      <Question>My bike is broken down. Can you lend me yours please? <Select options={["a", "b", "c", "d", "e", "f", "g"]} answer="d" /></Question>
      <Question>My wife is able to speak English. <Select options={["a", "b", "c", "d", "e", "f", "g"]} answer="a" /></Question>
      <Question>Old persons need assistance. <Select options={["a", "b", "c", "d", "e", "f", "g"]} answer="f" /></Question>
    </div>
  );
}
