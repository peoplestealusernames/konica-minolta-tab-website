// Define a type for your preset configuration
export type Preset = {
    name: string
    model: string
    version: string
}

// Create an object mapping preset keys to their configurations
export const presets: { [key: string]: Preset } = {
    54: { name: "Konica c_54", model: "KONICA MINOLTA C754SeriesPCL", version: "5.4.0.0" },
    59: { name: "Konica c_59", model: "KONICA MINOLTA C759SeriesPCL", version: "11.2.0.0" },
    old_54: { name: "Konica c_54 (OLD)", model: "KONICA MINOLTA C754SeriesPCL", version: "5.3.0.EIT1_00" },
    custom: { name: "Manual", model: "", version: "" }
}