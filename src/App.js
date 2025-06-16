import './App.css';

function App() {
  return (
    <div className="profile-container">
      <div className="profile-card">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="profile-img"
        />
        <h1 className="profile-name">Nicky</h1>
        <p className="profile-role">Engineering Student | CSE | Explorer</p>
        <p className="profile-bio">
          Passionate about building systems that touch lives. Working on ONAC—my
          solo, futuristic tech venture.
        </p>
        <div className="social-links">
          <a href="https://github.com/mizan" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="mailto:youremail@example.com">Email</a>
          <a href="https://linkedin.com/in/mizansutar" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
