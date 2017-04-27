/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var text;
text = "Hello there! Welcome to visit my home page! I wish you enjoy your visiting!";
document.getElementById("mypage").innerHTML=text;

var bachelor = {
    "university":"Turku University of Applied Sciences",
    "Location":"Finland",
    "Degree":"Bachelor's degree in Information Technology",
    "Date": "2009-2013"
    
};

document.getElementById("bachelor.university").innerHTML=bachelor.university;
document.getElementById("bachelor.Location").innerHTML=bachelor.Location;
document.getElementById("bachelor.Degree").innerHTML=bachelor.Degree;
document.getElementById("bachelor.Date").innerHTML=bachelor.Date;


var master ={
    "university":"University of Turku",
    "Location":"Finland",
    "Degree":"Master's degree in Information Security & Cryptography",
    "Date": "2014-2017"
};

document.getElementById("master.university").innerHTML=master.university;
document.getElementById("master.Location").innerHTML=master.Location;
document.getElementById("master.Degree").innerHTML=master.Degree;
document.getElementById("master.Date").innerHTML=master.Date;

var skills = {
    "Programming":["HTML5+CSS3", "JAVASCRIPT", "Python", "C", "JAVA"],
    "Database":["SQL"],
    "Network":["CCNA","CCNP","Firewall"],
    "Cryptography":["RSA","AES"],
    "Software":["MS office","Eclipse","Netbeans"],
    "Operating":["Windows","Linux"]
};

for(var i=0;i<skills.Programming.length;i++){
    if (i===skills.Programming.length-1){
        $("#pro").append(skills.Programming[i]+'.');
    }
    else{
        $("#pro").append(skills.Programming[i]+','+' ');
    }
};
for(var i=0;i<skills.Database.length;i++){
    if (i===skills.Database.length-1){
        $("#Data").append(skills.Database[i]+'.');
    }
    else{
        $("#Data").append(skills.Database[i]+','+' ');
    }
};
for(var i=0;i<skills.Network.length;i++){
    if (i===skills.Network.length-1){
        $("#Net").append(skills.Network[i]+'.');
    }
    else{
        $("#Net").append(skills.Network[i]+','+' ');
    }
};
for(var i=0;i<skills.Cryptography.length;i++){
    if (i===skills.Cryptography.length-1){
        $("#Crypt").append(skills.Cryptography[i]+'.');
    }
    else{
        $("#Crypt").append(skills.Cryptography[i]+','+' ');
    }
};
for(var i=0;i<skills.Software.length;i++){
    if (i===skills.Software.length-1){
        $("#Soft").append(skills.Software[i]+'.');
    }
    else{
        $("#Soft").append(skills.Software[i]+','+' ');
    }
};
for(var i=0;i<skills.Operating.length;i++){
    if (i===skills.Operating.length-1){
        $("#Oper").append(skills.Operating[i]+'.');
    }
    else{
        $("#Oper").append(skills.Operating[i]+','+' ');
    }
};

var projects = {
    "projects": [
    {
        "title":"IT Capstone Project",
        "dates":"09.2016-03.2017",
        "description":"Design a new information architecture and prototype for university website.",
        "images":["http://capstone.utu.fi/en-utufi_ia"]
    },
    {
        "title":"MANET Routing Protocol Analysis",
        "dates":"03.2016-06.2016",
        "description":"Network performance analysis of AODV and OLSR in MANET by using Ns-3 simulator."
    },
    {
        "title":"Finland@China website",
        "dates":"09.2015-12.2015",
        "description":"Project assistant and web designer in Finland@China project. Assisting developers to design a tourism website for a company which aims to attract Chinese tourists to come to Finland."
    }
    ]
};

var work = {
    "jobs": [{
            "employer": "Trivore Corp",
            "title": "Technical assistant",
            "location": "Turku, FI",
            "dates": "06.2013-09.2013",
            "description": ["Programming on mobile context project of MySync DM", "Technical documentation", "Production system testing"]
        },
        {
            "employer": "SHENZHEN QVOD TECHNOLOGY CO.,LTD",
            "title": "Game designer",
            "location": "ShenZhen, CN",
            "dates": "05.2012-09.2012",
            "description": ["Game designer", "developer assistant"]
        }
    ]

};

document.getElementById("workep").innerHTML=work.jobs[0].employer;

//protect the webpage  
var charEscape = function(_html) {
    var newHtml = _html;
    newHtml = _html.replace(/</g,"&lt;");
    newHtml = newHtml.replace(/>/g,"&gt;");
    return newHtml;
};