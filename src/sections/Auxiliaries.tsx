import { Input, Select, Question, SectionTitle, LongInput, TableWrapper } from '../components/FormElements';

export function Auxiliaries() {
  const words = ["would", "are", "is", "have", "has", "had", "will", "were", "was", "did", "can", "does"];

  return (
    <div>
      <SectionTitle>A/ Supply with: would/are/is/have/has/had/will/were/was/did/can/does</SectionTitle>
      <Question>Khalilou Fadiga <Select options={words} answer="was" /> a good football player.</Question>
      <Question>President Wade and Diouf <Select options={words} answer="are" /> former Senegalese Presidents.</Question>
      <Question>My name <Select options={words} answer="is" /> Mr Diedhiou.</Question>
      <Question>They <Select options={words} answer="have" /> a big house.</Question>
      <Question>My brother <Select options={words} answer="will" /> go to Spain next year.</Question>
      <Question><Select options={words} answer="did" /> Sadio mané score last year? Yes, he <Select options={words} answer="did" />.</Question>
      <Question>Students <Select options={words} answer="are" /> very clever.</Question>
      <Question><Select options={words} answer="does" /> your father always work? Yes, he <Select options={words} answer="does" />.</Question>

      <SectionTitle>B/ Complete these sentences with the correct verb form those in brackets</SectionTitle>
      <Question>She <Select options={["is", "am", "are"]} answer="is" /> 19 years old.</Question>
      <Question>They <Select options={["have", "are", "is"]} answer="are" /> in grade 5.</Question>
      <Question>The flowres <Select options={["is", "have", "are"]} answer="are" /> very beautiful.</Question>
      <Question>It <Select options={["were", "was", "are"]} answer="was" /> very hot yesterday.</Question>
      <Question>I <Select options={["would", "will", "shall"]} answer="will" /> have a new car next week.</Question>
      <Question>Mr Balakoune <Select options={["would", "will", "is"]} answer="is" /> a good English teacher.</Question>
      <Question>If I have money,I <Select options={["is", "have", "will"]} answer="will" /> buy a an Engilsh dictionary.</Question>
      <Question>He <Select options={["were", "had", "was"]} answer="was" /> 18 years old last year.</Question>

      <SectionTitle>C/ Put the verb in the most suitable form (Present or past tense)</SectionTitle>
      <Question>The headmaster <Input answer={["is not", "isn't"]} /> at school. (not/to be)</Question>
      <Question>Yesterday <Input answer="was" /> my birthday. (to be)</Question>
      <Question>We <Input answer={["are not", "aren't"]} /> hungry. (not/to be)</Question>
      <Question>They <Input answer="had" /> a good H/G teacher last year. (to have)</Question>
      <Question>She <Input answer={["was not", "wasn't"]} /> good at math last year. (not/to be)</Question>
      <Question>My brother <Input answer={["did not have", "didn't have"]} /> a good mark in our last English text. (not/to have)</Question>
      <Question>Look! The teacher <Input answer="is" /> sleeping. (to be)</Question>
      <Question>Amy and Abdu <Input answer="have" /> lovely parents. (to have)</Question>

      <SectionTitle>D/ Put these sentences into the interrogative and negative form</SectionTitle>
      <Question>
        She has many brother
        <div className="flex flex-col ml-4 mt-2">
          <label>Int: <LongInput answer={["Does she have many brothers?", "Has she many brothers?"]} /></label>
          <label>Neg: <LongInput answer={["She does not have many brothers.", "She hasn't many brothers.", "She doesn't have many brothers."]} /></label>
        </div>
      </Question>
      <Question>
        Wade was the 3rd president of senegal
        <div className="flex flex-col ml-4 mt-2">
          <label>Int: <LongInput answer="Was Wade the 3rd president of senegal?" /></label>
          <label>Neg: <LongInput answer={["Wade was not the 3rd president of senegal.", "Wade wasn't the 3rd president of senegal."]} /></label>
        </div>
      </Question>
      <Question>
        They will work hard to earn their lives
        <div className="flex flex-col ml-4 mt-2">
          <label>Int: <LongInput answer="Will they work hard to earn their lives?" /></label>
          <label>Neg: <LongInput answer={["They will not work hard to earn their lives.", "They won't work hard to earn their lives."]} /></label>
        </div>
      </Question>
      <Question>
        He had a good English teacher.
        <div className="flex flex-col ml-4 mt-2">
          <label>Int: <LongInput answer="Did he have a good English teacher?" /></label>
          <label>Neg: <LongInput answer={["He did not have a good English teacher.", "He didn't have a good English teacher."]} /></label>
        </div>
      </Question>

      <SectionTitle>E/ Complete this table</SectionTitle>
      <TableWrapper>
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
            <tr><td className="border border-separator p-2">To be</td><td className="border border-separator p-2"><Input answer={["was", "were"]} /></td><td className="border border-separator p-2"><Input answer="been" /></td><td className="border border-separator p-2"><Input answer="being" /></td></tr>
            <tr><td className="border border-separator p-2"><Input answer="To have" /></td><td className="border border-separator p-2">had</td><td className="border border-separator p-2"><Input answer="had" /></td><td className="border border-separator p-2"><Input answer="having" /></td></tr>
          </tbody>
        </table>
      </TableWrapper>
    </div>
  );
}
