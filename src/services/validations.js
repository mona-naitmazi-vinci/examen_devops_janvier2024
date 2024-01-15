// TODO: Refactor validation function to follow the defined validations rules
const isValid = (gamerTag) => {
    const searchChars = ["&", "$", "!", "è", "§", "à", "_"];
    const containsChars = searchChars.every(char => gamerTag.includes(char));

    const searchNumbers = ["1", "0", "2", "3", "4", "5", "6", "7", "8", "9"];
    const containsNumbers = searchNumbers.every(num => gamerTag.includes(num));

    if(gamerTag.length()  < 8 || !containsChars || ! containsNumbers){
        return false; 
    }

    return true;
};

exports.isValid = isValid;
