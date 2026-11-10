type servicesButtonProps = {
  onServices: () => void;
};

export function servicesButton({onServices}: servicesButtonProps) {
  return (
    <div>
      <button
      className = "rounded-full bg-rose-100 px-9 py-4 font-helvetica text-sm font-bold"
      onClick={onServices}>
        Services
      </button>
    </div>
  );
}
