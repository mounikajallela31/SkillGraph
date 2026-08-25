import { useEffect, useState } from "react";
import "./App.css";

const API = "http://localhost:8080";

function App() {
  const [skills, setSkills] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const student = "Mounika";

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    try {
      setLoading(true);
      setError("");

      const skillsResponse = await fetch(
        `${API}/api/students/${student}/skills`
      );

      const recommendationsResponse = await fetch(
        `${API}/api/students/${student}/recommendations`
      );

      if (!skillsResponse.ok || !recommendationsResponse.ok) {
        throw new Error("Backend API error");
      }

      const skillsData = await skillsResponse.json();
      const recommendationsData = await recommendationsResponse.json();

      setSkills(skillsData);
      setRecommendations(recommendationsData);
    } catch (err) {
      setError(
        "Unable to connect to backend. Make sure Spring Boot is running on port 8080."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="app">
      <header className="header">
        <div>
          <h1>SkillGraph</h1>
          <p>Skill & Job Recommendation Dashboard</p>
        </div>

        <button className="refresh-btn" onClick={loadData}>
          Refresh
        </button>
      </header>

      <main className="container">
        <section className="welcome-card">
          <div>
            <p className="small-title">WELCOME BACK</p>
            <h2>{student}</h2>
            <p>
              Explore your skills and discover the jobs that match your
              profile.
            </p>
          </div>

          <div className="student-icon">👩‍💻</div>
        </section>

        {loading && (
          <div className="message">
            Loading your SkillGraph...
          </div>
        )}

        {error && (
          <div className="error">
            {error}
          </div>
        )}

        {!loading && !error && (
          <>
            <section className="stats">
              <div className="stat-card">
                <span>💡</span>
                <div>
                  <p>Your Skills</p>
                  <h3>{skills.length}</h3>
                </div>
              </div>

              <div className="stat-card">
                <span>💼</span>
                <div>
                  <p>Recommended Jobs</p>
                  <h3>{recommendations.length}</h3>
                </div>
              </div>

              <div className="stat-card">
                <span>🎯</span>
                <div>
                  <p>Best Match</p>
                  <h3>
                    {recommendations.length > 0
                      ? `${recommendations[0].matchPercentage}%`
                      : "0%"}
                  </h3>
                </div>
              </div>
            </section>

            <section className="section">
              <div className="section-heading">
                <div>
                  <h2>My Skills</h2>
                  <p>Skills currently available in your profile</p>
                </div>
              </div>

              <div className="skills">
                {skills.map((item, index) => (
                  <div className="skill" key={index}>
                    ✓ {item.skill}
                  </div>
                ))}
              </div>
            </section>

            <section className="section">
              <div className="section-heading">
                <div>
                  <h2>Job Recommendations</h2>
                  <p>Jobs ranked according to your skill match</p>
                </div>
              </div>

              <div className="jobs">
                {recommendations.map((job, index) => (
                  <div className="job-card" key={index}>
                    <div className="job-top">
                      <div>
                        <span className="job-number">
                          #{index + 1}
                        </span>
                        <h3>{job.job}</h3>
                      </div>

                      <div className="percentage">
                        {job.matchPercentage}%
                      </div>
                    </div>

                    <div className="progress">
                      <div
                        className="progress-bar"
                        style={{
                          width: `${job.matchPercentage}%`,
                        }}
                      ></div>
                    </div>

                    <div className="job-details">
                      <span>
                        Matched Skills: <b>{job.matchedSkills}</b>
                      </span>

                      <span>
                        Required Skills: <b>{job.totalSkills}</b>
                      </span>
                    </div>

                    <div
                      className={
                        job.matchPercentage >= 70
                          ? "match good"
                          : "match"
                      }
                    >
                      {job.matchPercentage >= 70
                        ? "Strong Match"
                        : "Good Match"}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}
      </main>

      <footer>
        <p>SkillGraph • Powered by Spring Boot & CognoDB</p>
      </footer>
    </div>
  );
}

export default App;