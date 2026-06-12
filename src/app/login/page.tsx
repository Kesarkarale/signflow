export default function LoginPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "420px",
          background: "#1e293b",
          padding: "40px",
          borderRadius: "16px",
          color: "white",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "25px",
          }}
        >
          Welcome Back
        </h1>

        <form>
          <input
            placeholder="Email"
            type="email"
            style={{
              width: "100%",
              padding: "14px",
              marginBottom: "15px",
              borderRadius: "8px",
              border: "none",
            }}
          />

          <input
            placeholder="Password"
            type="password"
            style={{
              width: "100%",
              padding: "14px",
              marginBottom: "20px",
              borderRadius: "8px",
              border: "none",
            }}
          />

          <button
            style={{
              width: "100%",
              padding: "14px",
              background: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
