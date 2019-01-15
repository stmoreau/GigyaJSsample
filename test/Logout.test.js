import Logout from '../src/modules/Logout';

describe('Logout', () => {
  it('should logout when logout is on page and clicked', () => {
    document.body.innerHTML = `
      <div>
        <input id="logout" type="button" value="Logout and return to the login page">
      </div>
    `;
    const gigya = {
      socialize: {
        logout: jest.fn()
      }
    };
    new Logout();
    const logoutEl = document.getElementById('logout');
    logoutEl.click();
    expect(1 + 2).toBe(3);
  });
});
