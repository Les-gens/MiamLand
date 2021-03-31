export const capitalize = (s: string) => {
    return s.length > 1 ? s[0].toUpperCase() + s.substring(1) : s[0].toUpperCase()
}