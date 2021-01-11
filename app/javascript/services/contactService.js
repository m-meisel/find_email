import CSFRToken from "./CSFRToken";
const token = CSFRToken.token();

function handleErrors(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

export const findContact = ({ firstName, lastName, url, path }) => {
  const result = fetch(path, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "X-CSRF-Token": token,
    },
    body: JSON.stringify({
      contact: {
        first_name: firstName,
        last_name: lastName,
        url,
      }
    }),
  }).then(handleErrors);

  return result.then((res) => res.json());
};
