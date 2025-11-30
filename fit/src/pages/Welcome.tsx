import RedirectButton from "../components/redirectButton";

export default function Welcome() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-center px-6 py-16 text-center">
            
            <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 mb-6 animate-fadeIn">
                Welcome to Your Fitness Journey
            </h1>

            <p className="text-lg text-gray-700 max-w-xl mb-12 leading-relaxed animate-fadeIn">
                Choose your current goal below to get started with a personalized program.
                Whether you're aiming to gain muscle or lose fat, we've got you covered.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 animate-fadeIn">
                <RedirectButton to="/bulk" name="Start Bulking" />
                <RedirectButton to="/cut" name="Start Cutting" />
            </div>

            <div className="w-40 h-[2px] bg-gray-300 mb-8 animate-fadeIn"></div>

            <p className="text-gray-700 text-lg mb-4 animate-fadeIn">
                Not sure which program fits you best?
            </p>

            <div className="animate-fadeIn">
                <RedirectButton to="/advice" name="Get Personalized Advice" />
            </div>
        </div>
    );
}
