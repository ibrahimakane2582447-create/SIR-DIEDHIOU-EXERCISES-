import { Input, Select, Question, SectionTitle } from '../components/FormElements';

export function Pronouns() {
  return (
    <div>
      <SectionTitle>A- Choose the best items</SectionTitle>
      <Question num="1">Did you tell <Select options={["his", "him", "he"]} /> the whole story?</Question>
      <Question num="2">Yes i did. I told <Select options={["him", "his", "he"]} /> but not the whole story.</Question>
      <Question num="3">ok ! Did he trust <Select options={["yours", "you", "your"]} /> ?</Question>
      <Question num="4">Yes <Select options={["him", "they", "he"]} /> did.</Question>
      <Question num="5">Have you ever seen a lion ? <Select options={["its", "it", "itself"]} /> is a dangerous animal.</Question>
      <Question num="6">Yes, I have. <Select options={["it", "my", "its"]} /> head was so big.</Question>
      <Question num="7">Then what was <Select options={["yourself", "yours", "your"]} /> reaction ?</Question>
      <Question num="8">I was with my wife but <Select options={["us", "ourselves", "we"]} /> were so frightened.</Question>
      <Question num="9">That’s true even other animals are afraid of <Select options={["their", "they", "them"]} />.</Question>
      <Question num="10">What about <Select options={["your", "them", "their"]} /> children it’s been a while I have heard from <Select options={["your", "them", "their"]} />.</Question>
      <Question num="11">Are <Select options={["them", "themselves", "they"]} /> still studying ?</Question>
      <Question num="12">Yes, they are. I will tell <Select options={["you", "them", "me"]} /> to visit you one day.</Question>
      <Question num="13">It will be a great pleasure for <Select options={["me", "you", "them"]} /> to welcome <Select options={["me", "you", "them"]} />.</Question>
      <Question num="14">They believe in <Select options={["yourself", "themselves", "myself"]} />.</Question>
      <Question num="15">Never give up !believe in <Select options={["you", "yours", "yourself"]} />.</Question>

      <SectionTitle>B- Refer to the words in brackets to complete</SectionTitle>
      <Question num="16">Students are learning (them) <Input /> lessons presently.</Question>
      <Question num="17">This pen is not (you) <Input /> ; (its) <Input /> is for the teacher.</Question>
      <Question num="18">(he) <Input /> brother is a Doctor.</Question>
      <Question num="19">(I) <Input /> father has just gone. (He) has forgotten <Input /> coat here.</Question>
      <Question num="20">(yours) <Input /> mother is good person. She always gives(I) <Input /> something to eat.</Question>
      <Question num="21">(we) <Input /> parents are so kind with (we) <Input />.</Question>

      <SectionTitle>C- Complete with the correct personal pronoun</SectionTitle>
      <Question num="22">Exemple : Mr Baloukoune is an English teacher. He is an English teacher.</Question>
      <Question num="23">The lion is roaring. <Input /> is roaring.</Question>
      <Question num="24">two lions are fighting. <Input /> are fighting.</Question>
      <Question num="25">The teacher and I are doing the exercises. <Input /> are doing the exercises.</Question>
      <Question num="26">Amina is a good student. <Input /> is a good student.</Question>

      <SectionTitle>D- Complete with the suitable possessive pronoun or reflexive pronoun</SectionTitle>
      <Question num="27">Exemple : This is your bag, mine is with my sister. (I)</Question>
      <Question num="28">The heaven helps those who help themselves. (THEY)</Question>
      <Question num="29">My marks are better than <Input />. (you)</Question>
      <Question num="30">Is this your phone or <Input />. (she)</Question>
      <Question num="31">This is our school ; <Input /> Is in front of the Church. (they)</Question>
      <Question num="32">You see <Input /> in the mirror. (you)</Question>
      <Question num="33">they hurt <Input /> with the knife. (they)</Question>
      <Question num="34">The kitten can feed <Input />. (it)</Question>

      <SectionTitle>E- Complete this table with the missing pronouns</SectionTitle>
      <div className="overflow-x-auto text-sm font-sans">
        <table className="min-w-full text-left border border-separator">
          <thead className="bg-highlight text-muted uppercase text-[10px] tracking-wider">
            <tr>
              <th className="border border-separator p-2">Subject</th>
              <th className="border border-separator p-2">Object</th>
              <th className="border border-separator p-2">Possessive Pro</th>
              <th className="border border-separator p-2">Possessive Adj</th>
              <th className="border border-separator p-2">Reflexive</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-separator p-2">I</td><td className="border border-separator p-2"><Input /></td><td className="border border-separator p-2"><Input /></td><td className="border border-separator p-2">MY</td><td className="border border-separator p-2"><Input /></td></tr>
            <tr><td className="border border-separator p-2"><Input /></td><td className="border border-separator p-2">YOU</td><td className="border border-separator p-2"><Input /></td><td className="border border-separator p-2"><Input /></td><td className="border border-separator p-2">YOURSELF</td></tr>
            <tr><td className="border border-separator p-2">HE</td><td className="border border-separator p-2"><Input /></td><td className="border border-separator p-2">HIS</td><td className="border border-separator p-2"><Input /></td><td className="border border-separator p-2"><Input /></td></tr>
            <tr><td className="border border-separator p-2"><Input /></td><td className="border border-separator p-2">HER</td><td className="border border-separator p-2"><Input /></td><td className="border border-separator p-2">HER</td><td className="border border-separator p-2"><Input /></td></tr>
            <tr><td className="border border-separator p-2">IT</td><td className="border border-separator p-2"><Input /></td><td className="border border-separator p-2"><Input /></td><td className="border border-separator p-2">ITS</td><td className="border border-separator p-2"><Input /></td></tr>
            <tr><td className="border border-separator p-2">WE</td><td className="border border-separator p-2"><Input /></td><td className="border border-separator p-2"><Input /></td><td className="border border-separator p-2">OUR</td><td className="border border-separator p-2"><Input /></td></tr>
            <tr><td className="border border-separator p-2">YOU</td><td className="border border-separator p-2"><Input /></td><td className="border border-separator p-2"><Input /></td><td className="border border-separator p-2"><Input /></td><td className="border border-separator p-2">YOURSELVES</td></tr>
            <tr><td className="border border-separator p-2">THEY</td><td className="border border-separator p-2"><Input /></td><td className="border border-separator p-2"><Input /></td><td className="border border-separator p-2"><Input /></td><td className="border border-separator p-2"><Input /></td></tr>
          </tbody>
        </table>
      </div>

      <SectionTitle>F- Give the french meaning of these pronouns</SectionTitle>
      <Question num="35">yours <Input /></Question>
      <Question num="36">hers <Input /></Question>
      <Question num="37">themselves <Input /></Question>
      <Question num="38">us <Input /></Question>
      <Question num="39">theirs <Input /></Question>
      <Question num="40">ours <Input /></Question>
      <Question num="41">we <Input /></Question>
      <Question num="42">she <Input /></Question>
      <Question num="43">him <Input /></Question>
    </div>
  );
}
