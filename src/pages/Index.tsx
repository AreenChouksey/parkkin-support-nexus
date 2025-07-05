
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          Welcome to Parkkin
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Professional Parking Management System
        </p>
        <div className="space-x-4">
          <Link 
            to="/support" 
            className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            Super Admin Support
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
