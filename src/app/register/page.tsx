export default function RegisterPage() {
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
          Create Account
        </h1>

        <form>
          <input
            placeholder="Full Name"
            style={{
              width: "100%",
              padding: "14px",
              marginBottom: "15px",
              borderRadius: "8px",
              border: "none",
            }}
          />

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
              background: "#22c55e",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}
