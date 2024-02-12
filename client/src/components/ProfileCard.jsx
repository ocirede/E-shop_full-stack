import { useUserContext } from "../context/userContext";
import { baseURL } from "../config/api";

export default function ProfileCard() {
    const { user } = useUserContext();

    const userUppercase =
    user?.username?.split(" ")[0].charAt(0).toUpperCase() +
    user?.username?.slice(1);
  return (
    <div className=" bg-slate-100 shadow-2xl w-1/3 h-1/3">
          <div className=" p-8">
            <div className="flex items-center mb-8">
              {user?.image && (
                <img
                  className="w-32 h-32 rounded-full mr-8"
                  src={baseURL + "/uploads/" + user?.image}
                  alt="Profile Picture"
                />
              )}
              <div>
                <h2 className="text-3xl font-semibold">
                  {userUppercase}'s Profile
                </h2>
                <p className="text-gray-600 text-lg">{user?.email}</p>
              </div>
            </div>
            <div className="mb-8">
              <p className="font-semibold text-xl">Address:</p>
              <ul className="list-disc list-inside">
                <li className="text-lg">Street: {user?.address.street}</li>
                <li className="text-lg">City: {user?.address.city}</li>
                <li className="text-lg">Country: {user?.address.country}</li>
                <li className="text-lg">Zipcode: {user?.address.zipcode}</li>
              </ul>
            </div>
          </div>
        </div>

  )
}
