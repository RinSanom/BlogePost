import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArticleCard } from "../../components/card/UserBlogCard"; // Replace with your actual ArticleCard import

const ProfilePage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const profile = location.state?.profile || {
    fullName: "Odin",
    designation: "I'm the author of ",
    position: "Data Science",
  };

  return (
    <main className="mt-16">
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="bg-white p-8 rounded-lg shadow-lg mx-auto ">
          <div className="flex items-center mb-6">
            <div className="flex flex-col items-center">
              <img
                className="w-32 h-32 rounded-full shadow-md object-cover"
                src=""
                alt="Profile"
              />
              <button
                onClick={() => navigate("/editprofile")}
                className="text-blue-600 mt-2 hover:underline"
              >
                Edit Profile
              </button>
            </div>
            <div className="ml-6">
              <h1 className="text-3xl font-semibold text-gray-800">
                {profile.fullName}
              </h1>
              <p className="text-lg text-gray-600">{profile.designation}</p>
              <p className="text-gray-700">Position: {profile.position}</p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Written by {profile.fullName}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Example Article Card */}
              {Array(4)
                .fill()
                .map((_, index) => (
                  <ArticleCard
                    key={index}
                    author="Natal Craig"
                    date="14 Jan 2022"
                    title="How collaboration makes us better designers"
                    description="Collaboration can make our teams stronger and our individual designs better."
                    image="https://via.placeholder.com/300"
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;
