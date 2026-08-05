type PartnerCardProps = {
  partner: {
    id: number;
    name: string;
    logo: string;
  };
};

export default function PartnerCard({
  partner,
}: PartnerCardProps) {
  return (
    <div className="group flex h-36 items-center justify-center rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl">
      {/* Replace with Next Image when logos are available */}

      <h3 className="text-center text-2xl font-black tracking-wide text-slate-700 transition group-hover:text-blue-600">
        {partner.name}
      </h3>
    </div>
  );
}