export default function RegisterPage() {
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
            "linear-gradient(135deg,#16a34a 0%,#15803d 50%,#0f172a 100%)",
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
          Join SignFlow
        </h1>

        <p
          style={{
            fontSize: "22px",
            lineHeight: "1.8",
            maxWidth: "500px",
            opacity: 0.9,
          }}
        >
          Create your account and start signing documents
          securely from anywhere in the world.
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
            🚀 Unlimited Document Uploads
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.1)",
              padding: "20px",
              borderRadius: "12px",
              marginBottom: "15px",
            }}
          >
            🔒 Secure Cloud Storage
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.1)",
              padding: "20px",
              borderRadius: "12px",
            }}
          >
            📄 Digital Signatures & Audit Logs
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
            maxWidth: "450px",
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
            Create Account ✨
          </h2>

          <p
            style={{
              color: "#64748b",
              marginBottom: "30px",
            }}
          >
            Start your digital signing journey today.
          </p>

          <form>
            <div style={{ marginBottom: "18px" }}>
              <label>Full Name</label>

              <input
                type="text"
                placeholder="John Doe"
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
                placeholder="Minimum 8 characters"
                style={{
                  width: "100%",
                  padding: "14px",
                  marginTop: "8px",
                  border: "1px solid #cbd5e1",
                  borderRadius: "10px",
                }}
              />
            </div>

            <div style={{ marginBottom: "25px" }}>
              <label>Confirm Password</label>

              <input
                type="password"
                placeholder="Re-enter password"
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
                background: "#16a34a",
                color: "white",
                fontWeight: "bold",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Create Account
            </button>
          </form>

          <p
            style={{
              textAlign: "center",
              marginTop: "20px",
              color: "#64748b",
            }}
          >
            Already have an account?{" "}
            <a
              href="/login"
              style={{
                color: "#16a34a",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
