import React from "react";
import { User } from "../types/user";
import Icon from "./ui/icons";

type UserCardProps = {
  user: User;
};

export const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="max-w-lg w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden z-10">
      <div className="bg-gray-800 p-4 text-white">
        <h2 className="text-2xl font-bold">{`${user.first_name} ${user.last_name}`}</h2>
        <p className="text-sm">{user.email}</p>
      </div>

      {/* Personal Information */}
      <div className="p-4 flex flex-row w-full items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold mb-2">Personal Information</h3>
          <p className="text-sm text-gray-700">
            <strong>Phone:</strong> {user.phone}
          </p>
          <p className="text-sm text-gray-700">
            <strong>Registered On:</strong> {user.registered_on}
          </p>
          <p className="text-sm text-gray-700">
            <strong>Subscription:</strong>{" "}
            {user.subscribed ? "Active" : "Inactive"}
          </p>
        </div>
        <Icon name="user" color="#FF5733" size={90} />
      </div>

      {/* Address */}
      <div className="p-4 border-t border-gray-200 flex flex-row w-full items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold mb-2">Address</h3>
          <p className="text-sm text-gray-700">{`${user.address1}, ${user.address2},`}</p>
          <p className="text-sm text-gray-700">{`${user.city}, ${user.state}, ${user.country_id}`}</p>
          <p className="text-sm text-gray-700">
            <strong>Postal Code:</strong> {user.postal_code}
          </p>
        </div>
        <Icon name="address" color="#229EFF" size={90} />
      </div>

      {/* Payment Details */}
      <div className="p-4 border-t border-gray-200 flex flex-row w-full items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold mb-2">Payment Information</h3>
          <p className="text-sm text-gray-700">
            <strong>Brand:</strong> {user.payment_method.brand.toUpperCase()}
          </p>
          <p className="text-sm text-gray-700">
            <strong>Funding:</strong> {user.payment_method.funding}
          </p>
          <p className="text-sm text-gray-700">
            <strong>Card Last 4:</strong> **** **** ****{" "}
            {user.payment_method.last4}
          </p>
          <p className="text-sm text-gray-700">
            <strong>Expiry:</strong>{" "}
            {`${user.payment_method.exp_month}/${user.payment_method.exp_year}`}
          </p>
        </div>
        <Icon name="currency" color="#00C159" size={90} />
      </div>
    </div>
  );
};
