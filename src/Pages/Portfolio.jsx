import { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import './styles.css'; // Import custom CSS for additional styling

const Portfolio = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/moayed10111/repos');
        setRepos(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading repositories: {error.message}</p>;

  return (
    <div className="container-fluid mt-5"> 
      <h1 className="text-center mb-4 text-gray font-weight-bold">My Portfolio</h1>
      <p className="text-center mb-4 text-secondary">Here are some of my recent works.</p>
      <div className="card-group">
        {repos.map((repo) => (
          <div key={repo.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{repo.name}</h5>
                <p className="card-text">{repo.description}</p>
                <a href={repo.html_url} className="btn btn-green btn-sm" target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;