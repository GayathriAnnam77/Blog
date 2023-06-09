import React from 'react';
import tamucc from "../tamucc.jpg"
import isa from "../isa.JPG"
import bus from "../bus.jpg"
import shores from "../shores.jpg"
import classes from "../class.jpg"
import events from "../events.jpg"
import food from "../food.jpg"
import transloc from "../transloc.jpg"
import airport from "../airport.jpg"
import "./Blog.css";



function Blog() {

  return (
    <div className='page'  >
     
      <img src={tamucc} alt="University" style={{width:"1200px"}}/>
      <h1>Hello, I am Gayathri Annam</h1>
      <h3>Master of Computer Science Student at Texas A&M University</h3>
      <p>I have completed my two-year master's program (2021-2023) at the university and served as the Vice-President of the Indian Student Association TAMUCC from 2022 to 2023. 
      When I was serving as the Vice President, I used to get a lot of messages from students who were planning to join TAMUCC, and they often had a lot of questions. So, I decided to compile all the common doubts that people had before joining the college and put them in a blog post. I hope this helps you and other prospective students who are looking for information about TAMUCC.So, 
      I would like to share my overall university experience to benefit upcoming students.
      </p>
      <h2>
      Have you heard about ISA and how it works? 
      </h2>
      <img src={isa} alt="Indian Student Association" style={{height:'350px'}}/>
      <p>
      It's an amazing organization completely focused on helping Indian students. ISA has a committee of students attending the university, and they change every year after the elections. The committee is supervised by Professor Dr. Mamta Yadav.
      </p>
      <div className='acom' style={{display:"flex"}}>

      
      <p>
      After receiving admission, what are the steps to follow?
      Moving to a new country can be tough, but don't worry, this place is super friendly! As soon as you decide to join our university, the first thing to do is check out ISA TAMUCC Instagram page. Before the start of each semester, they post a WhatsApp group link for students who are joining TAMUCC. In this group, you can connect with seniors and ISA committee members who will answer any doubts you have. ISA is here to help you from start to end!
      </p>

      </div>
      <h2>1. Accommodation & PickUps</h2>
<div className='acom' style={{display:"flex", flexWrap: "wrap"}}>
  <div style={{flex: "1"}}>
    <img src={shores} alt="Accommodation" style={{height:"250px"}} />
   </div>
   <div style={{flex: "1"}}>

    <img src={airport} alt="Pick Up" style={{height:"250px", marginLeft:"20px"}} />

  </div>
    <p>
      When you join, the ISA team will ask you about your accommodation preferences and who you want to room with.
      Don't worry if you don't know anyone yet, ISA will help you find a group.

      Once you've confirmed that you're joining the university, ISA will book an apartment for you before your arrival
      so you can move in hassle-free. Most Indian students stay in The Shores community, Plam's, and South Bay,
      which are all close to the university. Plus, you'll have access to free bus transportation with your college
      student ID.

      To help with your arrival, ISA will share a Google sheet where you can provide your flight information.
      Someone from the ISA committee will then pick you up from the Corpus Christi airport or bus stop and drop
      you off at your apartment.

      Best of all, these accommodations and pickups are completely free! ISA has funding to cover these expenses,
      so you don't have to worry about any extra charges.
    </p>
</div>


<h2>2. Academics & Courses</h2>
<div>
<p>The university I attended is really great! For the Course Only Option, you need to complete at least 36 credit hours. There are 3 core courses that everyone has to take, and then you get to choose from electives in 3 concentration tracks. You need to complete at least 2 electives in each track before you can complete your masters. And, in your last semester, there's a mandatory course called "Advanced Software Engineering" where you'll be working on a capstone project. It's pretty exciting!</p>
<br/>
<img src={classes} alt="classrooms" style={{height:'400px'}}/> <br/>

<a href="https://catalog.tamucc.edu/graduate/engineering/masters/computer-science-ms/#programrequirementstext">For more details regarding courses, check out the link</a>
<p> 
Based on my experience, I found all the subjects to be enjoyable. There were a lot of assignments, projects, presentations, and submissions, but by the end of my masters, I learned a lot. Most of the courses required us to give presentations on project selection, project status updates, and final project presentations. Due to so many presentations, I lost stage fear, gained confidence, and improved my interpersonal skills. Some courses even conducted pen and paper tests. The majority of the classes were in-person, and attendance was mandatory. Typically, for each course, there were two to three classes per week, each lasting one hour.

Course registration can be a bit hectic, like booking a Tatkal train ticket in India. You need to be very quick during the registration process. Find out when the courses will be released and go through the catalog beforehand to decide which courses you want to take. Then, be ready with your laptop and register for the courses at the right time. If you don't find any available courses, you can contact the ISA committee. They will provide you with the email address of the College of Engineering Dean, who you can contact to inquire about the courses you are interested in. </p>
</div>


<h2>3. On Campus Employments (GA/TA/RA/Student Workers/Dining Jobs)</h2>
<p>Looking for a part-time job while studying can definitely help you earn some extra cash and valuable work experience at the same time. I just wanted to let you know that although there are plenty of job opportunities out there, getting an assistantship can be pretty competitive. But don't worry, with a little determination and perseverance, you can still increase your chances of landing one. Once you do get an interview call, make sure to prepare well and show off your skills and experiences with confidence.
</p>


<ul>
 <li> You can apply for on-campus student worker positions or assistantships through Handshake, where all job openings are listed. Simply upload your cover letter and resume to apply for the positions that interest you.
 <a href="https://app.joinhandshake.com/login ">Click here to visit Handshake</a></li>


 <li> Please refer to the following link to apply for any available teaching assistantship positions.

<a href="https://docs.google.com/forms/d/e/1FAIpQLSfi_199A4hiovQ8TwlQmP_byrdQXT_QIbPmFdjG0-RA1hhKVw/viewform ">Click here to checkout TA positions</a></li>
<li>Please use the following link to apply for any on-campus dining jobs.
 <a href=" https://jobs.compassgroupcareers.com/ ">Click here to visit compassgroupcareers</a> </li>
</ul>


<h2>4. Events</h2>
<img src={events} alt="celebrations" style={{height:'500px'}}/>

<p>
We have a vibrant and inclusive community here at ISA, where we celebrate all our cultural events together. 
Whether it's Diwali, Garba night, Dussehra, or the International fest, we make sure to enjoy and make the most of it. With ISA funds, we organize these events and serve traditional food. Our events feature cultural performances, fashion shows, and even DJ nights for Garba. We set up photo booths to capture these beautiful memories, and everyone dresses up in their traditional attire to represent our culture. 
It's truly an unforgettable experience that makes you feel right at home.
</p>

<h2>5. Food</h2>


<p>When it comes to Indian food, we are lucky to have an Indian supermarket in Corpus Christi that stocks all the essential Indian groceries. And if you're looking for some delicious Indian cuisine, we have some great Indian restaurants in the area, such as Pavani Express, SV Caterings, and Persis Indian Grill. In addition, some restaurants like Sufi Kabob and Ginger Cafe & Grill also serve Indian food.</p>
<p>I've tried every kind of variety besides Indian food  If you try Mexican food, it will taste slightly Indian and spicy. I'm listing some of my favorite restaurants. There may be many superb restaurants, but i have only visited a few numbers. I will list my favorites below.
</p>
<div className='acom' style={{display:"flex", flexWrap: "wrap"}}>
  <div style={{flex: "1"}}>
    <p>
      <ul> <strong>For authentic Mexican cuisine:  </strong><br/>
        <li>On the border (taste their salsa and nachos)</li>
        <li>Chuys </li>
      </ul>

      <ul> <strong>For Chinese: </strong><br/>
        (Try kungpao; it's delicious if you're interested in Chinese cuisine. Additionally, wherever you go, you can make it your own by requesting the staff to add more pepper and chilli flakes and make it more spicy. This will give us our Indian taste.)
        <li>Panda Express </li>
        <li>JaJa Cafe</li>
        <li>DAO Authentic Asian Cusine</li>
      </ul>

      <ul> Other than these : <br/>
        <li>Applebee's</li>
        <li>Buffalo Wild Wings</li>
        <li>Starbucks (my favorite. Java Chip Frappuccino, I will die for this.)</li>
        <li>Chili's</li>
        <li>MOD Pizza (here we can customize our pizza, and we will have many options for toppings)</li>
        <li>Islander Teriyaki (which is very near to the college, try salad there, it will be really tasty)</li>
        <li>La Frutera (check this for fresh fruit juice)</li>
        <li>Baskin Robbins and Marble Slab for ice cream with many topping options available.</li>
        <li>IHOP (for breakfast options)</li>
        <li>Cheesecake Factory</li>
        <li>Olive Garden (I love Italian pasta here, but it will be cheesy)</li>
        <li>Vue Tea (must try taro milk boba tea here)</li>
      </ul>
    </p>
  </div>
  <div style={{flex: "1"}}>
    <img src={food} alt="" style={{width: '100%'}}/>
  </div>
</div>


<h2>6. Transportation</h2>
<div className='acom' style={{display:"flex", flexWrap: "wrap"}}>

<div  style={{flex: "2"}}>
<img src={bus} alt="transportation" style={{height:'200px', width:"800px"}}/>
<p>When it comes to transportation, we're pretty lucky as TAMUCC students. With our student ID cards, we get to ride the bus for free! Yes, you read that right - no charges at all! This means you can easily explore the entire city of Corpus Christi without worrying about transportation costs.You can also track the current location of the bus by using the Trans Loc app. And other than bus facility, there are other options available such as Uber and Lyft.

</p>
</div>
<div  style={{flex: "1"}}>
<img src={transloc} alt="transportation" style={{height:'400px'}}/>
</div>
</div>

<p>  <strong>Overall</strong>, this place is super friendly. When we plan to come from India, we usually think that the initial days will be tough until we settle in. However, after being here, I'm sure you won't feel that way. Seniors will take care of everything like family, from accommodation to settling into college, explaining course work, and guiding you on professors and courses, setting up a bank account and every other needful thing. I learned a great deal during my master's program. In every course, it is mandatory to give presentations, and by the end of my master's, I lost stage fear. I worked as a GA from the first day of my master's program. Getting a GA is difficult, but once you get one, maintaining it by following rules and timing is crucial here. We celebrate all events together. It is very enjoyable, and the cost of living in Corpus Christi is low. So you can save a good amount of money as there is nothing much to do in Corpus Christi. You will find beaches, parks, many restaurants. All Indians live in the same community, so you will never feel homesick. You can expect many assignments and projects, but it is common in every university. I think I have covered everything😀.

If you have any doubts, feel free to reach out to me through LinkedIn  <a href=" https://www.linkedin.com/in/lakshmi-gayathri-annam-12090518b/ ">Contact Me</a>. </p>
</div>
  
  );
}

export default Blog;
