"use client";
import React from "react";
import { useParams } from "next/navigation";
import { specialServices } from "../../../services.json";

const PackageDetails = () => {
  const params = useParams();
  const packageId = params.id;

  // Find the package from the data
  const packageDetail = specialServices.find(
    (service) => service.id === packageId
  );

  // Handle if package not found
  if (!packageDetail) {
    return (
      <div className="mt-10 text-center text-red-500">Package not found!</div>
    );
  }

  return (
    <div className="mt-96 max-w-3xl mx-auto p-4 border rounded shadow">
      <h1 className="text-2xl font-bold mb-2">{packageDetail.name}</h1>
      <p className="text-gray-600 mb-4">{packageDetail.description}</p>
      <p className="text-lg mb-2">
        Price: ₹{packageDetail.price} {packageDetail.currency}
      </p>
      <p className="mb-2">Category: {packageDetail.category}</p>

      {packageDetail.groupSize && <p>Group Size: {packageDetail.groupSize}</p>}
      {packageDetail.duration && <p>Duration: {packageDetail.duration}</p>}
      {packageDetail.vehicleType && (
        <p>Vehicle Type: {packageDetail.vehicleType}</p>
      )}
      {packageDetail.location && <p>Location: {packageDetail.location}</p>}
      {packageDetail.destinations && (
        <p>Destinations: {packageDetail.destinations.join(", ")}</p>
      )}
      {packageDetail.pointsCovered && (
        <p>Points Covered: {packageDetail.pointsCovered.join(", ")}</p>
      )}
      {packageDetail.includes && (
        <div>
          <p>Includes:</p>
          <ul className="list-disc list-inside">
            {packageDetail.includes.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
      {packageDetail.image && (
        <img
          src={packageDetail.image}
          alt={packageDetail.name}
          className="mt-4 rounded"
        />
      )}
    </div>
  );
};

export default PackageDetails;
