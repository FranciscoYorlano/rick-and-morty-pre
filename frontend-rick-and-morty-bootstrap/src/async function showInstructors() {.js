const readFileSync = async (file) => {
    try {
        console.log("Log async file: ", await promisifiedReadFile(file));
        return true;
    } catch (error) {
        console.log("Error unified: ", error);
    }
};
