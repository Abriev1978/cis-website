export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© {new Date().getFullYear()} Cyber Infrastructure Solutions</p>
      <p>Certified • Secure • Enterprise-Ready</p>
    </footer>
  );
}

const styles = {
  footer: {
    padding: "24px",
    textAlign: "center",
    background: "#020617",
    color: "#94a3b8",
    marginTop: "40px"
  }
};
