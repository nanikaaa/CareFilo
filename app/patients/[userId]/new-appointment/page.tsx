import Image from "next/image";

import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { getPatient } from "@/lib/actions/patient.actions";

const Appointment = async ({
  params: { userId },
}: {
  params: { userId: string };
}) => {
  const patient = await getPatient(userId);

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto flex-1">
        <div className="sub-container max-w-[860px] flex-1 justify-between">
          <div className="mb-12 flex items-center">
            <Image
              src="/assets/icons/logo-icon.svg"
              height={1000}
              width={1000}
              alt="logo"
              className="h-10 w-fit"
            />
            <span className="ml-2 text-2xl font-bold text-stone-800">
              CareFilo
            </span>
          </div>

          <AppointmentForm
            patientId={patient?.$id || ""}
            userId={userId}
            type="create"
          />

          <p className="mt-10 py-12">© 2024 CareFilo</p>
        </div>
      </section>

      {/* Image container with responsive visibility */}
      <div className="hidden h-full w-1/2 items-center justify-center md:flex">
        <Image
          src="/assets/images/appointment-img.png"
          height={600}
          width={600}
          alt="appointment"
          className="max-w-full object-contain"
        />
      </div>
    </div>
  );
};

export default Appointment;
