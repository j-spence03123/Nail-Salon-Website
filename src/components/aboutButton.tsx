type aboutButtonProps = {
  onAbout: () => void;
};

export function aboutButton({onAbout}: aboutButtonProps) {
  return (
    <div>
      <button
      className = "rounded-full px-9 py-4 font-gothic text-base font-bold cursor-pointer button-animation "
      onClick={onAbout}>
        ABOUT
      </button>
    </div>
  );
}
