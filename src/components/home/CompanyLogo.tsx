import Image from "next/image";

type CompanyLogoProps = {
  name: string;
  logo: string;
};

export default function CompanyLogo({
  name,
  logo,
}: CompanyLogoProps) {
  return (
    <div className="group flex h-36 items-center justify-center rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-xl">
      <Image
        src={logo}
        alt={name}
        width={150}
        height={70}
        className="max-h-14 w-auto object-contain grayscale transition duration-300 group-hover:grayscale-0"
      />
    </div>
  );
}