import { auth, signOut } from "@/auth";

const DashboardPage = async () => {
  const session = await auth();
  return (
    <div>
      Settings Page protected. {JSON.stringify(session)}
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button type="submit">登出</button>
      </form>
    </div>
  );
};

export default DashboardPage;
