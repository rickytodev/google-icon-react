type IconParams = {
  icon: string;
  fill?: boolean;
  className?: string;
  fontFamily?: string;
  ariaLabel?: string;
  onClick?: () => void;
};

/**
 * GoogleIcon component renders a Google icon with customizable properties.
 * @param icon - The icon to display.
 * @param fill - Whether the icon should be filled (default is false).
 * @param className - Optional CSS class for styling.
 * @param fontFamily - Optional font family for the icon (default is "Material Symbols Rounded Variable").
 * @param ariaLabel - Optional ARIA label for accessibility (default is "google icon").
 * @param onClick - Optional click handler for the icon.
 * @example
 * <GoogleIcon icon="google" fill={true} className="icon-class" onClick={() => console.log('Icon clicked')} />
 * @returns A span element containing the icon with specified styles and properties.
 */
export default function GoogleIcon({
  icon,
  fill,
  className,
  onClick,
  fontFamily,
  ariaLabel,
}: IconParams) {
  return (
    <span
      className={className ?? ""}
      style={{
        fontVariationSettings: `'FILL' ${fill ? 1 : 0}`,
        fontFamily: fontFamily ?? "Material Symbols Rounded Variable",
        userSelect: "none",
      }}
      onClick={onClick}
      aria-label={ariaLabel ?? "google icon"}
    >
      {icon}
    </span>
  );
}
