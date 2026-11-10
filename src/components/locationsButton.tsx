type LocationsButtonProps = {
  onLocations: () => void;
};

export function locationsButton({onLocations}: LocationsButtonProps) {
  return (
    <div>
      <button
      className = "rounded-full bg-rose-100 px-9 py-4 font-helvetica text-sm font-bold"
      onClick={onLocations}>
        Locations
      </button>
    </div>
  );
}
