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
      <Question>Do you like vegetables? Yes, <Input answer="I do" /> No, <Input answer={["I don't", "I do not"]} /></Question>
      <Question>Can you drive? Yes, <Input answer="I can" /> No, <Input answer={["I can't", "I cannot"]} /></Question>
      <Question><LongInput placeholder="Question" answer="Have you already done your homework?" /> ? Yes, I have alredy done my homework</Question>
      <Question><LongInput placeholder="Question" answer={["Have you ever studied German in your studies?", "Have you ever studied German?"]} /> ? No, I have never studied German in my studies</Question>
      <Question>Should we talk to the headmaster? Yes, <Input answer={["we should", "you should"]} /> No, <Input answer={["we shouldn't", "we should not", "you shouldn't"]} /></Question>
      <Question>Is your sister working? Yes, <Input answer="she is" /> No, <Input answer={["she isn't", "she is not"]} /></Question>
      <Question>Are you a football player? Yes, <Input answer="I am" /> No, <Input answer="I am not" /></Question>
      <Question>Did they come yesterday? Yes, <Input answer="they did" /> No, <Input answer={["they didn't", "they did not"]} /></Question>
      <Question><LongInput placeholder="Question" answer={["Will they go on vacation?", "Will they go on a vacation?"]} /> ? No, they will not go on vacation</Question>

      <SectionTitle>B/ Ask questions on the underlined words</SectionTitle>
      <Question>
        <u>Students</u> must learn <u>their lessons</u>.
        <LongInput placeholder="Question 1 for 'Students'" answer="Who must learn their lessons?" />
        <LongInput placeholder="Question 2 for 'their lessons'" answer={["What must students learn?", "What must the students learn?"]} />
      </Question>
      <Question>
        Sadio mané is a football player. He live in <u>Bambali</u>. He is <u>30 years old</u> and is a muslim.
        <LongInput placeholder="Question 1 for 'Bambali'" answer={["Where does he live?", "Where does Sadio Mané live?"]} />
        <LongInput placeholder="Question 2 for '30 years old'" answer={["How old is he?", "How old is Sadio Mané?"]} />
      </Question>
      <Question>
        I have been teaching for <u>4 years</u>.
        <LongInput placeholder="Question 1" answer={["How long have you been teaching?", "How long have I been teaching?"]} />
      </Question>
      <Question>
        They lived in Diamaguene in <u>1989</u>.
        <LongInput placeholder="Question 1" answer="When did they live in Diamaguene?" />
      </Question>
      <Question>
        They are laughing at him <u>because he is a liar</u>.
        <LongInput placeholder="Question 1" answer="Why are they laughing at him?" />
      </Question>

      <SectionTitle>C/ MATCHING: match these questions to their answers</SectionTitle>
      <Question>How far is the hospital? <Select options={answers} answer="N) not so far just one kilometer" /></Question>
      <Question>Where are you studying? <Select options={answers} answer="H) at Rahman Private courses" /></Question>
      <Question>How many english books do you have? <Select options={answers} answer="I) two english books" /></Question>
      <Question>How long have been studying? <Select options={answers} answer="M) for 8 years" /></Question>
      <Question>How old is your sister? <Select options={answers} answer="O) 30 years old" /></Question>
      <Question>What are you? <Select options={answers} answer="L) I’m a student" /></Question>
      <Question>How much water do you drink per day? <Select options={answers} answer="G) I drink 4 litters" /></Question>
      <Question>When did you get you BAC degree? <Select options={answers} answer="K) in 2010" /></Question>
      <Question>Why are you late? <Select options={answers} answer="E) because there is a traffic jam" /></Question>
      <Question>What do you go to America for? <Select options={answers} answer="F) to perfect my english" /></Question>
      <Question>How fast is your car? <Select options={answers} answer="D) 60 kilometers per hour" /></Question>
      <Question>How often do you visit your aunt? <Select options={answers} answer="C) twice a week" /></Question>
      <Question>What is your girlfriend like? <Select options={answers} answer="B) kind and generous" /></Question>
      <Question>What does your girlfriend like? <Select options={answers} answer="A) Reading and having fun" /></Question>
    </div>
  );
}
