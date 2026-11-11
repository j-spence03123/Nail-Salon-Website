type servicesButtonProps = {
  onServices: () => void;
};

export function servicesButton({onServices}: servicesButtonProps) {
  return (
    <div>
      <button
      className = "rounded-full px-9 py-4 font-gothic text-base font-bold cursor-pointer button-animation "
      onClick={onServices}>
        SERVICES
      </button>
    </div>
  );
}
