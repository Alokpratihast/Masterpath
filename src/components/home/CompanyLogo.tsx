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
    <div className="group relative h-36 w-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-xl">
      <Image
        src={logo}
        alt={name}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
        unoptimized
        className="object-cover transition duration-300 group-hover:scale-105"
      />
    </div>
  );
}