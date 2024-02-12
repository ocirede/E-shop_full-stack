import SettingSideBar from "../components/SettingSideBar";
import ProfileCard from "../components/ProfileCard";
import ProfileForm from "../components/ProfileForm";

export default function () {
 
  return (
    <div className="h-full flex  items-center">
      <SettingSideBar />
      <section className="w-full h-screen gap-40 flex justify-center items-center">
        <ProfileCard/>
       <ProfileForm/>
      </section>
    </div>
  );
}
