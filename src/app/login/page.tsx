export default function LoginPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* Left Side */}
      <div
        style={{
          background:
            "linear-gradient(135deg,#2563eb 0%,#1d4ed8 50%,#0f172a 100%)",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        <h1
          style={{
            fontSize: "60px",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          SignFlow
        </h1>

        <p
          style={{
            fontSize: "22px",
            lineHeight: "1.8",
            maxWidth: "500px",
            opacity: 0.9,
          }}
        >
          Securely upload, sign and manage documents online.
          Built for freelancers, businesses and teams.
        </p>

        <div style={{ marginTop: "50px" }}>
          <div
            style={{
              background: "rgba(255,255,255,0.1)",
              padding: "20px",
              borderRadius: "12px",
              marginBottom: "15px",
            }}
          >
            ✓ Legally Binding E-Signatures
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.1)",
              padding: "20px",
              borderRadius: "12px",
              marginBottom: "15px",
            }}
          >
            ✓ Audit Trail & Tracking
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.1)",
              padding: "20px",
              borderRadius: "12px",
            }}
          >
            ✓ Secure Cloud Storage
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div
        style={{
          background: "#f8fafc",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "420px",
            background: "white",
            padding: "40px",
            borderRadius: "20px",
            boxShadow: "0 20px 50px rgba(0,0,0,0.1)",
          }}
        >
          <h2
            style={{
              fontSize: "34px",
              fontWeight: "bold",
              marginBottom: "10px",
            }}
          >
            Welcome Back 👋
          </h2>

          <p
            style={{
              color: "#64748b",
              marginBottom: "30px",
            }}
          >
            Login to continue managing your documents.
          </p>

          <form>
            <div style={{ marginBottom: "18px" }}>
              <label>Email</label>

              <input
                type="email"
                placeholder="you@example.com"
                style={{
                  width: "100%",
                  padding: "14px",
                  marginTop: "8px",
                  border: "1px solid #cbd5e1",
                  borderRadius: "10px",
                }}
              />
            </div>

            <div style={{ marginBottom: "18px" }}>
              <label>Password</label>

              <input
                type="password"
                placeholder="••••••••"
                style={{
                  width: "100%",
                  padding: "14px",
                  marginTop: "8px",
                  border: "1px solid #cbd5e1",
                  borderRadius: "10px",
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "14px",
                border: "none",
                borderRadius: "10px",
                background: "#2563eb",
                color: "white",
                fontWeight: "bold",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Login
            </button>
          </form>

          <p
            style={{
              textAlign: "center",
              marginTop: "20px",
              color: "#64748b",
            }}
          >
            Don't have an account?{" "}
            <a
              href="/register"
              style={{
                color: "#2563eb",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
