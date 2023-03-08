import { Card, CardContent, CardHeader, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useMemo, useState } from "react";
import { Options, OptionsType } from "./Options";

export function Settings() {
    const [selectedOptions, setSelectedOptions] = useState<OptionsType>({
        Cut: Options.Cut[0],
        Model: Options.Model[0],
        Font: Options.Font[0],
        FontSize: 16,
        "Vertical Offset": 4,
    });

    const handleOptionChange = (key: keyof OptionsType, value: any) => {

        setSelectedOptions((prevState) => ({
            ...prevState,
            [key]: value,
        }));
    };

    return (
        <Card>
            <CardHeader
                style={{ fontWeight: "bold", paddingBottom: "0rem" }}
                title="Settings"
            />
            <CardContent>
                {Object.entries(Options).map(([key, e], i) => (
                    <FormControl key={i} sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel>{key}</InputLabel>
                        <Select
                            value={selectedOptions[key as keyof OptionsType]}
                            label={key}
                            onChange={(event) =>
                                handleOptionChange(
                                    key as keyof typeof Options,
                                    event.target.value
                                )}
                        >
                            {Options[key as keyof typeof Options].map((option) => (
                                <MenuItem key={option} value={option}>
                                    {option}
                                </MenuItem>
                            ))}
                        </Select>
                        {"Other" in Options[key as keyof typeof Options] ?
                            <div>a12</div> :
                            <></>
                        }
                    </FormControl>
                ))}
                <div>
                    <TextField
                        label="Font Size"
                        type="number"
                        value={selectedOptions["FontSize"]}
                        onChange={(event) =>
                            setSelectedOptions((prevState) => ({
                                ...prevState,
                                FontSize: parseInt(event.target.value),
                            }))
                        }
                        sx={{ m: 1, minWidth: 120 }}
                    />
                </div>
                <div>
                    <TextField
                        label="Vertical Offset"
                        type="number"
                        value={selectedOptions["Vertical Offset"]}
                        onChange={(event) =>
                            setSelectedOptions((prevState) => ({
                                ...prevState,
                                "Vertical Offset": parseInt(event.target.value),
                            }))
                        }
                        sx={{ m: 1, minWidth: 120 }}
                    />
                </div>
            </CardContent>
        </Card>
    );
}