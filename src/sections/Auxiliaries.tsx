import { Input, Select, Question, SectionTitle, LongInput } from '../components/FormElements';

export function Auxiliaries() {
  const words = ["would", "are", "is", "have", "has", "had", "will", "were", "was", "did", "can", "does"];

  return (
    <div>
      <SectionTitle>A/ Supply with: would/are/is/have/has/had/will/were/was/did/can/does</SectionTitle>
      <Question>Khalilou Fadiga <Select options={words} /> a good football player.</Question>
      <Question>President Wade and Diouf <Select options={words} /> former Senegalese Presidents.</Question>
      <Question>My name <Select options={words} /> Mr Diedhiou.</Question>
      <Question>They <Select options={words} /> a big house.</Question>
      <Question>My brother <Select options={words} /> go to Spain next year.</Question>
      <Question><Select options={words} /> Sadio mané score last year? Yes, he <Select options={words} />.</Question>
      <Question>Students <Select options={words} /> very clever.</Question>
      <Question><Select options={words} /> your father always work? Yes, he <Select options={words} />.</Question>

      <SectionTitle>B/ Complete these sentences with the correct verb form those in brackets</SectionTitle>
      <Question>She <Select options={["is", "am", "are"]} /> 19 years old.</Question>
      <Question>They <Select options={["have", "are", "is"]} /> in grade 5.</Question>
      <Question>The flowres <Select options={["is", "have", "are"]} /> very beautiful.</Question>
      <Question>It <Select options={["were", "was", "are"]} /> very hot yesterday.</Question>
      <Question>I <Select options={["would", "will", "shall"]} /> have a new car next week.</Question>
      <Question>Mr Balakoune <Select options={["would", "will", "is"]} /> a good English teacher.</Question>
      <Question>If I have money,I <Select options={["is", "have", "will"]} /> buy a an Engilsh dictionary.</Question>
      <Question>He <Select options={["were", "had", "was"]} /> 18 years old last year.</Question>

      <SectionTitle>C/ Put the verb in the most suitable form (Present or past tense)</SectionTitle>
      <Question>The headmaster <Input /> at school. (not/to be)</Question>
      <Question>Yesterday <Input /> my birthday. (to be)</Question>
      <Question>We <Input /> hungry. (not/to be)</Question>
      <Question>They <Input /> a good H/G teacher last year. (to have)</Question>
      <Question>She <Input /> good at math last year. (not/to be)</Question>
      <Question>My brother <Input /> a good mark in our last English text. (not/to have)</Question>
      <Question>Look! The teacher <Input /> sleeping. (to be)</Question>
      <Question>Amy and Abdu <Input /> lovely parents. (to have)</Question>

      <SectionTitle>D/ Put these sentences into the interrogative and negative form</SectionTitle>
      <Question>
        She has many brother
        <div className="flex flex-col ml-4 mt-2">
          <label>Int: <LongInput /></label>
          <label>Neg: <LongInput /></label>
        </div>
      </Question>
      <Question>
        Wade was the 3rd president of senegal
        <div className="flex flex-col ml-4 mt-2">
          <label>Int: <LongInput /></label>
          <label>Neg: <LongInput /></label>
        </div>
      </Question>
      <Question>
        They will work hard to earn their lives
        <div className="flex flex-col ml-4 mt-2">
          <label>Int: <LongInput /></label>
          <label>Neg: <LongInput /></label>
        </div>
      </Question>
      <Question>
        He had a good English teacher.
        <div className="flex flex-col ml-4 mt-2">
          <label>Int: <LongInput /></label>
          <label>Neg: <LongInput /></label>
        </div>
      </Question>

      <SectionTitle>E/ Complete this table</SectionTitle>
      <div className="overflow-x-auto text-sm font-sans">
        <table className="min-w-full text-left border border-separator">
          <thead className="bg-highlight text-muted uppercase text-[10px] tracking-wider">
            <tr>
              <th className="border border-separator p-2">Infinitives</th>
              <th className="border border-separator p-2">Preterit</th>
              <th className="border border-separator p-2">Past participles</th>
              <th className="border border-separator p-2">Present participles</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-separator p-2">To be</td><td className="border border-separator p-2"><Input /></td><td className="border border-separator p-2"><Input /></td><td className="border border-separator p-2"><Input /></td></tr>
            <tr><td className="border border-separator p-2"><Input /></td><td className="border border-separator p-2">had</td><td className="border border-separator p-2"><Input /></td><td className="border border-separator p-2"><Input /></td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
