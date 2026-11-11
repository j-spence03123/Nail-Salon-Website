type LocationsButtonProps = {
  onLocations: () => void;
};

export function locationsButton({onLocations}: LocationsButtonProps) {
  return (
    <div>
      <button
      className = "rounded-full px-9 py-4 font-gothic text-base font-bold cursor-pointer button-animation "
      onClick={onLocations}>
        LOCATIONS
      </button>
    </div>
  );
}
