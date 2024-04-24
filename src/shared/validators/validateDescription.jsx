export const validateDescription = (description) => {
    return description.length >= 10 && description.length <= 200
}

export const descriptionValidationMessage = "La descripcion tiene que tener entre q0 y 200 caracteres"