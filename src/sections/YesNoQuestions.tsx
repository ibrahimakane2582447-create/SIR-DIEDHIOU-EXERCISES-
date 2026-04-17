import { Input, LongInput, Question, SectionTitle, Select } from '../components/FormElements';

export function YesNoQuestions() {
  const answers = [
    "A) Reading and having fun", "B) kind and generous", "C) twice a week", 
    "D) 60 kilometers per hour", "E) because there is a traffic jam", "F) to perfect my english", 
    "G) I drink 4 litters", "H) at Rahman Private courses", "I) two english books", 
    "K) in 2010", "L) I’m a student", "M) for 8 years", "N) not so far just one kilometer", "O) 30 years old"
  ];

  return (
    <div>
      <SectionTitle>A/ Ask the right yes/no questions or complete the short answers</SectionTitle>
      <Question>Do you like vegetables? Yes, <Input /> No, <Input /></Question>
      <Question>Can you drive? Yes, <Input /> No, <Input /></Question>
      <Question><LongInput placeholder="Question" /> ? Yes, I have alredy done my homework</Question>
      <Question><LongInput placeholder="Question" /> ? No, I have never studied German in my studies</Question>
      <Question>Should we talk to the headmaster? Yes, <Input /> No, <Input /></Question>
      <Question>Is your sister working? Yes, <Input /> No, <Input /></Question>
      <Question>Are you a football player? Yes, <Input /> No, <Input /></Question>
      <Question>Did they come yesterday? Yes, <Input /> No, <Input /></Question>
      <Question><LongInput placeholder="Question" /> ? No, they will not go on vacation</Question>

      <SectionTitle>B/ Ask questions on the underlined words</SectionTitle>
      <Question>
        <u>Students</u> must learn <u>their lessons</u>.
        <LongInput placeholder="Question 1" />
        <LongInput placeholder="Question 2" />
      </Question>
      <Question>
        Sadio mané is a football player. He live in <u>Bambali</u>. He is <u>30 years old</u> and is a muslim.
        <LongInput placeholder="Question 1" />
        <LongInput placeholder="Question 2" />
      </Question>
      <Question>
        I have been teaching for <u>4 years</u>.
        <LongInput placeholder="Question 1" />
      </Question>
      <Question>
        They lived in Diamaguene in <u>1989</u>.
        <LongInput placeholder="Question 1" />
      </Question>
      <Question>
        They are laughing at him <u>because he is a liar</u>.
        <LongInput placeholder="Question 1" />
      </Question>

      <SectionTitle>C/ MATCHING: match these questions to their answers</SectionTitle>
      <Question>How far is the hospital? <Select options={answers} /></Question>
      <Question>Where are you studying? <Select options={answers} /></Question>
      <Question>How many english books do you have? <Select options={answers} /></Question>
      <Question>How long have been studying? <Select options={answers} /></Question>
      <Question>How old is your sister? <Select options={answers} /></Question>
      <Question>What are you? <Select options={answers} /></Question>
      <Question>How much water do you drink per day? <Select options={answers} /></Question>
      <Question>When did you get you BAC degree? <Select options={answers} /></Question>
      <Question>Why are you late? <Select options={answers} /></Question>
      <Question>What do you go to America for? <Select options={answers} /></Question>
      <Question>How fast is your car? <Select options={answers} /></Question>
      <Question>How often do you visit your aunt? <Select options={answers} /></Question>
      <Question>What is your girlfriend like? <Select options={answers} /></Question>
      <Question>What does your girlfriend like? <Select options={answers} /></Question>
    </div>
  );
}
