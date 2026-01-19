import Link from "next/link";

export default function NavBar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.brand}>Cyber Infrastructure Solutions</div>
      <div style={styles.links}>
        <Link href="/">Home</Link>
        <Link href="/services">Services</Link>
        <Link href="/about">About</Link>
        <Link href="/experience">Experience</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    padding: "16px 24px",
    background: "#020617",
    color: "#22d3ee",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  brand: {
    fontWeight: "bold"
  },
  links: {
    display: "flex",
    gap: "16px",
    color: "#e5e7eb"
  }
};
