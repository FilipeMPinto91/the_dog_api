import axios from "axios";

const Logout = ({ onLogout }) => {
  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:3001//logout');
      onLogout();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <div>
      <h2>Welcome, User</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;