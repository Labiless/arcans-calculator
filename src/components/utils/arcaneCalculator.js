const charValue = (char) => {
    const index = "abcdefghijklmnopqrstuvwxyz".split("").indexOf(char.toLowerCase());
    return (index - (9*(Math.trunc(index/9))) ) + 1;
}

export const wordValue = (string) => string.split("").reduce((res,cur) => res+=charValue(cur), 0);
export const dateValue = (date) => date.split("").reduce((res,cur) => res+=(+cur), 0);
export const sumNumberPos = (n) => n.toString().split("").reduce((res,cur) => res+=(+cur), 0);