import Link from "next/link";

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
      }}
    >
      <div style={{ textAlign: "center", maxWidth: "700px" }}>
        <h1
          style={{
            fontSize: "64px",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          SignFlow
        </h1>

        <p
          style={{
            fontSize: "20px",
            color: "#94a3b8",
            marginBottom: "30px",
          }}
        >
          Secure Document Signing Platform
        </p>

        <div
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
          }}
        >
          <Link
            href="/login"
            style={{
              background: "#2563eb",
              padding: "12px 24px",
              borderRadius: "8px",
              color: "white",
              textDecoration: "none",
            }}
          >
            Login
          </Link>

          <Link
            href="/register"
            style={{
              background: "#22c55e",
              padding: "12px 24px",
              borderRadius: "8px",
              color: "white",
              textDecoration: "none",
            }}
          >
            Register
          </Link>
        </div>
      </div>
    </main>
  );
}
