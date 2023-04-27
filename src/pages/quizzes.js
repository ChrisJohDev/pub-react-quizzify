import '../styles/quizzes.css'

const Quizzes = () => {
  return (
    <div className="container d-flex flex-column quiz-page flex-fill">
      <h1 className="text-center">Create your quiz</h1>
      <div className="col-md-6 offset-md-3 d-flex flex-column info">
        <form className="align-self-center" action="/result">
          <label for="issue">Number of questions:</label>
          <select id="issue" name="amount">
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="25">25</option>
          </select>
          <label for="input-element">Subject:</label>
          <input type="text" id="input-element" name="subject" placeholder='Leave blank for general knowledge' /><br />
          {/* <label for="input-element1">Label Text:</label>
          <textarea  id="input-element1" name="input-name1" /> <br /> */}
          <a href="./result" ><input type="submit" value="Submit" /></a>
        </form>
      </div>
    </div>
  )
}

export default Quizzes;