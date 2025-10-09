import RedirectButton from "../components/redirectButton";

export default function Welcome() {
    return (
        <div className="flex items-center justify-center gap-10">
            <RedirectButton to="/bulk" name="Bulk" />
            <RedirectButton to="/cut" name="Cut" />
            <p>Not sure where you stand? Click the button below</p>
            <RedirectButton to="/advice" name="What should I do" />
        </div>
    );
}
