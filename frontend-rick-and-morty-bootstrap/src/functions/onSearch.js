// ENV
const BACKEND_URL = "http://localhost:3001";
const MIN_ID = 1;
const MAX_ID = 826;

const onSearchExt = async (id, characters) => {
    const obj = { error: "", data: {} };

    if (characters.some((char) => char.id === Number(id))) {
        obj.error =
            "The character you are trying to add is already in your cards";
        return obj;
    }

    if (characters.length >= MAX_ID) {
        obj.error = "There are no more characters to add";
        return obj;
    }

    // Random ID function
    if (!id) {
        let randomId;
        do {
            randomId = Math.floor(Math.random() * MAX_ID) + 1;
        } while (characters.some((char) => char.id === randomId));
        const response = await fetch(`${BACKEND_URL}/search/${randomId}`);
        const data = await response.json();

        if (data.name) {
            obj.data = data;
            return obj;
        } else {
            obj.error =
                "The character cannot be loaded at this time. Try again in a few minutes";
            return obj;
        }
    }

    if (id < MIN_ID || id > MAX_ID) {
        obj.error = " Please enter a valid ID";
        return obj;
    }

    const response = await fetch(`${BACKEND_URL}/search/${id}`);
    const data = await response.json();

    if (data.name) {
        obj.data = data;
        return obj;
    } else {
        obj.error =
            "The character cannot be loaded at this time. Try again in a few minutes";
        return obj;
    }
};

export default onSearchExt;
