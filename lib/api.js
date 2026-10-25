/**
 * Resolves the backend API base URL dynamically based on environment
 */
export const getApiBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_API_URL) {
    return process.env.NEXT_PUBLIC_API_URL.replace(/\/+$/, '');
  }
  if (typeof window !== 'undefined') {
    const host = window.location.hostname;
    if (host === 'localhost' || host === '127.0.0.1') {
      return 'http://localhost:5000/api';
    }
  }
  return 'https://money-tracker-backend-yklw.onrender.com/api';
};

/**
 * Submits a support ticket, contact inquiry, or feature waitlist request
 * @param {Object} payload - { title, message, email, name }
 */
export async function submitSupportTicket({ title, message, email, name }) {
  const baseUrl = getApiBaseUrl();
  const url = `${baseUrl}/support`;

  const bodyData = {
    title: title ? title.trim() : '',
    message: message ? message.trim() : '',
    email: email ? email.trim().toLowerCase() : '',
    name: name ? name.trim() : ''
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(bodyData)
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const errorMsg =
      data?.message ||
      (Array.isArray(data?.errors) && data.errors[0]?.msg) ||
      'Failed to submit your request. Please try again later.';
    throw new Error(errorMsg);
  }

  return data;
}
