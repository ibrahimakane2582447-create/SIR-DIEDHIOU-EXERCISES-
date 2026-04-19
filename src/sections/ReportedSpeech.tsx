import { LongInput, Question, SectionTitle } from '../components/FormElements';

export function ReportedSpeech() {
  return (
    <div>
      <SectionTitle>REPORTING STATEMENTS: turn into indirect speech</SectionTitle>
      <Question>
        "you can’t speak English" the teacher said to me
        <LongInput answer={["The teacher told me that I couldn't speak English.", "The teacher said to me that I couldn't speak English.", "The teacher told me I couldn't speak English."]} />
      </Question>
      <Question>
        "we talk to them every day" they said
        <LongInput answer={["They said that they talked to them every day.", "They said they talked to them every day."]} />
      </Question>
      <Question>
        "I was a good football player " he said
        <LongInput answer={["He said that he had been a good football player.", "He said he had been a good football player."]} />
      </Question>
      <Question>
        "we are meeting today " they said
        <LongInput answer={["They said that they were meeting that day.", "They said they were meeting that day."]} />
      </Question>
      <Question>
        "I will invite you tomorrow" he said
        <LongInput answer={["He said that he would invite me the next day.", "He said he would invite me the next day.", "He said that he would invite me the following day."]} />
      </Question>
      <Question>
        "If you succeed in your exam, I will buy you anytthing you want" my father promissed me
        <LongInput answer={["My father promised me that if I succeeded in my exam, he would buy me anything I wanted.", "My father promised me if I succeeded in my exam, he would buy me anything I wanted."]} />
      </Question>
      <Question>
        "I saw you at the central bank " my sister said
        <LongInput answer={["My sister said that she had seen me at the central bank.", "My sister said she had seen me at the central bank."]} />
      </Question>
      <Question>
        "we have just finished Sir" students said
        <LongInput answer={["Students said that they had just finished.", "Students told the Sir that they had just finished.", "The students said they had just finished."]} />
      </Question>
      <Question>
        "God is one" the Prophet Be peace upon Him said
        <LongInput answer={["The Prophet Peace Be upon Him said that God is one.", "The Prophet Be peace upon Him said that God is one.", "The Prophet Peace Be upon Him said that God was one."]} />
      </Question>
      <Question>
        "I took him to my house yesterday " he says 
        <LongInput answer={["He says that he took him to his house yesterday.", "He says he took him to his house yesterday."]} />
      </Question>

      <SectionTitle>Reporting questions: turn into indirect speech</SectionTitle>
      <Question>
        "Are you an English teacher?" he asked
        <LongInput answer={["He asked if I was an English teacher.", "He asked whether I was an English teacher."]} />
      </Question>
      <Question>
        "where can I leave the forms?" she asked
        <LongInput answer={["She asked where she could leave the forms.", "She asked where to leave the forms."]} />
      </Question>
      <Question>
        "why are you so hard?" my girlfriend wanted to know
        <LongInput answer={["My girlfriend wanted to know why I was so hard.", "My girlfriend wanted to know why you were so hard."]} />
      </Question>
      <Question>
        "will you come to the general meeting?" my friend asked
        <LongInput answer={["My friend asked if I would come to the general meeting.", "My friend asked whether I would come to the general meeting."]} />
      </Question>
      <Question>
        "Do you have brothers?" the policeman asked me
        <LongInput answer={["The policeman asked me if I had brothers.", "The policeman asked me whether I had brothers."]} />
      </Question>
      <Question>
        "what is the price of this dictionary?" my brother wondered
        <LongInput answer={["My brother wondered what the price of that dictionary was.", "My brother wondered what the price of this dictionary was."]} />
      </Question>
      <Question>
        "when did you get your bill of marks?" my fellow students inquired
        <LongInput answer={["My fellow students inquired when I had got my bill of marks.", "My fellow students inquired when I had gotten my bill of marks."]} />
      </Question>
      <Question>
        "Have you all forgiven me for what I have done?" asked our boss
        <LongInput answer={["Our boss asked if we had all forgiven him for what he had done.", "Our boss asked whether we had all forgiven him for what he had done."]} />
      </Question>
      <Question>
        "Are you ready" asked the teacher
        <LongInput answer={["The teacher asked if I was ready.", "The teacher asked if we were ready."]} />
      </Question>
      <Question>
        "will our teacher retire next year" they asked
        <LongInput answer={["They asked if their teacher would retire the following year.", "They asked if our teacher would retire the next year."]} />
      </Question>

      <SectionTitle>Reporting orders, requests, suggestions: turn into indirect speech</SectionTitle>
      <Question>
        "Look where you put your steps" he warned the girl
        <LongInput answer={["He warned the girl to look where she put her steps.", "He warned the girl to look where she puts her steps."]} />
      </Question>
      <Question>
        "Write down your name here" the boss ordered us
        <LongInput answer={["The boss ordered us to write down our names there.", "The boss ordered us to write down our names here."]} />
      </Question>
      <Question>
        "Don’t smoke in the room" my father told me
        <LongInput answer={["My father told me not to smoke in the room.", "My father warned me not to smoke in the room."]} />
      </Question>
      <Question>
        "What a beautiful girl are you!" my boyfriend told me
        <LongInput answer={["My boyfriend exclaimed that I was a beautiful girl.", "My boyfriend told me that I was a beautiful girl."]} />
      </Question>
      <Question>
        "Get out of my room" he said to me
        <LongInput answer={["He told me to get out of his room.", "He ordered me to get out of his room."]} />
      </Question>
      <Question>
        "Don’t miss the meeting for it’s very interesting" I said to her
        <LongInput answer={["I told her not to miss the meeting for it was very interesting.", "I advised her not to miss the meeting for it was very interesting."]} />
      </Question>
      <Question>
        "Be always at home on time after school" my father told me
        <LongInput answer={["My father told me to be always at home on time after school.", "My father ordered me to be always at home on time after school."]} />
      </Question>
      <Question>
        "Be respectfull to anyone in life" Grandfather advised me
        <LongInput answer={["Grandfather advised me to be respectfull to anyone in life.", "Grandfather advised me to be respectful to anyone in life."]} />
      </Question>
      <Question>
        "Make sure to ask for forgiveness every day" the imam said 
        <LongInput answer={["The imam said to make sure to ask for forgiveness every day.", "The imam told us to make sure to ask for forgiveness every day."]} />
      </Question>
      <Question>
        "What a good teacheris he" a student said
        <LongInput answer={["A student exclaimed that he was a good teacher.", "A student said that he was a good teacher."]} />
      </Question>
    </div>
  );
}
