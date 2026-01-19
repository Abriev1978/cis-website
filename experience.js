import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Experience() {
  return (
    <>
      <NavBar />
      <main style={styles.main}>
        <h1>Experience & Leadership</h1>
        <p>
          Founder & Technical Director of Cyber Infrastructure Solutions since
          2013, with prior leadership roles managing multi-country IT operations
          across Africa.
        </p>
      </main>
      <Footer />
    </>
  );
}

const styles = {
  main: {
    padding: "80px 24px",
    maxWidth: "800px",
    margin: "0 auto"
  }
};
