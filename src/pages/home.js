import '../styles/home.css'

const Home = () => {
  return (
    <div className="container d-flex flex-column home-page">
      <img className="align-self-center m-3" src="/images/quizzify-name.svg" alt="Quizzify-AI" />
      <p className="text-center text-lg">Quizzify-AI the number one stop for custom quizzes.</p>
      <img className="align-self-center" src="/images/QAI-Logo.png" alt="Quizzify-AI Logo" />
    </div>
  )
}

export default Home;