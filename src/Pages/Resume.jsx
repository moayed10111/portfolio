import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'; // Ensure you import your custom CSS

const Resume = () => {
  return (
    <div className="container-fluid mt-5"> 
      <h1 className="text-left mb-4 text-gray">My Resume</h1>
      <p className="text-left mb-4">
        <a href="/resume.pdf" download className="btn btn-green">Download Resume</a>
      </p>
    
      <section>
        <h2 className="text-dark">Skills</h2>
        
        <div className='mt-5'>
          <h5>Front-End Skills</h5>
          <ol className="skills-list">
            <li>JavaScript, HTML, CSS</li>
            <li>jQuery, Bootstrap</li>
            <li>React, Bootstrap</li>
            <li>Responsive Design</li>
            <li>Cross-Browser Compatibility</li>
          </ol>
        </div>
        
        <div className="mt-4">
          <h5>Back-End Skills</h5>
          <ol className="skills-list">
            <li>Node.js, Express</li>
            <li>RESTful APIs</li>
            <li>Database Management (e.g., MongoDB, SQL)</li>
            <li>Authentication and Authorization</li>
          </ol>
        </div>
        
      </section>
    </div>
  );
};

export default Resume;