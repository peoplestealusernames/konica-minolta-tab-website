export const Options = {
    "Cut": ["10", "8", "5"],
    "Model": ["759", "754", "Other"],
    "Font": ["Times New Roman", "Arial", "Other"],
} as const;

export type OptionsType = {
    Cut: string;
    Model: string;
    Font: string;
    "Vertical Offset": number;
    FontSize: number;
};