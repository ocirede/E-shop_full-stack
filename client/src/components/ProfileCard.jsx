import { useUserContext } from "../context/UserContext";
import { baseURL } from "../config/api";

export default function ProfileCard() {
  const { user } = useUserContext();
  const userUppercase =
      user?.username?.split(" ")[0].charAt(0).toUpperCase() +
      user?.username?.slice(1);

  const street = user?.address?.street || "Address not provided";
  const city = user?.address?.city || "City not provided";
  const country = user?.address?.country || "Country not provided";
  const zipcode = user?.address?.zipcode || "Zipcode not provided";

  return (
      <div className="bg-slate-100 shadow-2xl w-1/3 h-1/3">
          <div className="p-8">
              <div className="flex items-center mb-8">
                  {user?.image ? (
                      <img
                          className="w-32 h-32 rounded-full mr-8"
                          src={baseURL + "/uploads/" + user?.image}
                          alt="Profile Picture"
                      />
                  ) : (
                      <div className="w-32 h-32 rounded-full mr-8 bg-stone-500"></div>
                  )}
                  <div>
                      <h2 className="text-3xl font-semibold">
                          {userUppercase || "User"}'s Profile
                      </h2>
                      <p className="text-gray-600 text-lg">
                          {user?.email || "User email"}
                      </p>
                  </div>
              </div>
              <div className="mb-8">
                  <p className="font-semibold text-xl">Address:</p>
                  <ul className="list-disc list-inside">
                      <li className="text-lg">Street: {street}</li>
                      <li className="text-lg">City: {city}</li>
                      <li className="text-lg">Country: {country}</li>
                      <li className="text-lg">Zipcode: {zipcode}</li>
                  </ul>
              </div>
          </div>
      </div>
  );
}
