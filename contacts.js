import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <NavBar />
      <main style={styles.main}>
        <h1>Contact Us</h1>
        <p>Email: abriev1978@gmail.com</p>
        <p>Location: Gauteng, South Africa</p>
      </main>
      <Footer />
    </>
  );
}

const styles = {
  main: {
    padding: "80px 24px",
    textAlign: "center"
  }
};
