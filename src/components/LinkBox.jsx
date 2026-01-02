export function LinkBox({
    icon, text, url
}) {
    return (
        <a href={url} className="linkbox">
            <div className="linkbox-icon">
                {icon}
            </div>
            <span>{text}</span>
        </a>
    );
};