import { useState } from "react"
import "./App.css"
function App() {
  const [page, setPage] = useState("Dashboard")

  return (
    <div className="app">

      {/* Sidebar */}
      <aside className="sidebar">
        <h2>SDG Console</h2>

        <nav>
          <button onClick={() => setPage("Dashboard")}>
            Dashboard
          </button>

          <button onClick={() => setPage("Game History")}>
            Game History
          </button>

          <button onClick={() => setPage("SDG Progress")}>
            SDG Progress
          </button>

          <button onClick={() => setPage("Leaderboard")}>
            Leaderboard
          </button>
          <button onClick={() => setPage("Decision Result")}>
            Decision Result
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main">

        {page === "Dashboard" && (
          <>
            <header>
              <p className="eyebrow">AI-POWERED DECISION CONSOLE</p>
              <h1>Welcome, player! 👋</h1>
              <p className="subtitle">
                Explore how your decisions affect sustainable development goals.
              </p>
            </header>

            <section className="stats">

              <div className="card">
                <p>Total Score</p>
                <h2>820</h2>
              </div>

              <div className="card">
                <p>Games Played</p>
                <h2>8</h2>
              </div>

              <div className="card">
                <p>Average Score</p>
                <h2>82</h2>
              </div>

            </section>

            <section>
              <h2 className="section-title">SDG Progress</h2>

              <div className="sdg-grid">

                <div className="card sdg-card">
                  <span>SDG 3</span>
                  <h3>Good Health & Well-being</h3>

                  <div className="progress">
                    <div
                      className="progress-fill"
                      style={{ width: "75%" }}
                    ></div>
                  </div>

                  <strong>75%</strong>
                </div>

                <div className="card sdg-card">
                  <span>SDG 4</span>
                  <h3>Quality Education</h3>

                  <div className="progress">
                    <div
                      className="progress-fill"
                      style={{ width: "80%" }}
                    ></div>
                  </div>

                  <strong>80%</strong>
                </div>

                <div className="card sdg-card">
                  <span>SDG 13</span>
                  <h3>Climate Action</h3>

                  <div className="progress">
                    <div
                      className="progress-fill"
                      style={{ width: "90%" }}
                    ></div>
                  </div>

                  <strong>90%</strong>
                </div>

              </div>
            </section>
          </>
        )}

        {page === "Game History" && (
          <>
            <header>
              <p className="eyebrow">YOUR DECISIONS</p>
              <h1>Game History</h1>
              <p className="subtitle">
                Review your previous sustainability decisions.
              </p>
            </header>

            <div className="card history">

              <div className="history-row">
                <span>🌊 Flood Crisis</span>
                <strong>82</strong>
              </div>

              <div className="history-row">
                <span>💧 Drought</span>
                <strong>76</strong>
              </div>

              <div className="history-row">
                <span>🏭 Economic Crisis</span>
                <strong>91</strong>
              </div>

            </div>
          </>
        )}

        {page === "SDG Progress" && (
          <>
            <header>
              <p className="eyebrow">SUSTAINABILITY IMPACT</p>
              <h1>SDG Progress</h1>
              <p className="subtitle">
                See how your decisions have affected each SDG.
              </p>
            </header>

            <div className="sdg-grid">

              <div className="card sdg-card">
                <span>SDG 3</span>
                <h3>Good Health & Well-being</h3>
                <div className="progress">
                  <div
                    className="progress-fill"
                    style={{ width: "75%" }}
                  ></div>
                </div>
                <strong>75%</strong>
              </div>

              <div className="card sdg-card">
                <span>SDG 4</span>
                <h3>Quality Education</h3>
                <div className="progress">
                  <div
                    className="progress-fill"
                    style={{ width: "80%" }}
                  ></div>
                </div>
                <strong>80%</strong>
              </div>

              <div className="card sdg-card">
                <span>SDG 13</span>
                <h3>Climate Action</h3>
                <div className="progress">
                  <div
                    className="progress-fill"
                    style={{ width: "90%" }}
                  ></div>
                </div>
                <strong>90%</strong>
              </div>

            </div>
          </>
        )}

        {page === "Leaderboard" && (
          <>
            <header>
              <p className="eyebrow">COMPETE & LEARN</p>
              <h1>Leaderboard</h1>
              <p className="subtitle">
                Compare sustainability scores between players.
              </p>
            </header>

            <div className="card history">

              <div className="history-row">
                <span>🥇 Player A</span>
                <strong>920</strong>
              </div>

              <div className="history-row">
                <span>🥈 Player B</span>
                <strong>895</strong>
              </div>

              <div className="history-row">
                <span>🥉 Player C</span>
                <strong>870</strong>
              </div>

              <div className="history-row">
                <span>Player D</span>
                <strong>850</strong>
              </div>

            </div>
          </>
        )}
        {page === "Decision Result" && (
  <>
    <header>
      <p className="eyebrow">DECISION ANALYSIS</p>
      <h1>Flood Crisis</h1>
      <p className="subtitle">
        Here's how your decision affected sustainable development.
      </p>
    </header>

    {/* Overall Score */}
    <div className="card result-score">
      <p>Overall Decision Score</p>
      <h2>82<span>/100</span></h2>
    </div>

    {/* Budget Allocation */}
    <h2 className="section-title">Your Allocation</h2>

    <div className="stats">

      <div className="card">
        <p>Healthcare</p>
        <h2>₹30 Cr</h2>
      </div>

      <div className="card">
        <p>Education</p>
        <h2>₹20 Cr</h2>
      </div>

      <div className="card">
        <p>Environment</p>
        <h2>₹50 Cr</h2>
      </div>

    </div>

    {/* SDG Impact */}
    <h2 className="section-title">SDG Impact</h2>

    <div className="sdg-grid">

      <div className="card sdg-card">
        <span>SDG 3</span>
        <h3>Good Health & Well-being</h3>

        <div className="progress">
          <div
            className="progress-fill"
            style={{ width: "75%" }}
          ></div>
        </div>

        <strong>75</strong>
      </div>

      <div className="card sdg-card">
        <span>SDG 4</span>
        <h3>Quality Education</h3>

        <div className="progress">
          <div
            className="progress-fill"
            style={{ width: "80%" }}
          ></div>
        </div>

        <strong>80</strong>
      </div>

      <div className="card sdg-card">
        <span>SDG 13</span>
        <h3>Climate Action</h3>

        <div className="progress">
          <div
            className="progress-fill"
            style={{ width: "90%" }}
          ></div>
        </div>

        <strong>90</strong>
      </div>

    </div>

    {/* AI Feedback */}
    <h2 className="section-title">🤖 AI Decision Analysis</h2>

    <div className="card ai-feedback">
      <h3>Good environmental planning.</h3>

      <p>
        Your allocation gives strong priority to environmental
        protection, which helps improve climate resilience during
        a flood crisis.
      </p>

      <p>
        Increasing healthcare investment could further improve
        immediate disaster response and community well-being.
      </p>
    </div>
  </>
)}

      </main>
    </div>
  )
}

export default App