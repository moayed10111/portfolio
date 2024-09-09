import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './styles.css'; // Import custom CSS for additional styling

const About = () => {
  return (
    <div className="container-fluid vh-75 d-flex align-items-center justify-content-center p-0 mt-5">
      <div className="card w-75 h-100 shadow-lg rounded border border-3 bg-light">
        <div className="card-header bg-green text-white">
          <h1 className="card-title mb-0 text-gray">About Me</h1>
        </div>
        <div className="card-body p-4">
          <p className="card-text">
            I&apos;m a junior full-stack JavaScript developer with a passion for building web applications. I&apos;m still learning and expanding my skills in both front-end and back-end development. I enjoy working with technologies like HTML, CSS, JavaScript, and Node.js, and I&apos;m always eager to explore new tools and frameworks. As I continue to grow, I&apos;m focused on developing clean, efficient code and creating user-friendly experiences. I&apos;m excited about learning new technologies and contributing to projects that challenge me and help me improve as a developer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;