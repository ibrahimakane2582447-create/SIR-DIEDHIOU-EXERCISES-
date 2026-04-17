import { Input, Select, Question, SectionTitle } from '../components/FormElements';

export function Tags() {
  const options = ["a) wouldn’t I", "b) are they", "c) can’t you", "d) don’t I", "e) didn’t they", "f) will you", "g) doesn’t he", "h) is she", "i) shall we", "k) isn’t she", "l) aren’t they", "m) hasn’t he"];

  return (
    <div>
      <SectionTitle>a/ Match the statements with their correct question tags</SectionTitle>
      <Question>She is working hard, <Select options={options} answer="k) isn’t she" /> ?</Question>
      <Question>He has a good mark, <Select options={options} answer="m) hasn’t he" /> ?</Question>
      <Question>I love my parents, <Select options={options} answer="d) don’t I" /> ?</Question>
      <Question>They won the trophy, <Select options={options} answer="e) didn’t they" /> ?</Question>
      <Question>You can lift it, <Select options={options} answer="c) can’t you" /> ?</Question>
      <Question>I think she is not our teacher, <Select options={options} answer="h) is she" /> ?</Question>
      <Question>Don’t disturb us, <Select options={options} answer="f) will you" /> ?</Question>
      <Question>None is at home, <Select options={options} answer="b) are they" /> ?</Question>
      <Question>He plays well, <Select options={options} answer="g) doesn’t he" /> ?</Question>
      <Question>I’d prefer to learn my lessons, <Select options={options} answer="a) wouldn’t I" /> ?</Question>
      <Question>Let’s talk about violence in our country, <Select options={options} answer="i) shall we" /> ?</Question>
      <Question>Someone is in my room, <Select options={options} answer="l) aren’t they" /> ?</Question>

      <SectionTitle>b) Put a question tag on the end of these sentences:</SectionTitle>
      <Question num="1">Mr. Balacoune teaches English at La lumière, <Input answer="doesn't he" /> ?</Question>
      <Question num="2">He used to play for Casa sport fc, <Input answer="didn't he" /> ?</Question>
      <Question num="3">May be one of his sons will play for Casa fc, <Input answer="won't he" /> ?</Question>
      <Question num="4">My father hasn’t bought a new car this year, <Input answer="has he" /> ?</Question>
      <Question num="5">They can’t speak Spanish, <Input answer="can they" /> ?</Question>
      <Question num="6">Let’s go out today, <Input answer="shall we" /> ?</Question>
      <Question num="7">You wouldn’t tell this to anyone, <Input answer="would you" /> ?</Question>
      <Question num="8">I’m too impatient, <Input answer={["aren't I", "am I not"]} /> ?</Question>
      <Question num="9">Don’t shut the door, <Input answer="will you" /> ?</Question>
      <Question num="10">I am not an enginer, <Input answer="am I" /> ?</Question>
      <Question num="11">He had taught French before teaching English, <Input answer="hadn't he" /> ?</Question>
      <Question num="12">I shouldn’t have lost my temper, <Input answer="should I" /> ?</Question>
    </div>
  );
}
