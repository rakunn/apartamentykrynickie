const Amenities = ({
  items = [],
}: {
  items: { Icon: React.ReactNode; label: string }[];
}) => {
  return (
    <div className="w-fit p-4 rounded-lg shadow-lg bg-primary bg-opacity-15 h-full">
      <ul className="flex flex-wrap basis-1/3 gap-y-2 items-center">
        {items.map(({ Icon, label }, index) => (
          <li key={index} className="flex-[0_0_33.33%] flex gap-2 text-primary">
            {Icon} {label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Amenities;
