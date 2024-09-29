import React, { useState, useEffect } from 'react';
import { CameraIcon, PencilIcon } from "@heroicons/react/24/solid";
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Profile = () => {
  const { id } = useParams(); // Capture the id from the URL
  const [userData, setUserData] = useState(null);
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingDescription, setIsEditingDescription] = useState(false);
  const [tempName, setTempName] = useState('');
  const [tempDescription, setTempDescription] = useState('');
  const apiUrl = process.env.REACT_APP_API_BASE_URL;
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/socialgroup/${id}`);
        setUserData(response.data);
        setTempName(response.data.name);
        setTempDescription(response.data.description);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [id,apiUrl]);

  const handleEditName = () => {
    setIsEditingName(true);
  };

  const handleEditDescription = () => {
    setIsEditingDescription(true);
  };

  const handleSaveName = async () => {
    try {
      const updatedData = { ...userData, name: tempName };
  
      const response = await axios.put(`${apiUrl}/api/socialgroup/${id}`, updatedData);
      setUserData(response.data);
      setIsEditingName(false);
    } catch (error) {
      console.error('Error updating name:', error);
    }
  };

  const handleSaveDescription = async () => {
    try {
      const updatedData = { ...userData, description: tempDescription };
   
      const response = await axios.put(`${apiUrl}/api/socialgroup/${id}`, updatedData);
      setUserData(response.data);
      setIsEditingDescription(false);
    } catch (error) {
      console.error('Error updating description:', error);
    }
  };

  const handleDropProfileImage = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        updateProfileImage(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDropHeaderImage = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        updateHeaderImage(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleProfileImageClick = () => {
    document.getElementById('profileImageInput').click();
  };

  const handleHeaderImageClick = () => {
    document.getElementById('headerImageInput').click();
  };

  const handleProfileImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        updateProfileImage(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleHeaderImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        updateHeaderImage(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const updateProfileImage = async (imageData) => {
    try {
      const updatedData = { ...userData, profileImage: imageData };
      const response = await axios.put(`${apiUrl}/api/socialgroup/${id}`, updatedData);
      setUserData(response.data);
    } catch (error) {
      console.error('Error updating profile image:', error);
    }
  };

  const updateHeaderImage = async (imageData) => {
    try {
      const updatedData = { ...userData, headerImage: imageData };
      const response = await axios.put(`${apiUrl}/api/socialgroup/${id}`, updatedData);
      setUserData(response.data);
    } catch (error) {
      console.error('Error updating header image:', error);
    }
  };

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-[1100px] h-[550px] mx-auto bg-white overflow-hidden rounded-tl-lg rounded-tr-lg relative">
      <div 
        className="relative" 
        onDrop={handleDropHeaderImage} 
        onDragOver={(event) => event.preventDefault()}
        onClick={handleHeaderImageClick}
      >
        <img
          className="w-full h-[200px] object-cover"
          src={`/assets/testimonial-1.jpeg` }
          alt="Header"
        />
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="relative mt-[200px]">
            <div 
              className="relative" 
              onDrop={handleDropProfileImage} 
              onDragOver={(event) => event.preventDefault()}
              onClick={handleProfileImageClick}
            >
              <div className="w-40 h-40 overflow-hidden">
                <img
                  className="w-full h-full object-cover rounded-full border-4 border-white"
                  src={userData.profileImage}
                  alt="Profile"
                />
                <button className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 rounded-full cursor-pointer">
                  <CameraIcon className="h-6 w-6 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <input
        type="file"
        id="profileImageInput"
        style={{ display: 'none' }}
        onChange={handleProfileImageChange}
      />
      <input
        type="file"
        id="headerImageInput"
        style={{ display: 'none' }}
        onChange={handleHeaderImageChange}
      />

      <div className="text-center mt-[100px]">
        <div className="flex justify-center items-center space-x-2">
          {isEditingName ? (
            <>
              <input
                type="text"
                value={tempName}
                onChange={(e) => setTempName(e.target.value)}
                className="text-lg font-semibold border p-1"
              />
              <button onClick={handleSaveName} className="text-gray-500 cursor-pointer">
                Save
              </button>
              <button onClick={() => setIsEditingName(false)} className="text-gray-500 cursor-pointer">
                Cancel
              </button>
            </>
          ) : (
            <>
              <h2 className="text-lg font-semibold">{userData.name}</h2>
              <button onClick={handleEditName} className="text-gray-500 cursor-pointer">
                <PencilIcon className="h-4 w-4" />
              </button>
            </>
          )}
        </div>

        <div className="mt-6 w-[750px] mx-auto text-black-700 text-sm relative text-center">
          {isEditingDescription ? (
            <>
              <textarea
                value={tempDescription}
                onChange={(e) => setTempDescription(e.target.value)}
                className="w-full border p-1"
              />
              <button onClick={handleSaveDescription} className="text-gray-500 cursor-pointer">
                Save
              </button>
              <button onClick={() => setIsEditingDescription(false)} className="text-gray-500 cursor-pointer">
                Cancel
              </button>
            </>
          ) : (
            <>
              <p>{userData.description}</p>
              <button
                onClick={handleEditDescription}
                className="text-gray-500 absolute top-0 right-0 cursor-pointer mt-1 mr-1"
              >
                <PencilIcon className="h-4 w-4" />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
