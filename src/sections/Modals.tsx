import { Input, LongInput, Question, SectionTitle, Select } from '../components/FormElements';

export function Modals() {
  const modals = ["can", "able to", "may", "might", "should", "must", "ought", "would", "used to"];
  
  return (
    <div>
      <SectionTitle>Complete the sentences by using: can/able to /may/might/should/must/ought/would/used to</SectionTitle>
      <Question>She <Select options={modals} /> speak Spanish. (Possiblity or ability)</Question>
      <Question><Select options={modals} /> you tell me when the exam starts? (Possibility or ability)</Question>
      <Question>He <Select options={modals} /> to sleep very well recently. (Possibility or ability)</Question>
      <Question><Select options={modals} /> I go to the stadium? (Permission)</Question>
      <Question><Select options={modals} /> he sit with her? (Permission)</Question>
      <Question><Select options={modals} /> I talk to the teacher? (Permission)</Question>
      <Question>I don’t know but Sokhna <Select options={modals} /> know. (past possibility)</Question>
      <Question>You <Select options={modals} /> run fast when you’re 18 years old. (past ability)</Question>
      <Question>We <Select options={modals} /> respect our parents. (duty or obligation)</Question>
      <Question>You <Select options={modals} /> disobey your teacher. (Prohibition)</Question>
      <Question>We <Select options={modals} /> to review our way of living. (Necessity)</Question>
      <Question>He <Select options={modals} /> see a doctor. (Moral obligation or advice)</Question>
      <Question>It <Select options={modals} /> rain. (Past possibility)</Question>
      <Question>You <Select options={modals} /> come with him tomorrow. (absence of necessity)</Question>
      <Question>In my childhood, I <Select options={modals} /> go to the beach on Sundays. (Past habit)</Question>

      <SectionTitle>After matching the following sentences with the right notion, use the appropriate modal verb to rewrite notions:</SectionTitle>
      <Question>
        1- It’s compulsory for candidates to work hard. <Input />
        <LongInput placeholder="Candidates..." />
      </Question>
      <Question>
        2- He advises me to stop smoking. <Input />
        <LongInput placeholder="You..." />
      </Question>
      <Question>
        3- I’m wondering whether he’ll do it. <Input />
        <LongInput placeholder="He..." />
      </Question>
      <Question>
        4- It’s wise for a leader to take into account their employees’ concerns. <Input />
        <LongInput placeholder="A leader..." />
      </Question>
      <Question>
        5- You’re not allowed to smoke here. <Input />
        <LongInput placeholder="You..." />
      </Question>
      <Question>
        6- He is old enough to do this work. <Input />
        <LongInput placeholder="He..." />
      </Question>
      <Question>
        7- My son is able to speak English. <Input />
        <LongInput placeholder="My son..." />
      </Question>
      <Question>
        8- You don’t have to tell him the truth. <Input />
        <LongInput placeholder="You..." />
      </Question>
      <Question>
        9- It’s impossible that they reach Spain through the ocean. <Input />
        <LongInput placeholder="They..." />
      </Question>
      <Question>
        10- She is bound to obey her husband. <Input />
        <LongInput placeholder="She..." />
      </Question>
      <Question>
        11- I am going to help you next Sunday. <Input />
        <LongInput placeholder="I..." />
      </Question>
      <Question>
        12- Am I allowed to go out ? <Input />
        <LongInput placeholder="... I go out?" />
      </Question>
      <Question>
        13- It’s a necessity to call for help. <Input />
        <LongInput placeholder="We..." />
      </Question>
      <Question>
        14- It’s not a necessity to have a girlfriend. <Input />
        <LongInput placeholder="You..." />
      </Question>
      <Question>
        15- You have to better your speaking. <Input />
        <LongInput placeholder="You..." />
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
