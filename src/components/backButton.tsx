type BackButtonProps = {
  onBackButton: () => void;
  
};

export function BackButton({onBackButton}: BackButtonProps) {
  return (
    <div>
      <button
      className = "rounded-full bg-white px-9 py-4 font-gothic text-sm text-black font-bold button-animation animate-rise-fade-in cursor-pointer "
      onClick={onBackButton}>
        Back
      </button>
    </div>
  );
}
