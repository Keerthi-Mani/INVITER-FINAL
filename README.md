## Project title and Deployed Link
Inviter is a program that connects a user to a database of their contacts in order to send invitations and post cards through E-mail or SMS Text messages. 
## Motivation
Inviter sends postcards and invitations to the users contacts. The user must sign in or sign up in order to use this app. The contacts are stored when the user adds these contacts. Either the user will send an email with a file of the invitations/Postcards or text messeges. It also keeps track of of what was sent to who.
## Technologies used and why
<b>Built with</b>
- [Express](https://expressjs.com/)
<b>Fast, unopinionated, minimalist web framework for Node.js<b>
- [SendGrid](https://sendgrid.com/)
<b>SendGrid is a module for Node.js applications to allow easy as cake email sending.<b>
- [Nexmo](https://www.nexmo.com/products/sms/)
<b>Create contextual, effective communication with our SMS API.<b>
- [Passport](http://www.passportjs.org/)
<b>Passport is authentication middleware for Node.js. Extremely flexible and modular, Passport can be unobtrusively dropped in to any Express-based web application.<b>
- [Postman](https://www.getpostman.com/)
<b>Postman is a collaboration platform for API development. Postman's features simplify each step of building an API and streamline collaboration so you can create better APIs—faster.<b>
## Features
- Sends SMS text messages through Nexmo API that uses a database
- Passport authentication for each user
- Nodemailer allows users to send emails with attachments to all their contacts
- Associative MYSQL Tables to store all the data for users, contacts information, and messages
## Screenshots
Include logo/demo screenshot etc.
![Logo](/public/images/logo.png)
![Login](/public/images/screenshot1.png)
## Code Example
Show what your project does as concisely as possible, developers should be able to figure out **how** your project solves their problem by looking at the code example. Make sure the API you are showing off is obvious, and that your code is short and concise.
## Installation
clone repository
```bash
$ npm i
```
```bash
$ node server.js
```
  View the website at: http://localhost:3000
## How to use?
1. Click on Icon
2. Sign up
3. Log in
4. Add contacts
5. Send either emails or texts!
## Credits
Give proper credits. This could be a link to any repo which inspired you to build this project, any blogposts or links to people who contrbuted in this project. 
## License
Copyright <2019>
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
MIT © [Manuel Camilo, Keerthi Maani, Shital, Ajay Singh, Michael Paul-Cuccia]()

