type ExerciseCardProps = {
    name: string;
    muscleGroup: string;
    image: string;
    description?: string;
};

export default function ExerciseCard({ name, muscleGroup, image, description }: ExerciseCardProps) {
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden w-full max-w-sm mx-auto transition-transform duration-200 hover:scale-105 hover:shadow-lg">
            <img
                src={image}
                alt={name}
                className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{name}</h3>
                <p className="text-sm text-gray-600 mb-2">
                    <span className="font-medium text-gray-700">Target:</span> {muscleGroup}
                </p>
                {description && (
                    <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
                )}
            </div>
        </div>
    );
}
