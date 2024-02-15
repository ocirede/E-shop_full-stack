import { Upload } from "lucide-react";
import { useUserContext } from "../context/UserContext";

export default function ProfileForm() {
    const { handleUpdate } = useUserContext();

  return (
    <div className=" w-1/4">
    <form
      onSubmit={handleUpdate}
      className="bg-white shadow-2xl rounded px-8 pt-6 pb-8 mb-4"
    >
      <label className="block text-center mb-4">
        <Upload className="cursor-pointer w-12 h-12 mx-auto text-gray-600" />
        <p className="text-gray-700">Profile picture</p>

        <input className="hidden" name="profilePicture" type="file" />
      </label>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="street"
        >
          Street
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="street"
          name="street"
          type="text"
          placeholder="Enter street"
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="city"
        >
          City
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="city"
          name="city"
          type="text"
          placeholder="Enter city"
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="country"
        >
          Country
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="country"
          name="country"
          type="text"
          placeholder="Enter country"
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="zip"
        >
          Zip Code
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="zip"
          name="zipcode"
          type="text"
          placeholder="Enter zip code"
          required
        />
      </div>{" "}
      <div className="flex justify-center">
        <button className="bg-green-600 hover:bg-green-400 text-white font-bold py-2 px-4 rounded-lg">
          Update
        </button>
      </div>
    </form>
  </div>  )
}
