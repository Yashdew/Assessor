# Assessor
```
An open-source Resume Rater tool for Recuiters and Candidates. 
The Whole Idea is to Simplify the Hiring Process by shortlisting Candidates based on the resume. 
```
[![GitHub stars](https://img.shields.io/github/stars/Yashdew/Assessor)](https://github.com/Yashdew/Assessor/stargazers)
[![GitHub](https://img.shields.io/github/license/Yashdew/Assessor)](https://github.com/Yashdew/Assessor/blob/main/LICENSE) 
[![GitHub fork](https://img.shields.io/github/forks/Yashdew/Assessor)](https://github.com/Yashdew/Assessor/network/members)
[![GitHub issue](https://img.shields.io/github/issues/Yashdew/Assessor)](https://github.com/Yashdew/Assessor/issues)


![PyPI - Python Version](https://img.shields.io/pypi/pyversions/Django.svg)

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a >
    <img src="img/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Assessor</h3>

  <p align="center">
   An open-source Resume Rater tool for Recuiters and Candidates.  
    <br />
    <a ><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://assessor-nagjcfdvp-yashdew.vercel.app/">View Demo</a>
    ·
    <a href="https://github.com/Yashdew/Assessor/issues">Report Bug</a>
    ·
    <a href="https://github.com/Yashdew/Assessor/issues">Request Feature</a>
  </p>
</p>


<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#over-view">Overview</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#running">Running</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

<!--![product-gif](/images/Chatistics.gif)-->


#### <SOMETHING ABOUT PROJECT>


### Overview

The backend would return a list of dictionary objects with result as follows:[POST REQUEST]

```
[
    {
        "personal_details": {
            "name": "Yash Dewangan",
            "email": "yashdewangan123456@gmail.com",
            "mobile_number": "8602842290"
        },
        "skills": [
            "Pandas",
            "Coding",
            "Architecture",
            "C",
            "Flask",
            "Css",
            "Photography",
            "Java",
            "Programming",
            "C++",
            "Django",
            "Rest",
            "Editing",
            "Statistics",
            "Design",
            "Sql server",
            "Js",
            "Apex",
            "Sql",
            "Ui",
            "Information technology",
            "Apis",
            "Analysis",
            "Api",
            "Engineering",
            "Algorithms",
            "Video",
            "Github",
            "Html",
            "Database",
            "Python"
        ],
        "education": [
            "SMT. KASHIBAI NAVALE COLLEGE OF ENGINEERING
            BE in Information Technology
            2018-2022 | Pune, MH
            Cum. GPA: 8.14",
            "KENDRIYA VIDYALAYA, CMM
            12th CBSE
            2018 | Jabalpur, MP
            Percentage: 70.6%",
            "KENDRIYA VIDYALAYA, CMM
            10th CBSE
            2016 | Jabalpur, MP
            Percentage: 7.6 CGPA"
        ],
        "experience": [
            "eQ Technologic | Software Engineer Intern
            Aug 2021 – Present
            Implemented various services/APIs needed for new features required in latest release
            Learnt about SOA architecture, modular coding i.e. keeping future use in mind
            Implementation of concepts such as Tagging Entities and  Groups/User Authorization & Permissions for Entities
            Worked on Backend technologies such as Spring and Java with SQL Server as Database"
        ],
        "no_of_pages": 1,
        "links": {
            "linkedin": "https://www.linkedin.com/in/iyashdewangan/",
            "leetcode": "https://leetcode.com/Yashdew/",
            "codechef": "https://www.codechef.com/users/yashdew",
            "codeforces": "http://codeforces.com/profile/yashdewangan123456",
            "github": [
                "https://github.com/Yashdew/Attendance-Tracker",
                "https://github.com/Yashdew",
                "https://github.com/SkSumit/Chatistics"
            ],
            "others": [
                "mailto:yashdewangan123456@gmail.com",
                "https://www.spoj.com/users/yashdew/",
                "https://attendancesknhc.herokuapp.com/",
                "https://chatistics.vercel.app/",
                "https://drive.google.com/file/d/1-UrtlUygeujyDXvZPhI5fW9E1wICL_Qd/view",
                "https://auth.geeksforgeeks.org/user/yashdewangan123456/practice/"
            ]
        },
        "total_experience": 0.17,
        "projects": [
            "CHATISTICS
            GitHub Live URL
            Dec 2020 - Feb 2021
            An open-source WhatsApp chats analyser and statistics.
            Application, which provides various meaningful insights.
            Time complexity reduces from 20 seconds. to 5 seconds.
            Used Flask for implementing backend REST APIs with firebase database for analysis of traffic.
            Pandas for data pre-processing.
            Used NextJS and Bulma UI for frontend.
            500+ users and 30 stars on GitHub.",

            "ATTENDANCE-TRACKER
            GitHub Live URL
            July 2020 – Aug 2020
            A full stack web application for monitoring the attendance in Microsoft Teams from logs file of the meeting. (Sample)
            Optimization of code took around 3 seconds in Data pre-processing.
            Worked on building the major backend part and frontend.
            Used Flask for implementing Backend and HTML, CSS & JS for frontend.
            Used Mongo DB and Google sheet API for Database.
            Data pre-processing of large logs files for calculating time stamps of students using pandas
            50+ users in our college."
        ],
        "achievements": [
            "Codechef - Maximum rating 1603 (3-star).",
            "Codechef – March Lunchtime 2021 Div-3, secured a rank of 825 out of 7000+ participants.",
            "Leetcode – 150+ Solved Questions.",
            "250+ Solved Questions on GFG, Codechef, SPOJ and Codeforces.",
            "Participated in Google kickstart 2021 Round A, Round C & Round D.",
            "Secured 1st rank out of 30+ participants in Scaler Edge Apex 2021. (SKN Edition)",
            "Represented Hack Club SKN projects in Hack Club Asia Summit 2021.",
            "Participated in more than 30+ coding competition."
        ],
        "hobbies": [
            "Photography and Video editing",
            "Traveling and exploring new places.",
            "Gaming"
        ]
    }
]
```


### Built With

Frameworks used in the website
* [Next.js](https://nextjs.org/)
* [Flask](https://flask.palletsprojects.com/en/1.1.x)
* [Pyresparser](https://www.omkarpathak.in/pyresparser/)



<!-- GETTING STARTED -->
##  ⚡️ Getting Started


### Prerequisites

Tools needed to run this project
* python
* yarn 
  
###  📦 Installation

1. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
2. Install packages

#### Backend

```bash
cd .\api\
pip install virtual env
virtualenv env
env\Scripts\activate
pip install -r requirements.txt
```

#### Frontend

```bash
cd .\frontend\
yarn install
```   


<!-- USAGE EXAMPLES -->
## 🐎 Running

Backend would be running on PORT 5000

```bash
python run.py
```
 ***Open new terminal to run front-end***

Frontend would be running on PORT 3000

```bash
yarn run dev
```


## Usage

* For analysing your personal or group chats.



<!-- ROADMAP -->
## 🚧 Roadmap

See the [open issues](https://github.com/Yashdew/Assessor/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## 🔧 Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## 📄 License

Distributed under the GNU General Public License. See `LICENSE` for more information.

<!--
<!-- CONTACT -->
## 🤙 Contact

Atharva Kulkarni - [@LinkedIn](https://www.linkedin.com/in/atharva-kulkarni-b119b7195/) - mailmenehakulkarni@gmail.com

Jayesh Padhiar - [@LinkedIn](https://www.linkedin.com/in/jayeshpadhiar/) - 	jayeshpadhiar20@gmail.com

Sumit Kolpekwar - [@LinkedIn](https://www.linkedin.com/in/sumitkolpekwar/) - kolsum24@gmail.com

Yash Dewangan - [@LinkedIn](https://www.linkedin.com/in/yash-dewangan-903346132/) - yashdewangan123456@gmail.com

Project Link: [Assessor](https://github.com/Yashdew/Assessor)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [ReadMe Template](https://github.com/othneildrew/Best-README-Template)
* [Img Shields](https://shields.io)
* [Vercel](https://vercel.com/)
* [Heroku](https://heroku.com/)
* [Bulma](http://bulma.io/)
* [Font Awesome](https://fontawesome.com)
* [Pyresparser](https://github.com/OmkarPathak/pyresparser)