export type IconParams = React.HTMLAttributes<HTMLElement> & {
  icon: string;
  fill?: boolean;
  className?: string;
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
  ariaLabel = "google icon",
  onClick,
}: IconParams) {
  return (
    <>
      <iconify-icon
        icon={`material-symbols:${icon}${!fill ? "-outline" : ""}-rounded`}
        className={`w-fit h-fit ${className ?? ""}`}
        onClick={onClick}
        aria-label={ariaLabel}
        data-testid="google-icon"
      />
    </>
  );
}
