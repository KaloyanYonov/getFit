import RedirectButton from "../components/redirectButton"

export default function NotFound(){
    return(
        <div className="animate-fadeIn flex flex-col gap-25 p-60 items-center justify-center">
            <p className="text-3xl font-bold text-center">Oops! You entered an invalid URL.</p>
            <RedirectButton to="/" name="Return to Home Page"/>
        </div>
    )
}