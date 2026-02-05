type ButtonVariant = 'primary' | 'secondary';

type ButtonProps = {
    text: string;
    variant?: ButtonVariant;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
    disabled?: boolean;
}

const baseClasses =
    'inline-flex items-center justify-center px-9 py-3 transition-colors text-light cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50';

const variantClasses: Record<ButtonVariant, string> = {
    primary: 'border',
    secondary: 'bg-primary',
};

export function Button({
    text,
    variant = 'primary',
    className,
    type = 'button',
    onClick,
    disabled,
}: ButtonProps) {
    const classes = [baseClasses, variantClasses[variant], className]
        .filter(Boolean)
        .join(' ');

    return (
        <button className={classes} type={type} onClick={onClick} disabled={disabled}>
            {text}
        </button>
    );
}