type RemoveButtonProps = {
  onClick: () => void;
  text?: string;
};

export default function RemoveButton({ onClick, text = "Remove" }: RemoveButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition"
    >
      {text}
    </button>
  );
}
