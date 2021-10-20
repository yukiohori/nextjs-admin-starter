type Props = {
  label: string;
  bgColor?: string;
  onClick: () => void;
};

const Button = ({ label, bgColor = "bg-gray-600", onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`py-2 px-5 text-sm ${bgColor} text-white font-bold rounded-md`}
    >
      {label}
    </button>
  );
};
export default Button;
