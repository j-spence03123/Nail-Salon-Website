type aboutButtonProps = {
  onAbout: () => void;
};

export function aboutButton({onAbout}: aboutButtonProps) {
  return (
    <div>
      <button
      className = "rounded-full bg-rose-100 px-9 py-4 font-helvetica text-sm font-bold"
      onClick={onAbout}>
        About Us
      </button>
    </div>
  );
}
