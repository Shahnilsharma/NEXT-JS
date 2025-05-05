import React from "react";
import Image from "next/image";

const EmployeeCard = ({ employee }) => {
  return (
    <div className="max-w-sm w-full bg-white rounded-xl shadow-md overflow-hidden border border-gray-300 p-4 m-2">
      <div className="flex items-start">
        <div className="mr-4 flex-shrink-0">
          <div className="w-16 h-16 relative">
            <Image
              src={employee.imageUrl}
              alt="Employee Avatar"
              layout="fill"
              objectFit="cover"
              className="rounded-full border border-gray-200"
            />
          </div>
        </div>

        <div className="flex-1">
          <h2 className="text-base font-bold text-gray-900">{employee.name}</h2>
          <p className="text-sm text-gray-700 mb-2">
            {employee.position} - {employee.department}
          </p>

          {/* Clean Grid */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-gray-700">
            <div>
              <p><span className="font-semibold">Email:</span> {employee.email}</p>
              <p><span className="font-semibold">Phone:</span> {employee.phone}</p>
            </div>
            <div>
              <p><span className="font-semibold">Location:</span> {employee.location}</p>
              <p><span className="font-semibold">Employee ID:</span> {employee.employeeId}</p>
            </div>
            <div>
              <p><span className="font-semibold">Hire Date:</span> {employee.hireDate}</p>
              <p><span className="font-semibold">Manager:</span> {employee.manager}</p>
            </div>
            <div className="">
              <p><span className="font-semibold">Skills:</span> {employee.skills.join(", ")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
