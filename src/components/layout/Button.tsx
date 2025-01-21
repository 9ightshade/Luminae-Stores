import clsx from "clsx";

type ButtonProps = {
    text?: string;
    bgColor?: string; // Tailwind class names like 'bg-blue-500'
    textColor?: string; // Tailwind class names like 'text-white'
    rounded?: "rounded-md" | "rounded-lg" | "rounded-full" | "rounded-xl"; // Tailwind's rounded options
    width?: string; // Tailwind width classes like 'w-1/2'
    padding?: string; // Tailwind padding classes like 'p-2'
    margin?: string; // Tailwind margin classes like 'm-2'
    className?: string; // Additional custom classes
    onClick?: () => void; // Click handler
};

export const Button = ({
    text = "SHOP NOW",
    bgColor = "bg-blue-500",
    textColor = "text-white",
    rounded = "rounded-lg",
    width = "w-1/2",
    padding = "p-2",
    margin = "m-2",
    className,
    onClick,
}: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={clsx(
                bgColor,
                textColor,
                `rounded-${rounded}`,
                width,
                padding,
                margin,
                "cursor-pointer",
                className // Allow additional custom classes
            )}
        >
            {text}
        </button>
    );
};
