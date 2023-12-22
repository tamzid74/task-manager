import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <section className="bg-white dark:bg-gray-900 p-5">
        <div className="max-w-6xl px-6 py-10 mx-auto">
          <main className="w-full mt-8 md:flex md:items-center xl:mt-12">
            <div className="w-full p-6 bg-blue-600 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
              <img
                className="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-40 md:w-40 lg:h-40 lg:w-40 md:rounded-2xl"
                src={user?.photoURL}
                alt="client photo"
              />

              <div className="mt-2 md:mx-6">
                <div>
                  <p className="text-xl font-medium tracking-tight text-white">
                    {user?.displayName}
                  </p>
                  <p className="text-blue-200 ">Email: {user?.email}</p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
};

export default Profile;
