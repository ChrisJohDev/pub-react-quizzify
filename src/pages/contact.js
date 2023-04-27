import "../styles/contact.css";

const Contact = () => {
  return (
    <div className="container d-flex flex-column contact-page">
      <h1 className="text-center">Contact Us</h1>
      <div className="col-md-6 offset-md-3 d-flex flex-column info">
        <div className="align-self-center table-wrapper">
          <table>
            <tr>
              <td>Telephone:</td>
              <td>+46 - (0)31 123 45 67</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>support@quizzify-ai.com</td>
            </tr>
          </table>
        </div>
        <form className="align-self-center">
          <label for="issue">What is your issue?</label>
          <select id="issue" name="issue">
            <option value="bug">Bug</option>
            <option value="feature">Feature Request</option>
            <option value="other">Other</option>
          </select>
          <label for="input-element">Label Text:</label>
          <input type="text" id="input-element" name="input-name" />
          <label for="input-element1">Label Text:</label>
          <textarea  id="input-element1" name="input-name1" /> <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
