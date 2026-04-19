import { Input, Select, Question, SectionTitle, TableWrapper } from '../components/FormElements';

export function Pronouns() {
  return (
    <div>
      <SectionTitle>A- Choose the best items</SectionTitle>
      <Question num="1">Did you tell <Select options={["his", "him", "he"]} answer="him" /> the whole story?</Question>
      <Question num="2">Yes i did. I told <Select options={["him", "his", "he"]} answer="him" /> but not the whole story.</Question>
      <Question num="3">ok ! Did he trust <Select options={["yours", "you", "your"]} answer="you" /> ?</Question>
      <Question num="4">Yes <Select options={["him", "they", "he"]} answer="he" /> did.</Question>
      <Question num="5">Have you ever seen a lion ? <Select options={["its", "it", "itself"]} answer="it" /> is a dangerous animal.</Question>
      <Question num="6">Yes, I have. <Select options={["it", "my", "its"]} answer="its" /> head was so big.</Question>
      <Question num="7">Then what was <Select options={["yourself", "yours", "your"]} answer="your" /> reaction ?</Question>
      <Question num="8">I was with my wife but <Select options={["us", "ourselves", "we"]} answer="we" /> were so frightened.</Question>
      <Question num="9">That’s true even other animals are afraid of <Select options={["their", "they", "them"]} answer="them" />.</Question>
      <Question num="10">What about <Select options={["your", "them", "their"]} answer="their" /> children it’s been a while I have heard from <Select options={["your", "them", "their"]} answer="them" />.</Question>
      <Question num="11">Are <Select options={["them", "themselves", "they"]} answer="they" /> still studying ?</Question>
      <Question num="12">Yes, they are. I will tell <Select options={["you", "them", "me"]} answer="them" /> to visit you one day.</Question>
      <Question num="13">It will be a great pleasure for <Select options={["me", "you", "them"]} answer="me" /> to welcome <Select options={["me", "you", "them"]} answer="them" />.</Question>
      <Question num="14">They believe in <Select options={["yourself", "themselves", "myself"]} answer="themselves" />.</Question>
      <Question num="15">Never give up !believe in <Select options={["you", "yours", "yourself"]} answer="yourself" />.</Question>

      <SectionTitle>B- Refer to the words in brackets to complete</SectionTitle>
      <Question num="16">Students are learning (them) <Input answer="their" /> lessons presently.</Question>
      <Question num="17">This pen is not (you) <Input answer="yours" /> ; (its) <Input answer="it" /> is for the teacher.</Question>
      <Question num="18">(he) <Input answer="His" /> brother is a Doctor.</Question>
      <Question num="19">(I) <Input answer="My" /> father has just gone. (He) has forgotten <Input answer="his" /> coat here.</Question>
      <Question num="20">(yours) <Input answer="Your" /> mother is good person. She always gives(I) <Input answer="me" /> something to eat.</Question>
      <Question num="21">(we) <Input answer="Our" /> parents are so kind with (we) <Input answer="us" />.</Question>

      <SectionTitle>C- Complete with the correct personal pronoun</SectionTitle>
      <Question num="22">Exemple : Mr Baloukoune is an English teacher. He is an English teacher.</Question>
      <Question num="23">The lion is roaring. <Input answer="It" /> is roaring.</Question>
      <Question num="24">two lions are fighting. <Input answer="They" /> are fighting.</Question>
      <Question num="25">The teacher and I are doing the exercises. <Input answer="We" /> are doing the exercises.</Question>
      <Question num="26">Amina is a good student. <Input answer="She" /> is a good student.</Question>

      <SectionTitle>D- Complete with the suitable possessive pronoun or reflexive pronoun</SectionTitle>
      <Question num="27">Exemple : This is your bag, mine is with my sister. (I)</Question>
      <Question num="28">The heaven helps those who help themselves. (THEY)</Question>
      <Question num="29">My marks are better than <Input answer="yours" />. (you)</Question>
      <Question num="30">Is this your phone or <Input answer="hers" />. (she)</Question>
      <Question num="31">This is our school ; <Input answer="theirs" /> Is in front of the Church. (they)</Question>
      <Question num="32">You see <Input answer="yourself" /> in the mirror. (you)</Question>
      <Question num="33">they hurt <Input answer="themselves" /> with the knife. (they)</Question>
      <Question num="34">The kitten can feed <Input answer="itself" />. (it)</Question>

      <SectionTitle>E- Complete this table with the missing pronouns</SectionTitle>
      <TableWrapper>
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
            <tr><td className="border border-separator p-2">I</td><td className="border border-separator p-2"><Input answer="ME" /></td><td className="border border-separator p-2"><Input answer="MINE" /></td><td className="border border-separator p-2">MY</td><td className="border border-separator p-2"><Input answer="MYSELF" /></td></tr>
            <tr><td className="border border-separator p-2"><Input answer="YOU" /></td><td className="border border-separator p-2">YOU</td><td className="border border-separator p-2"><Input answer="YOURS" /></td><td className="border border-separator p-2"><Input answer="YOUR" /></td><td className="border border-separator p-2">YOURSELF</td></tr>
            <tr><td className="border border-separator p-2">HE</td><td className="border border-separator p-2"><Input answer="HIM" /></td><td className="border border-separator p-2">HIS</td><td className="border border-separator p-2"><Input answer="HIS" /></td><td className="border border-separator p-2"><Input answer="HIMSELF" /></td></tr>
            <tr><td className="border border-separator p-2"><Input answer="SHE" /></td><td className="border border-separator p-2">HER</td><td className="border border-separator p-2"><Input answer="HERS" /></td><td className="border border-separator p-2">HER</td><td className="border border-separator p-2"><Input answer="HERSELF" /></td></tr>
            <tr><td className="border border-separator p-2">IT</td><td className="border border-separator p-2"><Input answer="IT" /></td><td className="border border-separator p-2"><Input answer="ITS" /></td><td className="border border-separator p-2">ITS</td><td className="border border-separator p-2"><Input answer="ITSELF" /></td></tr>
            <tr><td className="border border-separator p-2">WE</td><td className="border border-separator p-2"><Input answer="US" /></td><td className="border border-separator p-2"><Input answer="OURS" /></td><td className="border border-separator p-2">OUR</td><td className="border border-separator p-2"><Input answer="OURSELVES" /></td></tr>
            <tr><td className="border border-separator p-2">YOU</td><td className="border border-separator p-2"><Input answer="YOU" /></td><td className="border border-separator p-2"><Input answer="YOURS" /></td><td className="border border-separator p-2"><Input answer="YOUR" /></td><td className="border border-separator p-2">YOURSELVES</td></tr>
            <tr><td className="border border-separator p-2">THEY</td><td className="border border-separator p-2"><Input answer="THEM" /></td><td className="border border-separator p-2"><Input answer="THEIRS" /></td><td className="border border-separator p-2"><Input answer="THEIR" /></td><td className="border border-separator p-2"><Input answer="THEMSELVES" /></td></tr>
          </tbody>
        </table>
      </TableWrapper>

      <SectionTitle>F- Give the french meaning of these pronouns</SectionTitle>
      <Question num="35">yours <Input answer={["le tien", "la tienne", "les tiens", "les tiennes", "le vôtre", "les vôtres", "la vôtre"]} /></Question>
      <Question num="36">hers <Input answer={["le sien", "la sienne", "les siens", "les siennes"]} /></Question>
      <Question num="37">themselves <Input answer={["eux-mêmes", "elles-mêmes", "eux mêmes", "elles mêmes"]} /></Question>
      <Question num="38">us <Input answer="nous" /></Question>
      <Question num="39">theirs <Input answer={["le leur", "la leur", "les leurs"]} /></Question>
      <Question num="40">ours <Input answer={["le nôtre", "la nôtre", "les nôtres"]} /></Question>
      <Question num="41">we <Input answer="nous" /></Question>
      <Question num="42">she <Input answer="elle" /></Question>
      <Question num="43">him <Input answer={["lui", "le"]} /></Question>
    </div>
  );
}
