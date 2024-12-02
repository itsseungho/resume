function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Seung Ho Cho</h1>
        <h2>Macroeconomic Strategist</h2>
      </header>

      <section className="section">
        <h2>Experience</h2>
        <div>
          <h3>Investment Analyst</h3>
          <h4>Petroliam Nasional Berhad (PETRONAS) </h4>
          <p>Responsible for analyzing investment opportunities and providing recommendations to management.</p>
        </div>
      </section>

      <section className="section">
        <h2>Education</h2>
        <div>
          <h3>Master of Computing</h3>
          <h4>Australian National University</h4>
          <p>Graduated with Distinction</p>
        </div>
        <br></br>
        <div>
          <h3>Master of Financial Economics</h3>
          <h4>Australian National University</h4>
          <p>Graduated with Distinction</p>
        </div>
        <br></br>
        <div>
          <h3>Bachelor of Economics/Bachelor of Arts</h3>
          <h4>University of Queensland</h4>
          <p>Graduated with First Class Honours</p>
        </div>
      </section>

      <section className="section">
        <h2>Skills</h2>
        <ul>
          <li>Financial analysis</li>
          <li>Economic forecasting</li>
          <li>Macroeconomic strategy</li>
          <li>Data visualization</li>
        </ul>
      </section>

      <footer className="footer">
        <p>Contact: seungho.cho@example.com</p>
      </footer>
    </div>
  );
}

export default App;