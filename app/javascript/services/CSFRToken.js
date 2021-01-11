const CSFRToken = {
  token() {
    const tokenEl = document.querySelector('meta[name="csrf-token"]');
    return tokenEl ? tokenEl.getAttribute('content') : null;
  },
};

export default CSFRToken;
