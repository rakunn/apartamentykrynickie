const Amenities = ({
  items = [],
}: {
  items: { Icon: React.ReactNode; label: string }[];
}) => {
  return (
    <div className="w-full md:w-fit p-4 rounded-lg shadow-lg bg-primary bg-opacity-15 h-full pr-0 md:pr-4">
      <ul className="flex flex-wrap basis-1/2 md:basis-1/3 gap-y-2 items-center">
        {items.map(({ Icon, label }, index) => (
          <>
            <li
              key={`${index} des`}
              className="hidden flex-[0_0_33.33%] md:flex gap-2 text-primary"
            >
              {Icon} {label}
            </li>
            <li
              key={`${index} mob`}
              className="md:hidden w-1/2 pr-4 flex gap-2 text-primary"
            >
              {Icon} {label}
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default Amenities;
