import "../styles/result.css";
import { useLocation } from "react-router-dom";

const Result = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const subject =
    params.get("subject") === "" ? "General Knowledge" : params.get("subject");
  const amount = params.get("amount");
  const numberLimited = "Due to inflation you will only get 10 questions."

  return (
    <div className="container d-flex flex-column result-page">
      <h1 className="text-center">Your {amount} AI Quiz questions on the subject of {subject}</h1>
      {
        amount > 10 ? <h3 className="text-center info-text">{numberLimited}</h3> : ""
      }
      <div className="align-self-center list-wrapper">
        <div className="questions">
          <h2>Questions</h2>
          <ol>
            <li>Which planet is known as the "Red Planet"?</li>
            <li>
              Who was the first president of the United States of America?
            </li>
            <li>Who wrote the famous novel "To Kill a Mockingbird"?</li>
            <li>What is the capital of Canada?</li>
            <li>Which country is the largest by area?</li>
            <li>
              Which famous composer wrote the opera "The Barber of Seville"?
            </li>
            <li>What is the largest animal on Earth?</li>
            <li>
              In which country is the world's tallest building, the Burj
              Khalifa, located?
            </li>
            <li>Which African country is known as the "Pearl of Africa"?</li>
            <li>
              Which chemical element has the symbol "Fe" in the periodic table?
            </li>
          </ol>
        </div>
        <div className="answers">
          <ol>
            <h2>Answers</h2>
            <li>Mars</li>
            <li>George Washington</li>
            <li>Harper Lee</li>
            <li>Ottawa</li>
            <li>Russia</li>
            <li>Gioachino Rossini</li>
            <li>Blue Whale</li>
            <li>United Arab Emirates</li>
            <li>Uganda</li>
            <li>Iron</li>
          </ol>
        </div>
        <a href="/printable" className="btn btn-primary">Print</a>
      </div>
    </div>
  );
};

export default Result;
