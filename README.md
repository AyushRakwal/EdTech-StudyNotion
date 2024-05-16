ED-Tech PlatForm : StudyNotion

It is  a  fully functional ed-tech platform that enables users to create, consume,and rate educational content. The platform is built using the MERN stack, which includes ReactJS, NodeJS, MongoDB, and ExpressJS.


System Architecture :
The StudyNotion ed-tech platform consists of three main components: the front end, the back  end,  and  the  database.  The  platform  follows  a  client-server  architecture,  with  the front end serving as the client and the back end and database serving as the server.

Front-end :
The  front  end  of the platform is built using ReactJS, which is a popular JavaScript library for building user interfaces. ReactJS allows for the creation of dynamic and responsive user interfaces, which are critical for providing an engaging learning experience to the students. The front end communicates with the back end using RESTful API calls.

Back-end :
The  back  end  of  the  platform  is  built  using  NodeJS  and  ExpressJS,  which  are  popular frameworks  for  building  scalable  and  robust  server-side  applications.  The  back  end provides  APIs  for  the  front  end  to  consume,  which  include  functionalities  such  as  user authentication,  course  creation,  and  course consumption. The back end also handles the logic for processing and storing the course content and user data.

Database :
The  database  for  the  platform  is  built  using  MongoDB,  which  is  a NoSQL database that provides  a  ﬂexible  and  scalable  data storage solution. MongoDB allows for the storage of unstructured and semi-structured data, which is useful for storing course content such as videos,  images,  and  PDFs.  The  database  stores  the  course  content,  user  data,  and  other relevant information related to the platform.

Architecture Description :

Front-end : 

The front end is part of the platform that the user interacts with. It's like the "face" of the platform  that  the  user  sees and interacts with. The front end of StudyNotion is designed using  a  tool  called  Figma,  which  is  a  popular  design  tool  that  allows  for  the creation of clean  and  minimal  user  interfaces. 
The front end of StudyNotion has all the necessary pages that an ed-tech platform should have. Some of these pages are:

For Students:
−    Homepage: This page will have a brief introduction to the platform, as well as links to the course list and user details.

−    Course  List:  This  page  will have a list of all the courses available on the platform, along with their descriptions and ratings.

−    Wishlist:  This  page  will  display  all  the  courses  that  a  student  has  added to their wishlist.

−    Cart Checkout: This page will allow the user to complete the course purchase.
−    Course  Content:  This  page  will  have  the  course  content  for  a  particular  course, including videos, and other related material.

−    User  Details:  This  page  will  have  details  about  the  student's  account,  including their name, email, and other relevant information.

−    User Edit Details: This page will allow the student to edit their account details.



For Instructors:
−    Dashboard:  This  page  will  have  an  overview of the instructor's courses, as well as the ratings and feedback for each course.

−    Insights:   This   page   will   have   detailed   insights   into   the  instructor's  courses, including the number of views, clicks, and other relevant metrics.

−    Course Management Pages: These pages will allow the instructor to create, update, and delete courses, as well as manage the course content and pricing.

−    View and Edit Proﬁle Details: These pages will allow the instructor to view and edit their account details.


Description of the Back-end Architecture:

StudyNotion  uses  a  monolithic  architecture,  with  the  backend  built  using  Node.js  and Express.js,  and  MongoDB  as  the  primary  database.  Monolithic  architecture  refers  to  a design approach where all the modules of the application are combined into a single large program, with a single codebase, to enable better control, security, and performance.

Node.js is a popular JavaScript runtime that allows us to run JavaScript code outside of the browser.  Express.js  is  a web application framework that simpliﬁes the process of building web  applications  in  Node.js.  MongoDB  is  a  popular  NoSQL  database  that  allows  for ﬂexible data storage and retrieval, making it a suitable choice for complex applications like StudyNotion.

Features and Functionalities of the Back-end:

The back end of StudyNotion provides a range of features and functionalities, including:
1.    User authentication and authorization: Students and instructors can sign up and log in to the platform using their email addresses and password. The platform also supports OTP  (One-Time  Password)  veriﬁcation  and  forgot  password  functionality  for  added security.
2.    Course  management:  Instructors  can  create, read, update, and delete courses, as well as manage course content and media. Students can view and rate courses.
3.    Payment  Integration:  Students  will  purchase  and enrol on courses by completing the checkout ﬂow that is followed by Razorpay integration for payment handling.
4.   Cloud-based  media  management:  StudyNotion  uses Cloudinary, a cloud-based media management service, to store and manage all media content, including images, videos, and documents.
5.    Markdown  formatting:  Course  content  in  document  format  is  stored  in  Markdown format, which allows for easier display and rendering on the front end.

Frameworks, Libraries, and Tools used:

The back end of StudyNotion uses a range of frameworks, libraries, and tools to ensure its functionality and performance, including:

1.    Node.js: Node.js is used as the primary framework for the back end.
2.    MongoDB: MongoDB is used as the primary database, providing a ﬂexible and scalable data storage solution.
3.    Express.js:  Express.js  is  used  as  a  web  application  framework,  providing  a  range  of features and tools for building web applications.
4.   JWT:   JWT   (JSON   Web   Tokens)   are   used   for   authentication   and  authorization, providing a secure and reliable way to manage user credentials.
5.    Bcrypt:  Bcrypt  is  used  for  password hashing, adding an extra layer of security to user data.
6.   Mongoose: Mongoose is used as an Object Data Modeling (ODM) library, providing a way to interact with MongoDB using JavaScript.

Data Models and Database Schema:

The  back  end  of  StudyNotion  uses  a  range  of  data  models  and  database  schemas  to manage data, including:

1.    Student schema: Includes ﬁelds such as name, email, password, and course details for each student.
2.    Instructor  schema:  Includes  ﬁelds  such  as  name,  email,  password,  and  course details for each instructor.
3.    Course schema: Includes ﬁelds such as course name, description, instructor details, and media content.

  
Overall, the back-end of StudyNotion is designed to provide a robust and scalable solution for an 
ed-tech platform, with a focus on security, reliability, and ease of use. By using the right 
frameworks, libraries, and tools, we can ensure that the platform functions smoothly and provides 
an optimal user experience for all its users.
