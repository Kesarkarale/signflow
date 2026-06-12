import Link from "next/link";

export default function HomePage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#0f172a 0%,#1e293b 50%,#111827 100%)",
        color: "white",
      }}
    >
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "25px 60px",
          alignItems: "center",
        }}
      >
        <h2 style={{ fontSize: "32px", fontWeight: "bold" }}>
          SignFlow
        </h2>

        <div style={{ display: "flex", gap: "15px" }}>
          <Link
            href="/login"
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            Login
          </Link>

          <Link
            href="/register"
            style={{
              background: "#2563eb",
              padding: "10px 20px",
              borderRadius: "8px",
              color: "white",
              textDecoration: "none",
            }}
          >
            Get Started
          </Link>
        </div>
      </nav>

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "100px 20px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "72px",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          Digital Document
          <br />
          Signing Platform
        </h1>

        <p
          style={{
            fontSize: "22px",
            color: "#cbd5e1",
            maxWidth: "700px",
            margin: "0 auto",
          }}
        >
          Upload PDFs, place signatures, track activity,
          and manage documents securely from anywhere.
        </p>

        <div
          style={{
            marginTop: "40px",
            display: "flex",
            gap: "20px",
            justifyContent: "center",
          }}
        >
          <Link
            href="/register"
            style={{
              background: "#2563eb",
              color: "white",
              padding: "16px 32px",
              borderRadius: "10px",
              textDecoration: "none",
            }}
          >
            Start Free
          </Link>

          <Link
            href="/login"
            style={{
              border: "1px solid #475569",
              color: "white",
              padding: "16px 32px",
              borderRadius: "10px",
              textDecoration: "none",
            }}
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
