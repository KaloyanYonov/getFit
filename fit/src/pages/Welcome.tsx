import RedirectButton from "../components/redirectButton";

export default function Welcome() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12">
            <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">
                Welcome to Your Fitness Journey
            </h1>
            <p className="text-gray-600 text-center max-w-xl mb-10 leading-relaxed">
                Choose your current goal below to get started with a personalized program.
                Whether you’re aiming to gain muscle or lose fat.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
                <RedirectButton to="/bulk" name="Start Bulking" />
                <RedirectButton to="/cut" name="Start Cutting" />
            </div>

            <div className="w-32 h-px bg-gray-300 mb-6"></div>

            <p className="text-gray-700 text-center mb-4">
                Not sure which program fits you best?
            </p>
            <RedirectButton to="/advice" name="Get Personalized Advice" />
        </div>
    );
}
