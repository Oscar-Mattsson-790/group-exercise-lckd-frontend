export async function sendLoginRequest(username: string, password: string) {
  const data = {
    username,
    password,
  };
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/user/login`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }
    );
    if (response.ok) {
      const result = await response.json();
      localStorage.setItem('token', result.data.token);
    }
  } catch (error) {
    console.log(error);
  }
}

export async function sendRegisterRequest(username: string, password: string) {
  const data = {
    username,
    password,
  };

  try {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/user/register`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }
    );

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

export async function sendGetCredentialsRequest() {
  try {
    const token = localStorage.getItem('token');
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/credentials`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
interface NewCredentials {
  username: string;
  password: string;
  domain: string;
}
export async function sendSaveCredentialsRequest(data: NewCredentials) {
  const token = localStorage.getItem('token');
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/credentials`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    );
    console.log(response);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

export async function sendDeleteCredentialsRequest(id: string) {
  const token = localStorage.getItem('token');
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/credentials/${id}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response);

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

export async function sendUpdateRequest(id: string, data: object) {
  const token = localStorage.getItem('token');

  try {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/credentials/${id}`,
      {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      }
    );
    console.log(response);

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
