type CalendarProps = {
    title: string;
    days: { day: string; type?: string }[];
};

export default function Calendar({ title, days }: CalendarProps) {
    const uniqueTypes = Array.from(new Set(days.map((d) => d.type).filter(Boolean)));

    const colorMap: Record<string, string> = {
        push: "text-pink-700",
        pull: "text-purple-700",
        legs: "text-green-700",
        upper: "text-indigo-700",
        lower: "text-amber-700",
        full: "text-sky-700",
        chest: "text-pink-700",
        back: "text-blue-700",
        shoulders: "text-orange-700",
        arms: "text-teal-700",
        rest: "text-gray-600",
    };

    const bgMap: Record<string, string> = {
        push: "bg-pink-100 text-pink-700",
        pull: "bg-purple-100 text-purple-700",
        legs: "bg-green-100 text-green-700",
        upper: "bg-indigo-100 text-indigo-700",
        lower: "bg-amber-100 text-amber-700",
        full: "bg-sky-100 text-sky-700",
        chest: "bg-pink-100 text-pink-700",
        back: "bg-blue-100 text-blue-700",
        shoulders: "bg-orange-100 text-orange-700",
        arms: "bg-teal-100 text-teal-700",
        rest: "bg-gray-200 text-gray-600",
    };

    return (
        <div className="bg-blue-50 border border-blue-300 rounded-xl p-4 mb-8">
            <h3 className="text-lg font-semibold text-blue-700 text-center mb-4">
                {title}
            </h3>
            <div className="grid grid-cols-7 gap-2 text-center text-sm">
                {days.map(({ day, type }, i) => (
                    <div
                        key={i}
                        className={`py-2 rounded-lg font-medium transition ${
                            type ? bgMap[type] : "bg-white text-gray-700"
                        }`}
                    >
                        {day}
                    </div>
                ))}
            </div>

            <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm font-medium">
                {uniqueTypes.map((type) => (
                    <p key={type} className={`flex items-center gap-1 ${colorMap[type!]}`}>
                        <span
                            className={`inline-block w-3 h-3 rounded-full ${
                                bgMap[type!].split(" ")[0]
                            }`}
                        ></span>
                        {type?.charAt(0).toUpperCase() + type!.slice(1)}
                    </p>
                ))}
            </div>
        </div>
    );
}
