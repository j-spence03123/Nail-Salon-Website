type titleButtonProps = {
  onTitleButton: () => void;
};

export function titleButton({onTitleButton}: titleButtonProps) {
  return (
    <div>
      <button
      className = "font-cormamont text-2xl font-medium text-stone-900 tracking-tight"
      onClick={onTitleButton}>
        Bote Beauty
      </button>
    </div>
  );
}
