import React,{useState} from 'react';

import { Button, View,StyleSheet,ScrollView,ImageBackground,SafeAreaView,
  TouchableOpacity, SectionList,Text,Alert, Image } from 'react-native';
import { NavigationContainer,NavigationAction } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { block } from 'react-native-reanimated';


function HomeScreen({ navigation }) {


  
  return (
    
  <View>
    
    <ImageBackground source= {require('./Think-and-grow-rich-black-gold1.png')} style={{width:'100%',height:'100.1%'}} >

        
            <TouchableOpacity
            ><Text                onPress={() => navigation.navigate('TabelOfContent')}
         
            style={{fontStyle:'Cochin',color:'#E0FFFF',alignSelf:'center',paddingTop:409,fontWeight:'bold',fontSize:23}}>
              GET STARTED</Text></TouchableOpacity>

    </ImageBackground>
 

      </View>

  );
}



function TabelOfContent({ navigation }) {
  return (
    <View style={styles.container}>

    <View style={styles.header_style}>
      <Text style={{textAlign: 'center', color: 'black', fontSize: 40,    backgroundColor:'white', fontWeight: 'bold',}}> 
      Think & Grow Rich </Text> 
      </View>
 
 

      

<ScrollView>

<TouchableOpacity onPress={() => navigation.navigate('INTRODUCTION')}><Text  style={styles.item}>INTRODUCTION</Text></TouchableOpacity>
<View style={styles.line}/>
<TouchableOpacity onPress={() => navigation.navigate('DESIRE')}><Text  style={styles.item}>1. DESIRE</Text></TouchableOpacity>
<View style={styles.line}/>
<TouchableOpacity onPress={() => navigation.navigate('FAITH')}><Text  style={styles.item}>2. FAITH</Text></TouchableOpacity>
<View style={styles.line}/>
<TouchableOpacity onPress={() => navigation.navigate('AUTO-SUGGESTION')}><Text  style={styles.item}>3. AUTO-SUGGESTION</Text></TouchableOpacity>
<View style={styles.line}/>
<TouchableOpacity  onPress={() => navigation.navigate('SPECIALISED KNOWLEDGE')}><Text  style={styles.item}>4. SPECIALISED KNOWLEDGE</Text></TouchableOpacity>
<View style={styles.line}/>
<TouchableOpacity onPress={() => navigation.navigate('IMAGINATION')}><Text  style={styles.item}>5. IMAGINATION</Text></TouchableOpacity>
<View style={styles.line}/>
<TouchableOpacity onPress={() => navigation.navigate('ORGANISED PLANNING')}><Text  style={styles.item}>6. ORGANISED PLANNING</Text></TouchableOpacity>
<View style={styles.line}/>
<TouchableOpacity onPress={() => navigation.navigate('DECISION')}><Text  style={styles.item}>7. DECISION</Text></TouchableOpacity>
<View style={styles.line}/>
<TouchableOpacity onPress={() => navigation.navigate('PERSISTENCE')}><Text  style={styles.item}>8. PERSISTENCE</Text></TouchableOpacity>
<View style={styles.line}/>
<TouchableOpacity onPress={() => navigation.navigate('POWER OF MASTERMIND')}><Text  style={styles.item}>9. POWER OF MASTERMIND</Text></TouchableOpacity>
<View style={styles.line}/>
<TouchableOpacity onPress={() => navigation.navigate('TRANSMUTATION OF SEX')}><Text  style={styles.item}>10. TRANSMUTATION OF SEX</Text></TouchableOpacity>
<View style={styles.line}/>
<TouchableOpacity onPress={() => navigation.navigate('SUBCONSCIOUS MIND')}><Text  style={styles.item}>11. SUBCONSCIOUS MIND</Text></TouchableOpacity>
<View style={styles.line}/>
<TouchableOpacity onPress={() => navigation.navigate('THE BRAIN')}><Text  style={styles.item}>12. THE BRAIN</Text></TouchableOpacity>
<View style={styles.line}/>
<TouchableOpacity onPress={() => navigation.navigate('THE SIXTH SENSE')}><Text style={styles.item}>13. THE SIXTH SENSE</Text></TouchableOpacity>
<View style={styles.line}/>
<TouchableOpacity onPress={() => navigation.navigate('CONCLUSION')}><Text style={styles.item}>CONCLUSION</Text></TouchableOpacity>

<View style={styles.line}/>
<TouchableOpacity onPress={() => navigation.navigate('BONUS')}><Text style={styles.item}>*****  BONUS  *****</Text></TouchableOpacity>


</ScrollView>

      </View>

  );
}




function IntroScreen({ navigation }) {
  const p = useState("Who");
  const p1 = useState("Despite the book’s title, this book is not about how to increase your income and become rich. The author’s philosophy can help just about anyone succeed in their professional life, achieve their aspirations, and attract success in their life, but it’s definitely a must-read for investors and entrepreneurs.");
  const p2 = useState("Napoleon Hill was an American author in the area of the new thought movement, who was one of the earliest producers of the modern genre of personal-success literature and is widely considered to be one of the great writers on success. Hill's works examined the power of personal beliefs, and the role they play in personal success. He became an advisor to President Franklin D. Roosevelt from 1933 to 1936.");
  const p3 = useState("Think And Grow Rich is a state of mind. It exploits the power of thought to manifest strong desires and a definite purpose into reality. Turning your all-consuming obsession (definite purpose) into a reality is not an easy task. However, if the desire is strong and you’re willing to raise the stakes, you will win. The author projects the following formula:");
  const quote1 = useState("Desire + Ideas + Plans + Massive Action = Success");
  const p4 = useState("Start with your goal. What do you really want? A better job? To succeed in your current career? To work for a business leader who inspires you?");
  const p5 = useState("To achieve that goal, shifting your thinking from failure consciousness to success consciousness is the key. For this to happen, the question ‘how do I get a job?’ needs to change into ‘what can I give to a job?’, and ‘how do I get more dollars per hour?’ into ‘how do I give more energy, desire, focus?’");
  const p6 = useState("To get from where you are to where you want to be, the author highlights:");
  const quote2 = useState("“Never quit. Never give up. Focus. Seek help. Make new connections. Take different approaches. Seek additional resources to help you improve your job search skills. Persist and find people who can help you to achieve your goals.”");
  return (
    <SafeAreaView  style={styles.container}>

      <ScrollView>
    <View style={{ flex: 1,backgroundColor:'black',padding:17 }}>
          <Text style={styles.heading} >Who is this book for?</Text>
  <Text>\n</Text>
    <Text style={styles.pharagraph} >{p1}</Text>
    <Text>\n</Text>
    <Text style={styles.heading} >About the author</Text>
    <Text>\n</Text>
    <Text style={styles.pharagraph} >{p2}</Text>
    <Text>\n</Text>
    <Text style={styles.heading} >In this summary</Text>
    <Text>\n</Text>
    <Text style={styles.pharagraph} >{p3}</Text>
    <Text>\n</Text>
    <Text style={styles.quote} >{quote1}</Text>
    <Text>\n</Text>
    <Text style={styles.pharagraph} >{p4}</Text>
    <Text>\n</Text>
    <Text style={styles.pharagraph} >{p5}</Text>
    <Text>\n</Text>
    <Text style={styles.pharagraph} >{p6}</Text>
    <Text>\n</Text>
    <Text style={styles.quote} >{quote2}</Text>
  </View>
  </ScrollView>
  </SafeAreaView>
  );
}





function DesireScreen({ navigation }) {
  const p = useState("Who");
  const h1 = useState("The Turning Point Of Achievement");
  const p1 = useState("What do you desire above everything else? A powerful desire towards achieving a goal uses a combination of two types of motivation:");
  const p2 = useState("1. Pull motivations (the outcome of the goal is so favourable, that it pulls you towards the goal)");
  const p3 = useState("2. Push motivations (you are pushed to action because of the negative consequences of not taking action)");
  const p4 = useState("The author provides the mindset for 5 key areas of Desire:");
  const h2 = useState("Career");
  const p5 = useState("Going from ‘what do I get?’ to ‘how will I grow?’ requires shifting from ego-driven concerns (title, salary, benefits etc.) to growth opportunities within the company and position.");
  const h3 = useState("Leading");
  const p6 = useState("To lead, first, you need to follow and learn from an existing leader. How would it affect your career if you became an apprentice to someone at the top of your field that you admire?");
  const h4 = useState("Money");
  const p7 = useState("This is a series of steps that the author suggests for money-based desires.");
  const p8= useState("1. Be definite as to the amount of money or type of job.");
  const p9= useState("2. Determine exactly what you intend to give in return for the money you desire.");
  const p10= useState("3. Establish a definite date when you intend to attain the money you desire.");
  const p11= useState("4. Create a definite plan for carrying out your desire and begin at once.");
  const p12= useState("5. Write out a clear, concise statement of the amount of money you intend to acquire, name the time limit, state what you intend to give in return, and describe the plan through which you plan to accumulate it.");
  const p13= useState("6. Read your written statement aloud, twice daily.");
  const h5= useState("Failure");
  const p14= useState("Look for lessons within failure and examine them without the emotional attachment of why something has failed. Use failure as a growth opportunity towards greater accomplishments.");
  const h6= useState("Others People’s Desires");
  const p15= useState("By helping the owner of a company or a manager achieve their goals (as an employee or freelancer), you also advance your own goals, because you progressively start excelling at the area of interest (provided this area is aligned with your own goals).");

  return (
    <SafeAreaView  style={styles.container}>

      <ScrollView>
    <View style={{ flex: 1,backgroundColor:'black',padding:17 }}>
  <Text style={styles.heading} >{h1}</Text>
  <Text>\n</Text>
  <Text style={styles.pharagraph} >{p1}</Text>
  <Text>\n</Text>
  <Text style={styles.pharagraph} >{p2}</Text>
  <Text style={styles.pharagraph} >{p3}</Text>
  <Text>\n</Text>
  <Text style={styles.pharagraph} >{p4}</Text>
  <Text>\n</Text>
  <Text style={styles.heading} >{h2}</Text>
  <Text>\n</Text>
  <Text style={styles.pharagraph} >{p5}</Text>
  <Text>\n</Text>
  <Text style={styles.heading} >{h3}</Text>
  <Text>\n</Text>
  <Text style={styles.pharagraph} >{p6}</Text>
  <Text>\n</Text>
  <Text style={styles.heading} >{h4}</Text>
  <Text>\n</Text>
  <Text style={styles.pharagraph} >{p7}</Text>
  <Text>\n</Text>
  <Text style={styles.pharagraph} >{p8}</Text>
  <Text style={styles.pharagraph} >{p9}</Text>
  <Text style={styles.pharagraph} >{p10}</Text>
  <Text style={styles.pharagraph} >{p11}</Text>
  <Text style={styles.pharagraph} >{p12}</Text>
  <Text style={styles.pharagraph} >{p13}</Text>
  <Text>\n</Text>
  <Text style={styles.heading} >{h5}</Text>
  <Text>\n</Text>
  <Text style={styles.pharagraph} >{p14}</Text>
  <Text>\n</Text>
  <Text style={styles.heading} >{h6}</Text>
  <Text>\n</Text>
  <Text style={styles.pharagraph} >{p15}</Text>

  </View>
  </ScrollView>
  </SafeAreaView>
  );
}



function FaithScreen({ navigation }) {
  const p = useState("Who");
  const h1 = useState("Visualisation & Belief In Attainment Of Desire");
  const q1 = useState("“Your own success or failure is based largely on your self-belief, and a mind-set of positive expectancy is the foundation of which your success can be achieved.”");
  const p1 = useState("Faith is the starting point of success and the glue that holds it all together. As a state of mind, faith can be induced or created through affirmations or repeated instructions to the subconscious mind. By encouraging positive emotions and eliminating negative emotions (such as doubt, denial, and fear), faith can be a useful tool in various ways:");
  const p2 = useState("1. It is an antidote for failure.");
  const p3 = useState("2. By believing in yourself, others will believe in you, too.");
  const p4 = useState("3. Employers seek successful, confident people who can make a positive impact.");
  const p5 = useState("To summon faith in the form of self-confidence, the author suggests that you sign your name to a statement, which you should be repeating daily towards subconsciously influencing your thoughts and actions. This statement should include affirmations that acknowledge certain things about yourself:");
  const p6 = useState("1. That you have the ability to achieve your purpose.");
  const p7 = useState("2. That you promise to take action.");
  const p8 = useState("3. That you understand that your thoughts will gradually transform into a physical reality.");
  const p9 = useState("4. That you promise to dedicate time to ensuring that these thoughts become real.");
  const p10 = useState("5. That you understand the importance of self-confidence and promise to spend 10 minutes a day working on this.");
  const p11 = useState("6. That you will never stop trying to achieve your goals.");
  const p12 = useState("7. That you are willing to serve others, and in turn will get others to serve you.");
  const p13 = useState("Find examples of people who are where you want to be (career-, money-, influence-wise, you name it), use their examples as a way to keep your faith strong, and remind yourself that your desire is possible to attain.");

  
  return (
    <SafeAreaView  style={styles.container}>

      <ScrollView>
    <View style={{ flex: 1,backgroundColor:'black',padding:17 }}>      
  <Text style={styles.heading} >{h1}</Text>
    <Text>\n</Text>
    <Text style={styles.quote} >{q1}</Text>
    <Text>\n</Text>
    <Text style={styles.pharagraph} >{p1}</Text>
    <Text>\n</Text>
    <Text style={styles.pharagraph} >{p2}</Text>
    <Text style={styles.pharagraph} >{p3}</Text>
    <Text style={styles.pharagraph} >{p4}</Text>
    <Text>\n</Text>
    <Text style={styles.pharagraph} >{p5}</Text>
    <Text>\n</Text>
    <Text style={styles.pharagraph} >{p6}</Text>
    <Text style={styles.pharagraph} >{p7}</Text>
    <Text style={styles.pharagraph} >{p8}</Text>
    <Text style={styles.pharagraph} >{p9}</Text>
    <Text style={styles.pharagraph} >{p10}</Text>
    <Text style={styles.pharagraph} >{p11}</Text>
    <Text style={styles.pharagraph} >{p12}</Text>
    <Text>\n</Text>
    <Text style={styles.pharagraph} >{p13}</Text>
  </View>
  </ScrollView>
  </SafeAreaView>
  );
}


function AutoSuggestionScreen({ navigation }) {
  const h1 = useState("The Medium For Influencing The Subconscious");
  const p1 = useState("The principle of auto-suggestion communicates our desires directly to the subconscious mind in a spirit of unshakable faith.");
  const p2 = useState("Through routine repetition of our conscious thoughts and desires (as mentioned in the ritual of the “Faith” section above) to ourselves, we can regain absolute control over the material which reaches our subconscious mind, exercising control over our decisions, feelings, and actions.");
 
 
  return (
    <SafeAreaView  style={styles.container}>

      <ScrollView>
    <View style={{ flex: 1,backgroundColor:'black',padding:17 }}>
          
  <Text style={styles.heading} >{h1}</Text>
    <Text>\n</Text>
    <Text style={styles.pharagraph} >{p1}</Text>
    <Text>\n</Text>
    <Text style={styles.pharagraph} >{p2}</Text>
  </View>
  </ScrollView>
  </SafeAreaView>
  );
}



function SpecialisedKnowledgeScreen({ navigation }) {
  const h1 = useState("Personal Experience Or Observations");
  const p1 = useState("For our desires to translate into monetary, career, or another kind of success (which we’ve picked in the “Desire” step), we are first required to have specialised knowledge of the service, product, or profession of which we intend to offer in return for fortune.");
  const p2 = useState("Notably, this specialised knowledge doesn’t have to be in your possession already. Knowing how to purchase or rent knowledge is a popular way of fulfilling this step. Courses, seminars, books (or summaries!), industry conferences, they all improve your odds of acquiring the much-needed specialised knowledge for yourself.");
  const p3 = useState("Working with knowledgeable people (“renting knowledge”) is the other – equally powerful – side of the spectrum. Lifelong learning is obviously necessary for an ambitious person to keep up with all the latest developments in their field.");

 
  return (
    <SafeAreaView  style={styles.container}>

      <ScrollView>
    <View style={{ flex: 1,backgroundColor:'black',padding:17 }}>
          
  <Text style={styles.heading} >{h1}</Text>
    <Text>\n</Text>
    <Text style={styles.pharagraph} >{p1}</Text>
    <Text>\n</Text>
    <Text style={styles.pharagraph} >{p2}</Text>
    <Text>\n</Text>
    <Text style={styles.pharagraph} >{p3}</Text>
  </View>
  </ScrollView>
  </SafeAreaView>
  );
}


function ImaginationScreen({ navigation }) {
  const h1 = useState("The Workshop Of The Mind");
  const p1 = useState("Ideas are products of and given a shape or form through imagination.");
  const q1 = useState("“Humans can create anything they can imagine.”");
  const p2 = useState("The author mentions two types of imagination. Synthetic imagination:");
  const p3 = useState("This faculty includes arranging old concepts, ideas or plans into new combinations. And creative imagination: this faculty is where ideas come from (“infinite intelligence”) and “hunches” and “inspirations are received.");
  const p4 = useState("To make the best use of your imagination towards achieving your big goal, come up with a list of ideas that will both inspire you and allow you to best utilise your talents.");

 
  return (
    <SafeAreaView  style={styles.container}>

      <ScrollView>
    <View style={{ flex: 1,backgroundColor:'black',padding:17 }}>
          
  <Text style={styles.heading} >{h1}</Text>
    <Text>\n</Text>
    <Text style={styles.pharagraph} >{p1}</Text>
    <Text>\n</Text>
    <Text style={styles.quote} >{q1}</Text>
    <Text>\n</Text>
    <Text style={styles.pharagraph} >{p2}</Text>
    <Text>\n</Text>
    <Text style={styles.pharagraph} >{p3}</Text>
    <Text>\n</Text>
    <Text style={styles.pharagraph} >{p4}</Text>
    <Text>\n</Text>
  </View>
  </ScrollView>
  </SafeAreaView>
  );
}


function OrganisedPlaningScreen({ navigation }) {
  const h1 = useState("The Crystallisation Of Desire Into Action");
  const p1 = useState("Simply hoping to succeed at your goal is not the answer. Every achievement starts with a strong desire, workshopped to reality through imagination, followed by an organised plan.");
  const p2 = useState("No plan is perfect. When you execute your plan, you will likely experience a temporary defeat. The best way to approach defeat is to simply accept it as a signal that your plans are not sound. Rebuild your plans and keep pursuing your goal, armed with the knowledge of your previous failures.");
  const p3 = useState("Don’t give up before you reach your goal, because quitters do not get to see their long-term plans come to fruition.");

 
  return (
    <SafeAreaView  style={styles.container}>

      <ScrollView>
    <View style={{ flex: 1,backgroundColor:'black',padding:17 }}>
          
  <Text style={styles.heading} >{h1}</Text>
    <Text>\n</Text>
    <Text style={styles.pharagraph} >{p1}</Text>
    <Text>\n</Text>
    <Text style={styles.pharagraph} >{p2}</Text>
    <Text>\n</Text>
    <Text style={styles.pharagraph} >{p3}</Text>
    
  </View>
  </ScrollView>
  </SafeAreaView>
  );
}



function DecisionScreen({ navigation }) {
  const h1 = useState("The Mastery Of Procrastination");
  const q1 = useState("“Tell the world what you intend to do, but first show it freedom or death on a decision.”");
  const p1 = useState("People who fail to succeed, without exception, reach decisions, if at all, very slowly, and change their minds quickly and often. Successful people reach decisions promptly and definitely, changing their mind slowly. They know what they want and, generally, get it. Definiteness of decision always requires courage. Procrastination, the opposite of decision, is a common enemy which practically every person must conquer.");
 
  return (
    <SafeAreaView  style={styles.container}>

      <ScrollView>
    <View style={{ flex: 1,backgroundColor:'black',padding:17 }}>
          
  <Text style={styles.heading} >{h1}</Text>
    <Text>\n</Text>
    <Text style={styles.quote} >{q1}</Text>
    <Text>\n</Text>
    <Text style={styles.pharagraph} >{p1}</Text> 
  </View>
  </ScrollView>
  </SafeAreaView>
  );
}



function PersistenceScreen({ navigation }) {
  const h1 = useState("The Sustained Effort Necessary To Induce Faith");
  const p1 = useState("Lack of persistence is one of the major causes of failure. It can be conquered but this depends entirely upon the intensity of one’s desire – weak desires bring weak results. The basis of persistence is the power of will, and it’s also influenced by other factors, such as:");
  const p2 = useState("1. Definiteness of purpose");
  const p3 = useState("2. Self-reliance");
  const p4 = useState("3. Definiteness of plans");
  const p5 = useState("4. Accurate knowledge");
  const p6 = useState("5. Co-operation");
  const p7 = useState("6. Habits");
  const p8 = useState("Which of the aforementioned factors are you lacking, which might be hindering your persistence? On the contrary, lack of persistence begets the following symptoms:");
  const p9 = useState("1. Procrastination");
  const p10 = useState("2. Lack of interest");
  const p11 = useState("3. Indecision");
  const p12 = useState("4. Self-satisfaction");
  const p13 = useState("5. Indifference");
  const p14 = useState("6. Weakness of desire");
  const p15 = useState("7. Willingness to quit");
  const p16 = useState("8. Lack of organised plans");
  const p17 = useState("9. Wishing instead of willing");
  const p18 = useState("10. Searching for shortcuts");
  const p19 = useState("11. Fear of criticism");
  const p20 = useState("So, how does one develop persistence?");
  const p21 = useState("The author suggests the following 4 steps:");
  const p22 = useState("1. Develop a definite purpose, backed by a burning desire for its fulfillment.");
  const p23 = useState("2. Build a definite plan, expressed in continuous action.");
  const p24 = useState("3. Keep out all negative and discouraging influences.");
  const p25 = useState("4. Stay accountable to people who will encourage you to follow through your plan and purpose.");
  
 
  return (
    <SafeAreaView  style={styles.container}>

      <ScrollView>
    <View style={{ flex: 1,backgroundColor:'black',padding:17 }}>
          
    <Text style={styles.heading} >{h1}</Text>
    <Text>\n</Text>
    <Text style={styles.pharagraph} >{p1}</Text>
    <Text>\n</Text>
    <Text style={styles.pharagraph} >{p2}</Text>
    <Text style={styles.pharagraph} >{p3}</Text>
    <Text style={styles.pharagraph} >{p4}</Text>
    <Text style={styles.pharagraph} >{p5}</Text>
    <Text style={styles.pharagraph} >{p6}</Text>
    <Text style={styles.pharagraph} >{p7}</Text>
    <Text>\n</Text>
    <Text style={styles.pharagraph} >{p8}</Text>
    <Text>\n</Text>
    <Text style={styles.pharagraph} >{p9}</Text>
    <Text style={styles.pharagraph} >{p10}</Text>
    <Text style={styles.pharagraph} >{p11}</Text>
    <Text style={styles.pharagraph} >{p12}</Text>
    <Text style={styles.pharagraph} >{p13}</Text>
    <Text style={styles.pharagraph} >{p14}</Text>
    <Text style={styles.pharagraph} >{p15}</Text>
    <Text style={styles.pharagraph} >{p16}</Text>
    <Text style={styles.pharagraph} >{p17}</Text>
    <Text style={styles.pharagraph} >{p18}</Text>
    <Text style={styles.pharagraph} >{p19}</Text>
    <Text>\n</Text>
    <Text style={styles.pharagraph} >{p20}</Text>
    <Text>\n</Text>
    <Text style={styles.pharagraph} >{p21}</Text>
    <Text>\n</Text>
    <Text style={styles.pharagraph} >{p22}</Text>
    <Text style={styles.pharagraph} >{p23}</Text>
    <Text style={styles.pharagraph} >{p24}</Text>
    <Text style={styles.pharagraph} >{p25}</Text>

  </View>
  </ScrollView>
  </SafeAreaView>
  );
}


function POWEROFTHEMASTERMINDScreen({ navigation }) {
  const h1 = useState("The Driving Force");
  const p1 = useState("A mastermind is having a team of people in place, whose job it is to help you succeed and carry out your plans. Who could be in your team and how could you form one in the next 30 days? Nobody can acquire great power and succeed without the power of a mastermind. According to the author:");
  const q1 = useState("“No two minds ever come together without, thereby, creating a third, invisible, intangible force which may be likened to a third mind.”");
  const p2 = useState("The goal of a mastermind is to convert knowledge into power, by organising it into definite plans, and then translating plans into action.");

 
  return (
    <SafeAreaView  style={styles.container}>

      <ScrollView>
    <View style={{ flex: 1,backgroundColor:'black',padding:17 }}>
          
  <Text style={styles.heading} >{h1}</Text>
    <Text>\n</Text>
    <Text style={styles.pharagraph} >{p1}</Text>
    <Text>\n</Text>
    <Text style={styles.quote} >{q1}</Text>
    <Text>\n</Text>
    <Text style={styles.pharagraph} >{p2}</Text>
    <Text>\n</Text>
  </View>
  </ScrollView>
  </SafeAreaView>
  );
}


function TRANSMUTATIONOFSEXScreen({ navigation }) {
  const h1 = useState("Converting Sex Into A Highly Creative Outlet");
  const p1 = useState("Sex has three constructive potentialities:");
  const p2 = useState("1. Perpetuation of mankind");
  const p3 = useState("2. Maintenance of health");
  const p4 = useState("3. Transformation of mediocrity into genius through transmuting");
  const p5 = useState("The desire for sex is the most powerful of human desires. Its motivating force brings keenness of imagination, courage, will-power, persistence and creative ability unknown to people at other times.");
  const p6 = useState("Sexual drive (the thoughts of physical expression) can be transmuted into highly creative and productive outlets, used as a powerful force for success, or, of course, the accumulation of riches. It requires the exercise of will-power, but the reward is worth the effort.");
  
 
  return (
    <SafeAreaView  style={styles.container}>

      <ScrollView>
    <View style={{ flex: 1,backgroundColor:'black',padding:17 }}>
          
  <Text style={styles.heading} >{h1}</Text>
    <Text>\n</Text>
    <Text style={styles.pharagraph} >{p1}</Text>
    <Text>\n</Text>
    <Text style={styles.pharagraph} >{p2}</Text>
    <Text style={styles.pharagraph} >{p3}</Text>
    <Text style={styles.pharagraph} >{p4}</Text>
    <Text>\n</Text>
    <Text style={styles.pharagraph} >{p5}</Text>
    <Text>\n</Text>
    <Text style={styles.pharagraph} >{p6}</Text>
    <Text>\n</Text>
  </View>
  </ScrollView>
  </SafeAreaView>
  );
}



function SUBCONSCIOUSMINDScreen({ navigation }) {
  const h1 = useState("The Connecting Link");
  const p1 = useState("The subconscious mind is the connecting link between the finite mind of a human and infinite intelligence.");
  const p2 = useState("The subconscious mind can be used as a medium for transmuting your desires into their physical or monetary equivalent. However, if you fail to plant your own desires into it, as a result of your neglect, it will feed upon any thoughts that reach it.");
  const p3 = useState("To gain control over your subconscious mind, form the habit of applying and using to your advantage the following 7 major positive emotions: Desire, Faith, Love, Sex, Enthusiasm, Romance, Hope.");
  const p4 = useState("The mere presence of a single negative emotion in your conscious mind might be sufficient to destroy all chances of constructive aid from your subconscious mind. The 7 major negative emotions to avoid are; Fear, Jealousy, Hatred, Revenge, Greed, Superstition, Anger.");
  const p5 = useState("Eventually, the positive emotions will dominate your mind completely, so that the negative ones cannot enter.");

 
  return (
    <SafeAreaView  style={styles.container}>

      <ScrollView>
    <View style={{ flex: 1,backgroundColor:'black',padding:17 }}>
          
  <Text style={styles.heading} >{h1}</Text>
    <Text>\n</Text>
    <Text style={styles.pharagraph} >{p1}</Text> 
    <Text>\n</Text>
    <Text style={styles.pharagraph} >{p2}</Text> 
    <Text>\n</Text>
    <Text style={styles.pharagraph} >{p3}</Text> 
    <Text>\n</Text>
    <Text style={styles.pharagraph} >{p4}</Text> 
    <Text>\n</Text>
    <Text style={styles.pharagraph} >{p5}</Text> 


  </View>
  </ScrollView>
  </SafeAreaView>
  );
}




function TheBrainScreen({ navigation }) {
  const h1 = useState("A Broadcasting And Receiving Station For Thought");
  const p1 = useState("Every human brain is both a broadcasting and receiving station for the vibration of thought.");
  const p2 = useState("The subconscious mind is the “sending station” of the brain, through which vibrations of thought are broadcast.");
  const p3 = useState("The creative imagination is the “receiving set,” through which the vibrations of thought are picked up from the ether.");
  const p4 = useState("When stimulated (“stepped up”) to a high rate of vibration, the mind becomes more receptive to the vibration of thought. This “stepping up” takes place through positive or negative emotions.");
  const p5 = useState("Vibrations of an exceedingly high rate are the only vibrations picked up and carried, by the ether, from one brain to another.");

 
  return (
    <SafeAreaView  style={styles.container}>

      <ScrollView>
    <View style={{ flex: 1,backgroundColor:'black',padding:17 }}>
          
  <Text style={styles.heading} >{h1}</Text>
    <Text>\n</Text>
    <Text style={styles.pharagraph} >{p1}</Text> 
    <Text>\n</Text>
    <Text style={styles.pharagraph} >{p2}</Text> 
    <Text>\n</Text>
    <Text style={styles.pharagraph} >{p3}</Text> 
    <Text>\n</Text>
    <Text style={styles.pharagraph} >{p4}</Text> 
    <Text>\n</Text>
    <Text style={styles.pharagraph} >{p5}</Text> 
  </View>
  </ScrollView>
  </SafeAreaView>
  );
}



function TheSixthSenseScreen({ navigation }) {
  const h1 = useState("The Door To The Temple Of Wisdom");
  const p1 = useState("The understanding of the sixth sense comes only by meditation, through mind development from within.");
  const p2 = useState("Once you’ve mastered the sixth sense, you will be able to receive warnings about impending dangers in time to avoid them and get notified of opportunities in time to embrace them.");
  const p3 = useState("However, the sixth sense will never function if indecision, doubt, and fear remain in your mind. They are closely related: indecision crystallises into doubt, and the two blend to become the end result, fear.");
  const p4 = useState("The 6 basic fears are; Poverty, Criticism, Ill Health, Loss of love, Old age, Death. However, there’s also a 7th ‘enemy’: susceptibility to negative influences.");
  const p5 = useState("To shield yourself from this enemy, like all people who accumulate great riches, you have to:");
  const p6 = useState("1. Put your willpower into constant use, until you build immunity against negative influences in your own mind,");
  const p7 = useState("2. Deliberately seek the company of people who influence you to think and act from a positive standpoint, and");
  const p8 = useState("3. Use your willpower to gain control over your thoughts and influence your subconscious mind.");
  const p9 = useState("Fear is just a state of mind. It is subject to control and direction. Use this knowledge to your advantage.");
  const q1 = useState("“Man’s thought impulses begin immediately to translate themselves into their physical equivalent, whether those thoughts are voluntary or involuntary.”");

 
  return (
    <SafeAreaView  style={styles.container}>

      <ScrollView>
    <View style={{ flex: 1,backgroundColor:'black',padding:17 }}>
          
  <Text style={styles.heading} >{h1}</Text>
    <Text>\n</Text>
    <Text style={styles.pharagraph} >{p1}</Text> 
    <Text>\n</Text>
    <Text style={styles.pharagraph} >{p2}</Text> 
    <Text>\n</Text>
    <Text style={styles.pharagraph} >{p3}</Text> 
    <Text>\n</Text>
    <Text style={styles.pharagraph} >{p4}</Text> 
    <Text>\n</Text>
    <Text style={styles.pharagraph} >{p5}</Text> 
    <Text>\n</Text>
    <Text style={styles.pharagraph} >{p6}</Text> 
    <Text style={styles.pharagraph} >{p7}</Text> 
    <Text style={styles.pharagraph} >{p8}</Text> 
    <Text>\n</Text>
    <Text style={styles.pharagraph} >{p9}</Text> 
    <Text>\n</Text>
    <Text style={styles.quote} >{q1}</Text> 

  </View>
  </ScrollView>
  </SafeAreaView>
  );
}


function ConclusionScreen({ navigation }) {
  const h1 = useState("Key takeaways");
  const p1 = useState("The book exploits the power of thought to manifest strong desires and a definite purpose into reality.");
  const p2 = useState("Faith is the glue that holds it all together.");
  const p3 = useState("Every achievement starts with a strong desire, workshopped to reality through imagination, followed by an organised plan.");
  const p4 = useState("Successful people reach decisions promptly and definitely, changing their mind slowly.");
  const p5 = useState("Lack of persistence is one of the major causes of failure.");
  const p6 = useState("To acquire great power & succeed, you need the help of a mastermind.");
  const p7 = useState("Sexual drive, transmuted into creative and productive outlets, can be a powerful force for success.");
  const p8 = useState("Fear is just a state of mind. It is subject to control and direction.");

 
  return (
    <SafeAreaView  style={styles.container}>

      <ScrollView>
    <View style={{ flex: 1,backgroundColor:'black',padding:17 }}>
          
  <Text style={styles.heading} >{h1}</Text>
    <Text>\n</Text>
    <Text style={styles.pharagraph} >{p1}</Text> 
    <Text>\n</Text>
    <Text style={styles.pharagraph} >{p2}</Text> 
    <Text>\n</Text>
    <Text style={styles.pharagraph} >{p3}</Text> 
    <Text>\n</Text>
    <Text style={styles.pharagraph} >{p4}</Text> 
    <Text>\n</Text>
    <Text style={styles.pharagraph} >{p5}</Text> 
    <Text>\n</Text>
    <Text style={styles.pharagraph} >{p6}</Text> 
    <Text>\n</Text>
    <Text style={styles.pharagraph} >{p7}</Text> 
    <Text>\n</Text>
    <Text style={styles.pharagraph} >{p8}</Text>     
  </View>
  </ScrollView>
  </SafeAreaView>
  );
}


function BONUSScreen({ navigation }) {
 
 
  return (
    <SafeAreaView  style={styles.container}>

      <ScrollView>
    <View style={{ flex: 1,backgroundColor:'black',paddingLeft:70,paddingTop:100 }} >
          
    <Image source={require('./Vadivelu.jpg')} style={{flex:1}} />
    <Text style={{color:'white',fontWeight:"bold",paddingTop:30,fontSize:32}}>NO MEANS NO</Text>
 
  </View>
  </ScrollView>
  </SafeAreaView>
  );
}


























const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen options={{headerShown: false}} name='Think & Grow Rich'   component={HomeScreen} />
        <Stack.Screen options={{headerShown: false}} name="TabelOfContent"  component={TabelOfContent} />
        <Stack.Screen name="INTRODUCTION"  component={IntroScreen} />
        <Stack.Screen name="DESIRE"  component={DesireScreen} />
        <Stack.Screen name="FAITH"  component={FaithScreen} />
        <Stack.Screen name="AUTO-SUGGESTION"  component={AutoSuggestionScreen} />
        <Stack.Screen name="SPECIALISED KNOWLEDGE"  component={SpecialisedKnowledgeScreen} />
        <Stack.Screen name="IMAGINATION"  component={ImaginationScreen} />
        <Stack.Screen name="ORGANISED PLANNING"  component={OrganisedPlaningScreen} />
        <Stack.Screen name="DECISION"  component={DecisionScreen} />
        <Stack.Screen name="PERSISTENCE"  component={PersistenceScreen} />
        <Stack.Screen name="POWER OF MASTERMIND"  component={POWEROFTHEMASTERMINDScreen} />
        <Stack.Screen name="TRANSMUTATION OF SEX"  component={TRANSMUTATIONOFSEXScreen} />
        <Stack.Screen name="SUBCONSCIOUS MIND"  component={SUBCONSCIOUSMINDScreen} />
        <Stack.Screen name="THE BRAIN"  component={TheBrainScreen} />
        <Stack.Screen name="THE SIXTH SENSE"  component={TheSixthSenseScreen} />
        <Stack.Screen name="CONCLUSION"  component={ConclusionScreen} />
        <Stack.Screen name="BONUS"  component={BONUSScreen} />




      </Stack.Navigator>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor:'#000000', 
  },
  
  item: {
    padding: 18,
    fontSize: 18,
    height: 60,
    color:'white',
    textAlign:"center",
    fontWeight: 'bold',
        marginHorizontal: 35,    
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  
  
pharagraph:{
  color:'white',
},
heading:{
  color:'white',
  fontWeight:'bold',
  fontSize:20,
},
quote:{
  color:'white',
  fontWeight:'bold',
  textAlign:'center',
  fontSize:16,
  fontStyle:'italic'
},
line:{
  borderBottomColor: 'white',
    borderBottomWidth: 1,
    marginLeft: 35,
    marginRight: 35

}


})


export default App;



/*


*/