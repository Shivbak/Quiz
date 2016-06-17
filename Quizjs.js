function quiz(text,answer1,answer2,answer3,answer4,correctans)
{
    this.text = text;
    this.answer1 = answer1;
    this.answer2 = answer2;
    this.answer3 = answer3;
    this.answer4 = answer4;
    this.correctans = correctans;
    
}
 // objects for the quiz function

var question1 = new quiz("What is 20% of 40?","Eight","Nine","Seven","Ten","A");

var question2 = new quiz("How much is three cubed?","9","27","16","21","B");

var question3 = new quiz("How many consonants are there in the English alphabet?","26","28","21","5","C");

var Question = [];

// pushing value in array

Question.push(question1);
Question.push(question2);
Question.push(question3);

// array of id of html file <p> and <list>
var tagtext = ["q1","q2","q3"];
var taglist = ["list1","list2","list3"];

// displaying question and answer on DOM 

for(var i =0 ;i<Question.length;i++)
    {
        document.getElementById(tagtext[i]).innerHTML = Question[i].text;
        document.getElementById(taglist[i]).innerHTML = '<li>' + Question[i].answer1 + '</li>'+
                                                        '<li>' + Question[i].answer2 + '</li>'+
                                                        '<li>' + Question[i].answer3 + '</li>'+
                                                        '<li>' + Question[i].answer4 + '</li>';
    }

// adding event to finish quiz button

var event = document.getElementById("finish");
    event.addEventListener('click',finishquiz,false);

// finish quiz function to generate answer

function finishquiz()
{
    var A1 = document.getElementById("ans1").value;
    var A2 = document.getElementById("ans2").value;
    var A3 = document.getElementById("ans3").value;
    
    var y=0;
    
    var tagresult = [];
    tagresult.push(A1);
    tagresult.push(A2);
    tagresult.push(A3);
    
        for(var i =0; i<tagresult.length ; i++)
        {
        if(tagresult[i] === Question[i].correctans)
            {
            y++;
            }
        }
    document.getElementById("result").innerHTML = "Your Score is : " + y;
    
}