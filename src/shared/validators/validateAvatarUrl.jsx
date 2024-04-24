export const validateAvatarUrl = (url) => {
    const regex = /^(ftp|http|https):\/\/[^ "]+$/

    return regex.test(url)
}

export const avatarUrlValidationMessage = 'Por favor ingresa un avatarUrl valido'