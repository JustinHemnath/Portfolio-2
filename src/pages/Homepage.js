import Projectslist from '../components/Projectslist';

const Homepage = () => {
  return (
    <div className="h-screen bg-bgclr text-txtclr">
      <div className="h-36 bg-deep-purple-500"></div>
      <Projectslist />
    </div>
  );
};

export default Homepage;
