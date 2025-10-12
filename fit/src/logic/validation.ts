export type FitnessGoal = "bulk" | "cut" | "maintain";


export function validateForm(weight: string, height: string, age: string): string | null {
    if (!weight || !height || !age) {
        return "All fields are required.";
    }

    const w = Number(weight);
    const h = Number(height);
    const a = Number(age);

    if (isNaN(w) || isNaN(h) || isNaN(a)) {
        return "Please enter valid numbers.";
    }

    if (w <= 0 || h <= 0 || a <= 0) {
        return "All values must be positive.";
    }

    if (a > 70) {
        return "You should rest.";
    }

    return null;
}

export function getFitnessAdvice(weight: number, height: number): string {
    const heightMeters = height / 100;
    const bmi = weight / (heightMeters * heightMeters);

    if (bmi < 18.5) {
        return `Your BMI is ${bmi.toFixed(1)} — you are underweight. You should focus on bulking.`;
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return `Your BMI is ${bmi.toFixed(1)} — you have a healthy weight. You can maintain or do a light bulk.`;
    } else if (bmi >= 25 && bmi < 29.9) {
        return `Your BMI is ${bmi.toFixed(1)} — you are slightly overweight. A cutting phase may help. `;
    } else {
        return `Your BMI is ${bmi.toFixed(1)} — you are in the obese range. Cutting and regular exercise are advised.`;
    }
}

export function getFitnessGoal(weight: number, height: number): FitnessGoal {
    const heightMeters = height / 100;
    const bmi = weight / (heightMeters * heightMeters);

    if (bmi < 18.5) return "bulk";
    if (bmi >= 25) return "cut";
    return "maintain";
}
