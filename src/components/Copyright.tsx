export default function Copyright() {
  const year = new Date().getFullYear();

  return (
    <>
      <p>&copy; {year} Denys Bolkisev </p>
      <style jsx>
        {`
          p {
            font-size: 0.75rem;
            text-align: center;
          }
        `}
      </style>
    </>
  );
}
