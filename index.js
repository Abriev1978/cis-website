import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <main style={styles.main}>
        <h1>Fast. Reliable. Professional IT Support</h1>
        <p>
          Cyber Infrastructure Solutions delivers secure, scalable IT
          infrastructure and cloud solutions across South Africa.
        </p>
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