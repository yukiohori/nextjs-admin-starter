export type Props = {
  text: string;
  fontFormat?: string;
  size: 'small' | 'medium' | 'big';
  type: 'primary' | 'alert';
  rounded: boolean;
};

export const Badge = ({
  text,
  rounded = true,
  fontFormat = '',
  size = 'small',
  type = 'primary',
}: Props) => {
  const sizeFormat = () => {
    switch (size) {
      case 'small':
        return 'text-xs';
      case 'medium':
        return 'text-sm';
      case 'big':
        return 'text-base';
      default:
        return 'text-xs';
    }
  };

  const typeFormat = () => {
    switch (type) {
      case 'primary':
        return 'bg-blue-500 bg-opacity-10 text-blue-800';
      case 'alert':
        return 'bg-red-500 bg-opacity-10 text-red-800';
      default:
        return 'bg-gray-500 bg-opacity-10 text-gray-800';
    }
  };
  return (
    <span
      className={`px-2 py-0.5 ${fontFormat} ${sizeFormat()} ${typeFormat()} ${
        rounded ? 'rounded' : ''
      }`}
    >
      {text}
    </span>
  );
};
