type BackButtonProps = {
  onBackButton: () => void;
  
};

export function BackButton({onBackButton}: BackButtonProps) {
  return (
    <div>
      <button
      className = "rounded-full px-9 py-4 font-gothic text-sm text-black font-bold border border-neutral-500 bg-rose-100 button-animation cursor-pointer "
      onClick={onBackButton}>
        Back
      </button>
    </div>
  );
}
