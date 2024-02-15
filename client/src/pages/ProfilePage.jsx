import SettingSideBar from "../components/SettingSideBar";
import ProfileCard from "../components/ProfileCard";
import ProfileForm from "../components/ProfileForm";

export default function () {
  return (
    <div className=" min-h-screen flex items-center  relative">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://wallpapercave.com/wp/wp9571268.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: "-1",

        }}
      ></div>
      <div className="z-10 w-full">
        <SettingSideBar />
        <section className="w-full h-screen gap-40 flex justify-center items-center z-10">
          <ProfileCard />
          <ProfileForm />
        </section>
      </div>
    </div>
  );
}
