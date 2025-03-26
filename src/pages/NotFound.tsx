
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-aiklar-light">
      <div className="text-center max-w-md px-6 py-12 bg-white shadow-lg rounded-2xl">
        <h1 className="text-6xl font-bold text-aiklar-dark mb-4">404</h1>
        <p className="text-xl text-aiklar-dark/70 mb-8">Siden blev ikke fundet</p>
        <div className="w-16 h-1 bg-aiklar-green mx-auto mb-8"></div>
        <p className="text-aiklar-dark/80 mb-8">
          Den side, du leder efter, findes ikke eller er blevet flyttet.
        </p>
        <a 
          href="/" 
          className="inline-block bg-aiklar-blue hover:bg-aiklar-blue/90 text-white py-3 px-8 rounded-md transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Tilbage til forsiden
        </a>
      </div>
    </div>
  );
};

export default NotFound;
