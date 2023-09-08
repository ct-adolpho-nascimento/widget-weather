export const styles = `
  *, *::after, *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Inter', sans-serif;
    display: grid;
    place-items: center;
    min-height: 100vh;
    font-size: 2rem;
    line-height: 1.5;
    background-color: var(--bkg);
    color: var(--txt);
  }

  .container {
    display: grid;
    place-items: center;
    width: 100%;
    background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.17'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    border: 2px solid gray;
    padding: 20px;
    border-radius: 10px;
  }

  p {
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  .text-container {
    display: grid;
    gap: .6rem;
  }
`;