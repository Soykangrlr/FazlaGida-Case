function ErrorPage({errorMasage}) {
  return (
    <div className="h-[100vh] flex flex-col items-center justify-center">
      <h1 className="text-6xl font-extrabold text-primary-color">Hata!</h1>
      <h2 className="text-3xl font-semibold text-light-card-secondary-color">{erorrMasage}</h2>
    </div>
  )
}
export default ErrorPage