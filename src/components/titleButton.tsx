type titleButtonProps = {
  onTitleButton: () => void;
};

export function titleButton({onTitleButton}: titleButtonProps) {
  return (
    <div>
      <button
      className = "font-cormamont text-2xl text-stone-900 tracking-tight cursor-pointer button-animation "
      onClick={onTitleButton}>
        Bote Beauty
      </button>
    </div>
  );
}
