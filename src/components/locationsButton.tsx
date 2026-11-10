type LocationsButtonProps = {
  onLocations: () => void;
};

export function locationsButton({onLocations}: LocationsButtonProps) {
  return (
    <div>
      <button
      className = "rounded-full bg-rose-100 px-9 py-4 font-gothic text-sm font-bold"
      onClick={onLocations}>
        LOCATIONS
      </button>
    </div>
  );
}
