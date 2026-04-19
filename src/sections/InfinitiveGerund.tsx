import React, { useState } from 'react';
import { Input, Question, SectionTitle, Select, TableWrapper } from '../components/FormElements';

export function InfinitiveGerund() {
  return (
    <div>
      <SectionTitle>Choose a) or b) to complete these sentenses</SectionTitle>
      <Question>The chief denies <Select options={["a) to steal", "b) stealing"]} answer="b) stealing" /> the scooter.</Question>
      <Question>Where have you learnt <Select options={["a) to speak", "b) speaking"]} answer="a) to speak" /> English?</Question>
      <Question>Are you interested in <Select options={["a) living", "b) to live"]} answer="a) living" /> in Africa?</Question>
      <Question>Your results are good so keep on <Select options={["a) to work", "b) working"]} answer="b) working" /> hard.</Question>
      <Question>I plan <Select options={["a) to take", "b) taking"]} answer="a) to take" /> part in that meeting.</Question>
      <Question>Students enjoy <Select options={["a) going", "b) to go"]} answer="a) going" /> to the beach on weekends.</Question>
      <Question>He admits <Select options={["a) to steal", "b) stealing"]} answer="b) stealing" /> my car.</Question>
      <Question>They have finally decided <Select options={["a) to hold", "b) holding"]} answer="a) to hold" /> a meeting.</Question>
      <Question>The students asked the teacher <Select options={["a) doing", "b) to do"]} answer="b) to do" /> more exercises.</Question>
      <Question>It’s worth <Select options={["a) to help", "b) helping"]} answer="b) helping" /> people in need.</Question>
      <Question>Would you mind <Input answer={["closing", "shutting"]} /> your mouth.</Question>
      <Question>You can go to Dakar without <Select options={["a) to take", "b) taking"]} answer="b) taking" /> a car.</Question>
      <Question>It’s difficult for me to take a decision. I keep <Select options={["a) changing", "b) to change"]} answer="a) changing" /> my mind.</Question>
      <Question>He refused <Input answer="to change" /> his mind.</Question>
      <Question>They made me <Select options={["a) pay", "b) paying"]} answer="a) pay" /> for the domage.</Question>

      <SectionTitle>Put the verb in the right form</SectionTitle>
      <Question>They him <Input answer="do" /> the exercises for them. (to do)</Question>
      <Question>He stopped <Input answer="smoking" /> when he was 18 years old. (to smoke)</Question>
      <Question>He stops <Input answer="to smoke" /> in the mids of the forest. (to smoke)</Question>
      <Question>I can’t help <Input answer={["laughing", "helping"]} /> when he speaks. (to help)</Question>
      <Question>Before <Input answer="answering" />, he thinks wisely. (to answer)</Question>
      <Question><Input answer="to go" /> to Dakar you’d better take a plain. (to go)</Question>
      <Question><Input answer="selling" /> fish gives me much money. (to sell)</Question>
      <Question>I earn my leaving by <Input answer="working" /> days and nights. (to work)</Question>
      <Question>You’d rather <Input answer="learn" /> English than Spanish. (to learn)</Question>
      <Question>I do my exercises while <Input answer="listening" /> to the music. (to listen)</Question>
      <Question>Mum makes my sister <Input answer="sweep" /> her room. (to sweep)</Question>
      <Question>The teacher advices me <Input answer="to avoid" /> bad friends. (to avoid)</Question>
      <Question>Anta refuses <Input answer="to greet" /> her parents before <Input answer="leaving" /> for work.(to greet) (to leave)</Question>
      <Question>I’m used to <Input answer="being" /> alone whatever the case. (to be)</Question>
      <Question>It’s cloudy. It may <Input answer="rain" /> tonight. (to rain)</Question>
      <Question>I miss you dear brother! What about <Input answer="playing" /> football with friends. (to play)</Question>
      <Question>I’m so tired and I’ve not finished <Input answer="doing" /> my exercises yet. (to do)</Question>
      <Question>Would you like <Input answer="to give" /> me a lift at Diamaguene station. (to give)</Question>
      <Question>He has left without <Input answer="saying" /> anything. (to say)</Question>
      <Question>Let’s <Input answer="believe" /> in God. (to believe)</Question>

      <SectionTitle>Complete this table with verbs or expressions</SectionTitle>
      <TableWrapper>
        <table className="min-w-full text-left">
          <thead className="bg-highlight text-accent uppercase text-xs tracking-wider border-b-2 border-separator/50">
            <tr>
              <th className="p-4 font-extrabold">Used with gerund</th>
              <th className="p-4 font-extrabold">Used with "To" infinitive</th>
              <th className="p-4 font-extrabold">Used with bare infinitive</th>
            </tr>
          </thead>
          <tbody className="divide-y-2 divide-separator/20">
            {[...Array(12)].map((_, i) => (
              <tr key={i} className="hover:bg-highlight/50 transition-colors">
                <td className="p-3 font-bold text-ink/70">{i + 1}. <Input /></td>
                <td className="p-3 font-bold text-ink/70">{i + 1}. <Input /></td>
                <td className="p-3 font-bold text-ink/70">{i + 1}. <Input /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableWrapper>
    </div>
  );
}
