console.log(import.meta.env)
export const variables = {
	API_KEY: <string>import.meta.env.VITE_API_KEY,
    TITLE: <string>import.meta.env.VITE_TITLE,
};