import React, { useState, useEffect } from "react";

// All 4 parts of the test (data simplified for now)
const examSections = [
    {
      title: "Reading Correspondence",
      timeLimit: 600,
      questions: [
        {
          passage: `Dear Ms. Patel,
    
    Thank you for your continued support with the volunteer program. As part of our yearly assessment, we are reviewing the participation rates and feedback from both volunteers and organizers. Your input is extremely valuable in shaping next year’s agenda.
    
    Please complete the attached form by November 15th. Should you have any questions, feel free to contact me directly.
    
    Best regards,
    Michael Grant`,
          question: "What is the main purpose of this email?",
          options: [
            "To confirm a meeting date with Ms. Patel",
            "To request feedback about a program",
            "To offer Ms. Patel a new position",
            "To review an application from Ms. Patel"
          ],
          answer: 1
        },
        {
          passage: "(Same email as above)",
          question: "What can be inferred about Ms. Patel?",
          options: [
            "She is applying for a paid position",
            "She is organizing the volunteer program",
            "She has volunteered in the past",
            "She submitted the form late last year"
          ],
          answer: 2
        },
        {
          passage: "(Same email as above)",
          question: "What is Ms. Patel expected to do next?",
          options: [
            "Host a review meeting",
            "Submit feedback through a form",
            "Call Mr. Grant by phone",
            "Cancel her participation"
          ],
          answer: 1
        },
        {
          passage: "(Same email as above)",
          question: "What tone does the sender use?",
          options: [
            "Formal and appreciative",
            "Apologetic and uncertain",
            "Casual and unprofessional",
            "Frustrated and dismissive"
          ],
          answer: 0
        },
        {
          passage: "(Same email as above)",
          question: "By when does Ms. Patel need to respond?",
          options: [
            "November 10th",
            "Within a week",
            "November 15th",
            "As soon as possible"
          ],
          answer: 2
        }
      ]
},    
{
  title: "Reading to Apply a Diagram",
  timeLimit: 600,
  questions: [
    {
      passage: "Use the following weekly gym class schedule to answer:\n\nZumba - 9:00 AM (Room A1, Laura)\nSpin - 10:30 AM (Room B2, Mark)\nHIIT - 12:00 PM (Room A1, Steve)\nYoga - 2:00 PM (Room C3, Priya)\nPilates - 4:00 PM (Room B2, Rachel)",
      question: "Who teaches the earliest class of the day?",
      options: ["Laura", "Mark", "Priya", "Rachel"],
      answer: 0
    },
    {
      passage: "(Same schedule as above)",
      question: "Which two classes are held in the same room?",
      options: ["Yoga and Spin", "HIIT and Pilates", "Zumba and HIIT", "Spin and Zumba"],
      answer: 2
    },
    {
      passage: "(Same schedule as above)",
      question: "Which instructor teaches in Room B2?",
      options: ["Rachel and Mark", "Laura and Steve", "Rachel and Priya", "Steve and Priya"],
      answer: 0
    },
    {
      passage: "(Same schedule as above)",
      question: "What time is the yoga class scheduled?",
      options: ["12:00 PM", "4:00 PM", "10:30 AM", "2:00 PM"],
      answer: 3
    },
    {
      passage: "(Same schedule as above)",
      question: "Who teaches the final class of the day?",
      options: ["Steve", "Priya", "Rachel", "Laura"],
      answer: 2
    }
  ]
},
{
  title: "Reading for Information",
  timeLimit: 600,
  questions: [
    {
      passage: `Recent studies by environmental scientists have revealed that urban forests, or clusters of trees planted within city limits, can significantly reduce air pollution. Trees absorb carbon dioxide and other harmful particles, improving air quality and cooling surrounding areas. Cities with higher tree coverage also report reduced noise levels, increased biodiversity, and improved mental well-being among residents.`,
      question: "According to the passage, what is one main benefit of urban trees?",
      options: [
        "Increased parking availability",
        "Improved air quality",
        "Higher electricity bills",
        "More commercial buildings"
      ],
      answer: 1
    },
    {
      passage: "(Same article as above)",
      question: "Which of the following is NOT mentioned as a benefit of urban forests?",
      options: [
        "Noise reduction",
        "Improved mental health",
        "Better access to transportation",
        "Increased biodiversity"
      ],
      answer: 2
    },
    {
      passage: "(Same article as above)",
      question: "What is the relationship between tree coverage and resident well-being?",
      options: [
        "Higher tree coverage lowers property value",
        "Trees improve physical fitness",
        "More trees are linked to better mental health",
        "There is no measurable impact"
      ],
      answer: 2
    },
    {
      passage: "(Same article as above)",
      question: "What role do urban forests play in air pollution?",
      options: [
        "They block wind and cause dust storms",
        "They absorb harmful particles and gases",
        "They release toxins into the air",
        "They reduce sunlight exposure"
      ],
      answer: 1
    },
    {
      passage: "(Same article as above)",
      question: "Which statement best summarizes the article?",
      options: [
        "Urban forests are an environmental hazard",
        "Tree planting in cities has multiple benefits",
        "City governments should cut down more trees",
        "Urban areas have too much greenery"
      ],
      answer: 1
    }
  ]
},
{
  title: "Reading for Viewpoints",
  timeLimit: 600,
  questions: [
    {
      passage: `Jessica: I think students should be required to wear school uniforms. It reduces distractions and makes everyone feel equal.\nTom: I disagree. Uniforms limit students’ ability to express themselves. Clothing is a form of individuality.`,
      question: "How do Jessica and Tom differ in their views?",
      options: [
        "Jessica supports individuality, Tom opposes it",
        "Jessica wants uniforms, Tom prefers personal choice",
        "Both agree uniforms are stylish",
        "Jessica dislikes rules, Tom loves them"
      ],
      answer: 1
    },
    {
      passage: "(Same conversation)",
      question: "What is Tom's main concern?",
      options: [
        "Uniform cost",
        "Student expression",
        "Late attendance",
        "Classroom noise"
      ],
      answer: 1
    },
    {
      passage: "(Same conversation)",
      question: "What tone best describes Jessica’s viewpoint?",
      options: [
        "Humorous",
        "Neutral",
        "Supportive of equality",
        "Uninterested"
      ],
      answer: 2
    },
    {
      passage: "(Same conversation)",
      question: "Which of the following would Jessica most likely agree with?",
      options: [
        "Uniforms improve school discipline",
        "Uniforms make students look boring",
        "School clothes should reflect fashion",
        "Students should design their own attire"
      ],
      answer: 0
    },
    {
      passage: "(Same conversation)",
      question: "What could be a compromise between their views?",
      options: [
        "No dress code at all",
        "Only teachers wear uniforms",
        "Allow accessories with uniforms",
        "Cancel classes about clothing"
      ],
      answer: 2
    }
  ]
}
];
function Timer({ timeLimit, onTimeUp }) {
  const [timeLeft, setTimeLeft] = useState(timeLimit);

  useEffect(() => {
    if (timeLeft === 0) {
      onTimeUp();
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft, onTimeUp]);

  const format = sec => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return <h3>Time Left: {format(timeLeft)}</h3>;
}
export default function App() {
  const [sectionIndex, setSectionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  const current = examSections[sectionIndex];

  const handleSelect = (qIdx, optIdx) => {
    setAnswers({ ...answers, [`${sectionIndex}-${qIdx}`]: optIdx });
  };
  const handleNextSection = () => {
    if (sectionIndex < examSections.length - 1) {
      setSectionIndex(sectionIndex + 1);
    }
  };  
  const handleTimeUp = () => {
    if (sectionIndex < examSections.length - 1) {
      setSectionIndex(sectionIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  if (showResult) {
    let totalCorrect = 0;
    const results = examSections.map((sec, sIdx) => {
      let sectionCorrect = 0;
      sec.questions.forEach((q, qIdx) => {
        if (answers[`${sIdx}-${qIdx}`] === q.answer) sectionCorrect++;
      });
      totalCorrect += sectionCorrect;
      return {
        title: sec.title,
        score: `${sectionCorrect} / ${sec.questions.length}`
      };
    });
  
    return (
      <div style={{ padding: "2rem", fontFamily: "Arial" }}>
        <h2>✅ Exam Complete</h2>
        <h3>Total Score: {totalCorrect} / 20</h3>
        <ul>
          {results.map((res, i) => (
            <li key={i}>
              <strong>{res.title}</strong>: {res.score}
            </li>
          ))}
        </ul>
      </div>
    );
  }  
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h2>{current.title}</h2>
      <Timer timeLimit={current.timeLimit} onTimeUp={handleTimeUp} />
      {current.questions.map((q, qIdx) => (
        <div key={qIdx} style={{ marginBottom: "2rem" }}>
          <p><strong>Passage:</strong><br />{q.passage}</p>
          <p><strong>{q.question}</strong></p>
          {q.options.map((opt, oIdx) => (
            <div
              key={oIdx}
              onClick={() => handleSelect(qIdx, oIdx)}
              style={{
                border: answers[`${sectionIndex}-${qIdx}`] === oIdx ? "2px solid blue" : "1px solid #ccc",
                padding: "0.5rem",
                marginBottom: "0.3rem",
                cursor: "pointer"
              }}
            >
              {opt}
            </div>
          ))}
        </div>
      ))}
      {sectionIndex < examSections.length - 1 && !showResult && (
  <div style={{ textAlign: "center", marginTop: "2rem" }}>
    <button
      onClick={handleNextSection}
      style={{
        padding: "0.6rem 1.5rem",
        background: "#007bff",
        color: "white",
        fontSize: "1rem",
        borderRadius: "8px",
        border: "none",
        cursor: "pointer"
      }}
    >
      Next Section ➤
    </button>
  </div>
)}
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
          {sectionIndex === examSections.length - 1 && (
  <button
    onClick={() => setShowResult(true)}
    style={{
      marginTop: "1rem",
      padding: "0.6rem 1.5rem",
      background: "#28a745",
      color: "white",
      fontSize: "1rem",
      borderRadius: "8px",
      border: "none",
      cursor: "pointer"
    }}
  >
    Finish Exam ✅
  </button>
)}
    </div>
    </div>
  );
}
