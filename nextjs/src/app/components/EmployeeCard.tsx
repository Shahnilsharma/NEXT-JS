import React from "react";

interface EmployeeCardProps {
  name: string;
  position: string;
  photoUrl: string;
  email?: string;
  phone?: string;
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({ name, position, photoUrl, email, phone }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white dark:bg-gray-800 p-4">
      <img
        className="w-32 h-32 rounded-full mx-auto object-cover"
        src={photoUrl}
        alt={`${name}'s photo`}
      />
      <div className="text-center mt-4">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{name}</h2>
        <p className="text-gray-600 dark:text-gray-300">{position}</p>
        {email && <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">{email}</p>}
        {phone && <p className="text-gray-500 dark:text-gray-400 text-sm">{phone}</p>}
      </div>
    </div>
  );
};

export default EmployeeCard;
