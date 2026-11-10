type titleButtonProps = {
  onTitleButton: () => void;
};

export function titleButton({onTitleButton}: titleButtonProps) {
  return (
    <div>
      <button
      className = "font-cormamont font-bold text-2xl text-stone-900 tracking-tight"
      onClick={onTitleButton}>
        Bote Beauty
      </button>
    </div>
  );
}
