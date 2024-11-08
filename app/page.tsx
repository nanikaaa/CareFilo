import Image from "next/image";
import Link from "next/link";

import { PatientForm } from "@/components/forms/PatientForm";
import { PasskeyModal } from "@/components/PasskeyModal";

interface HomeProps {
  searchParams: { admin?: string };
}

const Home = ({ searchParams }: HomeProps) => {
  const isAdmin = searchParams?.admin === "true";

  return (
    <div className="flex h-screen max-h-screen flex-col md:flex-row">
      {isAdmin && <PasskeyModal />}

      <section className="remove-scrollbar container my-auto flex-1 p-4 md:p-8">
        <div className="sub-container mx-auto max-w-[496px]">
          <div className="mb-8 flex items-center space-x-2">
            <Image
              src="/assets/icons/logo-icon.svg"
              height={1000}
              width={1000}
              alt="patient"
              className="h-10 w-auto"
            />
            <h1 className="ml-2 text-3xl font-bold text-stone-800">CareFilo</h1>
          </div>

          <PatientForm />

          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2024 CareFilo
            </p>
            <Link href="/?admin=true" className="text-teal-500">
              Admin
            </Link>
          </div>
        </div>
      </section>

      {/* Hide the image on smaller screens */}
      <div className="relative hidden h-full w-1/2 md:block">
        <Image
          src="/assets/images/onboarding-img.png"
          alt="patient"
          layout="fill"
          objectFit="contain"
          className="side-img"
        />
      </div>
    </div>
  );
};

export default Home;
