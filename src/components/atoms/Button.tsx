export type Props = {
  backgroundColor?: string;
  textFormat?: string;
  borderFormat?: string;
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
};

export const Button = ({
  size = "medium",
  backgroundColor = "bg-transparent",
  label,
  textFormat = "text-gray-600",
  borderFormat = "rounded-none",
  onClick,
}: Props) => {
  const sizeFormat = () => {
    switch (size) {
      case "small":
        return "py-1.5 px-4 text-xs";
      case "medium":
        return "py-2 px-5 text-sm";
      case "large":
        return "py-3 px-6 text-base";
      default:
        return "py-1.5 px-4 text-xs";
    }
  };
  return (
    <button
      onClick={onClick}
      type="button"
      className={`${sizeFormat()} ${backgroundColor} ${textFormat} ${borderFormat}`}
    >
      {label}
    </button>
  );
};
