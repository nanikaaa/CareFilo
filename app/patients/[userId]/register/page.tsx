import Image from "next/image";
import { redirect } from "next/navigation";

import RegisterForm from "@/components/forms/RegisterForm";
import { getPatient, getUser } from "@/lib/actions/patient.actions";

const Register = async ({
  params: { userId },
}: {
  params: { userId: string };
}) => {
  const user = await getUser(userId);
  const patient = await getPatient(userId);

  if (patient) redirect(`/patients/${userId}/new-appointment`);

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container flex-1">
        <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
          <div className="mb-12 flex items-center space-x-2">
            <Image
              src="/assets/icons/logo-icon.svg"
              height={32}
              width={32}
              alt="patient"
              className="h-10 w-fit"
            />
            <span className="text-2xl font-semibold text-stone-800">
              CareFilo
            </span>
          </div>

          <RegisterForm user={user} />

          <p className="copyright py-12">© 2024 CareFilo</p>
        </div>
      </section>

      <div className="relative mt-40 flex h-[70vh] max-h-[70vh] w-1/2 items-center">
        <Image
          src="/assets/images/register-img.png"
          alt="patient"
          layout="fill"
          objectFit="contain"
          className="side-img"
        />
      </div>
    </div>
  );
};

export default Register;
