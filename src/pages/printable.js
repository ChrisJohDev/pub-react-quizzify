import "../styles/printable.css";

const Printable = () => {
  return (
    <div className="container d-flex flex-column home-page flex-fill printable-page">
      
          <a href="/data/quiz.pdf" className="text-end">Download</a>
          <iframe title="Quiz"
            src="/data/quiz.pdf"
            className="embed-responsive-item"
            height="1500px"
          ></iframe>
        </div>
  );
};

export default Printable;
