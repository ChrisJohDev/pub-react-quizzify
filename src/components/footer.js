import '../styles/footer.css'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-auto align-self-center">
      <img src="/images/QAI-Logo.png" width="30px" height="30px" alt="Quizzify-AI logo" />
      <p>Copyright &copy; {year} - Quizzify is a product by Chris Johannesson</p>
    </footer>
  )
}

export default Footer;